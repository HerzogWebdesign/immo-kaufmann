/* Immo Kaufmann – Lern-App. Alles läuft lokal; Haken, Merkzettel, Notizen und Karteikasten bleiben nur auf diesem Gerät. */
(function () {
  'use strict';
  var AREAS = (window.IMMO || []).slice().sort(function (a, b) {
    return ((a.year || 1) - (b.year || 1)) || (a.kind === b.kind ? 0 : a.kind === 'lf' ? -1 : 1) || (a.nr - b.nr);
  });
  var SUBS = [], BYID = {};
  AREAS.forEach(function (a) {
    a.year = a.year || 1;
    BYID[a.id] = { type: 'area', area: a };
    (a.topics || []).forEach(function (t, ti) {
      BYID[t.id] = { type: 'topic', area: a, topic: t };
      (t.subs || []).forEach(function (s, si) {
        var e = { type: 'sub', area: a, topic: t, sub: s, num: (ti + 1) + '.' + (si + 1), idx: SUBS.length };
        BYID[s.id] = e; SUBS.push(e);
      });
    });
  });
  var GLOSSAR = (window.IMMO_GLOSSAR || []).filter(function (g) { return g && g.term; });
  var FRAGEN = (window.IMMO_FRAGEN || []).filter(function (q) { return q && q.ref && BYID[q.ref]; });

  /* ---------- Speicher (nur lokal auf dem Gerät) ---------- */
  var KEY = 'immo-kaufmann-v2';
  var S = { done: {}, star: {}, notes: {}, box: {}, qs: {}, hl: {} };
  try {
    var raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (raw) S = { done: raw.done || {}, star: raw.star || {}, notes: raw.notes || {}, box: raw.box || {}, qs: raw.qs || {}, hl: raw.hl || {} };
    else { var old = JSON.parse(localStorage.getItem('immo-kaufmann-gelernt-v1') || 'null'); if (old) S.done = old; }
  } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function isDone(id) { return !!S.done[id]; }
  function setDone(id, v) { if (v) S.done[id] = 1; else delete S.done[id]; save(); }
  function isStar(id) { return !!S.star[id]; }
  function setStar(id, v) { if (v) S.star[id] = Date.now(); else delete S.star[id]; save(); }

  /* ---------- Hilfen ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
  function plain(s) { return String(s == null ? '' : s).replace(/\*\*/g, ''); }
  function $(sel) { return document.querySelector(sel); }
  var main = $('#main');
  var DAY = 864e5, INTERVAL = [0, 0, 1, 3, 7, 21]; // Fach 1..5 → Tage bis zur nächsten Abfrage

  function calcHtml(c) {
    var h = (c.title ? '<div class="calc-title">' + md(c.title) + '</div>' : '') + '<table class="calc">';
    (c.rows || []).forEach(function (r) {
      h += '<tr' + (r.t ? ' class="' + esc(r.t) + '"' : '') + '><td class="op">' + esc(r.op || '') + '</td><td>' + md(r.label) +
        '</td><td class="f">' + md(r.f || '') + '</td><td class="n">' + md(r.n || '') + '</td></tr>';
    });
    return h + '</table>';
  }
  function rulesHtml(rules) {
    var h = '<table class="rules">';
    rules.forEach(function (r) {
      var vals = r[1] || [];
      vals.forEach(function (v, i) {
        h += '<tr' + (i === 0 ? ' class="grp"' : '') + '>' + (i === 0 ? '<th rowspan="' + vals.length + '">' + md(r[0]) + '</th>' : '') + '<td>' + md(v) + '</td></tr>';
      });
    });
    return h + '</table>';
  }
  function blockHtml(b) {
    if (b.p != null) return '<p>' + md(b.p) + '</p>';
    if (b.h != null) return '<h3>' + md(b.h) + '</h3>';
    if (b.ul) return '<ul>' + b.ul.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
    if (b.rules) return rulesHtml(b.rules);
    if (b.calc) return '<div class="example">' + calcHtml(b.calc) + '</div>';
    if (b.ex != null) return '<div class="example"><b class="lbl">Beispiel:</b> ' + md(b.ex) + '</div>';
    if (b.note != null) return '<div class="note">' + md(b.note) + '</div>';
    if (b.warn != null) return '<div class="warn">' + md(b.warn) + '</div>';
    return '';
  }
  function cardBody(e) {
    var c = e.sub.card || {}, h = '';
    if (c.bullets) h += '<ul>' + c.bullets.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
    if (c.rules) h += rulesHtml(c.rules);
    if (c.calc) h += calcHtml(c.calc);
    if (!e.__noNote && S.notes[e.sub.id]) h += '<div class="k-note"><b>Notiz:</b> ' + esc(S.notes[e.sub.id]) + '</div>';
    if (c.merke) h += '<div class="k-merk">' + md(/^merke/i.test(c.merke) ? c.merke : 'Merke: ' + c.merke) + '</div>';
    if (c.quelle) h += '<div class="k-foot">Quelle: ' + esc(c.quelle) + '</div>';
    return h;
  }
  function cardHead(e) {
    var a = e.area;
    return '<div class="k-head"><span>' + esc(a.short || a.title) + '</span><span>' + esc(e.num) + ' · ' + a.year + '. Jahr</span></div>' +
      '<h4>' + md((e.sub.card && e.sub.card.title) || e.sub.title) + '</h4>';
  }
  function cardHtml(e, noNote) { if (noNote === true) e = Object.assign({}, e, { __noNote: true }); return '<div class="card" data-card="' + esc(e.sub.id) + '">' + cardHead(e) + cardBody(e) + '</div>'; }
  function areaLabel(a) { return a.kind === 'lf' ? 'Lernfeld ' + a.nr : 'Fach'; }
  function areaStats(a) {
    var n = 0, d = 0;
    a.topics.forEach(function (t) { t.subs.forEach(function (s) { n++; if (isDone(s.id)) d++; }); });
    return { n: n, d: d };
  }
  function marks(id) {
    return (isStar(id) ? '<span class="star on" aria-label="auf dem Merkzettel">★</span>' : '') +
      '<span class="check' + (isDone(id) ? ' on' : '') + '" aria-label="' + (isDone(id) ? 'gelernt' : 'offen') + '"></span>';
  }
  function topicsHtml(a, current) {
    return a.topics.map(function (t, ti) {
      return '<section class="topic"><h2>' + (ti + 1) + '. ' + md(t.title) + '</h2><ol>' +
        t.subs.map(function (s) {
          var e = BYID[s.id];
          return '<li><a href="#/s/' + esc(s.id) + '"' + (s.id === current ? ' aria-current="page"' : '') + '>' +
            '<span class="num">' + e.num + '</span><span class="ttl">' + md(s.title) + '</span>' + marks(s.id) + '</a></li>';
        }).join('') + '</ol></section>';
    }).join('');
  }
  function subLink(e, extra) {
    return '<a href="#/s/' + esc(e.sub.id) + '"><div class="rp">' + areaLabel(e.area) + ' · ' + md(e.topic.title) + '</div>' +
      '<div class="rt">' + md(e.sub.title) + '</div>' + (extra || '') + '</a>';
  }
  function setNav(name) {
    document.querySelectorAll('nav.tabs a').forEach(function (a) { a.classList.toggle('on', a.dataset.nav === name); });
  }

  /* ---------- Einstellungen (nur dieses Gerät) ---------- */
  function getPref(k, d) { try { return localStorage.getItem('immo-pref-' + k) || d; } catch (e) { return d; } }
  function setPref(k, v) { try { localStorage.setItem('immo-pref-' + k, v); } catch (e) {} }
  function tileMode() { return getPref('tiles', 'list'); }
  var TBREAK = {
    lf1: ['Die Berufsausbildung', 'selbstständig mitgestalten'], lf2: ['Das Immobilienunternehmen', 'repräsentieren'],
    lf3: ['Werteströme und Werte', 'erfassen und dokumentieren'], lf4: ['Wohnräume vermieten'], lf5: ['Wohnräume verwalten', 'und Bestände pflegen'],
    en: ['Englisch', 'berufsbezogene Fremdsprache'], de: ['Deutsch', 'Kommunikation'], sk: ['Sozialkunde'], rp: ['Religion', 'oder Philosophie']
  };
  var SQ = { lf1: ['LF 1', 'Berufs­ausbildung mitgestalten'], lf2: ['LF 2', 'Unternehmen repräsentieren'], lf3: ['LF 3', 'Werteströme erfassen'], lf4: ['LF 4', 'Wohnräume vermieten'],
    lf5: ['LF 5', 'Wohnräume verwalten'], en: ['EN', 'Englisch'], de: ['DE', 'Deutsch'], sk: ['SK', 'Sozialkunde'], rp: ['RP', 'Religion / Philosophie'] };
  function sqLabel(a) { return a.sq || SQ[a.id] || [a.kind === 'lf' ? 'LF ' + a.nr : plain(a.title).slice(0, 2).toUpperCase(), plain(a.short || a.title).replace(/^LF \d+ · /, '')]; }
  function titleLines(a) { return a.lines || TBREAK[a.id] || [plain(a.title)]; }
  var THEMES = ['auto', 'light', 'dark'], THEME_LABEL = { auto: '◐', light: '☀', dark: '☾' }, THEME_NAME = { auto: 'Hell/Dunkel: automatisch', light: 'Hell', dark: 'Dunkel' };
  var ACCENTS = [['gruen', '#1f6f5c', 'Grün'], ['blau', '#1f5fa8', 'Blau'], ['lila', '#6b3fa0', 'Lila'], ['beere', '#a8324a', 'Beere'], ['orange', '#a5520e', 'Orange']];
  function applyTheme() {
    var t = getPref('theme', 'auto'), r = document.documentElement, ac = getPref('accent', 'gruen');
    if (ac === 'gruen') r.removeAttribute('data-accent'); else r.setAttribute('data-accent', ac);
    if (t === 'auto') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', t);
    var b = $('#themebtn'); if (b) { b.textContent = THEME_LABEL[t]; b.title = THEME_NAME[t]; b.setAttribute('aria-label', THEME_NAME[t]); }
    var mc = document.querySelector('meta[name=theme-color]'); if (mc) mc.content = (t === 'dark' || (t === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches)) ? '#1f252c' : '#1f6f5c';
  }

  /* ---------- Startseite ---------- */
  function viewHome() {
    setNav('start');
    var all = SUBS.length, d = SUBS.filter(function (e) { return isDone(e.sub.id); }).length;
    var stars = Object.keys(S.star).filter(function (id) { return BYID[id]; }).length;
    var due = dueList(SUBS).length;
    var tile = function (a) {
      var st = areaStats(a), pct = st.n ? Math.round(st.d * 100 / st.n) : 0;
      if (tileMode() === 'grid') {
        var L = sqLabel(a);
        return '<a class="sq" href="#/b/' + esc(a.id) + '" title="' + esc(plain(a.title)) + '"><div class="sq-nr">' + esc(L[0]) + '</div>' +
          '<div class="sq-t">' + esc(L[1]) + '</div><div class="sq-m">' + st.d + ' / ' + st.n + ' gelernt</div>' +
          '<div class="progress"><i style="width:' + pct + '%"></i></div></a>';
      }
      return '<a class="tile" href="#/b/' + esc(a.id) + '"><div class="nr">' + areaLabel(a) + '</div><div class="t">' + titleLines(a).map(esc).join('<br>') + '</div>' +
        '<div class="meta">' + a.topics.length + ' Themen · ' + st.n + ' Karten · ' + st.d + ' gelernt</div>' +
        '<div class="progress"><i style="width:' + pct + '%"></i></div></a>';
    };
    var years = [1, 2, 3].filter(function (y) { return AREAS.some(function (a) { return a.year === y; }); });
    var qb = function (href, label, num, cls, id) {
      return (href ? '<a class="qbtn' + (cls ? ' ' + cls : '') + '" href="' + href + '">' : '<button class="qbtn" id="' + id + '">') +
        '<b>' + label + '</b><small>' + num + '</small>' + (href ? '</a>' : '</button>');
    };
    var gridOn = tileMode() === 'grid';
    var html = '<div class="content" style="max-width:none">' +
      '<h1 class="home-h1">Immobilienkaufmann/-frau<span>' + (years.length === 1 ? years[0] + '. Ausbildungsjahr' : 'Ausbildung') + '</span></h1>' +
      '<p class="lead">' + all + ' Lernkarten · ' + d + ' gelernt · ' + stars + ' auf dem Merkzettel.</p>' +
      '<div class="quickgrid">' + qb('#/abfragen', 'Abfragen', due + ' fällig', 'primary') + qb('#/pruefung', 'Wissen prüfen', FRAGEN.length + ' Fragen') +
      qb('#/merken', 'Merkzettel', stars + ' Karten') + qb('#/az', 'A–Z', GLOSSAR.length + ' Begriffe') + qb('', 'Teilen', 'WhatsApp & Co.', '', 'sharebtn') + '</div>' +
      '<div class="viewswitch" role="group" aria-label="Ansicht"><span>Ansicht:</span><button data-mode="list"' + (gridOn ? '' : ' class="on" aria-pressed="true"') + '>Liste</button><button data-mode="grid"' + (gridOn ? ' class="on" aria-pressed="true"' : '') + '>Kacheln</button></div>';
    years.forEach(function (y) {
      var lfs = AREAS.filter(function (a) { return a.year === y && a.kind === 'lf'; }), fa = AREAS.filter(function (a) { return a.year === y && a.kind !== 'lf'; });
      if (years.length > 1) html += '<h2 class="year">' + y + '. Ausbildungsjahr</h2>';
      if (lfs.length) html += '<div class="section-title">Lernfelder</div><div class="' + (gridOn ? 'sqs' : 'tiles') + '">' + lfs.map(tile).join('') + '</div>';
      if (fa.length) html += '<div class="section-title">Weitere Fächer</div><div class="' + (gridOn ? 'sqs' : 'tiles') + '">' + fa.map(tile).join('') + '</div>';
      if (y === 1) html += '<div class="section-title">Sport</div><div class="hint">Sport steht auch auf dem Stundenplan (laut Stundentafel MV). Dafür gibt es keine Lernkarten – er wird praktisch bewertet.</div>';
    });
    html += '<div class="section-title">Gut zu wissen</div><div class="hint">Grundlage: KMK-Rahmenlehrplan Immobilienkaufmann/-frau (2006), Ausbildungsverordnung (2006) und Stundentafel der Berufsschulverordnung MV. Deine Schule kann Reihenfolge und Themen anders verteilen – Stellen mit ⚠ zeigen das.</div>' +
      '<div class="section-title">Deine Daten</div><div class="hint">Haken, Merkzettel, Notizen und Karteikasten bleiben nur auf diesem Gerät. Für ein neues Handy oder als Sicherung:' +
      '<div class="actions"><button class="btn" id="exp">Sicherung speichern</button><label class="btn" for="imp">Sicherung laden</label><input type="file" id="imp" accept=".json,application/json" hidden></div></div>' +
      '<div class="section-title">Farbe</div>' + '<div class="colors" role="group" aria-label="Farbe"><span>Farbe:</span>' + ACCENTS.map(function (c) {
        return '<button data-accent="' + c[0] + '" style="background:' + c[1] + '" aria-label="' + c[2] + '" title="' + c[2] + '"' + (getPref('accent', 'gruen') === c[0] ? ' class="on" aria-pressed="true"' : '') + '></button>';
      }).join('') + '</div>' + '</div>';
    main.innerHTML = html;
    $('#sharebtn').addEventListener('click', shareApp);
    main.querySelectorAll('.colors button').forEach(function (b) { b.addEventListener('click', function () { setPref('accent', b.dataset.accent); applyTheme(); viewHome(); }); });
    main.querySelectorAll('.viewswitch button').forEach(function (b) { b.addEventListener('click', function () { setPref('tiles', b.dataset.mode); viewHome(); }); });
    $('#exp').addEventListener('click', function () {
      var blob = new Blob([JSON.stringify({ app: 'immo-kaufmann', v: 2, saved: new Date().toISOString(), data: S }, null, 1)], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'immo-kaufmann-sicherung.json';
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    });
    $('#imp').addEventListener('change', function (ev) {
      var f = ev.target.files[0]; if (!f) return;
      f.text().then(function (t) {
        var j = JSON.parse(t); if (!j || j.app !== 'immo-kaufmann' || !j.data) throw new Error('x');
        if (!confirm('Sicherung laden? Die jetzigen Haken, Notizen und der Merkzettel auf diesem Gerät werden ersetzt.')) return;
        S = { done: j.data.done || {}, star: j.data.star || {}, notes: j.data.notes || {}, box: j.data.box || {}, qs: j.data.qs || {}, hl: j.data.hl || {} }; save(); viewHome();
      }).catch(function () { alert('Diese Datei ist keine Sicherung von Immo Kaufmann.'); });
    });
  }

  var APP_URL = 'https://herzogwebdesign.github.io/immo-kaufmann/';
  var SHARE_TEXT = 'Immo Kaufmann – Lernkarten, Übungsfragen und Fachbegriffe fürs 1. Ausbildungsjahr Immobilienkaufleute. Kostenlos, ohne Anmeldung: ';
  function shareApp() {
    if (navigator.share) { navigator.share({ title: 'Immo Kaufmann', text: SHARE_TEXT, url: APP_URL }).catch(function () {}); return; }
    window.open('https://wa.me/?text=' + encodeURIComponent(SHARE_TEXT + APP_URL), '_blank', 'noopener');
  }
  function viewArea(id) {
    var a = BYID[id] && BYID[id].area; if (!a) return viewHome();
    setNav('start');
    var st = areaStats(a);
    document.title = a.title + ' – Immo Kaufmann';
    main.innerHTML = '<div class="content">' +
      '<div class="crumb"><a href="#/">Start</a> › ' + a.year + '. Jahr · ' + areaLabel(a) + '</div>' +
      '<h1>' + titleLines(a).map(esc).join('<br>') + '</h1>' +
      '<p class="lead">' + md(a.intro) + '<br><small>' + esc(a.hours || '') + (a.hours ? ' · ' : '') + st.d + ' von ' + st.n + ' gelernt</small></p>' +
      topicsHtml(a) +
      '<div class="actions"><a class="btn" href="#/abfragen?b=' + esc(a.id) + '">Diesen Bereich abfragen</a><a class="btn" href="#/pruefung?b=' + esc(a.id) + '">Wissen prüfen</a><a class="btn" href="#/druck?b=' + esc(a.id) + '">Karten drucken</a></div>' +
      '<p class="src">Quelle: ' + esc(a.source) + '</p></div>';
  }

  function viewSub(id) {
    var e = BYID[id]; if (!e || e.type !== 'sub') return viewHome();
    setNav('start');
    var s = e.sub, a = e.area, prev = SUBS[e.idx - 1], next = SUBS[e.idx + 1];
    if (prev && prev.area !== a) prev = null; if (next && next.area !== a) next = null;
    document.title = s.title + ' – Immo Kaufmann';
    var subCtx = (a.short || a.title) + ' · ' + e.num + ' ' + plain(s.title) + ' [' + s.id + ']';
    main.innerHTML = '<div class="layout with-side"><nav class="side" aria-label="Themen">' + topicsHtml(a, s.id) + '</nav>' +
      '<div class="content">' +
      '<div class="crumb"><a href="#/b/' + esc(a.id) + '">' + areaLabel(a) + ' · ' + md(a.title) + '</a> › ' + md(e.topic.title) + '</div>' +
      '<article class="sub"><div class="sub-head"><h1>' + md(s.title) + '</h1>' +
      '<div class="subtools">' + starBtnHtml(s.id) + markBtnHtml() + '</div></div>' +
      s.content.map(blockHtml).join('') +
      '<div class="essenz-label"><span>Essenz · Lernkarte</span><div class="cardtools">' + starBtnHtml(s.id) + markBtnHtml() +
      '<label class="done"><input type="checkbox" id="donebox"' + (isDone(s.id) ? ' checked' : '') + '> gelernt</label></div></div>' +
      cardHtml(e) +
      '<div class="notebox"><label for="note">Meine Notiz</label><textarea id="note" rows="3" placeholder="z. B. was die Lehrkraft dazu gesagt hat …">' + esc(S.notes[s.id] || '') + '</textarea><small id="notesaved"></small></div>' +
      '<div class="actions"><span class="muted" style="align-self:center">Karte drucken:</span><a class="btn" href="#/druckansicht?ids=' + esc(s.id) + '&m=a6">A6</a><a class="btn" href="#/druckansicht?ids=' + esc(s.id) + '&m=a7">A7 (Spielkarte)</a></div>' +
      '<p class="src">Quelle: ' + md(s.src) + '</p>' + reportHtml(subCtx) + '</article>' +
      '<div class="pager">' + (prev ? '<a href="#/s/' + esc(prev.sub.id) + '"><small>Zurück</small>' + md(prev.sub.title) + '</a>' : '<span style="flex:1"></span>') +
      (next ? '<a class="next" href="#/s/' + esc(next.sub.id) + '"><small>Weiter</small>' + md(next.sub.title) + '</a>' : '<span style="flex:1"></span>') + '</div>' +
      '</div></div>';
    function refreshSide() { var li = document.querySelector('.side a[href="#/s/' + s.id + '"]'); if (li) { li.querySelectorAll('.star,.check').forEach(function (x) { x.remove(); }); li.insertAdjacentHTML('beforeend', marks(s.id)); } }
    $('#donebox').addEventListener('change', function (ev) { setDone(s.id, ev.target.checked); refreshSide(); });
    main.querySelectorAll('.js-star').forEach(function (b) {
      b.addEventListener('click', function () {
        var v = !isStar(s.id); setStar(s.id, v);
        main.querySelectorAll('.js-star').forEach(function (x) { x.classList.toggle('on', v); x.setAttribute('aria-pressed', v); x.textContent = v ? '★ Gemerkt' : '☆ Merken'; });
        refreshSide();
      });
    });
    var nt;
    $('#note').addEventListener('input', function (ev) {
      clearTimeout(nt); var v = ev.target.value;
      nt = setTimeout(function () {
        if (v.trim()) S.notes[s.id] = v; else delete S.notes[s.id]; save(); $('#notesaved').textContent = 'gespeichert – steht auch auf der Karte';
        var cd = main.querySelector('.card[data-card="' + s.id + '"]'); if (cd) cd.outerHTML = cardHtml(e);
      }, 400);
    });
    bindReport(subCtx);
    document.body.classList.remove('marking'); setupMarker(s.id);
    var cur = document.querySelector('.side [aria-current="page"]'); if (cur) cur.scrollIntoView({ block: 'center' });
  }


  /* ---------- Fehler melden (ohne Server: per WhatsApp oder E-Mail) ---------- */
  var APP_VERSION = 'v16';
  function reportHtml(ctx) {
    return '<details class="report"><summary>Fehler gefunden?</summary><div class="report-in">' +
      '<label for="rep-txt">Was stimmt nicht?</label><textarea id="rep-txt" rows="3" placeholder="z. B. Zahl falsch, Satz unklar, Paragraf stimmt nicht …"></textarea>' +
      '<div class="actions"><button class="btn primary" id="rep-wa" type="button">Per WhatsApp senden</button><button class="btn" id="rep-mail" type="button">Per E-Mail</button></div>' +
      '<small class="muted">Es wird nur dein Text und die Stelle in der App gesendet (' + esc(ctx) + ').</small></div></details>';
  }
  function bindReport(ctx) {
    var msg = function () { var t = ($('#rep-txt') || {}).value || ''; return 'Fehler in Immo Kaufmann (' + APP_VERSION + ')\nStelle: ' + ctx + '\nProblem: ' + (t.trim() || '–'); };
    var wa = $('#rep-wa'), ml = $('#rep-mail');
    if (wa) wa.addEventListener('click', function () { window.open('https://wa.me/?text=' + encodeURIComponent(msg()), '_blank', 'noopener'); });
    if (ml) ml.addEventListener('click', function () { location.href = 'mailto:?subject=' + encodeURIComponent('Fehler in Immo Kaufmann') + '&body=' + encodeURIComponent(msg()); });
  }


  /* ---------- Textmarker in mehreren Farben (nur dieses Gerät) ---------- */
  var CARD_MARK = 'li, tr, .k-merk, .k-note';
  var HL_COLORS = [['gelb', '#ffe066', 'Gelb'], ['gruen', '#9fe38a', 'Grün'], ['rosa', '#ffaed0', 'Rosa'], ['blau', '#9fd2ff', 'Blau']];
  function hlKey(v) { return v === 1 || !v ? 'gelb' : v; }
  function starBtnHtml(id) { return '<button class="starbtn js-star' + (isStar(id) ? ' on' : '') + '" aria-pressed="' + isStar(id) + '">' + (isStar(id) ? '★ Gemerkt' : '☆ Merken') + '</button>'; }
  function markBtnHtml() { return '<button class="starbtn markbtn js-mark" aria-pressed="false">🖍 Markieren</button>'; }
  function setHl(el, v) {
    HL_COLORS.forEach(function (c) { el.classList.remove('hl-' + c[0]); });
    el.classList.toggle('hl', !!v); if (v) el.classList.add('hl-' + hlKey(v));
  }
  function contentMarkables(art) {
    return Array.prototype.filter.call(art.querySelectorAll('p, li, tr, .note, .warn'), function (el) {
      return !el.closest('.card') && !el.closest('.notebox') && !el.closest('details') && !el.classList.contains('src');
    });
  }
  function applyCardMarks(root) {
    Array.prototype.forEach.call((root || document).querySelectorAll('.card[data-card]'), function (card) {
      var m = S.hl[card.dataset.card] || {};
      Array.prototype.forEach.call(card.querySelectorAll(CARD_MARK), function (el, i) { setHl(el, m['k:' + i]); });
    });
  }
  function markCount(id) { return Object.keys(S.hl[id] || {}).length; }
  function setupMarker(id) {
    var art = main.querySelector('article.sub'); if (!art) return;
    var cm = contentMarkables(art), bar = $('#markbar');
    function color() { return getPref('hlcolor', 'gelb'); }
    function paint() {
      var m = S.hl[id] || {};
      cm.forEach(function (el, i) { setHl(el, m['c:' + i]); });
      applyCardMarks(art);
      var clr = $('#markclear'); if (clr) clr.hidden = !markCount(id);
    }
    function renderBar() {
      bar.innerHTML = '<span class="mb-t">Farbe:</span>' + HL_COLORS.map(function (c) {
        return '<button class="mb-c' + (color() === c[0] ? ' on' : '') + '" data-c="' + c[0] + '" style="background:' + c[1] + '" aria-label="' + c[2] + '" title="' + c[2] + '"></button>';
      }).join('') + '<button class="mb-x" id="markclear"' + (markCount(id) ? '' : ' hidden') + '>Alle löschen</button><button class="mb-done" id="markdone">Fertig</button>';
      bar.querySelectorAll('.mb-c').forEach(function (b) { b.addEventListener('click', function () { setPref('hlcolor', b.dataset.c); renderBar(); }); });
      $('#markclear').addEventListener('click', function () { if (confirm('Alle Markierungen auf dieser Seite löschen?')) { delete S.hl[id]; save(); paint(); } });
      $('#markdone').addEventListener('click', function () { setMode(false); });
    }
    function setMode(on) {
      document.body.classList.toggle('marking', on); bar.hidden = !on;
      main.querySelectorAll('.js-mark').forEach(function (b) { b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); b.textContent = on ? '🖍 Fertig' : '🖍 Markieren'; });
      if (on) renderBar();
    }
    paint(); setMode(false);
    main.querySelectorAll('.js-mark').forEach(function (b) { b.addEventListener('click', function () { setMode(!document.body.classList.contains('marking')); }); });
    art.addEventListener('click', function (ev) {
      if (!document.body.classList.contains('marking')) return;
      var el = ev.target.closest('p, li, tr, .note, .warn, .k-merk, .k-note'); if (!el || !art.contains(el) || ev.target.closest('button, label, textarea, details')) return;
      var key = null, card = el.closest('.card');
      if (card) { var i = Array.prototype.indexOf.call(card.querySelectorAll(CARD_MARK), el); if (i >= 0) key = 'k:' + i; }
      else { var j = cm.indexOf(el); if (j >= 0) key = 'c:' + j; }
      if (!key) return;
      ev.preventDefault();
      var m = S.hl[id] || (S.hl[id] = {}), c = color();
      if (m[key] && hlKey(m[key]) === c) delete m[key]; else m[key] = c;
      if (!Object.keys(m).length) delete S.hl[id];
      save(); paint();
    });
  }

  /* ---------- Merkzettel ---------- */
  function viewStars() {
    setNav('merken'); document.title = 'Merkzettel – Immo Kaufmann';
    var list = SUBS.filter(function (e) { return isStar(e.sub.id); });
    var withNotes = SUBS.filter(function (e) { return S.notes[e.sub.id] && !isStar(e.sub.id); });
    main.innerHTML = '<div class="content"><div class="crumb"><a href="#/">Start</a> › Merkzettel</div><h1>Merkzettel</h1>' +
      '<p class="lead">' + (list.length ? list.length + (list.length === 1 ? ' Karte' : ' Karten') + ' zum Nochmal-Ansehen.' : 'Noch leer. Tippe bei einer Karte auf „☆ Merken“, dann steht sie hier.') + '</p>' +
      (list.length ? '<div class="actions" style="margin-bottom:12px"><a class="btn primary" href="#/abfragen?b=star">Merkzettel abfragen</a><a class="btn" href="#/druck?b=star">Merkzettel drucken</a></div>' : '') +
      '<div class="results">' + list.map(function (e) {
        return '<div class="row">' + subLink(e, S.notes[e.sub.id] ? '<div class="rs">Notiz: ' + esc(S.notes[e.sub.id]).slice(0, 140) + '</div>' : '') +
          '<button class="iconbtn unstar" data-id="' + esc(e.sub.id) + '" aria-label="Vom Merkzettel nehmen">✕</button></div>';
      }).join('') + '</div>' +
      (withNotes.length ? '<div class="section-title">Karten mit Notiz</div><div class="results">' + withNotes.map(function (e) {
        return subLink(e, '<div class="rs">Notiz: ' + esc(S.notes[e.sub.id]).slice(0, 140) + '</div>');
      }).join('') + '</div>' : '') + '</div>';
    main.querySelectorAll('.unstar').forEach(function (b) { b.addEventListener('click', function () { setStar(b.dataset.id, false); viewStars(); }); });
  }

  /* ---------- Karteikasten ---------- */
  function boxOf(id) { return S.box[id] || { f: 1, due: 0 }; }
  function dueList(list) { var now = Date.now(); return list.filter(function (e) { return boxOf(e.sub.id).due <= now; }); }
  function scopeList(b) {
    if (b === 'star') return SUBS.filter(function (e) { return isStar(e.sub.id); });
    if (b && BYID[b] && BYID[b].type === 'area') return SUBS.filter(function (e) { return e.area.id === b; });
    return SUBS.slice();
  }
  function scopeName(b) { return b === 'star' ? 'Merkzettel' : (b && BYID[b] && BYID[b].area) ? areaLabel(BYID[b].area) + ': ' + plain(BYID[b].area.title) : 'Alle Karten'; }
  var quiz = null;
  function viewQuiz(params) {
    setNav('abfragen'); document.title = 'Abfragen – Immo Kaufmann';
    var b = params.b || 'all';
    if (!params.go) { quiz = null; return quizStart(b); }
    if (!quiz || quiz.b !== b || params.sel) {
      var list = scopeList(b), due = dueList(list);
      var pool = params.sel ? (window.__immoSel || []).map(function (id) { return BYID[id]; }).filter(Boolean) : params.all ? list : due;
      if (params.sel) { window.__immoSel = null; history.replaceState(null, '', '#/abfragen?b=' + b + '&go=1&all=1'); }
      pool = pool.slice().sort(function (x, y) { return boxOf(x.sub.id).f - boxOf(y.sub.id).f || Math.random() - 0.5; });
      quiz = { b: b, queue: pool.map(function (e) { return e.sub.id; }), right: 0, again: 0, total: pool.length, shown: false };
    }
    quizCard();
  }
  function quizStart(b) {
    var list = scopeList(b), due = dueList(list), counts = [0, 0, 0, 0, 0, 0];
    list.forEach(function (e) { counts[boxOf(e.sub.id).f]++; });
    main.innerHTML = '<div class="content"><div class="crumb"><a href="#/">Start</a> › Abfragen</div><h1>Abfragen</h1>' +
      '<p class="lead">Wie ein Karteikasten: Du siehst die Frage, denkst nach, deckst die Karte auf. Gewusst → die Karte rückt ein Fach weiter und kommt später wieder. Nicht gewusst → zurück in Fach 1.</p>' +
      '<fieldset><legend>Welche Karten?</legend><select id="scope" class="sel">' +
      '<option value="all">Alle Karten</option><option value="star"' + (b === 'star' ? ' selected' : '') + '>Merkzettel</option>' +
      AREAS.map(function (a) { return '<option value="' + a.id + '"' + (b === a.id ? ' selected' : '') + '>' + esc(areaLabel(a) + ': ' + plain(a.title)) + '</option>'; }).join('') +
      '</select></fieldset>' +
      '<div class="boxes">' + [1, 2, 3, 4, 5].map(function (f) {
        return '<a class="boxf" href="#/fach?f=' + f + '&b=' + b + '"><b>' + counts[f] + '</b><span>Fach ' + f + '</span><small>' + (f === 1 ? 'neu/nochmal' : 'nach ' + INTERVAL[f] + ' Tag' + (INTERVAL[f] > 1 ? 'en' : '')) + '</small></a>';
      }).join('') + '</div><p class="muted" style="font-size:14px;margin:-4px 0 8px">Tippe auf ein Fach, um Karten anzusehen, zu verschieben oder einzelne abzufragen.</p>' +
      '<p class="count">' + due.length + ' von ' + list.length + ' Karten sind heute dran.</p>' +
      '<div class="actions">' + (due.length ? '<a class="btn primary" href="#/abfragen?b=' + b + '&go=1">Los geht’s (' + due.length + ')</a>' : '<span class="hint" style="display:block">Für heute ist alles erledigt. 👍</span>') +
      '<a class="btn" href="#/abfragen?b=' + b + '&go=1&all=1">Alle ' + list.length + ' üben</a><a class="btn" href="#/fach?f=0&b=' + b + '">Karten selbst auswählen</a></div></div>';
    $('#scope').addEventListener('change', function (ev) { location.hash = '#/abfragen?b=' + ev.target.value; });
  }
  function quizCard() {
    if (!quiz.queue.length) {
      main.innerHTML = '<div class="content"><h1>Fertig!</h1><p class="lead">' + quiz.right + '× gewusst, ' + quiz.again + '× nochmal.</p>' +
        '<div class="actions"><a class="btn primary" href="#/abfragen?b=' + quiz.b + '">Zum Karteikasten</a><a class="btn" href="#/merken">Merkzettel</a></div></div>';
      quiz = null; return;
    }
    var e = BYID[quiz.queue[0]], bx = boxOf(e.sub.id), doneN = quiz.total - quiz.queue.length;
    main.innerHTML = '<div class="content quiz"><div class="crumb"><a href="#/abfragen?b=' + quiz.b + '">Abfragen</a> › ' + esc(scopeName(quiz.b)) + '</div>' +
      '<div class="qbar"><span>Karte ' + Math.min(doneN + 1, quiz.total) + ' von ' + quiz.total + ' · Fach ' + bx.f + '</span>' +
      '<button class="starbtn small' + (isStar(e.sub.id) ? ' on' : '') + '" id="qstar">' + (isStar(e.sub.id) ? '★' : '☆') + '</button></div>' +
      '<div class="progress"><i style="width:' + Math.round(doneN * 100 / Math.max(1, quiz.total)) + '%"></i></div>' +
      '<div class="card qcard" id="qcard" data-card="' + esc(e.sub.id) + '">' + cardHead(e) +
      '<div class="qfront" id="qfront"><p>Was gehört auf diese Karte?</p><p class="muted">Erst überlegen, dann aufdecken.</p><button class="btn primary" id="reveal">Lösung zeigen</button></div>' +
      '<div class="qback" id="qback" hidden>' + cardBody(e) + '</div></div>' +
      '<div class="qactions" id="qact" hidden><button class="btn again" id="again">✗ Nochmal</button><button class="btn primary" id="right">✓ Gewusst</button></div>' +
      '<p class="src"><a href="#/s/' + esc(e.sub.id) + '">Ganzen Inhalt ansehen</a></p></div>';
    applyCardMarks(main);
    $('#reveal').addEventListener('click', function () { $('#qfront').hidden = true; $('#qback').hidden = false; $('#qact').hidden = false; });
    $('#qstar').addEventListener('click', function (ev) { var v = !isStar(e.sub.id); setStar(e.sub.id, v); ev.currentTarget.textContent = v ? '★' : '☆'; ev.currentTarget.classList.toggle('on', v); });
    $('#right').addEventListener('click', function () {
      var f = Math.min(5, bx.f + 1); S.box[e.sub.id] = { f: f, due: Date.now() + INTERVAL[f] * DAY - 36e5 };
      if (f === 5) S.done[e.sub.id] = 1;
      save(); quiz.right++; quiz.queue.shift(); quizCard(); window.scrollTo(0, 0);
    });
    $('#again').addEventListener('click', function () {
      S.box[e.sub.id] = { f: 1, due: 0 }; save(); quiz.again++;
      var id = quiz.queue.shift(); if (quiz.queue.length > 2) quiz.queue.splice(3, 0, id); else quiz.queue.push(id);
      quiz.total++; quizCard(); window.scrollTo(0, 0);
    });
  }



  /* ---------- Fächer des Karteikastens: ansehen, verschieben, auswählen ---------- */
  function viewFach(params) {
    setNav('abfragen'); document.title = 'Karteikasten – Immo Kaufmann';
    var b = params.b || 'all', f = parseInt(params.f, 10) || 0;
    var list = scopeList(b).filter(function (e) { return !f || boxOf(e.sub.id).f === f; });
    var tabs = [0, 1, 2, 3, 4, 5].map(function (n) {
      return '<a href="#/fach?f=' + n + '&b=' + b + '"' + (n === f ? ' class="on"' : '') + '>' + (n ? 'Fach ' + n : 'Alle') + '</a>';
    }).join('');
    main.innerHTML = '<div class="content"><div class="crumb"><a href="#/abfragen?b=' + b + '">Abfragen</a> › ' + esc(scopeName(b)) + '</div>' +
      '<h1>' + (f ? 'Fach ' + f : 'Alle Fächer') + '</h1><nav class="ftabs">' + tabs + '</nav>' +
      '<div class="selbar"><label class="opt"><input type="checkbox" id="selall"> Alle auswählen</label><span id="selcount" class="muted">0 ausgewählt</span></div>' +
      (list.length ? '<ul class="flist">' + list.map(function (e) {
        var bx = boxOf(e.sub.id);
        return '<li><label><input type="checkbox" class="selc" value="' + esc(e.sub.id) + '"><span><small>' + esc(e.area.short || areaLabel(e.area)) + ' · ' + e.num + '</small>' + md(e.sub.title) + '</span></label><span class="fbadge">F' + bx.f + '</span></li>';
      }).join('') + '</ul>' : '<p class="hint">In diesem Fach liegen keine Karten.</p>') +
      '<div class="selactions"><button class="btn primary" id="selquiz" disabled>Auswahl abfragen</button>' +
      '<span class="moveto"><select id="seltarget" class="sel" aria-label="Zielfach">' + [1, 2, 3, 4, 5].map(function (n) { return '<option value="' + n + '">nach Fach ' + n + '</option>'; }).join('') + '</select>' +
      '<button class="btn" id="selmove" disabled>Verschieben</button></span></div></div>';
    function picked() { return Array.prototype.map.call(main.querySelectorAll('.selc:checked'), function (c) { return c.value; }); }
    function upd() { var n = picked().length; $('#selcount').textContent = n + ' ausgewählt'; $('#selquiz').disabled = !n; $('#selmove').disabled = !n; }
    main.querySelectorAll('.selc').forEach(function (c) { c.addEventListener('change', upd); });
    $('#selall').addEventListener('change', function (ev) { main.querySelectorAll('.selc').forEach(function (c) { c.checked = ev.target.checked; }); upd(); });
    $('#selquiz').addEventListener('click', function () { window.__immoSel = picked(); quiz = null; location.hash = '#/abfragen?b=' + b + '&go=1&sel=1'; });
    $('#selmove').addEventListener('click', function () {
      var t = parseInt($('#seltarget').value, 10), ids = picked();
      ids.forEach(function (id) { S.box[id] = { f: t, due: t === 1 ? 0 : Date.now() + INTERVAL[t] * DAY - 36e5 }; if (t === 5) S.done[id] = 1; });
      save(); viewFach(params);
      var m = document.createElement('p'); m.className = 'toast'; m.textContent = ids.length + (ids.length === 1 ? ' Karte' : ' Karten') + ' nach Fach ' + t + ' verschoben.'; main.querySelector('.content').prepend(m);
    });
  }

  /* ---------- Prüfungsfragen ---------- */
  var exam = null;
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function qScope(b) { var ids = {}; scopeList(b).forEach(function (e) { ids[e.sub.id] = 1; }); return FRAGEN.filter(function (q) { return ids[q.ref]; }); }
  function note100(p) { return p >= 92 ? 'sehr gut' : p >= 81 ? 'gut' : p >= 67 ? 'befriedigend' : p >= 50 ? 'ausreichend' : p >= 30 ? 'mangelhaft' : 'ungenügend'; }
  function parseNum(v) { v = String(v).replace(/\s|€|%|m²/g, ''); if (/,/.test(v)) v = v.replace(/\./g, '').replace(',', '.'); return parseFloat(v); }
  function viewExam(params) {
    setNav('pruefung'); document.title = 'Prüf dein Wissen – Immo Kaufmann';
    var b = params.b || 'all';
    if (!params.go) {
      exam = null;
      var pool = qScope(b), wrong = pool.filter(function (q) { return S.qs[q.id] === 0; }).length, right = pool.filter(function (q) { return S.qs[q.id] === 1; }).length;
      main.innerHTML = '<div class="content"><div class="crumb"><a href="#/">Start</a> › Wissen prüfen</div><h1>Prüf dein Wissen</h1>' +
        '<p class="lead">Übungsfragen im Stil der IHK-Prüfung: Ankreuzen oder Rechnen. Selbst erstellt – keine Original-Prüfungsaufgaben. Falsch beantwortete Fragen legen die Karte auf deinen Merkzettel.</p>' +
        '<fieldset><legend>Welche Fragen?</legend><select id="scope" class="sel"><option value="all">Alle Bereiche</option><option value="star"' + (b === 'star' ? ' selected' : '') + '>Merkzettel</option>' +
        AREAS.map(function (a) { return '<option value="' + a.id + '"' + (b === a.id ? ' selected' : '') + '>' + esc(areaLabel(a) + ': ' + plain(a.title)) + '</option>'; }).join('') + '</select></fieldset>' +
        '<p class="count">' + pool.length + ' Fragen · ' + right + ' zuletzt richtig · ' + wrong + ' zuletzt falsch</p>' +
        (pool.length ? '<div class="actions"><a class="btn primary" href="#/pruefung?b=' + b + '&go=1&n=10">10 Fragen</a><a class="btn" href="#/pruefung?b=' + b + '&go=1&n=20">20 Fragen</a>' +
          (wrong ? '<a class="btn" href="#/pruefung?b=' + b + '&go=1&n=99&w=1">Nur die falschen (' + wrong + ')</a>' : '') + '</div>' : '<p class="hint">Für diesen Bereich gibt es noch keine Fragen.</p>') + '</div>';
      $('#scope').addEventListener('change', function (ev) { location.hash = '#/pruefung?b=' + ev.target.value; });
      return;
    }
    if (!exam) {
      var p = qScope(b); if (params.w) p = p.filter(function (q) { return S.qs[q.id] === 0; });
      p = shuffle(p.slice()).slice(0, parseInt(params.n, 10) || 10);
      exam = { b: b, list: p, i: 0, pts: 0 };
    }
    examQ();
  }
  function examQ() {
    if (exam.i >= exam.list.length) {
      var pct = Math.round(exam.pts * 100 / Math.max(1, exam.list.length));
      main.innerHTML = '<div class="content"><h1>Ergebnis</h1><p class="lead">' + exam.pts + ' von ' + exam.list.length + ' richtig = ' + pct + ' Punkte → Note „' + note100(pct) + '“ (IHK-Notenschlüssel).</p>' +
        '<div class="actions"><a class="btn primary" href="#/pruefung?b=' + exam.b + '">Nochmal</a><a class="btn" href="#/merken">Zum Merkzettel</a></div></div>';
      exam = null; return;
    }
    var q = exam.list[exam.i], e = BYID[q.ref], multi = q.type === 'mc' && q.correct.length > 1;
    var order = q.type === 'mc' ? q.options.map(function (o, i) { return i; }) : [];
    var body = q.type === 'mc'
      ? '<div class="opts">' + order.map(function (i, k) { return '<button class="optbtn" data-i="' + i + '"><span class="ol">' + 'abcde'.charAt(k) + '</span>' + md(q.options[i]) + '</button>'; }).join('') + '</div>' +
        (multi ? '<p class="muted">Zwei Antworten sind richtig.</p>' : '') + '<div class="actions"><button class="btn primary" id="check"' + (multi ? '' : ' hidden') + '>Prüfen</button></div>'
      : '<div class="numin"><input id="num" inputmode="decimal" autocomplete="off" placeholder="Deine Lösung"><span>' + esc(q.unit || '') + '</span></div><div class="actions"><button class="btn primary" id="check">Prüfen</button></div>';
    main.innerHTML = '<div class="content quiz"><div class="crumb"><a href="#/pruefung?b=' + exam.b + '">Wissen prüfen</a> › Frage ' + (exam.i + 1) + ' von ' + exam.list.length + '</div>' +
      '<div class="progress"><i style="width:' + Math.round(exam.i * 100 / exam.list.length) + '%"></i></div>' +
      '<article class="sub qbox"><div class="rp">' + areaLabel(e.area) + ' · ' + md(e.sub.title) + '</div><h2 class="qq">' + md(q.q) + '</h2>' + body + '<div id="fb"></div></article></div>';
    var picked = [];
    function finish(ok) {
      S.qs[q.id] = ok ? 1 : 0; if (ok) exam.pts++; else setStar(q.ref, true); save();
      main.querySelectorAll('.optbtn').forEach(function (bt) {
        var i = +bt.dataset.i; bt.disabled = true;
        if (q.correct.indexOf(i) >= 0) bt.classList.add('right'); else if (picked.indexOf(i) >= 0) bt.classList.add('wrong');
      });
      var c = $('#check'); if (c) c.remove(); var n = $('#num'); if (n) n.disabled = true;
      $('#fb').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Richtig!' : '✗ Leider falsch.' + (q.type === 'zahl' ? ' Richtig: ' + esc(String(q.answer).replace('.', ',')) + ' ' + esc(q.unit || '') : '')) + '</b>' +
        (q.why ? '<p>' + md(q.why) + '</p>' : '') + (q.solution ? '<div class="example">' + calcHtml(q.solution) + '</div>' : '') +
        (ok ? '' : '<p class="muted">Die Karte liegt jetzt auf deinem Merkzettel.</p>') +
        '<p><a href="#/s/' + esc(q.ref) + '">Karte „' + md(e.sub.title) + '“ ansehen</a></p></div>' +
        '<div class="actions"><button class="btn primary" id="nextq">' + (exam.i + 1 < exam.list.length ? 'Nächste Frage' : 'Zum Ergebnis') + '</button></div>' +
        reportHtml('Übungsfrage ' + q.id + ': ' + plain(q.q).slice(0, 80));
      bindReport('Übungsfrage ' + q.id + ': ' + plain(q.q).slice(0, 80));
      $('#nextq').addEventListener('click', function () { exam.i++; examQ(); window.scrollTo(0, 0); });
    }
    main.querySelectorAll('.optbtn').forEach(function (bt) {
      bt.addEventListener('click', function () {
        var i = +bt.dataset.i;
        if (!multi) { picked = [i]; finish(q.correct.length === 1 && q.correct[0] === i); return; }
        var k = picked.indexOf(i); if (k >= 0) picked.splice(k, 1); else picked.push(i); bt.classList.toggle('sel', k < 0);
      });
    });
    var chk = $('#check');
    if (chk) chk.addEventListener('click', function () {
      if (q.type === 'zahl') { var v = parseNum($('#num').value); if (isNaN(v)) { $('#num').focus(); return; } finish(Math.abs(v - q.answer) <= (q.tol || 0.01) + 1e-9); }
      else finish(picked.length === q.correct.length && picked.every(function (i) { return q.correct.indexOf(i) >= 0; }));
    });
    var ni = $('#num'); if (ni) ni.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') chk.click(); });
  }

  /* ---------- Fachbegriffe A–Z ---------- */
  function norm(s) { return String(s).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss'); }
  function firstLetter(t) { var c = norm(t).replace(/[^a-z0-9]/g, '').charAt(0).toUpperCase(); return /[A-Z]/.test(c) ? c : '#'; }
  function viewAZ(params) {
    setNav('az'); document.title = 'Fachbegriffe – Immo Kaufmann';
    var letters = []; GLOSSAR.forEach(function (g) { var l = firstLetter(g.term); if (letters.indexOf(l) < 0) letters.push(l); });
    main.innerHTML = '<div class="content"><div class="crumb"><a href="#/">Start</a> › Fachbegriffe</div><h1>Fachbegriffe A–Z</h1>' +
      (GLOSSAR.length ? '<input type="search" id="gq" class="gq" placeholder="Begriff filtern …" aria-label="Begriff filtern" value="' + esc(params.q || '') + '">' +
        '<nav class="letters">' + letters.map(function (l) { return '<a href="#L-' + l + '" data-l="' + l + '">' + l + '</a>'; }).join('') + '</nav><dl class="gloss" id="gloss"></dl>'
        : '<p class="lead">Die Fachbegriffe werden gerade ergänzt.</p>') + '</div>';
    if (!GLOSSAR.length) return;
    function render(q) {
      var w = norm(q || '').trim(), last = '', h = '';
      GLOSSAR.forEach(function (g) {
        if (w && norm(g.term + ' ' + g.def).indexOf(w) < 0) return;
        var l = firstLetter(g.term);
        if (l !== last) { h += '<dt class="lt" id="L-' + l + '">' + l + '</dt>'; last = l; }
        var e = g.ref && BYID[g.ref];
        h += '<dt>' + md(g.term) + '</dt><dd>' + md(g.def) + (e ? ' <a href="#/s/' + esc(g.ref) + '">→ ' + md(e.sub.title) + '</a>' : '') + '</dd>';
      });
      $('#gloss').innerHTML = h || '<dd>Kein Begriff gefunden.</dd>';
    }
    render(params.q);
    $('#gq').addEventListener('input', function (ev) { render(ev.target.value); });
    main.querySelectorAll('.letters a').forEach(function (a) {
      a.addEventListener('click', function (ev) { ev.preventDefault(); $('#gq').value = ''; render(''); var t = document.getElementById('L-' + a.dataset.l); if (t) t.scrollIntoView({ block: 'start' }); });
    });
  }

  /* ---------- Suche ---------- */
  var INDEX = SUBS.map(function (e) {
    var s = e.sub, parts = [s.title, e.topic.title, e.area.title];
    s.content.forEach(function (b) {
      if (b.p) parts.push(b.p); if (b.h) parts.push(b.h); if (b.ex) parts.push(b.ex); if (b.note) parts.push(b.note); if (b.warn) parts.push(b.warn);
      if (b.ul) parts = parts.concat(b.ul);
      if (b.rules) b.rules.forEach(function (r) { parts.push(r[0]); parts = parts.concat(r[1]); });
      if (b.calc) { parts.push(b.calc.title || ''); b.calc.rows.forEach(function (r) { parts.push(r.label); }); }
    });
    var c = s.card || {}; parts.push(c.title || '', c.merke || ''); parts = parts.concat(c.bullets || []);
    if (S.notes[s.id]) parts.push(S.notes[s.id]);
    var text = plain(parts.join(' \n '));
    return { e: e, text: text, low: norm(text) };
  });
  function viewSearch(q) {
    setNav(''); document.title = 'Suche – Immo Kaufmann';
    var words = norm(q).split(/\s+/).filter(Boolean);
    var hits = !words.length ? [] : INDEX.map(function (x) {
      if (!words.every(function (w) { return x.low.indexOf(w) >= 0; })) return null;
      var score = words.reduce(function (s, w) { return s + (norm(x.e.sub.title).indexOf(w) >= 0 ? 10 : 0) + (norm(x.e.topic.title).indexOf(w) >= 0 ? 3 : 0); }, 0);
      return { x: x, score: score };
    }).filter(Boolean).sort(function (a, b) { return b.score - a.score || a.x.e.idx - b.x.e.idx; });
    var gl = !words.length ? [] : GLOSSAR.filter(function (g) { return words.every(function (w) { return norm(g.term).indexOf(w) >= 0; }); }).slice(0, 5);
    var hl = function (t) {
      var h = esc(t); words.forEach(function (w) {
        if (w.length < 2) return;
        var re = new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ae/g, '(?:ae|ä)').replace(/oe/g, '(?:oe|ö)').replace(/ue/g, '(?:ue|ü)').replace(/ss/g, '(?:ss|ß)') + ')', 'gi');
        h = h.replace(re, '<mark>$1</mark>');
      }); return h;
    };
    var snip = function (x) {
      var lowRaw = x.text.toLowerCase(), i = -1;
      words.some(function (w) { i = lowRaw.indexOf(w); return i >= 0; });
      if (i < 0) i = 0;
      var a = Math.max(0, i - 50), t = x.text.slice(a, a + 140).replace(/\s+/g, ' ');
      return (a ? '… ' : '') + t + ' …';
    };
    main.innerHTML = '<div class="content"><div class="crumb"><a href="#/">Start</a> › Suche</div>' +
      '<h1>Suche</h1><p class="lead">' + (words.length ? hits.length + ' Treffer für „' + esc(q) + '“' : 'Gib oben ein Wort ein, z. B. „Kaution“ oder „Pause“.') + '</p>' +
      (gl.length ? '<dl class="gloss small">' + gl.map(function (g) { return '<dt>' + md(g.term) + '</dt><dd>' + md(g.def) + '</dd>'; }).join('') + '</dl>' : '') +
      '<div class="results">' + hits.slice(0, 60).map(function (h) {
        var e = h.x.e;
        return '<a href="#/s/' + esc(e.sub.id) + '"><div class="rp">' + areaLabel(e.area) + ' · ' + esc(e.topic.title) + '</div><div class="rt">' + hl(plain(e.sub.title)) + '</div><div class="rs">' + hl(snip(h.x)) + '</div></a>';
      }).join('') + '</div></div>';
  }

  /* ---------- Druck ---------- */
  function printCards(list, mode, noDialog, noNote) {
    var sheet = $('#sheet'), html = '', ch = function (e) { return cardHtml(e, !!noNote); };
    var per = mode === 'a4' ? 4 : mode === 'a7x8' ? 8 : 0;
    if (per) {
      for (var i = 0; i < list.length; i += per) html += '<div class="page">' + list.slice(i, i + per).map(ch).join('') + '</div>';
    } else html = list.map(ch).join('');
    sheet.innerHTML = html; applyCardMarks(sheet);
    document.body.classList.remove('p-a4', 'p-a6', 'p-a7', 'p-a7x8'); document.body.classList.add('p-' + mode);
    $('#page-size').textContent = '@page{size:' + ({ a4: 'A4 portrait', a6: '105mm 148mm', a7: '74mm 105mm', a7x8: 'A4 landscape' })[mode] + ';margin:0}';
    if (!noDialog) setTimeout(function () { window.print(); }, 60);
  }

  var FORMATS = [['a6', 'A6 einzeln'], ['a7', 'A7 einzeln (Spielkarte)'], ['a4', '4 × A6 auf A4'], ['a7x8', '8 × A7 auf A4 quer']];
  function viewPrintPreview(params) {
    setNav('druck'); document.title = 'Druckansicht – Immo Kaufmann';
    var m = FORMATS.some(function (f) { return f[0] === params.m; }) ? params.m : 'a6';
    var list = params.ids ? params.ids.split(',').map(function (id) { return BYID[id]; }).filter(function (e) { return e && e.type === 'sub'; })
      : scopeList(params.b || 'all').filter(function (e) { return !params.only || !isDone(e.sub.id); });
    var noNote = params.nn === '1', hasNotes = list.some(function (e) { return S.notes[e.sub.id]; });
    var base = '#/druckansicht?' + (params.ids ? 'ids=' + params.ids : 'b=' + (params.b || 'all') + (params.only ? '&only=1' : ''));
    var standalone = window.navigator.standalone === true || (window.matchMedia && matchMedia('(display-mode: standalone)').matches);
    var per = m === 'a4' ? 4 : m === 'a7x8' ? 8 : 1;
    main.innerHTML = '<div class="content"><div class="crumb"><a href="' + (params.ids && BYID[params.ids.split(',')[0]] ? '#/s/' + params.ids.split(',')[0] : '#/druck') + '">Zurück</a> › Druckansicht</div>' +
      '<h1>Druckansicht</h1><div class="fmt" role="group" aria-label="Format">' + FORMATS.map(function (f) {
        return '<a href="' + base + '&m=' + f[0] + (noNote ? '&nn=1' : '') + '"' + (f[0] === m ? ' class="on" aria-current="true"' : '') + '>' + f[1] + '</a>';
      }).join('') + '</div>' +
      (hasNotes ? '<label class="opt"><input type="checkbox" id="withnotes"' + (noNote ? '' : ' checked') + '> Meine Notizen mitdrucken</label>' : '') +
      '<p class="count">' + list.length + (list.length === 1 ? ' Karte' : ' Karten') + ' → ' + Math.ceil(list.length / per) + ' Blatt ' + ({ a6: 'A6', a7: 'A7', a4: 'A4', a7x8: 'A4 quer' })[m] + '</p>' +
      '<div class="actions"><button class="btn primary" id="doprint">Drucken / als PDF sichern</button></div>' +
      '<div class="hint printhint">Im Druckfenster: Größe auf 100 % lassen, Ränder „keine“, falls angeboten. Als PDF sichern: im Druckfenster auf Teilen tippen → „In Dateien sichern“.' +
      (standalone ? '<br><b>Öffnet sich kein Druckfenster?</b> In der App vom Home-Bildschirm kann das iPhone nicht immer drucken. Dann: <a href="' + esc(location.href) + '" target="_blank" rel="noopener">Druckansicht in Safari öffnen</a> und dort drucken.' : '') + '</div>' +
      '<div class="preview pv-' + m + '" id="preview"></div></div>';
    printCards(list, m, true, noNote);
    var pv = $('#preview'); pv.innerHTML = $('#sheet').innerHTML;
    var natural = { a6: 397, a7: 280, a4: 794, a7x8: 1119 }[m];
    pv.style.zoom = Math.min(1, (pv.parentNode.clientWidth - 2) / natural).toFixed(3);
    var wn = $('#withnotes'); if (wn) wn.addEventListener('change', function () { location.hash = base + '&m=' + m + (wn.checked ? '' : '&nn=1'); });
    $('#doprint').addEventListener('click', function () { printCards(list, m, false, noNote); });
  }
  function viewPrint(params) {
    setNav('druck'); document.title = 'Drucken – Immo Kaufmann';
    var sel = params.b || 'all';
    var opt = function (v, label) { return '<div class="opt"><input type="radio" name="b" id="b-' + v + '" value="' + v + '"' + (sel === v ? ' checked' : '') + '><label for="b-' + v + '">' + label + '</label></div>'; };
    main.innerHTML = '<div class="content"><div class="crumb"><a href="#/">Start</a> › Drucken</div><h1>Lernkarten drucken oder als PDF speichern</h1>' +
      '<p class="lead">Wähle Karten und Format. In der Druckansicht siehst du die Karten vorher und kannst sie drucken oder als PDF sichern.</p>' +
      '<fieldset><legend>Welche Karten?</legend>' + opt('all', 'Alle') + opt('star', 'Merkzettel') +
      AREAS.map(function (a) { return opt(a.id, a.year + '. Jahr · ' + areaLabel(a) + ': ' + md(a.title)); }).join('') +
      '<div class="opt"><input type="checkbox" id="only-open"><label for="only-open">Nur Karten, die noch nicht „gelernt“ sind</label></div></fieldset>' +
      '<fieldset><legend>Format</legend>' +
      '<div class="opt"><input type="radio" name="m" id="m-a4" value="a4" checked><label for="m-a4">4 Karten auf A4 zum Ausschneiden</label></div>' +
      '<div class="opt"><input type="radio" name="m" id="m-a6" value="a6"><label for="m-a6">Einzeln auf A6-Papier oder Karteikarten</label></div>' +
      '<div class="opt"><input type="radio" name="m" id="m-a7x8" value="a7x8"><label for="m-a7x8">Klein (A7, etwa Spielkarte): 8 Karten auf A4 quer zum Ausschneiden</label></div>' +
      '<div class="opt"><input type="radio" name="m" id="m-a7" value="a7"><label for="m-a7">Klein (A7) einzeln</label></div></fieldset>' +
      '<p class="count" id="count"></p><div class="actions"><button class="btn primary" id="go">Weiter zur Druckansicht</button></div></div>';
    function pick() {
      var b = (document.querySelector('input[name=b]:checked') || {}).value, only = $('#only-open').checked;
      return scopeList(b).filter(function (e) { return !only || !isDone(e.sub.id); });
    }
    function upd() {
      var n = pick().length, m = (document.querySelector('input[name=m]:checked') || {}).value;
      $('#count').textContent = n + ' Karten → ' + ({ a4: Math.ceil(n / 4) + ' Blatt A4', a6: n + ' Blatt A6', a7x8: Math.ceil(n / 8) + ' Blatt A4 quer', a7: n + ' Blatt A7' })[m];
    }
    main.querySelectorAll('input').forEach(function (i) { i.addEventListener('change', upd); }); upd();
    $('#go').addEventListener('click', function () {
      if (!pick().length) return;
      location.hash = '#/druckansicht?b=' + (document.querySelector('input[name=b]:checked') || {}).value + ($('#only-open').checked ? '&only=1' : '') + '&m=' + document.querySelector('input[name=m]:checked').value;
    });
  }

  /* ---------- Router ---------- */
  var navDepth = 0;
  function parentOf(h) {
    var m = h.match(/^s\/(.+)$/); if (m && BYID[m[1]]) return '#/b/' + BYID[m[1]].area.id;
    if (/^fach/.test(h)) return '#/abfragen';
    return '#/';
  }
  function route() {
    var h = location.hash.replace(/^#\/?/, ''), q = '', params = {};
    document.body.classList.remove('marking'); var mbar = $('#markbar'); if (mbar) mbar.hidden = true;
    var bb = $('#backbtn'), atHome = (h === '' || h === '/'); if (bb) bb.hidden = atHome; document.body.classList.toggle('has-back', !atHome);
    if (/^L-/.test(h)) return; // Sprungmarke im Lexikon
    var qi = h.indexOf('?'); if (qi >= 0) { q = h.slice(qi + 1); h = h.slice(0, qi); q.split('&').forEach(function (p) { var kv = p.split('='); params[decodeURIComponent(kv[0])] = decodeURIComponent((kv[1] || '').replace(/\+/g, ' ')); }); }
    var p = h.split('/');
    if (p[0] === 'b') viewArea(p[1]);
    else if (p[0] === 's') viewSub(p[1]);
    else if (p[0] === 'suche') { viewSearch(params.q || ''); var si = $('#q'); if (si && document.activeElement !== si) si.value = params.q || ''; }
    else if (p[0] === 'druck') viewPrint(params);
    else if (p[0] === 'druckansicht') viewPrintPreview(params);
    else if (p[0] === 'druckvorschau') { viewHome(); printCards(scopeList(params.b || 'all'), ['a6', 'a7', 'a7x8'].indexOf(params.m) >= 0 ? params.m : 'a4', true); }
    else if (p[0] === 'merken') viewStars();
    else if (p[0] === 'abfragen') viewQuiz(params);
    else if (p[0] === 'fach') viewFach(params);
    else if (p[0] === 'az') viewAZ(params);
    else if (p[0] === 'pruefung') viewExam(params);
    else viewHome();
    if (p[0] !== 'suche') { window.scrollTo(0, 0); var qi2 = $('#q'); if (qi2 && document.activeElement !== qi2) qi2.value = ''; }
  }
  applyTheme();
  $('#themebtn').addEventListener('click', function () {
    var t = getPref('theme', 'auto'); setPref('theme', THEMES[(THEMES.indexOf(t) + 1) % 3]); applyTheme();
  });
  var t;
  $('#q').addEventListener('input', function (ev) {
    clearTimeout(t); var v = ev.target.value;
    t = setTimeout(function () { var target = '#/suche?q=' + encodeURIComponent(v); if (location.hash !== target) history.replaceState(null, '', target); route(); }, 150);
  });
  $('#searchform').addEventListener('submit', function (ev) { ev.preventDefault(); $('#q').blur(); });
  window.addEventListener('hashchange', function () { navDepth++; route(); });
  $('#backbtn').addEventListener('click', function () {
    if (navDepth > 0) { navDepth -= 2; history.back(); }
    else location.hash = parentOf(location.hash.replace(/^#\/?/, '').split('?')[0]);
  });
  window.addEventListener('afterprint', function () { document.body.classList.remove('p-a4', 'p-a6', 'p-a7', 'p-a7x8'); });
  route();

  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }
  window.__IMMO_DEBUG = { SUBS: SUBS, cardHtml: cardHtml, printCards: printCards };
})();
