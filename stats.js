/* Immo Kaufmann – Lernstatistik (vorbereitet, ABGESCHALTET bis zur Freigabe).
   Solange CONFIG.url leer ist, zählt die App nur lokal und sendet nichts.
   Ziel nach Freigabe: gemeinsames Supabase-Projekt (Frankfurt), Tabelle immo_tage (siehe supabase-schema-gemeinsam.sql). */
(function () {
  'use strict';
  var CONFIG = { url: 'https://zwcdovslbdoebqyhvcfa.supabase.co', key: 'sb_publishable_cLNOebMImh9Ai4j5m_K-YQ_wpGm4mge', table: 'immo_tage' }; // nach Freigabe: Projekt-URL und öffentlicher (anon) Schlüssel
  var KEY = 'immo-kaufmann-stats-v1';
  var D;
  try { D = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { D = null; }
  if (!D) D = { days: {}, nick: '', consent: false, parents: false, session: null, lastSync: 0, device: '' };
  if (!D.device) D.device = (/iPhone/.test(navigator.userAgent) ? 'iPhone' : /iPad|Macintosh/.test(navigator.userAgent) && 'ontouchend' in document ? 'iPad' : /Android/.test(navigator.userAgent) ? 'Android' : 'Computer');
  function save() { try { localStorage.setItem(KEY, JSON.stringify(D)); } catch (e) {} }
  function z(n) { return (n < 10 ? '0' : '') + n; }
  function today() { var d = new Date(); return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()); }
  function day(k) { return D.days[k] || (D.days[k] = { seconds: 0, cards_learned: 0, quiz_right: 0, quiz_wrong: 0, exam_right: 0, exam_wrong: 0 }); }

  /* Aktive Lernzeit: nur wenn die App sichtbar ist und in den letzten 2 Minuten bedient wurde */
  var lastInput = Date.now();
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function (ev) { window.addEventListener(ev, function () { lastInput = Date.now(); }, { passive: true }); });
  setInterval(function () {
    if (document.visibilityState === 'visible' && Date.now() - lastInput < 120000) { day(today()).seconds += 15; save(); }
  }, 15000);
  window.addEventListener('immo:stat', function (ev) { var k = ev.detail; var d = day(today()); if (k in d) { d[k]++; save(); } });

  function streak() {
    var n = 0, d = new Date();
    for (;;) { var k = d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()), x = D.days[k];
      if (x && (x.seconds >= 60 || x.quiz_right + x.quiz_wrong + x.exam_right + x.exam_wrong + x.cards_learned > 0)) { n++; d.setDate(d.getDate() - 1); } else break; }
    return n;
  }
  function rows() {
    var src = window.ImmoStatsSource ? window.ImmoStatsSource() : { due: 0, extra: null }, t = today(), out = [];
    Object.keys(D.days).sort().slice(-7).forEach(function (k) {
      var x = D.days[k];
      out.push({ nick: D.nick, device: D.device, day: k, minutes: Math.round(x.seconds / 60), cards_learned: x.cards_learned, quiz_right: x.quiz_right, quiz_wrong: x.quiz_wrong,
        exam_right: x.exam_right, exam_wrong: x.exam_wrong, due: k === t ? src.due : 0, streak: k === t ? streak() : 0, last_seen: new Date().toISOString(), extra: k === t ? src.extra : null });
    });
    return out;
  }
  function enabled() { return !!(CONFIG.url && CONFIG.key); }
  function api(path, opt) {
    opt = opt || {}; var h = { apikey: CONFIG.key, 'Content-Type': 'application/json' };
    if (D.session && D.session.access_token) h.Authorization = 'Bearer ' + D.session.access_token;
    Object.keys(opt.headers || {}).forEach(function (k) { h[k] = opt.headers[k]; });
    return fetch(CONFIG.url + path, { method: opt.method || 'POST', headers: h, body: opt.body ? JSON.stringify(opt.body) : undefined });
  }
  function ensureSession() {
    var s = D.session;
    if (s && s.expires_at && s.expires_at * 1000 > Date.now() + 60000) return Promise.resolve();
    var p = s && s.refresh_token ? api('/auth/v1/token?grant_type=refresh_token', { body: { refresh_token: s.refresh_token } }) : api('/auth/v1/signup', { body: { data: { nick: D.nick } } });
    return p.then(function (r) { if (!r.ok) throw new Error('auth ' + r.status); return r.json(); })
      .then(function (j) { D.session = { access_token: j.access_token, refresh_token: j.refresh_token, expires_at: j.expires_at || Math.floor(Date.now() / 1000) + (j.expires_in || 3600), user_id: j.user && j.user.id }; save(); });
  }
  function sync(force) {
    if (!enabled() || !D.consent || !D.nick || !navigator.onLine) return Promise.resolve(false);
    if (!force && Date.now() - D.lastSync < 3600000) return Promise.resolve(false); // höchstens stündlich
    return ensureSession().then(function () {
      return api('/rest/v1/' + CONFIG.table + '?on_conflict=user_id,day', { headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }, body: rows() });
    }).then(function (r) { if (!r.ok) throw new Error('rest ' + r.status); D.lastSync = Date.now(); save(); return true; })
      .catch(function () { return false; });
  }
  function eraseAll() {
    var done = function () { D = { days: {}, nick: '', consent: false, parents: false, session: null, lastSync: 0, device: D.device }; save(); };
    if (!enabled() || !D.session) { done(); return Promise.resolve(); }
    return ensureSession().then(function () { return api('/rest/v1/rpc/alles_loeschen', { body: {} }); }).then(done, done);
  }
  window.addEventListener('online', function () { sync(); });
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') sync(); });
  setTimeout(function () { sync(); }, 5000);

  /* Bereich auf der Startseite – erscheint erst, wenn die Statistik freigeschaltet ist */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function homeHtml() {
    if (!enabled()) return '';
    if (!D.consent) return '<div class="section-title">Lernstatistik</div><div class="hint stat-box"><p>Wenn du magst, sieht deine Familie, wie viel du lernst: Lernzeit pro Tag, gelernte Karten, Treffer bei Abfragen und Übungsfragen. Notizen, Markierungen, Stundenplan und Termine werden <b>nicht</b> gesendet.</p>' +
      '<label>Spitzname<input id="st-nick" class="gq" maxlength="30" placeholder="z. B. Lina"></label>' +
      '<label class="opt"><input type="checkbox" id="st-ok"> Ich bin einverstanden.</label><label class="opt"><input type="checkbox" id="st-par"> Ich bin unter 18: Meine Eltern sind auch einverstanden.</label>' +
      '<div class="actions"><button class="btn primary" id="st-go">Statistik einschalten</button></div><small class="muted">Löschen geht jederzeit mit einem Tipp. Tageswerte werden nach 12 Monaten automatisch gelöscht.</small></div>';
    return '<div class="section-title">Lernstatistik</div><div class="hint stat-box">Eingeschaltet als <b>' + esc(D.nick) + '</b> · zuletzt gesendet: ' + (D.lastSync ? new Date(D.lastSync).toLocaleString('de-DE') : 'noch nicht') +
      '<div class="actions"><button class="btn" id="st-off">Abmelden und alles löschen</button></div></div>';
  }
  function bindHome(rerender) {
    var go = document.getElementById('st-go');
    if (go) go.addEventListener('click', function () {
      var n = document.getElementById('st-nick').value.trim();
      if (!n) { document.getElementById('st-nick').focus(); return; }
      if (!document.getElementById('st-ok').checked) { alert('Bitte bestätige, dass du einverstanden bist.'); return; }
      D.nick = n; D.consent = true; D.parents = document.getElementById('st-par').checked; save(); sync(true).then(rerender);
    });
    var off = document.getElementById('st-off');
    if (off) off.addEventListener('click', function () { if (confirm('Statistik ausschalten und alle gesendeten Daten löschen?')) eraseAll().then(rerender); });
  }
  window.ImmoStats = { homeHtml: homeHtml, bindHome: bindHome, sync: sync, local: function () { return D; }, enabled: enabled, rows: rows };
})();
