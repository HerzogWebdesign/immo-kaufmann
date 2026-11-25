window.IMMO = window.IMMO || [];
window.IMMO.push({
  id: "lf1",
  kind: "lf",
  nr: 1,
  title: "Die Berufsausbildung selbstständig mitgestalten",
  short: "LF 1 · Berufsausbildung",
  hours: "60 Stunden (Richtwert)",
  intro: "Hier lernst du, wie deine Ausbildung aufgebaut ist und welche Rechte und Pflichten du hast. Du verstehst deine Abrechnung und weißt, wer dich im Betrieb vertritt.",
  source: "KMK-Rahmenlehrplan 2006, Lernfeld 1",
  topics: [

    { id: "lf1-1", title: "Duale Ausbildung", subs: [

      { id: "lf1-1-1", title: "Zwei Lernorte: Betrieb und Berufsschule",
        content: [
          { p: "Deine Ausbildung heißt **dual**. Das bedeutet: Du lernst an zwei Orten. Im Betrieb lernst du die Praxis. In der Berufsschule lernst du Theorie und Zusammenhänge." },
          { h: "Die zwei Lernorte" },
          { rules: [
            ["Betrieb", ["Arbeit an echten Fällen", "Grundlage: Ausbildungsordnung", "Recht: Berufsbildungsgesetz (BBiG)"]],
            ["Berufsschule", ["Unterricht in Lernfeldern", "Grundlage: Rahmenlehrplan der KMK", "Recht: Schulgesetz des Landes"]]
          ] },
          { p: "Die **KMK** ist die Kultusministerkonferenz der Länder. Sie hat 2006 den Rahmenlehrplan für deinen Beruf beschlossen. Ausbildungsordnung und Rahmenlehrplan sind aufeinander abgestimmt." },
          { ex: "Lea lernt in der Berufsschule in Waren, wie ein Mietvertrag aufgebaut ist. In ihrem Wohnungsunternehmen in Neubrandenburg bereitet sie danach einen echten Vertrag mit vor." },
          { note: "Die Zeit in der Berufsschule zählt zur Ausbildung. Dein Betrieb muss dich dafür freistellen (§ 15 BBiG)." },
          { warn: "Ob du Blockunterricht oder einzelne Schultage hast, legt deine Schule fest. Schau in deinen Stundenplan." }
        ],
        card: {
          title: "Zwei Lernorte",
          bullets: [
            "dual = zwei Lernorte",
            "Betrieb → Praxis",
            "Berufsschule → Theorie",
            "Betrieb: Ausbildungsordnung",
            "Schule: KMK-Rahmenlehrplan",
            "Betrieb stellt für Schule frei"
          ],
          merke: "Merke: Betrieb und Schule bilden dich gemeinsam aus.",
          quelle: "BBiG §§ 2, 15 · KMK-RLP LF 1"
        },
        src: "Berufsbildungsgesetz §§ 2, 15; KMK-Rahmenlehrplan Immobilienkaufmann/Immobilienkauffrau vom 13.01.2006; Rahmenlehrplan Lernfeld 1 („Ausbildungsordnung“)."
      },

      { id: "lf1-1-2", title: "Wer macht was? Azubi, Betrieb, Schule, IHK",
        content: [
          { p: "An deiner Ausbildung sind vier Stellen beteiligt. Jede hat eine eigene Aufgabe." },
          { rules: [
            ["Du (Azubi)", ["lernst im Betrieb", "besuchst die Berufsschule", "führst den Ausbildungsnachweis"]],
            ["Betrieb", ["schließt den Ausbildungsvertrag", "bildet nach Plan aus", "zahlt die Vergütung"]],
            ["Berufsschule", ["unterrichtet nach Lernfeldern", "stellt Zeugnisse aus"]],
            ["IHK", ["trägt den Vertrag ins Verzeichnis ein", "berät bei Problemen", "nimmt die Prüfungen ab"]]
          ] },
          { p: "Die **IHK** (Industrie- und Handelskammer) ist für deinen Beruf die **zuständige Stelle**. Zuständig ist die IHK, in deren Bezirk dein Betrieb liegt." },
          { ex: "Frau K. bildet in einer Hausverwaltung in Rostock aus. Sie schickt deinen Vertrag an die IHK. Die IHK trägt ihn in das Verzeichnis der Ausbildungsverhältnisse ein." },
          { note: "Bei Streit mit dem Betrieb hilft die **Ausbildungsberatung** der IHK. Die Beratung ist für dich kostenlos." }
        ],
        card: {
          title: "Wer macht was?",
          rules: [
            ["Azubi", ["lernen und mitarbeiten", "Ausbildungsnachweis führen"]],
            ["Betrieb", ["planmäßig ausbilden", "Vergütung zahlen"]],
            ["Schule", ["Theorie in Lernfeldern"]],
            ["IHK", ["Vertrag eintragen", "beraten", "prüfen"]]
          ],
          merke: "Merke: Die IHK ist die zuständige Stelle – auch bei Problemen.",
          quelle: "BBiG §§ 13, 14, 34, 71, 76 · RLP LF 1"
        },
        src: "Berufsbildungsgesetz §§ 13, 14, 34–36, 71, 76; Rahmenlehrplan Lernfeld 1 (Aufgaben der Beteiligten im dualen System)."
      },

      { id: "lf1-1-3", title: "Ausbildungsordnung und Ausbildungsplan",
        content: [
          { p: "Für jeden anerkannten Beruf gibt es eine **Ausbildungsordnung**. Das ist eine Verordnung des Bundes. Für dich gilt die Ausbildungsverordnung Immobilienkaufmann/Immobilienkauffrau von 2006." },
          { h: "Was die Ordnung festlegt" },
          { ul: [
            "Der Beruf ist staatlich anerkannt.",
            "Die Ausbildung dauert **3 Jahre**.",
            "Das **Ausbildungsberufsbild** nennt alle Mindestinhalte.",
            "Der **Ausbildungsrahmenplan** ordnet die Inhalte zeitlich.",
            "Du hast **2 von 5 Wahlqualifikationen**.",
            "Die **Prüfungen** sind festgelegt."
          ] },
          { rules: [
            ["Wahl: 2 aus 5", ["Steuerung und Kontrolle im Unternehmen", "Gebäudemanagement", "Maklergeschäfte", "Bauprojektmanagement", "Wohnungseigentumsverwaltung"]]
          ] },
          { p: "Aus dem Rahmenplan macht dein Betrieb deinen **Ausbildungsplan**. Darin steht, wann du was lernst." },
          { p: "Du führst einen **Ausbildungsnachweis** (früher: Berichtsheft). Er ist schriftlich oder elektronisch. Dein Betrieb sieht ihn regelmäßig durch." },
          { ex: "Tom lernt bei einer Wohnungsgenossenschaft in Schwerin. In seinem Vertrag stehen die Wahlqualifikationen Gebäudemanagement und Wohnungseigentumsverwaltung." },
          { note: "Ohne Ausbildungsnachweis wirst du nicht zur Abschlussprüfung zugelassen (§ 43 BBiG)." }
        ],
        card: {
          title: "Ausbildungsordnung",
          bullets: [
            "Verordnung von 2006",
            "Dauer: 3 Jahre",
            "Rahmenplan → was und wann",
            "Betrieb → eigener Ausbildungsplan",
            "2 von 5 Wahlqualifikationen",
            "Wahl steht im Vertrag",
            "Ausbildungsnachweis führen"
          ],
          merke: "Merke: Ohne Ausbildungsnachweis keine Zulassung zur Abschlussprüfung.",
          quelle: "ImmobKfmAusbV §§ 2–7 · BBiG §§ 5, 13, 43"
        },
        src: "Verordnung über die Berufsausbildung zum Immobilienkaufmann/zur Immobilienkauffrau (ImmobKfmAusbV) vom 14.02.2006 §§ 1–7; BBiG §§ 4, 5, 13 Nr. 7, 43; Rahmenlehrplan Lernfeld 1 („Ausbildungsordnung“)."
      }
    ]},

    { id: "lf1-2", title: "Ausbildungsvertrag", subs: [

      { id: "lf1-2-1", title: "Was im Vertrag stehen muss",
        content: [
          { p: "Vor dem Start schließt du mit dem Betrieb einen **Berufsausbildungsvertrag**. Bist du unter 18, unterschreiben auch deine Eltern. Sie sind deine **gesetzlichen Vertreter**." },
          { p: "Der Betrieb hält den wesentlichen Inhalt in **Textform** fest. Textform heißt: lesbar, z. B. auf Papier oder als PDF. Das muss spätestens vor Beginn der Ausbildung geschehen." },
          { h: "Das muss drinstehen" },
          { ul: [
            "Name und Anschrift von dir und vom Betrieb",
            "Beruf und Ausbildungsziel",
            "Beginn und Dauer der Ausbildung",
            "Ausbildungsstätte und Maßnahmen außerhalb",
            "tägliche Ausbildungszeit",
            "Dauer der Probezeit",
            "Höhe der Vergütung",
            "Ausgleich von Überstunden",
            "Dauer des Urlaubs",
            "Voraussetzungen der Kündigung",
            "Hinweis auf Tarifverträge und Betriebsvereinbarungen"
          ] },
          { ex: "Mia beginnt am 1. August in einem Maklerbüro in Rostock. In ihrem Vertrag stehen 4 Monate Probezeit, 7,5 Stunden am Tag und ihre Vergütung für jedes Jahr." },
          { note: "Du bekommst den Vertrag ausgehändigt oder übermittelt. Der Betrieb beantragt die Eintragung bei der IHK." }
        ],
        card: {
          title: "Ausbildungsvertrag",
          rules: [
            ["Form", ["Textform (Papier oder PDF)", "spätestens vor Beginn"]],
            ["Inhalt", ["Beruf, Beginn, Dauer", "Ort und tägliche Zeit", "Probezeit", "Vergütung", "Urlaub", "Kündigung"]],
            ["Unter 18", ["Eltern unterschreiben mit"]]
          ],
          merke: "Merke: Der Vertrag geht zur IHK und wird dort eingetragen.",
          quelle: "BBiG §§ 10, 11, 36"
        },
        src: "Berufsbildungsgesetz §§ 10, 11 (Vertragsniederschrift in Textform), 35, 36; Rahmenlehrplan Lernfeld 1 („Ausbildungsvertrag“)."
      },

      { id: "lf1-2-2", title: "Probezeit, Kündigung, Ende der Ausbildung",
        content: [
          { p: "Jede Ausbildung beginnt mit einer **Probezeit**. Du und der Betrieb prüfen, ob ihr zusammenpasst." },
          { rules: [
            ["Probezeit", ["mindestens 1 Monat", "höchstens 4 Monate"]],
            ["Kündigung in der Probezeit", ["jederzeit", "ohne Frist", "ohne Grund"]],
            ["Kündigung danach: Betrieb", ["nur aus wichtigem Grund", "ohne Frist"]],
            ["Kündigung danach: du", ["aus wichtigem Grund ohne Frist", "bei Berufswechsel mit 4 Wochen Frist"]]
          ] },
          { p: "Jede Kündigung muss **schriftlich** sein. Nach der Probezeit müssen die Gründe darin stehen." },
          { calc: { title: "Rechenbeispiel: Kündigung wegen Berufswechsel", rows: [
            { label: "Kündigung geht dem Betrieb zu", n: "03.03.2026" },
            { op: "+", label: "Kündigungsfrist", n: "4 Wochen" },
            { op: "=", label: "letzter Ausbildungstag", n: "31.03.2026", t: "sum" }
          ] } },
          { h: "Ende der Ausbildung" },
          { ul: [
            "Normal endet die Ausbildung mit Ablauf der Ausbildungszeit.",
            "Bestehst du die Prüfung früher, endet sie mit Bekanntgabe des Ergebnisses.",
            "Fällst du durch, verlängert sie sich auf deinen Wunsch bis zur Wiederholungsprüfung.",
            "Die Verlängerung dauert höchstens 1 Jahr.",
            "Arbeitest du danach einfach weiter, hast du einen unbefristeten Arbeitsvertrag."
          ] },
          { note: "Bist du unter 18, brauchst du für deine Kündigung die Zustimmung deiner Eltern. Kündigt der Betrieb, muss die Kündigung deinen Eltern zugehen." }
        ],
        card: {
          title: "Probezeit und Kündigung",
          rules: [
            ["Probezeit", ["1 bis 4 Monate", "jederzeit ohne Frist kündbar"]],
            ["Danach", ["Betrieb: nur wichtiger Grund", "Azubi: neuer Beruf → 4 Wochen"]],
            ["Form", ["schriftlich, mit Gründen"]],
            ["Ende", ["Ablauf der Ausbildungszeit", "oder bestandene Prüfung"]]
          ],
          calc: { title: "Rechnung: Frist", rows: [
            { label: "Kündigung zugegangen", n: "03.03.2026" },
            { op: "+", label: "Frist", n: "4 Wochen" },
            { op: "=", label: "letzter Tag", n: "31.03.2026", t: "sum" }
          ] },
          merke: "Merke: Nach der Probezeit kündigt der Betrieb nur aus wichtigem Grund.",
          quelle: "BBiG §§ 20, 21, 22, 24"
        },
        src: "Berufsbildungsgesetz §§ 20 (Probezeit), 21 (Beendigung), 22 (Kündigung), 24 (Weiterarbeit); BGB §§ 107, 131, 188 Abs. 2; Rahmenlehrplan Lernfeld 1 („Ausbildungsvertrag“)."
      },

      { id: "lf1-2-3", title: "Deine Rechte und Pflichten – die des Betriebs",
        content: [
          { p: "Aus dem Vertrag und dem BBiG folgen Pflichten für beide Seiten. Was für dich Pflicht ist, ist oft ein Recht des Betriebs. Und umgekehrt." },
          { rules: [
            ["Deine Pflichten", ["sorgfältig lernen und mitarbeiten", "Berufsschule besuchen", "Weisungen befolgen", "Betriebsordnung beachten", "Geschäftsgeheimnisse wahren", "Ausbildungsnachweis führen"]],
            ["Pflichten des Betriebs", ["planmäßig ausbilden", "Ausbildungsmittel kostenlos stellen", "für die Berufsschule freistellen", "nur Aufgaben zum Ausbildungszweck geben", "Vergütung zahlen", "am Ende ein Zeugnis ausstellen"]]
          ] },
          { p: "Die Vergütung muss **angemessen** sein und jedes Jahr steigen. Der Betrieb zahlt sie spätestens am letzten Arbeitstag des Monats." },
          { h: "Mindestvergütung für Ausbildungsbeginn 2026" },
          { rules: [
            ["monatlich", ["1. Jahr → 724,00 €", "2. Jahr → 854,00 €", "3. Jahr → 977,00 €"]]
          ] },
          { note: "Gilt für deinen Betrieb ein Tarifvertrag, richtet sich die Vergütung nach dem Tarif." },
          { ex: "Eine Freundin fragt Nele nach der Adresse einer Mieterin. Nele sagt nichts. Mieterdaten sind Geschäftsgeheimnisse und geschützt." }
        ],
        card: {
          title: "Rechte und Pflichten",
          rules: [
            ["Du", ["lernen, Weisungen folgen", "Berufsschule besuchen", "Nachweis führen", "Interna für dich behalten"]],
            ["Betrieb", ["planmäßig ausbilden", "Mittel kostenlos stellen", "Vergütung zahlen"]],
            ["Minimum", ["1. Jahr 2026: 724,00 €"]]
          ],
          merke: "Merke: Du bekommst nur Aufgaben, die deiner Ausbildung dienen.",
          quelle: "BBiG §§ 13, 14, 16–18"
        },
        src: "Berufsbildungsgesetz §§ 13, 14, 15, 16, 17, 18; Bekanntmachung zur Mindestvergütung für Berufsausbildungen 2026 (BBiMindVergFBek 2026, BGBl. 2025 I Nr. 235), geprüft auf gesetze-im-internet.de am 25.11.2026; Rahmenlehrplan Lernfeld 1 (Rechte und Pflichten)."
      },

      { id: "lf1-2-4", title: "Prüfungen in der Ausbildung",
        content: [
          { p: "Deine Ausbildungsordnung von 2006 sieht **zwei Prüfungen** vor: die Zwischenprüfung und die Abschlussprüfung. Beide nimmt die IHK ab." },
          { h: "Zwischenprüfung" },
          { rules: [
            ["Zeitpunkt", ["Mitte des 2. Ausbildungsjahres"]],
            ["Form", ["schriftlich", "höchstens 120 Minuten"]],
            ["Gebiete", ["Ausbildungsbetrieb und Immobilienmarkt", "Mietobjekte und Immobilienvermittlung", "Wirtschafts- und Sozialkunde"]]
          ] },
          { p: "Die Zwischenprüfung zeigt deinen Stand. Sie zählt nicht für die Abschlussnote. Teilnehmen musst du trotzdem: Sonst wirst du nicht zur Abschlussprüfung zugelassen." },
          { h: "Abschlussprüfung" },
          { rules: [
            ["Immobilienwirtschaft", ["schriftlich, höchstens 180 Minuten", "zählt doppelt"]],
            ["Kaufmännische Steuerung, Dokumentation", ["schriftlich, höchstens 90 Minuten"]],
            ["Wirtschafts- und Sozialkunde", ["schriftlich, höchstens 90 Minuten"]],
            ["Kundengespräch, Teambesprechung", ["mündlich", "höchstens 20 Minuten Vorbereitung", "höchstens 30 Minuten Gespräch", "Thema aus einer Wahlqualifikation"]]
          ] },
          { calc: { title: "Rechenbeispiel: Gesamtergebnis (ausgedachte Punkte)", rows: [
            { label: "Immobilienwirtschaft: 70 Punkte", f: "× 2", n: "140 P." },
            { op: "+", label: "Kaufmännische Steuerung", n: "60 P." },
            { op: "+", label: "Wirtschafts- und Sozialkunde", n: "80 P." },
            { op: "+", label: "Kundengespräch", n: "75 P." },
            { op: "=", label: "Summe (5 Anteile)", n: "355 P.", t: "sub" },
            { op: ":", label: "Anteile", n: "5" },
            { op: "=", label: "Gesamtergebnis", n: "71 P.", t: "sum" }
          ] } },
          { ul: [
            "Bestanden: Gesamtergebnis mindestens „ausreichend“.",
            "Bestanden: mindestens 2 der 3 schriftlichen Bereiche „ausreichend“.",
            "Bestanden: Kundengespräch mindestens „ausreichend“.",
            "Nicht bestanden: ein Bereich „ungenügend“."
          ] },
          { note: "Hast du in höchstens zwei schriftlichen Bereichen „mangelhaft“, kann eine mündliche **Ergänzungsprüfung** (ca. 15 Minuten) helfen. Du wählst den Bereich. Schriftlich zählt dann doppelt, mündlich einfach." }
        ],
        card: {
          title: "Prüfungen",
          rules: [
            ["Zwischen", ["Mitte 2. Ausbildungsjahr", "schriftlich, max. 120 min"]],
            ["Abschluss", ["Immobilienwirtschaft 180 min", "Steuerung/Dokumentation 90 min", "WiSo 90 min", "Kundengespräch mündl. 30 min"]],
            ["Gewicht", ["Immobilienwirtschaft × 2"]],
            ["Bestehen", ["Gesamt mind. „ausreichend“", "kein Bereich „ungenügend“"]]
          ],
          merke: "Merke: Die Zwischenprüfung zählt nicht zur Note, ist aber Pflicht.",
          quelle: "ImmobKfmAusbV §§ 8, 9 · BBiG § 43"
        },
        src: "ImmobKfmAusbV vom 14.02.2006 § 8 (Zwischenprüfung) und § 9 (Abschlussprüfung), geprüft auf gesetze-im-internet.de/immobkfmausbv am 25.11.2026; BBiG §§ 43, 48; Rahmenlehrplan Lernfeld 1."
      }
    ]},

    { id: "lf1-3", title: "Schutzgesetze", subs: [

      { id: "lf1-3-1", title: "Jugendarbeitsschutz (unter 18)",
        content: [
          { p: "Bist du noch keine 18, gilt das **Jugendarbeitsschutzgesetz (JArbSchG)**. Es schützt deine Gesundheit und deine Freizeit. Dein Betrieb muss sich daran halten." },
          { h: "Die wichtigsten Regeln" },
          { ul: [
            "Höchstens **8 Stunden am Tag**.",
            "Höchstens **40 Stunden in der Woche**.",
            "Nur an **5 Tagen** pro Woche arbeiten."
          ] },
          { rules: [
            ["Pausen", ["mehr als 4,5 Stunden Arbeit → 30 Minuten", "mehr als 6 Stunden Arbeit → 60 Minuten"]]
          ] },
          { ul: [
            "Zwischen zwei Arbeitstagen mindestens **12 Stunden frei**.",
            "Keine Arbeit zwischen **20 und 6 Uhr**.",
            "**Berufsschule:** Ein Schultag mit mehr als 5 Unterrichtsstunden zählt einmal pro Woche wie 8 Stunden Arbeit. Danach musst du nicht mehr in den Betrieb.",
            "**Urlaub:** Bist du zu Beginn des Jahres noch keine 18, hast du mindestens 25 Werktage."
          ] },
          { calc: { title: "Rechenbeispiel: deine Woche", rows: [
            { label: "Montag Berufsschule (6 Unterrichtsstunden)", f: "angerechnet", n: "8 h" },
            { op: "+", label: "Dienstag bis Freitag im Betrieb: 4 Tage", f: "× 8 h", n: "32 h" },
            { op: "=", label: "Arbeitszeit der Woche", n: "40 h", t: "sum" }
          ] } },
          { ex: "Die Woche ist damit voll. Bittet dich jemand, am Montag nach der Schule noch Schlüssel zu übergeben, musst du das nicht." },
          { note: "Deine Berufsschule und dein Ausbildungsvertrag können Einzelheiten genauer regeln. Frag bei Unklarheit die Ausbildungsberatung der IHK." }
        ],
        card: {
          title: "Jugendarbeitsschutz (unter 18)",
          rules: [
            ["Arbeit", ["max. 8 h am Tag", "max. 40 h in der Woche", "max. 5 Tage in der Woche"]],
            ["Pause", ["über 4,5 h Arbeit → 30 min", "über 6 h Arbeit → 60 min"]],
            ["Ruhe", ["12 h zwischen 2 Arbeitstagen"]],
            ["Nacht", ["keine Arbeit von 20 bis 6 Uhr"]],
            ["Urlaub", ["mit 17: mind. 25 Werktage"]]
          ],
          calc: { title: "Rechnung: Woche", rows: [
            { label: "Mo Schule (über 5 Std.)", n: "8 h" },
            { op: "+", label: "Di–Fr Betrieb: 4", f: "× 8 h", n: "32 h" },
            { op: "=", label: "Woche", n: "40 h", t: "sum" }
          ] },
          merke: "Merke: Gesetz schützt Gesundheit und Freizeit – gilt bis zum 18. Geburtstag.",
          quelle: "JArbSchG §§ 8, 9, 11, 13, 14, 15, 19 · RLP LF 1"
        },
        src: "Jugendarbeitsschutzgesetz §§ 8, 9, 11, 13, 14, 15, 19; Rahmenlehrplan Lernfeld 1 („Jugendarbeitsschutz“). Inhalt aus der freigegebenen Musterkarte 2."
      },

      { id: "lf1-3-2", title: "Mutterschutz",
        content: [
          { p: "Bist du schwanger, schützt dich das **Mutterschutzgesetz (MuSchG)**. Es gilt ausdrücklich auch für Auszubildende. Es schützt deine Gesundheit und die deines Kindes." },
          { p: "Sag deinem Betrieb früh Bescheid. Erst dann kann er dich schützen. Der Betrieb informiert die Aufsichtsbehörde." },
          { rules: [
            ["Vor der Geburt", ["6 Wochen Schutzfrist", "Arbeit nur, wenn du es ausdrücklich willst"]],
            ["Nach der Geburt", ["8 Wochen Beschäftigungsverbot", "12 Wochen bei Früh- oder Mehrlingsgeburt"]],
            ["Kündigung", ["verboten während der Schwangerschaft", "verboten bis 4 Monate nach der Geburt"]],
            ["Arbeitszeit", ["grundsätzlich keine Arbeit von 20 bis 6 Uhr", "grundsätzlich keine Sonn- und Feiertagsarbeit", "unter 18: höchstens 8 Stunden am Tag"]]
          ] },
          { calc: { title: "Rechenbeispiel: Dauer des Mutterschutzes", rows: [
            { label: "Schutzfrist vor der Geburt", n: "6 Wochen" },
            { op: "+", label: "Schutzfrist nach der Geburt", n: "8 Wochen" },
            { op: "=", label: "Mutterschutz gesamt", n: "14 Wochen", t: "sum" }
          ] } },
          { p: "Seit Juni 2025 gibt es Schutzfristen auch nach einer **Fehlgeburt** ab der 13. Schwangerschaftswoche. Du darfst trotzdem arbeiten, wenn du das ausdrücklich möchtest." },
          { rules: [
            ["Fehlgeburt", ["ab 13. Woche → bis 2 Wochen", "ab 17. Woche → bis 6 Wochen", "ab 20. Woche → bis 8 Wochen"]]
          ] },
          { ex: "Frau K. ist Azubi in einer Hausverwaltung in Waren. Sie teilt dem Betrieb ihre Schwangerschaft mit. Ab jetzt trägt sie keine schweren Aktenkartons mehr ins Archiv." },
          { note: "In den Schutzfristen bekommst du Mutterschaftsgeld von der Krankenkasse. Der Betrieb zahlt einen Zuschuss." }
        ],
        card: {
          title: "Mutterschutz",
          rules: [
            ["Vorher", ["6 Wochen – nur freiwillig"]],
            ["Nachher", ["8 Wochen Arbeitsverbot", "Früh-/Mehrlingsgeburt: 12 Wo."]],
            ["Kündigung", ["Schwangerschaft: verboten", "bis 4 Monate nach Geburt"]],
            ["Nacht", ["grundsätzlich frei 20–6 Uhr"]]
          ],
          calc: { title: "Rechnung: Schutzfrist", rows: [
            { label: "vor der Geburt", n: "6 Wochen" },
            { op: "+", label: "nach der Geburt", n: "8 Wochen" },
            { op: "=", label: "gesamt", n: "14 Wochen", t: "sum" }
          ] },
          merke: "Merke: Sag dem Betrieb früh Bescheid – dann greift der Schutz.",
          quelle: "MuSchG §§ 1, 3, 4, 5, 6, 17"
        },
        src: "Mutterschutzgesetz §§ 1, 3, 4, 5, 6, 11, 15, 17, 19, 20, 27 (Fassung seit 01.06.2025 mit Schutzfristen nach Fehlgeburt); Familienportal des BMFSFJ, geprüft am 25.11.2026; Rahmenlehrplan Lernfeld 1 („Mutterschutz“)."
      },

      { id: "lf1-3-3", title: "Kündigungsschutz",
        content: [
          { p: "Kündigungsschutz bedeutet: Der Arbeitgeber darf nicht einfach so kündigen. Für dich als Azubi gilt vor allem das **BBiG**. Nach der Ausbildung schützt dich das **Kündigungsschutzgesetz (KSchG)**." },
          { h: "Als Azubi nach der Probezeit" },
          { p: "Dein Betrieb kann nur aus **wichtigem Grund** kündigen. Ein Beispiel: Du nimmst Geld aus der Mietkasse. Die Kündigung muss schriftlich sein und die Gründe nennen." },
          { h: "Kündigungsschutzgesetz" },
          { rules: [
            ["Gilt, wenn", ["der Betrieb mehr als 10 Arbeitnehmer hat (Azubis zählen nicht)", "du länger als 6 Monate dort arbeitest"]],
            ["Kündigung nur", ["wegen der Person", "wegen des Verhaltens", "aus betrieblichen Gründen"]],
            ["Wehren", ["Klage innerhalb von 3 Wochen", "beim Arbeitsgericht"]]
          ] },
          { calc: { title: "Rechenbeispiel: Kündigungsfrist nach der Ausbildung", rows: [
            { label: "Kündigung geht zu", n: "10.03.2026" },
            { op: "+", label: "Grundfrist", n: "4 Wochen" },
            { op: "=", label: "Frist abgelaufen am", n: "07.04.2026", t: "sub" },
            { op: "=", label: "Ende: nächster 15. oder Monatsende", n: "15.04.2026", t: "sum" }
          ] } },
          { ul: [
            "Besonderen Schutz haben Schwangere und Mütter.",
            "Besonderen Schutz haben Eltern in Elternzeit.",
            "Besonderen Schutz haben schwerbehinderte Menschen.",
            "Besonderen Schutz haben Mitglieder von Betriebsrat und JAV."
          ] },
          { ex: "Paul hat ausgelernt. Er arbeitet seit 2 Jahren in einem Wohnungsunternehmen in Rostock. Ihm wird per WhatsApp gekündigt. Das ist unwirksam: Eine Kündigung braucht Papier und Unterschrift." }
        ],
        card: {
          title: "Kündigungsschutz",
          rules: [
            ["Azubi", ["nur aus wichtigem Grund", "schriftlich mit Gründen"]],
            ["KSchG", ["über 10 Arbeitnehmer", "mehr als 6 Monate im Betrieb"]],
            ["Gründe", ["Person", "Verhalten", "Betrieb"]],
            ["Klage", ["binnen 3 Wochen"]],
            ["Frist", ["4 Wochen zum 15. / Monatsende"]]
          ],
          merke: "Merke: Kündigung per E-Mail oder WhatsApp ist unwirksam.",
          quelle: "BBiG § 22 · KSchG §§ 1, 4, 23 · BGB § 622, 623"
        },
        src: "Berufsbildungsgesetz § 22; Kündigungsschutzgesetz §§ 1, 4, 15, 23; BGB §§ 622 Abs. 1, 623; MuSchG § 17; BEEG § 18; SGB IX § 168; Rahmenlehrplan Lernfeld 1 („Kündigungsschutz“)."
      }
    ]},

    { id: "lf1-4", title: "Geld: brutto und netto", subs: [

      { id: "lf1-4-1", title: "Vom Brutto zum Netto",
        content: [
          { p: "**Brutto** ist deine Vergütung laut Vertrag. **Netto** ist, was auf deinem Konto ankommt. Dazwischen liegen Abzüge für Sozialversicherung und Steuern." },
          { h: "Dein Anteil an der Sozialversicherung 2026" },
          { rules: [
            ["Krankenversicherung", ["7,30 % (Hälfte von 14,6 %)", "+ halber Zusatzbeitrag deiner Kasse"]],
            ["Pflegeversicherung", ["1,80 % (Hälfte von 3,6 %)"]],
            ["Rentenversicherung", ["9,30 % (Hälfte von 18,6 %)"]],
            ["Arbeitslosenversicherung", ["1,30 % (Hälfte von 2,6 %)"]]
          ] },
          { calc: { title: "Rechenbeispiel: Ausbildungsvergütung 1.000,00 € (Kasse mit 2,9 % Zusatzbeitrag)", rows: [
            { label: "Bruttovergütung", n: "1.000,00 €" },
            { op: "–", label: "Krankenversicherung", f: "7,30 %", n: "73,00 €" },
            { op: "–", label: "Zusatzbeitrag (halb)", f: "1,45 %", n: "14,50 €" },
            { op: "–", label: "Pflegeversicherung", f: "1,80 %", n: "18,00 €" },
            { op: "–", label: "Rentenversicherung", f: "9,30 %", n: "93,00 €" },
            { op: "–", label: "Arbeitslosenversicherung", f: "1,30 %", n: "13,00 €" },
            { op: "=", label: "nach Sozialversicherung", n: "788,50 €", t: "sub" },
            { op: "–", label: "Lohnsteuer (Steuerklasse I)", n: "0,00 €" },
            { op: "=", label: "Nettovergütung", n: "788,50 €", t: "sum" }
          ] } },
          { p: "Lohnsteuer fällt hier nicht an. Dein Jahresbrutto von 12.000,00 € liegt unter dem Grundfreibetrag 2026. Damit entfallen auch Solidaritätszuschlag und Kirchensteuer." },
          { note: "Der Zusatzbeitrag ist bei jeder Krankenkasse anders. 2,9 % ist der Durchschnitt 2026. Deinen Wert findest du auf deiner Abrechnung." },
          { ex: "Lisa bekommt in einem Wohnungsunternehmen in Schwerin 1.000,00 € brutto. Auf ihrem Konto kommen 788,50 € an. Ihre Kasse hat genau 2,9 % Zusatzbeitrag." }
        ],
        card: {
          title: "Vom Brutto zum Netto",
          bullets: [
            "Brutto = Vergütung laut Vertrag",
            "Netto = Betrag auf dem Konto",
            "dein SV-Anteil 2026: 21,15 %",
            "bei 2,9 % Zusatzbeitrag"
          ],
          calc: { title: "Rechnung: 1.000 € brutto", rows: [
            { label: "Bruttovergütung", n: "1.000,00 €" },
            { op: "–", label: "Sozialversicherung", f: "21,15 %", n: "211,50 €" },
            { op: "=", label: "nach SV", n: "788,50 €", t: "sub" },
            { op: "–", label: "Lohnsteuer", n: "0,00 €" },
            { op: "=", label: "Netto", n: "788,50 €", t: "sum" }
          ] },
          merke: "Merke: Netto = Brutto minus Sozialversicherung minus Steuern.",
          quelle: "SGB V § 249 · SGB XI § 58 · Sätze 2026"
        },
        src: "Beitragssätze 2026 laut Deutscher Rentenversicherung (Lexikon „Beitragssatz“, geprüft am 25.11.2026): KV 14,6 %, durchschnittlicher Zusatzbeitrag 2,9 %, PV 3,6 %, RV 18,6 %, AV 2,6 %; Tragung je zur Hälfte: SGB V § 249, SGB XI § 58, SGB VI § 168, SGB III § 346; Grundfreibetrag 2026 12.348 € (EStG § 32a, BMF-Monatsbericht Februar 2026); Rahmenlehrplan Lernfeld 1 („Brutto-/Nettoentgelt“)."
      },

      { id: "lf1-4-2", title: "Die fünf Sozialversicherungen",
        content: [
          { p: "Die **Sozialversicherung** sichert dich bei großen Lebensrisiken ab. Als Azubi bist du automatisch versichert. Es ist eine Pflichtversicherung." },
          { rules: [
            ["Krankenversicherung", ["zahlt Arzt und Krankenhaus", "Träger: deine Krankenkasse"]],
            ["Pflegeversicherung", ["hilft bei Pflegebedürftigkeit", "Träger: Pflegekasse"]],
            ["Rentenversicherung", ["zahlt später die Rente", "Träger: Deutsche Rentenversicherung"]],
            ["Arbeitslosenversicherung", ["zahlt Arbeitslosengeld", "Träger: Bundesagentur für Arbeit"]],
            ["Unfallversicherung", ["zahlt nach Arbeits- und Wegeunfällen", "Träger: Berufsgenossenschaft"]]
          ] },
          { h: "Wer zahlt?" },
          { ul: [
            "Kranken-, Pflege-, Renten- und Arbeitslosenversicherung: je zur Hälfte du und der Betrieb.",
            "Den Zusatzbeitrag der Krankenkasse teilt ihr euch auch.",
            "Die Unfallversicherung zahlt der Betrieb allein.",
            "Kinderlose ab 23 Jahren zahlen 0,6 % mehr Pflegeversicherung (2026)."
          ] },
          { calc: { title: "Rechenbeispiel: Was kostet deine Ausbildung den Betrieb? (1.000,00 € brutto, 2026)", rows: [
            { label: "Bruttovergütung", n: "1.000,00 €" },
            { op: "+", label: "Krankenversicherung", f: "7,30 %", n: "73,00 €" },
            { op: "+", label: "Zusatzbeitrag (halb)", f: "1,45 %", n: "14,50 €" },
            { op: "+", label: "Pflegeversicherung", f: "1,80 %", n: "18,00 €" },
            { op: "+", label: "Rentenversicherung", f: "9,30 %", n: "93,00 €" },
            { op: "+", label: "Arbeitslosenversicherung", f: "1,30 %", n: "13,00 €" },
            { op: "=", label: "Kosten ohne Unfallversicherung", n: "1.211,50 €", t: "sum" }
          ] } },
          { note: "Bekommst du höchstens 325,00 € im Monat, zahlt der Betrieb alle Beiträge allein (Geringverdienergrenze, Stand 2026)." },
          { ex: "Lena fährt mit dem Rad zur Berufsschule nach Waren und stürzt. Das ist ein Wegeunfall. Die gesetzliche Unfallversicherung zahlt die Behandlung." }
        ],
        card: {
          title: "Fünf Sozialversicherungen",
          bullets: [
            "Krankenversicherung → Krankheit",
            "Pflegeversicherung → Pflege",
            "Rentenversicherung → Alter",
            "Arbeitslosenversicherung → Job weg",
            "Unfallversicherung → Arbeitsunfall",
            "4 Zweige: halb du, halb Betrieb",
            "Unfall: Betrieb zahlt allein",
            "bis 325,00 € → Betrieb zahlt alles"
          ],
          merke: "Merke: Die Unfallversicherung zahlt der Betrieb allein.",
          quelle: "SGB IV § 20 · SGB VII §§ 8, 150"
        },
        src: "SGB IV § 20 Abs. 3 (Geringverdienergrenze 325 €); SGB V § 249; SGB XI §§ 55, 58; SGB VI § 168; SGB III § 346; SGB VII §§ 2, 8, 150; Beitragssätze 2026 laut Deutscher Rentenversicherung, geprüft am 25.11.2026; Rahmenlehrplan Lernfeld 1 („Brutto-/Nettoentgelt“)."
      },

      { id: "lf1-4-3", title: "Lohnsteuer und Abzüge lesen",
        content: [
          { p: "Die **Lohnsteuer** ist eine Form der Einkommensteuer. Der Betrieb zieht sie von deiner Vergütung ab. Er zahlt sie direkt an das Finanzamt." },
          { ul: [
            "Grundlage sind deine **Steuer-ID** und deine **Steuerklasse**.",
            "Ledige ohne Kind haben **Steuerklasse I**.",
            "Der Betrieb ruft deine Steuerdaten elektronisch beim Finanzamt ab.",
            "Bis zum **Grundfreibetrag** zahlst du keine Einkommensteuer.",
            "Der Grundfreibetrag 2026 beträgt 12.348,00 € im Jahr.",
            "Den **Solidaritätszuschlag** zahlst du nur bei höherer Lohnsteuer.",
            "**Kirchensteuer** zahlst du nur als Kirchenmitglied. In MV sind es 9 % der Lohnsteuer."
          ] },
          { calc: { title: "Rechenbeispiel: Liegst du unter dem Grundfreibetrag?", rows: [
            { label: "Grundfreibetrag 2026", n: "12.348,00 €" },
            { op: "–", label: "Jahresbrutto: 1.000,00 €", f: "× 12", n: "12.000,00 €" },
            { op: "=", label: "Abstand zum Freibetrag", n: "348,00 €", t: "sum" }
          ] } },
          { p: "Dein Jahresbrutto liegt unter dem Grundfreibetrag. Also ist deine Lohnsteuer 0,00 €. Pauschalen, z. B. für Werbungskosten, senken den steuerpflichtigen Betrag noch weiter." },
          { h: "So liest du die Abrechnung" },
          { ul: [
            "Kopf: Name, Steuerklasse, Krankenkasse",
            "Bruttobezüge: deine Vergütung",
            "Steuerabzüge: Lohnsteuer, Soli, Kirchensteuer",
            "SV-Abzüge: Kranken-, Pflege-, Renten-, Arbeitslosenversicherung",
            "Nettobezüge: dein Auszahlungsbetrag"
          ] },
          { ex: "Sara liest auf ihrer Abrechnung „StKl 1“ und „KiSt 0,00“. Sie ist ledig und in keiner Kirche. Beides passt also." }
        ],
        card: {
          title: "Lohnsteuer lesen",
          bullets: [
            "Lohnsteuer → Finanzamt",
            "ledig ohne Kind → Steuerklasse I",
            "Grundfreibetrag 2026: 12.348,00 €",
            "Soli nur bei höherer Lohnsteuer",
            "Kirchensteuer MV: 9 % (Mitglieder)"
          ],
          calc: { title: "Rechnung: Freibetrag", rows: [
            { label: "Grundfreibetrag 2026", n: "12.348,00 €" },
            { op: "–", label: "Brutto: 12 × 1.000 €", n: "12.000,00 €" },
            { op: "=", label: "Abstand", n: "348,00 €", t: "sum" }
          ] },
          merke: "Merke: Liegt dein Jahresbrutto unter dem Grundfreibetrag, zahlst du keine Lohnsteuer.",
          quelle: "EStG §§ 32a, 38, 38b, 39 · SolZG § 3"
        },
        src: "EStG §§ 32a (Grundfreibetrag 2026: 12.348 €, BMF-Monatsbericht Februar 2026, geprüft am 25.11.2026), 38, 38b, 39; Solidaritätszuschlaggesetz § 3; Kirchensteuergesetz M-V; Rahmenlehrplan Lernfeld 1 („Entgeltabrechnungen“)."
      }
    ]},

    { id: "lf1-5", title: "Mitbestimmung und Tarif", subs: [

      { id: "lf1-5-1", title: "Betriebsrat und Jugend- und Auszubildendenvertretung",
        content: [
          { p: "Der **Betriebsrat** vertritt alle Beschäftigten gegenüber dem Arbeitgeber. Er kann gewählt werden, wenn der Betrieb mindestens 5 ständige wahlberechtigte Arbeitnehmer hat." },
          { p: "Wählen darfst du ab **16 Jahren**. Der Betriebsrat wird alle 4 Jahre gewählt." },
          { h: "Rechte des Betriebsrats" },
          { rules: [
            ["Mitbestimmung", ["Beginn und Ende der Arbeitszeit", "Urlaubsplan", "Ordnung im Betrieb"]],
            ["Mitwirkung", ["Anhörung vor jeder Kündigung", "Fragen der Berufsbildung"]]
          ] },
          { h: "Jugend- und Auszubildendenvertretung (JAV)" },
          { ul: [
            "Sie vertritt Jugendliche unter 18 und Azubis unter 25.",
            "Es gibt sie ab 5 solchen Beschäftigten im Betrieb.",
            "Sie setzt einen Betriebsrat voraus.",
            "Sie wird alle 2 Jahre gewählt.",
            "Sie bringt eure Themen in den Betriebsrat ein.",
            "Ihre Mitglieder haben besonderen Kündigungsschutz."
          ] },
          { ex: "In einem Wohnungsunternehmen in Schwerin lernen 6 Azubis. Die JAV wünscht sich einen festen Lerntag vor der Prüfung. Sie bringt den Antrag in den Betriebsrat ein." },
          { note: "Ein JAV-Mitglied kann am Ende der Ausbildung verlangen, übernommen zu werden. Es muss das in den letzten 3 Monaten schriftlich verlangen." }
        ],
        card: {
          title: "Betriebsrat und JAV",
          rules: [
            ["Betriebsrat", ["ab 5 Arbeitnehmern", "wählen ab 16 Jahren", "Amtszeit 4 Jahre", "vor Kündigung anhören"]],
            ["JAV", ["unter 18 oder Azubi unter 25", "ab 5 davon im Betrieb", "Amtszeit 2 Jahre", "nur mit Betriebsrat"]]
          ],
          merke: "Merke: Die JAV ist deine Stimme im Betrieb – über den Betriebsrat.",
          quelle: "BetrVG §§ 1, 7, 21, 60–64, 87, 102"
        },
        src: "Betriebsverfassungsgesetz §§ 1, 7, 21, 60, 61, 64, 70, 78a, 87, 96–98, 102; KSchG § 15; Rahmenlehrplan Lernfeld 1 („Betriebliche Mitbestimmung“)."
      },

      { id: "lf1-5-2", title: "Tarifvertrag und Sozialpartner",
        content: [
          { p: "Ein **Tarifvertrag** regelt Arbeitsbedingungen für viele Beschäftigte auf einmal. Ihn schließen die **Sozialpartner** ab. Das Gesetz nennt sie Tarifvertragsparteien." },
          { rules: [
            ["Arbeitnehmerseite", ["Gewerkschaften"]],
            ["Arbeitgeberseite", ["Arbeitgeberverbände", "einzelne Arbeitgeber"]]
          ] },
          { p: "Die Sozialpartner verhandeln ohne den Staat. Das garantiert das Grundgesetz. Man nennt das **Tarifautonomie**." },
          { rules: [
            ["Entgelttarifvertrag", ["regelt Gehalt und Ausbildungsvergütung"]],
            ["Manteltarifvertrag", ["regelt Arbeitszeit", "regelt Urlaub", "regelt Kündigungsfristen"]]
          ] },
          { h: "Wirkung" },
          { ul: [
            "Er gilt, wenn Arbeitgeber und Arbeitnehmer tarifgebunden sind.",
            "Er wirkt **unmittelbar** und **zwingend**: Schlechtere Absprachen sind unwirksam.",
            "Bessere Absprachen für dich sind erlaubt (**Günstigkeitsprinzip**).",
            "Viele Betriebe wenden ihn per Arbeitsvertrag auf alle an.",
            "Der Staat kann ihn für **allgemeinverbindlich** erklären."
          ] },
          { ex: "Jana fragt in ihrer Wohnungsgenossenschaft in Güstrow: Gilt bei uns ein Tarifvertrag? Die Personalabteilung zeigt ihr den Hinweis in ihrem Ausbildungsvertrag." },
          { note: "Dein Ausbildungsvertrag muss auf geltende Tarifverträge hinweisen (§ 11 BBiG)." }
        ],
        card: {
          title: "Tarifvertrag",
          bullets: [
            "Tarifvertrag = Regeln für viele",
            "Gewerkschaft ↔ Arbeitgeberverband",
            "Entgelt-TV → Vergütung",
            "Mantel-TV → Arbeitszeit, Urlaub",
            "wirkt unmittelbar und zwingend",
            "Besseres für dich ist erlaubt",
            "Tarifautonomie: Art. 9 GG"
          ],
          merke: "Merke: Vom Tarifvertrag darf nur zu deinen Gunsten abgewichen werden.",
          quelle: "TVG §§ 1–5 · GG Art. 9 Abs. 3 · BBiG § 11"
        },
        src: "Tarifvertragsgesetz §§ 1 (Inhalt), 2 (Tarifvertragsparteien), 3 (Tarifgebundenheit), 4 (Wirkung, Günstigkeitsprinzip), 5 (Allgemeinverbindlichkeit); Grundgesetz Art. 9 Abs. 3; BBiG § 11 Abs. 1 Nr. 11; Rahmenlehrplan Lernfeld 1 (Tarifverträge, Sozialpartner)."
      },

      { id: "lf1-5-3", title: "Tarifverhandlung, Schlichtung, Streik",
        content: [
          { p: "Läuft ein Tarifvertrag aus, verhandeln die Sozialpartner neu. Solange er gilt, herrscht **Friedenspflicht**. Dann gibt es keinen Streik über die geregelten Punkte." },
          { h: "Typischer Ablauf" },
          { ul: [
            "1. Der alte Tarifvertrag läuft aus oder wird gekündigt.",
            "2. Die Gewerkschaft stellt ihre Forderung.",
            "3. Die Arbeitgeber machen ein Angebot. Beide Seiten verhandeln.",
            "4. Oft gibt es Warnstreiks.",
            "5. Scheitern die Verhandlungen, folgt oft eine Schlichtung.",
            "6. Die Gewerkschaftsmitglieder stimmen über einen Streik ab (Urabstimmung).",
            "7. Streik – die Arbeitgeber können mit Aussperrung antworten.",
            "8. Einigung und neuer Tarifvertrag."
          ] },
          { p: "Ein **Schlichter** ist eine neutrale Person. Er macht einen Vorschlag zur Einigung. Ob geschlichtet wird, haben die Sozialpartner meist vorher vereinbart." },
          { p: "**Streik** heißt: Beschäftigte legen gemeinsam die Arbeit nieder. Dazu aufrufen darf nur eine Gewerkschaft. Für Streiktage gibt es keine Vergütung." },
          { p: "**Aussperrung** heißt: Der Arbeitgeber lässt Beschäftigte nicht arbeiten und zahlt nichts." },
          { ex: "Die Gewerkschaft ruft zu einem Warnstreik auf. Die Hausverwaltung in Rostock plant für den Tag eine Notbesetzung am Empfang." },
          { note: "Auch Azubis dürfen an Streiks teilnehmen, zu denen die Gewerkschaft aufruft. Frag vorher bei der Gewerkschaft oder der JAV nach." }
        ],
        card: {
          title: "Tarifverhandlung und Streik",
          rules: [
            ["Frieden", ["kein Streik, solange TV gilt"]],
            ["Ablauf", ["Forderung", "Verhandlung", "Schlichtung (falls vereinbart)", "Urabstimmung", "Streik / Aussperrung", "Einigung → neuer TV"]]
          ],
          merke: "Merke: Zum Streik aufrufen darf nur eine Gewerkschaft.",
          quelle: "GG Art. 9 Abs. 3 · TVG §§ 1, 2"
        },
        src: "Grundgesetz Art. 9 Abs. 3 (Koalitionsfreiheit); Tarifvertragsgesetz §§ 1, 2; Rahmenlehrplan Lernfeld 1 (Ablauf und Abschluss von Tarifverhandlungen)."
      }
    ]},

    { id: "lf1-6", title: "Lernen und Präsentieren", subs: [

      { id: "lf1-6-1", title: "Lern- und Arbeitstechniken",
        content: [
          { p: "Gute Technik spart Zeit. Du lernst mit Plan statt auf den letzten Drücker." },
          { rules: [
            ["Planen", ["Wochenplan mit festen Lernzeiten", "große Themen in kleine Schritte teilen"]],
            ["Lernkarten", ["vorne die Frage", "hinten die Antwort"]],
            ["Wiederholen", ["nach 1 Tag", "nach 1 Woche", "nach 1 Monat"]]
          ] },
          { h: "Was zuerst? (Eisenhower-Prinzip)" },
          { rules: [
            ["wichtig und dringend", ["→ sofort selbst erledigen"]],
            ["wichtig, nicht dringend", ["→ fest einplanen"]],
            ["dringend, nicht wichtig", ["→ abgeben"]],
            ["weder noch", ["→ weglassen"]]
          ] },
          { ex: "Ein Mieter meldet einen Wasserschaden. Das ist wichtig und dringend: Du gibst es sofort weiter. Das Aufräumen der Ablage planst du für den Nachmittag ein." },
          { h: "Probleme lösen" },
          { ul: [
            "1. Problem genau beschreiben.",
            "2. Lösungen sammeln.",
            "3. Eine Lösung wählen und umsetzen.",
            "4. Ergebnis prüfen."
          ] },
          { note: "Nutze die Lernkarten in dieser App. Hake nur ab, was du ohne Spicken erklären kannst." }
        ],
        card: {
          title: "Lern- und Arbeitstechniken",
          rules: [
            ["Plan", ["feste Lernzeiten", "kleine Schritte"]],
            ["Wiederholen", ["nach 1 Tag", "nach 1 Woche", "nach 1 Monat"]],
            ["Eisenhower", ["wichtig + dringend → sofort", "nur wichtig → planen", "nur dringend → abgeben", "weder noch → weglassen"]]
          ],
          merke: "Merke: Öfter kurz wiederholen bringt mehr als einmal lang pauken.",
          quelle: "KMK-RLP LF 1 (Lern- und Arbeitstechniken)"
        },
        src: "Rahmenlehrplan Lernfeld 1 („Lern- und Arbeitstechniken“; problemlösende Methoden)."
      },

      { id: "lf1-6-2", title: "Gut präsentieren",
        content: [
          { p: "In Schule und Betrieb stellst du oft Ergebnisse vor. Eine gute Präsentation hat einen klaren Aufbau. Sie passt zu deinem Publikum." },
          { rules: [
            ["Einleitung", ["Thema nennen", "Ziel nennen", "Aufmerksamkeit wecken"]],
            ["Hauptteil", ["wenige Kernpunkte", "ein Beispiel je Punkt"]],
            ["Schluss", ["kurz zusammenfassen", "Fragen beantworten"]]
          ] },
          { h: "Tipps für den Vortrag" },
          { ul: [
            "Frei sprechen, Stichwortkarten helfen.",
            "Blickkontakt zum Publikum halten.",
            "Langsam und deutlich sprechen.",
            "Folien mit wenig Text und großer Schrift.",
            "Vorher mit Uhr üben."
          ] },
          { calc: { title: "Rechenbeispiel: Zeitplan für 10 Minuten", rows: [
            { label: "Einleitung", n: "1 min" },
            { op: "+", label: "Hauptteil", n: "8 min" },
            { op: "+", label: "Schluss", n: "1 min" },
            { op: "=", label: "Redezeit", n: "10 min", t: "sum" }
          ] } },
          { ex: "Max stellt in der Klasse sein Unternehmen vor: eine Wohnungsgenossenschaft in Neubrandenburg. Er beginnt mit einem Foto ihres größten Wohnblocks. So hat er sofort die Aufmerksamkeit." },
          { note: "Plane Zeit für Fragen zusätzlich ein, wenn deine Lehrkraft das verlangt." }
        ],
        card: {
          title: "Gut präsentieren",
          rules: [
            ["Aufbau", ["Einleitung: Thema, Ziel", "Hauptteil: wenige Kernpunkte", "Schluss: Zusammenfassung"]],
            ["Vortrag", ["frei sprechen", "Blickkontakt halten"]]
          ],
          calc: { title: "Rechnung: 10 Minuten", rows: [
            { label: "Einleitung", n: "1 min" },
            { op: "+", label: "Hauptteil", n: "8 min" },
            { op: "+", label: "Schluss", n: "1 min" },
            { op: "=", label: "Redezeit", n: "10 min", t: "sum" }
          ] },
          merke: "Merke: Wer mit Uhr übt, spricht sicher und hält die Zeit ein.",
          quelle: "KMK-RLP LF 1 (Präsentationstechniken)"
        },
        src: "Rahmenlehrplan Lernfeld 1 („Präsentationstechniken“; Arbeitsergebnisse strukturiert präsentieren und dokumentieren)."
      },

      { id: "lf1-6-3", title: "Im Internet recherchieren und Quellen prüfen",
        content: [
          { p: "Im Internet findest du schnell Antworten. Aber nicht jede Antwort stimmt. Du musst die Quelle prüfen." },
          { h: "Besser suchen" },
          { ul: [
            "Genaue Begriffe nutzen, z. B. „Mietkaution Höhe BGB“.",
            "Anführungszeichen für feste Wortgruppen setzen.",
            "Gesetze auf gesetze-im-internet.de nachlesen."
          ] },
          { h: "Quelle prüfen" },
          { rules: [
            ["Wer?", ["Wer hat den Text geschrieben?"]],
            ["Wann?", ["Wie aktuell ist er?"]],
            ["Warum?", ["Will jemand etwas verkaufen?"]],
            ["Beleg?", ["Werden Gesetze oder Quellen genannt?"]]
          ] },
          { ex: "Tim sucht, wie hoch eine Mietkaution sein darf. Ein Forum schreibt „vier Monatsmieten“. Im BGB § 551 steht: höchstens drei Monatsmieten ohne Betriebskosten." },
          { ul: [
            "Fremde Texte darfst du zitieren, aber immer mit Quelle.",
            "Antworten von KI-Programmen prüfst du genauso.",
            "Mieterdaten gibst du nie in Suchmaschinen oder KI-Programme ein."
          ] },
          { note: "Amtliche Quellen sind am sichersten: Gesetze, Ministerien, die IHK." }
        ],
        card: {
          title: "Internetrecherche",
          rules: [
            ["Prüfen", ["Wer schreibt?", "Wie aktuell?", "Welche Absicht?", "Belege genannt?"]],
            ["Amtlich", ["gesetze-im-internet.de", "IHK, Ministerien"]],
            ["Zitat", ["immer mit Quelle"]],
            ["Daten", ["keine Mieterdaten eingeben"]]
          ],
          merke: "Merke: Ein Forum ist keine Rechtsquelle – prüfe im Gesetz nach.",
          quelle: "UrhG §§ 51, 63 · DSGVO Art. 5, 6 · RLP LF 1"
        },
        src: "Urheberrechtsgesetz §§ 51 (Zitat), 63 (Quellenangabe); DSGVO Art. 5, 6; BGB § 551 Abs. 1; Rahmenlehrplan Lernfeld 1 („Internetrecherche“)."
      }
    ]}
  ]
});
