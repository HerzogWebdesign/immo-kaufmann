window.IMMO = window.IMMO || [];
window.IMMO.push({
  id: "de",
  kind: "fach",
  nr: 7,
  title: "Deutsch / Kommunikation",
  short: "Deutsch · Kommunikation",
  hours: "120 Stunden in 3 Jahren (BSVO M-V)",
  intro: "Im Immobilienbüro schreibst du Briefe und E-Mails und sprichst mit Mietern. Hier lernst du die Regeln dafür. Die Themen sind ein Vorschlag: Maßgeblich ist der Plan deiner Schule, denn die BSVO M-V (Anlage 1) nennt nur die Gesamtstunden für drei Jahre.",
  source: "BSVO M-V Anlage 1; Themenvorschlag",
  topics: [
    { id: "de-1", title: "Geschäftsbriefe und E-Mails (DIN 5008)", subs: [
      { id: "de-1-1", title: "Der Geschäftsbrief nach DIN 5008",
        content: [
          { p: "Die **DIN 5008** ist eine Norm. Sie legt fest, wie Briefe im Büro aussehen. Sie ist kein Gesetz, aber fast alle Betriebe halten sich daran." },
          { h: "Aufbau von oben nach unten" },
          { ul: [
            "Briefkopf: Firma, Logo, Anschrift",
            "Anschriftfeld: Empfänger",
            "Informationsblock: Zeichen, Ansprechpartner, Telefon, Datum",
            "Betreff",
            "Anrede",
            "Brieftext in Absätzen",
            "Gruß, Firma, Unterschrift, Name",
            "Anlagen",
            "Fußzeile: Pflichtangaben, Bankverbindung"
          ] },
          { h: "Grundregeln" },
          { rules: [
            ["Betreff", ["ohne das Wort „Betreff“", "darf fett sein", "ohne Punkt am Ende"]],
            ["Anrede", ["„Sehr geehrte Frau Kruse,“", "danach klein weiterschreiben"]],
            ["Gruß", ["„Mit freundlichen Grüßen“", "ohne Komma, ohne Punkt"]],
            ["Datum", ["25.11.2026", "oder 2026-11-25"]],
            ["Telefon", ["0381 123456-20", "(Durchwahl mit Bindestrich)"]]
          ] },
          { ex: "Lena schreibt Frau Kruse in Schwerin. Betreff: „Termin zur Ablesung der Heizkostenverteiler am 10.12.2026“. Danach: „Sehr geehrte Frau Kruse,“ und in der nächsten Zeile klein: „am 10.12.2026 …“." },
          { note: "Pflichtangaben: Geschäftsbriefe einer GmbH müssen Rechtsform, Sitz, Registergericht, Registernummer und alle Geschäftsführer nennen (§ 35a GmbHG). Für Kaufleute und eG gilt Ähnliches (§ 37a HGB, § 25a GenG)." },
          { warn: "Abstände (Leerzeilen) und Maße kann deine Schule nach eigener Vorlage verlangen. Nutze im Betrieb die Briefvorlage der Firma." }
        ],
        card: {
          title: "Geschäftsbrief (DIN 5008)",
          rules: [
            ["Betreff", ["ohne Wort „Betreff“", "ohne Punkt am Ende"]],
            ["Anrede", ["Sehr geehrte Frau Kruse,", "danach klein weiter"]],
            ["Gruß", ["Mit freundlichen Grüßen", "ohne Komma"]],
            ["Datum", ["25.11.2026 oder 2026-11-25"]],
            ["Telefon", ["0381 123456-20"]],
            ["Fußzeile", ["Pflichtangaben der Firma"]]
          ],
          merke: "Merke: Komma nach der Anrede – kein Komma nach dem Gruß.",
          quelle: "DIN 5008 · § 35a GmbHG · § 37a HGB"
        },
        src: "DIN 5008 (Schreib- und Gestaltungsregeln); § 35a GmbHG, § 37a HGB, § 25a GenG; BSVO M-V Anlage 1; Themenvorschlag"
      },
      { id: "de-1-2", title: "Die geschäftliche E-Mail",
        content: [
          { p: "Eine geschäftliche E-Mail ist ein Geschäftsbrief in kurz. Es gelten dieselben Regeln für Anrede, Gruß und Rechtschreibung. Auch die Pflichtangaben der Firma gehören hinein – meist in die Signatur." },
          { rules: [
            ["Betreff", ["kurz und genau", "z. B. „Besichtigung Lindenstr. 4 am 02.12.“"]],
            ["Anrede", ["wie im Brief", "danach eine Leerzeile"]],
            ["Text", ["kurze Absätze", "zwischen Absätzen eine Leerzeile"]],
            ["Anhang", ["im Text nennen", "„Im Anhang finden Sie den Grundriss.“"]],
            ["Signatur", ["Name, Funktion, Firma mit Rechtsform", "Anschrift, Telefon", "Pflichtangaben"]]
          ] },
          { h: "Das solltest du vermeiden" },
          { ul: [
            "Ganze Wörter in GROSSBUCHSTABEN – das wirkt wie Schreien.",
            "Smileys und Abkürzungen wie „LG“.",
            "Eine Rundmail mit allen Adressen offen im Feld „An“."
          ] },
          { note: "Schreibst du an viele Mieter, setze die Adressen in **BCC**. Sonst sieht jeder die E-Mail-Adressen der anderen. Das kann gegen den Datenschutz (DSGVO) verstoßen." },
          { ex: "Lena informiert 24 Mieter in Waren über eine Wasserabstellung. Sie setzt alle Adressen in BCC. Betreff: „Wasserabstellung Am Markt 7 am 05.12.2026, 8 bis 12 Uhr“." }
        ],
        card: {
          title: "Geschäftliche E-Mail",
          bullets: [
            "Betreff: kurz und genau",
            "Anrede und Gruß wie im Brief",
            "kurze Absätze mit Leerzeilen",
            "Anhang im Text nennen",
            "Signatur mit Pflichtangaben",
            "Rundmail → Adressen in BCC",
            "keine GROSSBUCHSTABEN-Wörter"
          ],
          merke: "Merke: Eine geschäftliche E-Mail ist ein Geschäftsbrief.",
          quelle: "DIN 5008 · § 37a HGB · DSGVO"
        },
        src: "DIN 5008 (E-Mail); § 37a HGB, § 35a GmbHG (Pflichtangaben); DSGVO Art. 5, 6; BSVO M-V Anlage 1; Themenvorschlag"
      }
    ]},
    { id: "de-2", title: "Gespräche führen: Kundengespräch, Beschwerde, Telefon", subs: [
      { id: "de-2-1", title: "Telefon und Kundengespräch",
        content: [
          { p: "Am Telefon bist du die Stimme der Firma. Der Anrufer sieht dich nicht. Deshalb zählen Begrüßung, Ton und Zuhören besonders." },
          { rules: [
            ["Melden", ["Gruß", "Firma", "Vor- und Nachname"]],
            ["Fragen", ["offen: „Was kann ich für Sie tun?“", "geschlossen: „Ist das Ihre Nummer?“"]],
            ["Zuhören", ["nicken, „ja“, „verstehe“", "mit eigenen Worten wiederholen"]],
            ["Abschluss", ["Ergebnis zusammenfassen", "verabschieden mit Namen"]]
          ] },
          { h: "Telefonnotiz: das schreibst du auf" },
          { ul: [
            "Wer hat angerufen? Name und Nummer",
            "Wann? Datum und Uhrzeit",
            "Was will die Person?",
            "Was wurde vereinbart? (z. B. Rückruf bis 14:00 Uhr)",
            "Für wen ist die Notiz?"
          ] },
          { ex: "„Guten Tag, Wohnungsgenossenschaft Waren, Lena Schulz.“ Frau K. fragt nach ihrer Abrechnung. Lena notiert Name, Nummer und Anliegen und sagt: „Herr Becker ruft Sie heute bis 14 Uhr zurück.“" },
          { note: "**Offene Fragen** (W-Fragen) bringen Informationen. **Geschlossene Fragen** (Antwort ja oder nein) sichern ein Ergebnis ab." }
        ],
        card: {
          title: "Telefon und Kundengespräch",
          rules: [
            ["Melden", ["Gruß, Firma, Name"]],
            ["Fragen", ["offen → Informationen", "geschlossen → ja/nein"]],
            ["Zuhören", ["mit eigenen Worten wiederholen"]],
            ["Notiz", ["wer, wann, was", "was vereinbart, für wen"]],
            ["Ende", ["Ergebnis zusammenfassen"]]
          ],
          merke: "Merke: Jede Telefonnotiz beantwortet wer, wann, was und für wen.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (Deutsch/Kommunikation); Themenvorschlag; Bezug Rahmenlehrplan LF 4 und LF 5 (Gesprächsführung)"
      },
      { id: "de-2-2", title: "Das Beschwerdegespräch",
        content: [
          { p: "Wer sich beschwert, ist oft verärgert. Der Ärger richtet sich meist nicht gegen dich persönlich. Ruhig bleiben und zuhören hilft am meisten." },
          { rules: [
            ["1. Zuhören", ["ausreden lassen", "nicht unterbrechen"]],
            ["2. Verständnis", ["„Ich verstehe, dass Sie das ärgert.“"]],
            ["3. Klären", ["Was genau ist passiert?", "Seit wann?"]],
            ["4. Lösung", ["nächsten Schritt nennen", "nur zusagen, was du halten kannst"]],
            ["5. Festhalten", ["Gespräch notieren", "Zusage einhalten"]]
          ] },
          { h: "Ich-Botschaften statt Du-Botschaften" },
          { ul: [
            "Statt „Sie haben das falsch verstanden.“",
            "besser „Ich habe mich vielleicht unklar ausgedrückt.“"
          ] },
          { ex: "Herr M. in Schwerin beschwert sich über Lärm im Treppenhaus. Lena lässt ihn ausreden. Dann sagt sie: „Ich verstehe, dass Sie das stört. Ich gebe es heute an Herrn Becker weiter. Er meldet sich bis Freitag.“" },
          { note: "Wird jemand beleidigend oder bedrohlich, darfst du das Gespräch freundlich beenden. Hol dir dann Hilfe bei deiner Ausbilderin oder deinem Ausbilder." }
        ],
        card: {
          title: "Beschwerdegespräch",
          rules: [
            ["1.", ["zuhören, ausreden lassen"]],
            ["2.", ["Verständnis zeigen"]],
            ["3.", ["Sachverhalt klären"]],
            ["4.", ["Lösung oder nächsten Schritt nennen"]],
            ["5.", ["notieren, Zusage einhalten"]],
            ["Ton", ["Ich-Botschaft statt Vorwurf"]]
          ],
          merke: "Merke: Nur versprechen, was du auch halten kannst.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (Deutsch/Kommunikation); Themenvorschlag; Bezug Rahmenlehrplan LF 5 (Konflikte lösen)"
      }
    ]},
    { id: "de-3", title: "Texte verstehen: Sachtexte, Verträge lesen", subs: [
      { id: "de-3-1", title: "Sachtexte und Verträge lesen",
        content: [
          { p: "Im Beruf liest du Verträge, Gesetze und Schreiben von Ämtern. Diese Texte sind oft lang und schwer. Mit einer festen Methode verstehst du sie besser." },
          { h: "Die Fünf-Schritt-Lesemethode" },
          { rules: [
            ["1. Überblick", ["Überschriften, Absätze, Fettes ansehen"]],
            ["2. Fragen", ["Was will ich wissen?"]],
            ["3. Lesen", ["genau lesen, Wichtiges markieren"]],
            ["4. Zusammenfassen", ["jeden Absatz in einem Satz"]],
            ["5. Wiederholen", ["Fragen aus Schritt 2 beantworten"]]
          ] },
          { h: "Einen Vertrag prüfen" },
          { ul: [
            "Wer sind die Vertragspartner?",
            "Worum geht es? (Gegenstand)",
            "Wer muss was leisten?",
            "Welche Fristen gelten?",
            "Wie endet der Vertrag?"
          ] },
          { h: "Gesetze richtig zitieren" },
          { ul: [
            "§ = Paragraf",
            "Abs. = Absatz",
            "Beispiel: § 535 Abs. 1 Satz 1 BGB"
          ] },
          { note: "Wörter aus der Rechtssprache: **„unverzüglich“** heißt „ohne schuldhaftes Zögern“ (§ 121 BGB). **Werktage** sind im Gesetz meist Montag bis Samstag." },
          { ex: "Lena liest einen Mietvertrag. Sie markiert Mieter, Vermieter, Miete, Kaution und Kündigungsfrist. Dann fasst sie jeden Abschnitt in einem Satz zusammen." }
        ],
        card: {
          title: "Texte und Verträge lesen",
          rules: [
            ["Methode", ["1. Überblick", "2. Fragen stellen", "3. genau lesen, markieren", "4. Absatz → ein Satz", "5. wiederholen"]],
            ["Vertrag", ["Partner, Gegenstand, Leistung", "Fristen, Ende"]],
            ["Zitat", ["§ 535 Abs. 1 Satz 1 BGB"]]
          ],
          merke: "Merke: „unverzüglich“ = ohne schuldhaftes Zögern (§ 121 BGB).",
          quelle: "§ 121 BGB · Themenvorschlag"
        },
        src: "§ 121 Abs. 1 BGB; BSVO M-V Anlage 1 (Deutsch/Kommunikation); Themenvorschlag"
      }
    ]},
    { id: "de-4", title: "Präsentieren und argumentieren", subs: [
      { id: "de-4-1", title: "Überzeugend argumentieren",
        content: [
          { p: "Ein gutes Argument hat drei Teile. So kannst du Kunden, Kollegen oder die Klasse überzeugen. Wie du präsentierst, lernst du auch in LF 1, Thema 6.2." },
          { rules: [
            ["Behauptung", ["Was ist deine Meinung?"]],
            ["Begründung", ["Warum ist das so?"]],
            ["Beispiel", ["Woran sieht man das?"]]
          ] },
          { ex: "Behauptung: Eine Mietkaution ist sinnvoll. Begründung: Sie sichert den Vermieter gegen offene Forderungen ab. Beispiel: Beschädigt ein Mieter beim Auszug die Tür, kann der Schaden mit der Kaution bezahlt werden." },
          { h: "Mit Einwänden umgehen" },
          { ul: [
            "Einwand ausreden lassen.",
            "Einwand ernst nehmen: „Das ist ein wichtiger Punkt.“",
            "Mit einem Argument antworten.",
            "Nicht persönlich werden."
          ] },
          { h: "Kurz präsentieren" },
          { ul: [
            "Einstieg: Thema und Ziel nennen.",
            "Hauptteil: höchstens drei Punkte.",
            "Schluss: Ergebnis wiederholen."
          ] },
          { note: "Das stärkste Argument stellst du meist an den Schluss. Das bleibt am besten im Kopf." }
        ],
        card: {
          title: "Argumentieren",
          rules: [
            ["Argument", ["Behauptung", "Begründung", "Beispiel"]],
            ["Einwand", ["ausreden lassen", "ernst nehmen, dann antworten"]],
            ["Vortrag", ["Einstieg: Thema, Ziel", "Hauptteil: max. drei Punkte", "Schluss: Ergebnis"]]
          ],
          merke: "Merke: Behauptung + Begründung + Beispiel = überzeugendes Argument.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (Deutsch/Kommunikation); Themenvorschlag; Bezug Rahmenlehrplan LF 1 (Präsentation); Kaution: § 551 BGB"
      }
    ]},
    { id: "de-5", title: "Rechtschreibung und Zeichensetzung im Beruf", subs: [
      { id: "de-5-1", title: "Typische Fehler vermeiden",
        content: [
          { p: "Fehler in einem Brief wirken unprofessionell. Ein paar Regeln helfen schon viel. Im Zweifel schlägst du im Duden nach." },
          { rules: [
            ["das / dass", ["„das“ kannst du durch „dieses“ oder „welches“ ersetzen", "sonst „dass“"]],
            ["Komma", ["vor „dass“, „weil“, „obwohl“, „wenn“", "zwischen Hauptsatz und Nebensatz"]],
            ["Anrede", ["Sie, Ihnen, Ihr → immer groß", "du, dich, dein → klein, im Brief auch groß"]],
            ["Zeit", ["am Montag, heute Abend → groß", "montags, abends → klein"]],
            ["Bindestrich", ["Zahl + Wort: 3-Zimmer-Wohnung", "Abkürzung + Wort: Kfz-Stellplatz"]]
          ] },
          { ex: "Falsch: „Wir teilen ihnen mit das die Wohnung frei ist.“ Richtig: „Wir teilen Ihnen mit, dass die Wohnung frei ist.“" },
          { h: "Oft verwechselt" },
          { ul: [
            "seit (Zeit: seit Montag) – seid (ihr seid)",
            "wider (gegen: Widerspruch) – wieder (noch einmal)",
            "endgültig (von Ende) – nicht „entgültig“"
          ] },
          { note: "Die Rechtschreibprüfung im Computer findet nicht alles. „das“ statt „dass“ erkennt sie oft nicht. Lies jeden Brief vor dem Absenden noch einmal." }
        ],
        card: {
          title: "Rechtschreibung im Beruf",
          bullets: [
            "„das“ = dieses/welches, sonst „dass“",
            "Komma vor dass, weil, obwohl",
            "Sie, Ihnen, Ihr → immer groß",
            "am Montag → groß",
            "montags → klein",
            "3-Zimmer-Wohnung",
            "seit (Zeit) – seid (ihr seid)",
            "wider = gegen, wieder = nochmals"
          ],
          merke: "Merke: Vor dem Absenden jeden Brief noch einmal selbst lesen.",
          quelle: "Amtliche Rechtschreibregeln · Duden"
        },
        src: "Amtliches Regelwerk des Rats für deutsche Rechtschreibung; Duden; BSVO M-V Anlage 1; Themenvorschlag"
      }
    ]}
  ]
});
