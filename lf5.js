window.IMMO = window.IMMO || [];
window.IMMO.push({
  id: "lf5",
  kind: "lf",
  nr: 5,
  title: "Wohnräume verwalten und Bestände pflegen",
  short: "LF 5 · Wohnräume verwalten",
  hours: "100 Stunden (Richtwert)",
  intro: "Du betreust Mieter vom Einzug bis zum Auszug. Du rechnest Betriebs- und Heizkosten ab, kümmerst dich um Schäden, Modernisierung, Mieterhöhung und Mietrückstände und buchst die Vorgänge.",
  source: "KMK-Rahmenlehrplan 2006, Lernfeld 5",
  topics: [
    { id: "lf5-1", title: "Mieter betreuen", subs: [
      { id: "lf5-1-1", title: "Mieter- und Objektakte",
        content: [
          { p: "In der Verwaltung gibt es zwei Arten von Akten. Die **Mieterakte** sammelt alles zu einem Mietverhältnis. Die **Objektakte** sammelt alles zu einem Gebäude." },
          { h: "Was hineingehört" },
          { rules: [
            ["Mieterakte", ["Mietvertrag mit Nachträgen", "Übergabeprotokoll", "Kautionsnachweis", "Mieterhöhungen", "Betriebskostenabrechnungen", "Schriftverkehr"]],
            ["Objektakte", ["Grundbuchauszug, Lagepläne", "Wohnflächenberechnung", "Wartungs- und Versicherungsverträge", "Grundsteuerbescheid", "Rechnungen zu Reparaturen"]]
          ] },
          { p: "Die Akten enthalten **personenbezogene Daten**. Dafür gilt die **Datenschutz-Grundverordnung (DSGVO)**. Speichere nur, was du für das Mietverhältnis brauchst." },
          { ul: ["Nur Berechtigte dürfen die Akte sehen.", "Daten werden gelöscht, wenn der Zweck entfällt.", "Gesetzliche Aufbewahrungsfristen gehen vor."] },
          { h: "Aufbewahrungsfristen (Stand 2026)" },
          { rules: [
            ["Bücher, Jahresabschlüsse", ["10 Jahre"]],
            ["Buchungsbelege (z. B. Rechnungen)", ["8 Jahre (seit 2025)"]],
            ["Handels- und Geschäftsbriefe", ["6 Jahre"]]
          ] },
          { ex: "Frau K. zieht in Schwerin aus. Ihre Mieterakte wird geschlossen. Rechnungen und Abrechnungen bleiben bis zum Fristende archiviert. Ihre Telefonnummer wird gelöscht, wenn nichts mehr offen ist." },
          { note: "Die Frist beginnt mit dem Ende des Kalenderjahres, in dem das Dokument entstanden ist." }
        ],
        card: {
          title: "Mieter- und Objektakte",
          rules: [
            ["Mieterakte", ["alles zu einem Mietverhältnis", "Vertrag, Protokoll, Kaution"]],
            ["Objektakte", ["alles zu einem Gebäude", "Pläne, Verträge, Bescheide"]],
            ["Aufbewahrung", ["Bücher → 10 Jahre", "Buchungsbelege → 8 Jahre", "Geschäftsbriefe → 6 Jahre"]],
            ["Datenschutz", ["nur Nötiges speichern", "nur Berechtigte sehen es"]]
          ],
          merke: "Merke: Akte vollständig führen – aber nur Daten, die du wirklich brauchst.",
          quelle: "DSGVO Art. 5 · HGB § 257 · AO § 147 · RLP LF 5"
        },
        src: "Rahmenlehrplan Lernfeld 5 („Mieter- und Objektakten“); DSGVO Art. 5, 17; HGB § 257; AO § 147 (Fristen in der Fassung ab 01.01.2025)"
      },
      { id: "lf5-1-2", title: "Mieteranfragen und Mietergespräche",
        content: [
          { p: "Mieter melden sich mit Fragen, Wünschen und Beschwerden. Du bist dann die **Visitenkarte** des Unternehmens. Freundlich, sachlich und schnell zu antworten, schafft Vertrauen." },
          { h: "So führst du ein Mietergespräch" },
          { rules: [
            ["1. Begrüßen", ["Namen nennen", "Zeit nehmen"]],
            ["2. Zuhören", ["ausreden lassen", "Fragen stellen", "Notizen machen"]],
            ["3. Zusammenfassen", ["„Habe ich richtig verstanden, dass …?“"]],
            ["4. Lösung", ["nächsten Schritt nennen", "Termin oder Frist zusagen"]],
            ["5. Dokumentieren", ["Vermerk in die Mieterakte"]]
          ] },
          { ul: ["Versprich nur, was du halten kannst.", "Rechtsfragen gibst du an die zuständige Stelle weiter.", "Wichtige Zusagen bestätigst du in Textform (E-Mail, Brief)."] },
          { h: "Fremdsprachige Mieter" },
          { ul: ["How can I help you? – Wie kann ich helfen?", "Could you spell your name, please? – Buchstabieren Sie bitte.", "We will send a technician. – Wir schicken einen Techniker.", "I will call you back tomorrow. – Ich rufe Sie morgen zurück."] },
          { ex: "Ein Mieter in Rostock ruft an: Die Klingel geht nicht. Du fragst nach Hausnummer und Wohnung. Du sagst zu, dass sich der Elektriker bis Freitag meldet. Danach legst du einen Vermerk an." },
          { note: "Bleib ruhig, auch wenn der Mieter laut wird. Ärger richtet sich meist gegen die Sache, nicht gegen dich." }
        ],
        card: {
          title: "Mietergespräch führen",
          bullets: ["1. Begrüßen, Namen nennen", "2. Zuhören, ausreden lassen", "3. Anliegen zusammenfassen", "4. Lösung und Termin nennen", "5. Vermerk in die Mieterakte", "Zusagen in Textform bestätigen", "Nur versprechen, was du hältst"],
          merke: "Merke: Zuhören, zusammenfassen, Lösung nennen, dokumentieren.",
          quelle: "KMK-RLP LF 5 (Mietergespräche)"
        },
        src: "Rahmenlehrplan Lernfeld 5 („bearbeiten Mieteranfragen und führen kundenorientiert Mietergespräche“, „Fremdsprachige Kommunikation“)"
      },
      { id: "lf5-1-3", title: "Soziales Management und Hilfe (z. B. Wohngeld, Schuldnerberatung)",
        content: [
          { p: "**Soziales Management** heißt: Du erkennst Probleme früh und zeigst Wege zur Hilfe. So bleibt die Wohnung erhalten. Das Unternehmen vermeidet Mietausfall und Räumung." },
          { h: "Wer helfen kann" },
          { rules: [
            ["Wohngeldstelle", ["Zuschuss zur Miete", "für Haushalte mit geringem Einkommen", "Antrag stellt der Mieter"]],
            ["Jobcenter / Sozialamt", ["übernimmt Kosten der Unterkunft", "kann Mietschulden übernehmen (oft als Darlehen)"]],
            ["Schuldnerberatung", ["kostenlos bei Wohlfahrtsverbänden", "ordnet Schulden, plant Raten"]],
            ["Weitere Stellen", ["Pflegedienst, Betreuer", "Mieterverein"]]
          ] },
          { ul: ["Sprich den Mieter früh und vertraulich an.", "Gib Adressen weiter, entscheide nicht für ihn.", "Ohne Einwilligung gibst du keine Daten an Behörden."] },
          { ex: "Herr T. in Waren zahlt seit zwei Monaten nur einen Teil der Miete. Er hat seine Arbeit verloren. Du nennst ihm die Wohngeldstelle und die Schuldnerberatung. Ihr vereinbart eine Ratenzahlung." },
          { note: "Wohngeldbeträge und Einkommensgrenzen ändern sich. Lass sie den Mieter bei der Wohngeldstelle prüfen." },
          { warn: "Welche Beratungsstellen es vor Ort gibt, ist von Stadt zu Stadt verschieden. Frag im Betrieb nach der Liste." }
        ],
        card: {
          title: "Soziales Management",
          rules: [
            ["Ziel", ["Wohnung erhalten", "Mietausfall vermeiden"]],
            ["Wohngeldstelle", ["Zuschuss zur Miete"]],
            ["Jobcenter / Sozialamt", ["Kosten der Unterkunft", "evtl. Mietschulden (Darlehen)"]],
            ["Schuldnerberatung", ["Schulden ordnen, Raten planen"]],
            ["Datenschutz", ["Daten nur mit Einwilligung"]]
          ],
          merke: "Merke: Früh ansprechen und Wege zeigen – der Mieter entscheidet selbst.",
          quelle: "WoGG · SGB II § 22 · RLP LF 5"
        },
        src: "Rahmenlehrplan Lernfeld 5 („Unterstützungsmöglichkeiten“, „Methoden des Sozialen Managements“); Wohngeldgesetz; SGB II § 22; SGB XII § 36"
      }
    ]},
    { id: "lf5-2", title: "Betriebskosten", subs: [
      { id: "lf5-2-1", title: "Was sind Betriebskosten? (Betriebskostenverordnung)",
        content: [
          { p: "**Betriebskosten** sind laufende Kosten, die durch das Eigentum am Haus entstehen. Der Vermieter darf sie auf den Mieter umlegen, wenn es im Mietvertrag vereinbart ist. Welche Kosten das sind, steht in der **Betriebskostenverordnung (BetrKV)**." },
          { h: "Die Kostenarten nach § 2 BetrKV" },
          { ul: ["1. Grundsteuer", "2. Wasserversorgung", "3. Entwässerung (Abwasser)", "4. Heizung", "5. Warmwasser", "6. verbundene Heizungs- und Warmwasseranlagen", "7. Aufzug", "8. Straßenreinigung und Müllbeseitigung", "9. Gebäudereinigung und Ungezieferbekämpfung", "10. Gartenpflege", "11. Beleuchtung (Allgemeinstrom)", "12. Schornsteinreinigung", "13. Sach- und Haftpflichtversicherung", "14. Hauswart", "15. Antenne bzw. Verteilanlage", "16. Wäschepflege (Gemeinschaftswaschraum)", "17. sonstige Betriebskosten (müssen im Vertrag genannt sein)"] },
          { h: "Keine Betriebskosten" },
          { ul: ["Verwaltungskosten", "Instandhaltung und Instandsetzung (Reparaturen)", "Kosten für Leerstand"] },
          { note: "Kabelfernsehen: Seit 1. Juli 2024 darf das Entgelt für den Kabelanschluss nicht mehr über die Betriebskosten umgelegt werden." },
          { ex: "Die Hausverwaltung in Rostock bekommt eine Rechnung über einen neuen Briefkasten. Das ist eine Reparatur. Sie gehört nicht in die Betriebskostenabrechnung." }
        ],
        card: {
          title: "Betriebskosten (BetrKV § 2)",
          bullets: ["laufende Kosten des Hauses", "nur umlegbar, wenn vereinbart", "17 Kostenarten in § 2 BetrKV", "z. B. Grundsteuer, Wasser, Müll", "z. B. Hauswart, Versicherung", "nicht: Verwaltungskosten", "nicht: Reparaturen", "Kabel-TV seit 07/2024 nicht mehr"],
          merke: "Merke: Umlegbar ist nur, was in § 2 BetrKV steht und vereinbart ist.",
          quelle: "BetrKV §§ 1, 2 · BGB § 556 · RLP LF 5"
        },
        src: "Betriebskostenverordnung §§ 1, 2; BGB § 556 Abs. 1; Telekommunikationsmodernisierungsgesetz 2021 (Übergangsfrist für das Kabelentgelt bis 30.06.2024); Rahmenlehrplan Lernfeld 5"
      },
      { id: "lf5-2-2", title: "Umlageschlüssel",
        content: [
          { p: "Ein **Umlageschlüssel** legt fest, wie die Kosten des Hauses auf die Wohnungen verteilt werden. Steht im Vertrag nichts, gilt die **Wohnfläche** (§ 556a BGB)." },
          { p: "Kosten, die nach **erfasstem Verbrauch** entstehen, verteilt man nach Verbrauch. Ein Beispiel ist Wasser mit Wohnungszählern." },
          { h: "Übliche Schlüssel" },
          { rules: [
            ["Wohnfläche", ["gesetzlicher Regelfall", "z. B. Grundsteuer, Versicherung"]],
            ["Personen", ["muss vereinbart sein", "z. B. Müll"]],
            ["Wohneinheiten", ["jede Wohnung gleich viel", "z. B. Kabelverteilanlage"]],
            ["Verbrauch", ["nach Zählerstand", "z. B. Wasser, Heizung"]]
          ] },
          { calc: { title: "Rechenbeispiel: Grundsteuer nach Fläche", rows: [
            { label: "Grundsteuer des Hauses", n: "1.800,00 €" },
            { op: ":", label: "Gesamtwohnfläche", n: "600,00 m²" },
            { op: "=", label: "Kosten je m²", n: "3,00 €/m²", t: "sub" },
            { op: "×", label: "Wohnfläche Frau K.", n: "75,00 m²" },
            { op: "=", label: "Anteil Frau K.", n: "225,00 €", t: "sum" }
          ] } },
          { calc: { title: "Rechenbeispiel: Müll nach Personen", rows: [
            { label: "Müllgebühr des Hauses", n: "1.440,00 €" },
            { op: ":", label: "Personen im Haus", n: "24" },
            { op: "=", label: "Kosten je Person", n: "60,00 €", t: "sub" },
            { op: "×", label: "Personen bei Familie S.", n: "3" },
            { op: "=", label: "Anteil Familie S.", n: "180,00 €", t: "sum" }
          ] } },
          { note: "Den Schlüssel darfst du nicht einfach wechseln. Eine Änderung braucht eine Vereinbarung oder eine gesetzliche Grundlage (z. B. Umstellung auf Verbrauch nach § 556a Abs. 2 BGB)." }
        ],
        card: {
          title: "Umlageschlüssel",
          bullets: ["ohne Vereinbarung → Wohnfläche", "Verbrauch erfasst → nach Verbrauch", "Personen → nur wenn vereinbart"],
          calc: { title: "Rechnung: Grundsteuer", rows: [
            { label: "Grundsteuer Haus", n: "1.800,00 €" },
            { op: ":", label: "Gesamtfläche", n: "600 m²" },
            { op: "=", label: "je m²", n: "3,00 €", t: "sub" },
            { op: "×", label: "Wohnung Frau K.", n: "75 m²" },
            { op: "=", label: "Anteil", n: "225,00 €", t: "sum" }
          ] },
          merke: "Merke: Kosten : Gesamtschlüssel × Anteil der Wohnung.",
          quelle: "BGB § 556a · RLP LF 5"
        },
        src: "BGB § 556a Abs. 1 und 2; Rahmenlehrplan Lernfeld 5 („erstellen Betriebs- und Heizkostenabrechnungen“)"
      },
      { id: "lf5-2-3", title: "Die Abrechnung: Fristen und Inhalt",
        content: [
          { p: "Zahlt der Mieter **Vorauszahlungen**, muss der Vermieter einmal im Jahr abrechnen. Er stellt die tatsächlichen Kosten den Vorauszahlungen gegenüber. Daraus ergibt sich eine **Nachzahlung** oder ein **Guthaben**." },
          { h: "Fristen (§ 556 Abs. 3 BGB)" },
          { rules: [
            ["Abrechnungszeitraum", ["höchstens 12 Monate"]],
            ["Vermieter", ["Abrechnung muss spätestens 12 Monate nach Ende des Zeitraums zugehen", "danach keine Nachforderung mehr (Ausnahme: Verspätung nicht verschuldet)"]],
            ["Mieter", ["Einwände bis 12 Monate nach Zugang"]]
          ] },
          { h: "Pflichtinhalt" },
          { ul: ["Gesamtkosten des Hauses je Kostenart", "Umlageschlüssel", "Anteil der Wohnung", "Abzug der Vorauszahlungen", "Ergebnis: Nachzahlung oder Guthaben"] },
          { calc: { title: "Abrechnung 2025 für Wohnung 3 (70 m² von 700 m² = 10 %)", rows: [
            { label: "Grundsteuer: 2.100,00 €", f: "× 10 %", n: "210,00 €" },
            { op: "+", label: "Wasser/Abwasser: 4.200,00 €", f: "× 10 %", n: "420,00 €" },
            { op: "+", label: "Müll: 1.500,00 €", f: "× 10 %", n: "150,00 €" },
            { op: "+", label: "Hausreinigung: 2.400,00 €", f: "× 10 %", n: "240,00 €" },
            { op: "+", label: "Versicherung: 1.800,00 €", f: "× 10 %", n: "180,00 €" },
            { op: "=", label: "Kostenanteil der Wohnung", n: "1.200,00 €", t: "sub" },
            { op: "–", label: "Vorauszahlungen: 12 × 95,00 €", n: "1.140,00 €" },
            { op: "=", label: "Nachzahlung des Mieters", n: "60,00 €", t: "sum" }
          ] } },
          { ex: "Die Abrechnung für 2025 muss der Mieterin in Schwerin bis 31.12.2026 zugehen. Kommt sie erst im Januar 2027, darf die Nachzahlung von 60,00 € nicht mehr verlangt werden. Ein Guthaben muss trotzdem ausgezahlt werden." },
          { note: "Nach der Abrechnung dürfen die Vorauszahlungen in angemessener Höhe angepasst werden (§ 560 Abs. 4 BGB)." }
        ],
        card: {
          title: "Betriebskostenabrechnung",
          bullets: ["Zeitraum max. 12 Monate", "Zugang bis 12 Monate nach Ende", "sonst keine Nachforderung", "Mieter: Einwände bis 12 Monate"],
          calc: { title: "Rechnung: Wohnung 3", rows: [
            { label: "Kostenanteil (10 %)", n: "1.200,00 €" },
            { op: "–", label: "Vorauszahlung 12 × 95 €", n: "1.140,00 €" },
            { op: "=", label: "Nachzahlung", n: "60,00 €", t: "sum" }
          ] },
          merke: "Merke: Abrechnung 2025 muss bis 31.12.2026 beim Mieter sein.",
          quelle: "BGB §§ 556 Abs. 3, 560 · RLP LF 5"
        },
        src: "BGB § 556 Abs. 3, § 560 Abs. 4; Rahmenlehrplan Lernfeld 5 („rechnen mit den Mietern entsprechend der rechtlichen Vorgaben ab“)"
      },
      { id: "lf5-2-4", title: "Grundsteuer",
        content: [
          { p: "Die **Grundsteuer** zahlt der Eigentümer an die Gemeinde. Sie ist die erste Kostenart in § 2 BetrKV. Deshalb darf sie auf die Mieter umgelegt werden." },
          { p: "Seit **1. Januar 2025** gilt die neue Grundsteuer. Mecklenburg-Vorpommern wendet das **Bundesmodell** an. Das Finanzamt stellt den Wert fest, die Gemeinde erhebt die Steuer." },
          { h: "Drei Schritte" },
          { rules: [
            ["1. Finanzamt", ["Grundsteuerwert feststellen"]],
            ["2. Finanzamt", ["Wert × Steuermesszahl", "→ Grundsteuermessbetrag"]],
            ["3. Gemeinde", ["Messbetrag × Hebesatz", "→ Grundsteuer (Bescheid)"]]
          ] },
          { calc: { title: "Rechenbeispiel: Mietwohnhaus (Beispielwerte)", rows: [
            { label: "Grundsteuerwert", n: "150.000,00 €" },
            { op: "×", label: "Steuermesszahl Wohnen", f: "0,31 ‰", n: "" },
            { op: "=", label: "Grundsteuermessbetrag", n: "46,50 €", t: "sub" },
            { op: "×", label: "Hebesatz der Gemeinde", f: "500 %", n: "" },
            { op: "=", label: "Grundsteuer im Jahr", n: "232,50 €", t: "sum" }
          ] } },
          { ul: ["Grundsteuer B: für bebaute und bebaubare Grundstücke.", "Grundsteuer A: für Land- und Forstwirtschaft.", "Fällig meist vierteljährlich: 15.2., 15.5., 15.8., 15.11."] },
          { warn: "Den Hebesatz legt jede Gemeinde selbst fest. Nimm immer den Wert aus dem aktuellen Grundsteuerbescheid." }
        ],
        card: {
          title: "Grundsteuer (seit 2025)",
          bullets: ["Eigentümer zahlt an Gemeinde", "umlegbar: BetrKV § 2 Nr. 1", "MV: Bundesmodell"],
          calc: { title: "Rechnung (Beispiel)", rows: [
            { label: "Grundsteuerwert", n: "150.000,00 €" },
            { op: "×", label: "Messzahl 0,31 ‰", n: "" },
            { op: "=", label: "Messbetrag", n: "46,50 €", t: "sub" },
            { op: "×", label: "Hebesatz 500 %", n: "" },
            { op: "=", label: "Grundsteuer/Jahr", n: "232,50 €", t: "sum" }
          ] },
          merke: "Merke: Wert × Messzahl × Hebesatz = Grundsteuer.",
          quelle: "GrStG §§ 13, 15, 25, 28 · BetrKV § 2"
        },
        src: "Grundsteuergesetz §§ 13, 15 Abs. 1 Nr. 2 Buchst. a, 25, 28; Bewertungsgesetz §§ 218 ff.; BetrKV § 2 Nr. 1; Rahmenlehrplan Lernfeld 5 („Grundsteuer“)"
      },
      { id: "lf5-2-5", title: "Sparen: Grundsatz der Wirtschaftlichkeit",
        content: [
          { p: "Der Vermieter darf nur Kosten umlegen, die **wirtschaftlich** sind. Er muss also auf ein vernünftiges Verhältnis von Preis und Leistung achten. So steht es in § 556 Abs. 3 BGB und § 560 Abs. 5 BGB." },
          { h: "So sparst du Betriebskosten" },
          { ul: ["Angebote vergleichen, bevor Verträge verlängert werden.", "Leistungen prüfen: Wird wirklich so oft gereinigt?", "Müll trennen, Tonnengröße anpassen.", "Allgemeinstrom: LED und Bewegungsmelder.", "Wasserverbrauch: Leckagen schnell beheben."] },
          { calc: { title: "Rechenbeispiel: neuer Hauswartvertrag (10 Wohnungen)", rows: [
            { label: "Bisheriger Vertrag im Jahr", n: "3.600,00 €" },
            { op: "–", label: "Neues Angebot im Jahr", n: "3.000,00 €" },
            { op: "=", label: "Ersparnis Haus", n: "600,00 €", t: "sub" },
            { op: ":", label: "Wohnungen (gleich groß)", n: "10" },
            { op: "=", label: "Ersparnis je Wohnung", n: "60,00 €", t: "sum" }
          ] } },
          { ex: "In Waren holt die Verwaltung drei Angebote für die Gartenpflege ein. Sie wählt das günstigste mit gleicher Leistung. Das dokumentiert sie in der Objektakte." },
          { note: "Ist eine Kostenart deutlich zu teuer, kann der Mieter den überhöhten Teil zurückfordern. Gute Belege schützen das Unternehmen." }
        ],
        card: {
          title: "Grundsatz der Wirtschaftlichkeit",
          bullets: ["nur angemessene Kosten umlegen", "Angebote vergleichen", "Leistungen prüfen"],
          calc: { title: "Rechnung: Hauswart", rows: [
            { label: "Alter Vertrag", n: "3.600,00 €" },
            { op: "–", label: "Neues Angebot", n: "3.000,00 €" },
            { op: "=", label: "Ersparnis Haus", n: "600,00 €", t: "sub" },
            { op: ":", label: "10 Wohnungen", n: "10" },
            { op: "=", label: "je Wohnung", n: "60,00 €", t: "sum" }
          ] },
          merke: "Merke: Wie mit eigenem Geld wirtschaften – sonst zahlt der Mieter nicht.",
          quelle: "BGB §§ 556 Abs. 3, 560 Abs. 5 · RLP LF 5"
        },
        src: "BGB § 556 Abs. 3 Satz 1, § 560 Abs. 5; Rahmenlehrplan Lernfeld 5 („Grundsatz der Wirtschaftlichkeit“, „Einsparpotenziale“)"
      }
    ]},
    { id: "lf5-3", title: "Heizkosten", subs: [
      { id: "lf5-3-1", title: "Heizkostenverordnung: Verbrauch und Fläche",
        content: [
          { p: "Bei einer Zentralheizung gilt die **Heizkostenverordnung (HeizkostenV)**. Sie verlangt, dass der Verbrauch jeder Wohnung erfasst wird. Die Kosten werden dann zum Teil nach **Verbrauch** und zum Teil nach **Fläche** verteilt." },
          { h: "Verteilung (§§ 7, 8 HeizkostenV)" },
          { rules: [
            ["Heizung", ["50 bis 70 % nach Verbrauch", "Rest nach Fläche (Grundkosten)"]],
            ["Warmwasser", ["50 bis 70 % nach Verbrauch", "Rest nach Fläche"]],
            ["Pflicht 70 %", ["in bestimmten Altbauten mit Öl- oder Gasheizung (§ 7 Abs. 1 Satz 2)"]]
          ] },
          { p: "Den Verbrauch messen **Heizkostenverteiler** am Heizkörper oder **Wärmezähler**. Die Messwerte heißen oft **Einheiten**." },
          { calc: { title: "Grundkosten: 30 % nach Fläche", rows: [
            { label: "Heizkosten des Hauses", n: "10.000,00 €" },
            { op: "×", label: "Anteil Grundkosten", f: "30 %", n: "3.000,00 €" },
            { op: ":", label: "Gesamtfläche", n: "800,00 m²" },
            { op: "=", label: "Grundkosten je m²", n: "3,75 €/m²", t: "sub" },
            { op: "×", label: "Wohnung Familie B.", n: "80,00 m²" },
            { op: "=", label: "Grundkosten Wohnung", n: "300,00 €", t: "sum" }
          ] } },
          { calc: { title: "Verbrauchskosten: 70 % nach Einheiten", rows: [
            { label: "Heizkosten des Hauses", n: "10.000,00 €" },
            { op: "×", label: "Anteil Verbrauch", f: "70 %", n: "7.000,00 €" },
            { op: ":", label: "Einheiten im Haus", n: "20.000" },
            { op: "=", label: "Kosten je Einheit", n: "0,35 €", t: "sub" },
            { op: "×", label: "Einheiten Familie B.", n: "1.800" },
            { op: "=", label: "Verbrauchskosten Wohnung", n: "630,00 €", t: "sum" }
          ] } },
          { calc: { title: "Heizkosten der Wohnung", rows: [
            { label: "Grundkosten", n: "300,00 €" },
            { op: "+", label: "Verbrauchskosten", n: "630,00 €" },
            { op: "=", label: "Heizkosten Familie B.", n: "930,00 €", t: "sum" }
          ] } },
          { note: "Der Vermieter wählt den Prozentsatz innerhalb der Spanne. Ändern darf er ihn nur aus sachlichem Grund und nur für künftige Zeiträume (§ 6 Abs. 4 HeizkostenV)." }
        ],
        card: {
          title: "Heizkosten verteilen",
          bullets: ["50–70 % nach Verbrauch", "Rest nach Fläche (Grundkosten)", "Beispiel: 70 % / 30 %"],
          calc: { title: "Rechnung: Familie B.", rows: [
            { label: "Grund: 3,75 €/m² × 80 m²", n: "300,00 €" },
            { op: "+", label: "Verbr.: 0,35 € × 1.800", n: "630,00 €" },
            { op: "=", label: "Heizkosten Wohnung", n: "930,00 €", t: "sum" }
          ] },
          merke: "Merke: Wer mehr heizt, zahlt mehr – aber nie 100 % nach Verbrauch.",
          quelle: "HeizkostenV §§ 4, 6, 7, 8 · RLP LF 5"
        },
        src: "Heizkostenverordnung §§ 4, 6, 7, 8, 9; Rahmenlehrplan Lernfeld 5 („erstellen Betriebs- und Heizkostenabrechnungen“)"
      },
      { id: "lf5-3-2", title: "Heizkostenabrechnung lesen",
        content: [
          { p: "Die Heizkostenabrechnung erstellt oft ein **Messdienst**. Du musst sie trotzdem prüfen und dem Mieter erklären können. Sie ist Teil der Betriebskostenabrechnung." },
          { h: "Was du prüfst" },
          { ul: ["Gesamtkosten: Brennstoff, Wartung, Strom der Heizung, Messdienst", "Aufteilung Heizung und Warmwasser", "Prozentsatz Verbrauch und Fläche", "Fläche und Einheiten der Wohnung", "abgezogene Vorauszahlungen"] },
          { p: "**Kürzungsrecht:** Rechnet der Vermieter nicht nach Verbrauch ab, darf der Mieter seinen Anteil um **15 %** kürzen (§ 12 HeizkostenV)." },
          { calc: { title: "Rechenbeispiel: Kürzung um 15 %", rows: [
            { label: "Heizkosten nach Fläche", n: "930,00 €" },
            { op: "–", label: "Kürzung durch Mieter", f: "15 %", n: "139,50 €" },
            { op: "=", label: "Mieter muss zahlen", n: "790,50 €", t: "sum" }
          ] } },
          { p: "**CO2-Kosten:** Bei Öl und Gas fällt ein **CO2-Preis** an. Nach dem **CO2-Kostenaufteilungsgesetz** tragen Vermieter und Mieter ihn gemeinsam. Je schlechter das Haus gedämmt ist, desto mehr zahlt der Vermieter (10-Stufen-Modell)." },
          { rules: [
            ["unter 12 kg CO2/m²", ["Vermieter 0 %"]],
            ["22 bis unter 27 kg", ["Vermieter 30 %"]],
            ["32 bis unter 37 kg", ["Vermieter 50 %"]],
            ["52 kg und mehr", ["Vermieter 95 %"]]
          ] },
          { calc: { title: "Rechenbeispiel: CO2-Kosten (Haus mit 25 kg CO2/m²)", rows: [
            { label: "CO2-Kosten des Hauses", n: "1.200,00 €" },
            { op: "–", label: "Anteil Vermieter", f: "30 %", n: "360,00 €" },
            { op: "=", label: "Anteil aller Mieter", n: "840,00 €", t: "sum" }
          ] } },
          { note: "Fernablesbare Messgeräte: Ältere Geräte müssen bis Ende 2026 grundsätzlich nachgerüstet oder ersetzt werden (§ 5 Abs. 2 HeizkostenV)." }
        ],
        card: {
          title: "Heizkostenabrechnung lesen",
          rules: [
            ["Prüfen", ["Gesamtkosten, Aufteilung", "Fläche, Einheiten, Vorauszahlung"]],
            ["Kürzung", ["ohne Verbrauchsabrechnung → 15 %"]],
            ["CO2-Kosten", ["Stufenmodell nach kg CO2/m²", "unter 12 kg → Vermieter 0 %", "52 kg und mehr → Vermieter 95 %"]]
          ],
          merke: "Merke: Schlechte Dämmung → Vermieter trägt mehr CO2-Kosten.",
          quelle: "HeizkostenV §§ 5, 12 · CO2KostAufG § 5"
        },
        src: "Heizkostenverordnung §§ 5 Abs. 2, 7, 12; Kohlendioxidkostenaufteilungsgesetz § 5 mit Anlage (Stufenmodell); Rahmenlehrplan Lernfeld 5"
      }
    ]},
    { id: "lf5-4", title: "Schäden und Instandhaltung", subs: [
      { id: "lf5-4-1", title: "Instandhaltung und Instandsetzung",
        content: [
          { p: "Der Vermieter muss die Wohnung während der Mietzeit in gutem Zustand **erhalten** (§ 535 Abs. 1 BGB). Das Gesetz nennt das **Erhaltung**. Sie umfasst Instandhaltung und Instandsetzung." },
          { rules: [
            ["Instandhaltung", ["vorbeugen, bevor etwas kaputtgeht", "z. B. Heizung warten, Dachrinne reinigen"]],
            ["Instandsetzung", ["reparieren, was kaputt ist", "z. B. Rohrbruch beheben"]],
            ["Modernisierung", ["etwas verbessern", "z. B. Dämmung, Aufzug"]]
          ] },
          { ul: ["Erhaltungskosten trägt der Vermieter.", "Sie sind keine Betriebskosten.", "Sie erhöhen nicht die Miete."] },
          { h: "Kleinreparaturen" },
          { p: "Im Mietvertrag kann eine **Kleinreparaturklausel** stehen. Dann zahlt der Mieter kleine Reparaturen an Teilen, die er oft benutzt. Die Klausel muss einen Höchstbetrag je Reparatur und je Jahr nennen." },
          { ex: "In einer Wohnung in Rostock tropft der Wasserhahn. Der Mietvertrag hat eine wirksame Kleinreparaturklausel. Die Reparatur liegt unter dem Höchstbetrag. Dann trägt der Mieter die Kosten." },
          { note: "Wird ein Mangel nicht behoben, darf der Mieter die Miete mindern (§ 536 BGB). Schnelles Handeln spart also Geld." }
        ],
        card: {
          title: "Instandhaltung / Instandsetzung",
          rules: [
            ["Instandhaltung", ["vorbeugen (warten, pflegen)"]],
            ["Instandsetzung", ["reparieren, was kaputt ist"]],
            ["Modernisierung", ["verbessern"]],
            ["Kosten", ["Erhaltung → Vermieter", "keine Betriebskosten"]],
            ["Kleinreparatur", ["nur mit Klausel", "Höchstbetrag je Fall und Jahr"]]
          ],
          merke: "Merke: Erhalten zahlt der Vermieter – verbessern kann die Miete erhöhen.",
          quelle: "BGB §§ 535, 536, 555a · RLP LF 5"
        },
        src: "BGB § 535 Abs. 1, § 536, § 555a; BetrKV § 1 Abs. 2 Nr. 2; Rahmenlehrplan Lernfeld 5 („Instandhaltung, Instandsetzung“)"
      },
      { id: "lf5-4-2", title: "Schadensmeldung bearbeiten",
        content: [
          { p: "Der Mieter muss Schäden sofort melden (**Anzeigepflicht**, § 536c BGB). Meldet er zu spät, kann er für Folgeschäden haften. Deine Aufgabe: die Meldung schnell und vollständig bearbeiten." },
          { h: "Ablauf" },
          { rules: [
            ["1. Aufnehmen", ["Wer? Wo? Was? Seit wann?", "Fotos erbitten"]],
            ["2. Dringlichkeit", ["Notfall: Wasser, Gas, Strom, Heizung im Winter", "sonst: normaler Auftrag"]],
            ["3. Ursache", ["Verschleiß → Vermieter", "Verschulden Mieter → Mieter"]],
            ["4. Versicherung", ["Gebäudeversicherung prüfen", "Schaden melden"]],
            ["5. Auftrag", ["Handwerker beauftragen", "Termin mit Mieter abstimmen"]],
            ["6. Kontrolle", ["Arbeit abnehmen", "Rechnung prüfen"]]
          ] },
          { ex: "Montagmorgen meldet eine Mieterin in Schwerin Wasser an der Decke. Du schickst sofort den Notdienst. Danach meldest du den Leitungswasserschaden der Gebäudeversicherung." },
          { note: "Halte jeden Schritt mit Datum in der Akte fest. Die Versicherung verlangt oft Nachweise." }
        ],
        card: {
          title: "Schadensmeldung bearbeiten",
          bullets: ["1. Aufnehmen: wer, wo, was?", "2. Dringlichkeit einschätzen", "3. Ursache klären", "4. Versicherung prüfen", "5. Handwerker beauftragen", "6. Arbeit abnehmen, Rechnung prüfen", "jeden Schritt dokumentieren"],
          merke: "Merke: Notfälle sofort – Wasser, Gas, Strom und Heizung im Winter.",
          quelle: "BGB §§ 535, 536c · RLP LF 5"
        },
        src: "BGB § 535 Abs. 1, § 536c; Rahmenlehrplan Lernfeld 5 („bearbeiten Schadensmeldungen, prüfen den Versicherungsschutz, vergeben Reparaturaufträge und kontrollieren die Ausführung“)"
      },
      { id: "lf5-4-3", title: "Werkvertrag mit Handwerkern",
        content: [
          { p: "Beauftragst du einen Handwerker mit einer Reparatur, schließt du einen **Werkvertrag** (§ 631 BGB). Der Handwerker schuldet einen **Erfolg**: das fertige, mangelfreie Werk. Der Besteller schuldet die **Vergütung** (Werklohn)." },
          { h: "Wichtige Regeln" },
          { rules: [
            ["Abnahme (§ 640)", ["Besteller prüft und billigt das Werk", "danach wird die Vergütung fällig"]],
            ["Mängel (§ 634)", ["zuerst Nacherfüllung verlangen", "dann z. B. Minderung oder Rücktritt"]],
            ["Verjährung (§ 634a)", ["meist 2 Jahre", "bei Bauwerken 5 Jahre"]]
          ] },
          { ul: ["Vorher Angebot einholen.", "Auftrag schriftlich erteilen.", "Zusätzliche Arbeiten nur nach Freigabe."] },
          { calc: { title: "Rechnung prüfen: Malerarbeiten", rows: [
            { label: "Angebot netto", n: "2.400,00 €" },
            { op: "+", label: "freigegebener Nachtrag", n: "200,00 €" },
            { op: "=", label: "Werklohn netto", n: "2.600,00 €", t: "sub" },
            { op: "+", label: "Umsatzsteuer", f: "19 %", n: "494,00 €" },
            { op: "=", label: "Rechnungsbetrag brutto", n: "3.094,00 €", t: "sum" }
          ] } },
          { note: "Weicht die Rechnung vom Angebot ab, fragst du nach. Bezahlt wird erst nach Abnahme und Prüfung." }
        ],
        card: {
          title: "Werkvertrag (§ 631 BGB)",
          bullets: ["Handwerker schuldet Erfolg", "Besteller schuldet Werklohn"],
          calc: { title: "Rechnung prüfen", rows: [
            { label: "Angebot netto", n: "2.400,00 €" },
            { op: "+", label: "Nachtrag (freigegeben)", n: "200,00 €" },
            { op: "=", label: "netto", n: "2.600,00 €", t: "sub" },
            { op: "+", label: "USt 19 %", n: "494,00 €" },
            { op: "=", label: "brutto", n: "3.094,00 €", t: "sum" }
          ] },
          merke: "Merke: Erst abnehmen und prüfen, dann bezahlen.",
          quelle: "BGB §§ 631, 634, 634a, 640 · RLP LF 5"
        },
        src: "BGB §§ 631, 634, 634a, 640; UStG § 12 Abs. 1; Rahmenlehrplan Lernfeld 5 („Werkvertrag“)"
      },
      { id: "lf5-4-4", title: "Versicherungen: Gebäude, Haftpflicht, Hausrat",
        content: [
          { p: "Versicherungen schützen vor hohen Schäden. Für ein Mietshaus sind drei Versicherungen wichtig. Zwei schließt der Vermieter ab, eine der Mieter." },
          { rules: [
            ["Gebäudeversicherung", ["Vermieter", "Feuer, Leitungswasser, Sturm, Hagel", "Elementarschäden nur mit Zusatz"]],
            ["Haus- und Grundbesitzerhaftpflicht", ["Vermieter", "Schäden Dritter, z. B. Sturz bei Glätte"]],
            ["Hausratversicherung", ["Mieter", "Möbel, Kleidung, Geräte des Mieters"]]
          ] },
          { p: "Gebäude- und Haftpflichtversicherung sind **Betriebskosten** (§ 2 Nr. 13 BetrKV). Der Vermieter darf die Prämien umlegen." },
          { calc: { title: "Rechenbeispiel: Umlage Gebäudeversicherung", rows: [
            { label: "Jahresprämie Haus", n: "3.600,00 €" },
            { op: ":", label: "Gesamtwohnfläche", n: "900,00 m²" },
            { op: "=", label: "Kosten je m²", n: "4,00 €/m²", t: "sub" },
            { op: "×", label: "Wohnung Herr L.", n: "60,00 m²" },
            { op: "=", label: "Anteil Herr L.", n: "240,00 €", t: "sum" }
          ] } },
          { ex: "Ein Rohr platzt in Waren. Die Wand des Hauses ist ein Fall für die Gebäudeversicherung. Das nasse Sofa des Mieters zahlt seine Hausratversicherung." },
          { note: "Melde Schäden der Versicherung sofort. Wer zu spät meldet, riskiert den Versicherungsschutz." }
        ],
        card: {
          title: "Versicherungen im Mietshaus",
          rules: [
            ["Gebäude", ["Vermieter", "Feuer, Wasser, Sturm, Hagel"]],
            ["Haftpflicht", ["Vermieter", "Schäden Dritter"]],
            ["Hausrat", ["Mieter", "eigene Sachen des Mieters"]],
            ["Umlage", ["Gebäude + Haftpflicht → BetrKV"]]
          ],
          merke: "Merke: Haus → Gebäudeversicherung, Sofa des Mieters → Hausrat.",
          quelle: "BetrKV § 2 Nr. 13 · VVG · RLP LF 5"
        },
        src: "BetrKV § 2 Nr. 13; Versicherungsvertragsgesetz (Anzeigepflicht im Schadenfall § 30); Rahmenlehrplan Lernfeld 5 („Haftpflichtversicherung, Gebäudeversicherung, Hausratversicherung“)"
      }
    ]},
    { id: "lf5-5", title: "Modernisierung und Mieterhöhung", subs: [
      { id: "lf5-5-1", title: "Modernisierung planen und ankündigen",
        content: [
          { p: "Eine **Modernisierung** verbessert die Wohnung oder das Haus dauerhaft. Was dazu zählt, steht in § 555b BGB. Der Mieter muss sie grundsätzlich **dulden**." },
          { h: "Beispiele (§ 555b BGB)" },
          { ul: ["Energie sparen: Dämmung, neue Fenster", "Wasser sparen", "Wohnwert erhöhen: Balkon, Aufzug", "bessere Wohnverhältnisse auf Dauer", "neuer Wohnraum"] },
          { h: "Ankündigung (§ 555c BGB)" },
          { rules: [
            ["Frist", ["mindestens 3 Monate vor Beginn"]],
            ["Form", ["Textform (Brief, E-Mail)"]],
            ["Inhalt", ["Art und Umfang", "Beginn und Dauer", "erwartete Mieterhöhung", "künftige Betriebskosten"]]
          ] },
          { h: "Rechte des Mieters" },
          { rules: [
            ["Härteeinwand (§ 555d)", ["bis Ende des Monats nach Zugang", "in Textform"]],
            ["Sonderkündigung (§ 555e)", ["bis Ende des Monats nach Zugang", "zum Ende des übernächsten Monats"]]
          ] },
          { ex: "Die Ankündigung für neue Fenster in Rostock geht am 10.03. zu. Die Arbeiten beginnen frühestens am 10.06. Härtegründe muss der Mieter bis 30.04. mitteilen." },
          { note: "Plane wirtschaftlich, sozial und technisch: Was kostet es? Können die Mieter die neue Miete tragen? Was bringt es?" }
        ],
        card: {
          title: "Modernisierung ankündigen",
          rules: [
            ["Frist", ["3 Monate vor Beginn"]],
            ["Form", ["Textform"]],
            ["Inhalt", ["Art, Beginn, Dauer", "Mieterhöhung, Betriebskosten"]],
            ["Härteeinwand", ["bis Ende Folgemonat"]],
            ["Sonderkündigung", ["bis Ende Folgemonat"]]
          ],
          merke: "Merke: Zugang 10.03. → Beginn frühestens 10.06.",
          quelle: "BGB §§ 555b, 555c, 555d, 555e · RLP LF 5"
        },
        src: "BGB §§ 555b, 555c, 555d, 555e; Rahmenlehrplan Lernfeld 5 („Modernisierung von Wohnraum“)"
      },
      { id: "lf5-5-2", title: "Mieterhöhung bis zur ortsüblichen Vergleichsmiete",
        content: [
          { p: "Der Vermieter darf die Zustimmung zu einer höheren Miete verlangen. Grenze ist die **ortsübliche Vergleichsmiete**. Das ist die übliche Miete für vergleichbare Wohnungen am Ort (§ 558 BGB)." },
          { h: "Voraussetzungen" },
          { rules: [
            ["Wartezeit", ["Miete seit 15 Monaten unverändert", "Verlangen frühestens nach 1 Jahr"]],
            ["Kappungsgrenze", ["max. 20 % in 3 Jahren", "15 % in Gebieten mit Landesverordnung"]],
            ["Begründung", ["Mietspiegel", "Mietdatenbank", "Gutachten", "3 Vergleichswohnungen"]],
            ["Form", ["Textform"]]
          ] },
          { h: "Fristen" },
          { rules: [
            ["Mieter", ["Zustimmung bis Ende des 2. Monats nach Zugang"]],
            ["neue Miete", ["ab Beginn des 3. Monats nach Zugang"]]
          ] },
          { calc: { title: "Rechenbeispiel: 70 m², Kappung 20 %", rows: [
            { label: "Nettokaltmiete vor 3 Jahren", n: "420,00 €" },
            { op: "+", label: "Kappungsgrenze", f: "20 %", n: "84,00 €" },
            { op: "=", label: "Höchstmiete nach Kappung", n: "504,00 €", t: "sub" },
            { label: "Vergleichsmiete: 70 m² × 7,50 €", n: "525,00 €" },
            { op: "=", label: "Neue Miete (niedrigerer Wert)", n: "504,00 €", t: "sum" }
          ] } },
          { ex: "Das Verlangen geht am 15.03. zu. Der Mieter hat bis 31.05. Zeit zuzustimmen. Ab 01.06. zahlt er 504,00 €. Mit 15 % wären es nur 483,00 €." },
          { warn: "In MV gilt die Kappungsgrenze von 15 % z. B. in Rostock und Greifswald. Prüfe die aktuelle Landesverordnung, der Kreis der Orte kann sich ändern." }
        ],
        card: {
          title: "Mieterhöhung (§ 558 BGB)",
          bullets: ["15 Monate keine Erhöhung", "max. 20 % in 3 Jahren (MV z. T. 15 %)"],
          calc: { title: "Rechnung: 70 m²", rows: [
            { label: "Miete vor 3 Jahren", n: "420,00 €" },
            { op: "+", label: "Kappung 20 %", n: "84,00 €" },
            { op: "=", label: "Kappungsgrenze", n: "504,00 €", t: "sub" },
            { label: "Vergleich 70 × 7,50 €", n: "525,00 €" },
            { op: "=", label: "neue Miete (kleiner)", n: "504,00 €", t: "sum" }
          ] },
          merke: "Merke: Es gilt immer der niedrigere Wert – Vergleichsmiete oder Kappung.",
          quelle: "BGB §§ 558, 558a, 558b · RLP LF 5"
        },
        src: "BGB §§ 558, 558a, 558b; Kappungsgrenzenverordnung M-V (Rostock, Greifswald; aktuelle Fassung prüfen); Rahmenlehrplan Lernfeld 5 („berechnen Mietpreisänderungen“)"
      },
      { id: "lf5-5-3", title: "Mieterhöhung nach Modernisierung",
        content: [
          { p: "Nach einer Modernisierung darf der Vermieter die **Jahresmiete um 8 %** der Kosten erhöhen (§ 559 BGB). Das nennt man **Modernisierungsumlage**. Der Mieter muss nicht zustimmen." },
          { h: "Was abgezogen wird" },
          { ul: ["Kosten, die sowieso für eine Reparatur angefallen wären (Erhaltungsanteil)", "Fördermittel und Zuschüsse (§ 559a BGB)"] },
          { h: "Kappung (§ 559 Abs. 3a BGB)" },
          { rules: [
            ["Miete ab 7,00 €/m²", ["max. 3,00 €/m² in 6 Jahren"]],
            ["Miete unter 7,00 €/m²", ["max. 2,00 €/m² in 6 Jahren"]]
          ] },
          { calc: { title: "Rechenbeispiel: neue Fenster, 60 m², Miete 6,50 €/m²", rows: [
            { label: "Kosten für die Wohnung", n: "28.000,00 €" },
            { op: "–", label: "Erhaltungsanteil", n: "4.000,00 €" },
            { op: "=", label: "umlagefähige Kosten", n: "24.000,00 €", t: "sub" },
            { op: "×", label: "Umlagesatz", f: "8 %", n: "1.920,00 €" },
            { op: ":", label: "12 Monate", n: "" },
            { op: "=", label: "Erhöhung rechnerisch", n: "160,00 €", t: "sub" },
            { label: "Kappung: 60 m² × 2,00 €", n: "120,00 €" },
            { op: "=", label: "zulässige Erhöhung im Monat", n: "120,00 €", t: "sum" }
          ] } },
          { ul: ["Erklärung in Textform mit Berechnung", "wirkt ab Beginn des 3. Monats nach Zugang (§ 559b)", "Härtegründe des Mieters können sie begrenzen"] },
          { note: "Vereinfachtes Verfahren (§ 559c BGB): Bei Kosten bis 10.000,00 € je Wohnung darf pauschal 30 % als Erhaltungsanteil abgezogen werden." },
          { warn: "Für neue Heizungen gelten Sonderregeln. Die geplante Mietrechtsreform (Stand November 2026 noch nicht beschlossen) könnte Grenzen ändern. Frag nach dem aktuellen Stand." }
        ],
        card: {
          title: "Modernisierungsumlage",
          bullets: ["8 % der Kosten pro Jahr", "Kappung 3 €/m² (unter 7 €: 2 €/m²)"],
          calc: { title: "Rechnung: 60 m²", rows: [
            { label: "Kosten (ohne Erhaltung)", n: "24.000,00 €" },
            { op: "×", label: "8 % : 12 Monate", n: "160,00 €" },
            { label: "Kappung 60 m² × 2 €", n: "120,00 €" },
            { op: "=", label: "Erhöhung/Monat", n: "120,00 €", t: "sum" }
          ] },
          merke: "Merke: Erhaltungsanteil abziehen, 8 % rechnen, Kappung prüfen.",
          quelle: "BGB §§ 559, 559a, 559b, 559c"
        },
        src: "BGB §§ 559 (Abs. 1, 2, 3a), 559a, 559b, 559c; Mietrechtsreform (BT-Drucksache 21/6807) Stand 11/2026 im Verfahren; Rahmenlehrplan Lernfeld 5"
      },
      { id: "lf5-5-4", title: "Staffel- und Indexmiete im Alltag",
        content: [
          { p: "Statt späterer Mieterhöhungen kann man schon im Mietvertrag eine **Staffelmiete** oder eine **Indexmiete** vereinbaren. Dann gelten feste Regeln für die Erhöhung." },
          { rules: [
            ["Staffelmiete (§ 557a)", ["Erhöhungen im Vertrag als Betrag", "jede Stufe gilt mind. 1 Jahr", "keine Erhöhung nach §§ 558, 559"]],
            ["Indexmiete (§ 557b)", ["folgt dem Verbraucherpreisindex", "Miete mind. 1 Jahr unverändert", "Erklärung in Textform", "gilt ab übernächstem Monat"]]
          ] },
          { calc: { title: "Rechenbeispiel Indexmiete (Beispielwerte)", rows: [
            { label: "Bisherige Miete", n: "500,00 €" },
            { op: "×", label: "Index neu", n: "120,0" },
            { op: ":", label: "Index alt", n: "115,0" },
            { op: "=", label: "Neue Miete (500,00 € × 120,0 : 115,0)", n: "521,74 €", t: "sub" },
            { op: "–", label: "Bisherige Miete", n: "500,00 €" },
            { op: "=", label: "Erhöhung im Monat", n: "21,74 €", t: "sum" }
          ] } },
          { ex: "Ein Mieter in Rostock hat eine Indexmiete. Die Verwaltung schickt die Erhöhung mit beiden Indexwerten am 20.03. Die neue Miete gilt ab 01.05." },
          { note: "Die Indexwerte veröffentlicht das Statistische Bundesamt. Nimm immer die amtlichen Werte." },
          { warn: "Die geplante Mietrechtsreform will Indexmieten in angespannten Märkten begrenzen. Stand November 2026 ist sie noch nicht beschlossen." }
        ],
        card: {
          title: "Staffel- und Indexmiete",
          bullets: ["Staffel: Beträge im Vertrag", "Index: folgt Verbraucherpreisen", "beide: je mind. 1 Jahr gleich"],
          calc: { title: "Rechnung: Index", rows: [
            { label: "Miete bisher", n: "500,00 €" },
            { op: "×", label: "120,0 : 115,0", n: "" },
            { op: "=", label: "Miete neu", n: "521,74 €", t: "sub" },
            { op: "–", label: "Miete bisher", n: "500,00 €" },
            { op: "=", label: "Erhöhung", n: "21,74 €", t: "sum" }
          ] },
          merke: "Merke: Index neu : Index alt × alte Miete = neue Miete.",
          quelle: "BGB §§ 557a, 557b · RLP LF 5"
        },
        src: "BGB §§ 557a, 557b; Statistisches Bundesamt (Verbraucherpreisindex); Rahmenlehrplan Lernfeld 5 („berechnen Mietpreisänderungen“)"
      }
    ]},
    { id: "lf5-6", title: "Störungen im Mietverhältnis", subs: [
      { id: "lf5-6-1", title: "Mietrückstand: Mahnung",
        content: [
          { p: "Die Miete ist im Voraus fällig, spätestens am **dritten Werktag** des Monats (§ 556b BGB). Zahlt der Mieter nicht, ist er sofort im **Verzug**. Eine Mahnung ist dafür nicht nötig, weil der Termin nach dem Kalender feststeht." },
          { p: "Trotzdem mahnt die Verwaltung. So erinnert sie den Mieter und sammelt Nachweise." },
          { h: "Übliche Stufen" },
          { rules: [
            ["1. Zahlungserinnerung", ["freundlich, kurze Frist"]],
            ["2. Mahnung", ["Betrag, Frist, Folgen nennen"]],
            ["3. letzte Mahnung", ["Mahnverfahren oder Kündigung ankündigen"]]
          ] },
          { calc: { title: "Rechenbeispiel: Rückstand September bis November", rows: [
            { label: "Sollmiete: 3 × 650,00 €", n: "1.950,00 €" },
            { op: "–", label: "Zahlungen", n: "1.300,00 €" },
            { op: "=", label: "Mietrückstand", n: "650,00 €", t: "sum" }
          ] } },
          { ex: "Frau R. in Waren hat die Novembermiete nicht gezahlt. Du schickst eine Zahlungserinnerung. Gleichzeitig fragst du nach, ob es Probleme gibt." },
          { note: "Im Verzug kann der Vermieter Verzugszinsen verlangen (§ 288 BGB). Den aktuellen Basiszinssatz veröffentlicht die Bundesbank." }
        ],
        card: {
          title: "Mietrückstand und Mahnung",
          bullets: ["Miete fällig bis 3. Werktag", "Verzug ohne Mahnung", "Stufen: Erinnerung → Mahnung", "→ letzte Mahnung"],
          calc: { title: "Rechnung: Rückstand", rows: [
            { label: "Soll 3 × 650,00 €", n: "1.950,00 €" },
            { op: "–", label: "gezahlt", n: "1.300,00 €" },
            { op: "=", label: "Rückstand", n: "650,00 €", t: "sum" }
          ] },
          merke: "Merke: Früh erinnern, nach Gründen fragen, alles dokumentieren.",
          quelle: "BGB §§ 286, 288, 556b · RLP LF 5"
        },
        src: "BGB § 556b Abs. 1, § 286 Abs. 2 Nr. 1, § 288 Abs. 1; Rahmenlehrplan Lernfeld 5 („Mahn- und Klageverfahren“)"
      },
      { id: "lf5-6-2", title: "Mahnverfahren und Klage",
        content: [
          { p: "Zahlt der Mieter trotz Mahnung nicht, braucht der Vermieter einen **Titel**. Mit ihm kann er die Zwangsvollstreckung betreiben. Schnell und günstig geht das mit dem **gerichtlichen Mahnverfahren** (§§ 688 ff. ZPO)." },
          { h: "Ablauf des Mahnverfahrens" },
          { rules: [
            ["1. Antrag", ["beim zentralen Mahngericht", "meist online"]],
            ["2. Mahnbescheid", ["Gericht prüft nicht, ob die Forderung stimmt", "wird dem Mieter zugestellt"]],
            ["3. Widerspruch?", ["Mieter hat 2 Wochen Zeit", "Widerspruch → normales Klageverfahren"]],
            ["4. Vollstreckungsbescheid", ["auf Antrag, wenn kein Widerspruch"]],
            ["5. Einspruch?", ["2 Wochen Zeit", "sonst rechtskräftiger Titel"]],
            ["6. Vollstreckung", ["Gerichtsvollzieher, Kontopfändung"]]
          ] },
          { h: "Klage" },
          { p: "Bei Streit über die Forderung klagt der Vermieter. Für Mietstreitigkeiten über Wohnraum ist immer das **Amtsgericht** zuständig, in dessen Bezirk die Wohnung liegt." },
          { ex: "Ein Mieter in Schwerin schuldet 650,00 €. Die Verwaltung beantragt einen Mahnbescheid. Er widerspricht nicht. Nach dem Vollstreckungsbescheid beauftragt sie den Gerichtsvollzieher." },
          { note: "Eine Räumung der Wohnung erreicht man mit dem Mahnverfahren nicht. Dafür braucht man eine Räumungsklage." }
        ],
        card: {
          title: "Mahnverfahren (ZPO)",
          bullets: ["1. Antrag beim Mahngericht", "2. Mahnbescheid", "Widerspruch: 2 Wochen", "3. Vollstreckungsbescheid", "Einspruch: 2 Wochen", "4. Titel → Vollstreckung", "Streit → Klage beim Amtsgericht"],
          merke: "Merke: Kein Widerspruch, kein Einspruch → Titel für die Vollstreckung.",
          quelle: "ZPO §§ 688–700 · GVG § 23 · RLP LF 5"
        },
        src: "ZPO §§ 339, 688, 692, 694, 699, 700; GVG § 23 Nr. 2 Buchst. a; ZPO § 29a; Rahmenlehrplan Lernfeld 5 („Mahn- und Klageverfahren“)"
      },
      { id: "lf5-6-3", title: "Fristlose Kündigung und Zwangsräumung",
        content: [
          { p: "Bei schweren Vertragsverletzungen darf der Vermieter **fristlos** kündigen (§ 543 BGB). Der häufigste Grund ist Zahlungsverzug. Die Kündigung muss schriftlich sein und den Grund nennen (§§ 568, 569 Abs. 4 BGB)." },
          { h: "Zahlungsverzug als Grund (§ 543 Abs. 2 Nr. 3)" },
          { rules: [
            ["Fall 1", ["zwei aufeinanderfolgende Termine", "Rückstand mehr als eine Monatsmiete"]],
            ["Fall 2", ["längerer Zeitraum", "Rückstand mindestens zwei Monatsmieten"]]
          ] },
          { calc: { title: "Rechenbeispiel: Monatsmiete 600,00 €", rows: [
            { label: "Rückstand Oktober", n: "600,00 €" },
            { op: "+", label: "Rückstand November (200 € gezahlt)", n: "400,00 €" },
            { op: "=", label: "Rückstand gesamt", n: "1.000,00 €", t: "sub" },
            { op: "–", label: "eine Monatsmiete", n: "600,00 €" },
            { op: "=", label: "über einer Monatsmiete", n: "400,00 €", t: "sum" }
          ] } },
          { p: "Ergebnis: Der Rückstand ist höher als eine Monatsmiete. Eine fristlose Kündigung ist möglich." },
          { p: "**Schonfrist (§ 569 Abs. 3 Nr. 2):** Zahlt der Mieter oder eine Behörde den gesamten Rückstand bis **2 Monate** nach Zustellung der Räumungsklage, wird die fristlose Kündigung unwirksam. Das gilt nur einmal in zwei Jahren." },
          { h: "Zwangsräumung" },
          { ul: ["Zieht der Mieter nicht aus, folgt die Räumungsklage.", "Mit dem Räumungsurteil beauftragt man den Gerichtsvollzieher (§ 885 ZPO).", "Selbst räumen oder Schloss tauschen ist verboten."] },
          { note: "Eine Räumung ist der letzte Schritt. Soziales Management und Ratenzahlung kommen vorher." }
        ],
        card: {
          title: "Fristlose Kündigung",
          bullets: ["2 Termine → Rückstand > 1 Miete", "Schriftform, Grund nennen", "Schonfrist: 2 Monate nach Klage", "Räumung nur Gerichtsvollzieher"],
          calc: { title: "Rechnung: Miete 600 €", rows: [
            { label: "Rückstand Oktober", n: "600,00 €" },
            { op: "+", label: "Rückstand November", n: "400,00 €" },
            { op: "=", label: "gesamt > 1 Miete", n: "1.000,00 €", t: "sum" }
          ] },
          merke: "Merke: Nie selbst räumen – nur mit Titel und Gerichtsvollzieher.",
          quelle: "BGB §§ 543, 568, 569 · ZPO § 885"
        },
        src: "BGB § 543 Abs. 2 Satz 1 Nr. 3, § 568 Abs. 1, § 569 Abs. 3 und 4; ZPO §§ 721, 885; BGB § 858; Rahmenlehrplan Lernfeld 5 („Zwangsräumung von Wohnraum“)"
      },
      { id: "lf5-6-4", title: "Konflikte lösen",
        content: [
          { p: "Im Mietshaus gibt es Streit: Lärm, Treppenhaus, Müll, Haustiere. Oft sollst du vermitteln. Ziel ist eine Lösung, mit der alle weiter im Haus leben können." },
          { h: "Schritte der Konfliktlösung" },
          { rules: [
            ["1. Sachlage klären", ["beide Seiten anhören", "Fakten von Meinungen trennen"]],
            ["2. Regeln prüfen", ["Mietvertrag, Hausordnung"]],
            ["3. Gespräch", ["neutral bleiben", "Ich-Botschaften, keine Vorwürfe"]],
            ["4. Lösung vereinbaren", ["konkret und überprüfbar", "schriftlich festhalten"]],
            ["5. Nachfassen", ["nach einigen Wochen nachfragen"]]
          ] },
          { p: "Hilft das nicht, gibt es eine **Abmahnung**. Sie nennt das Fehlverhalten und droht Folgen an. Bei schweren Störungen kann später gekündigt werden (§ 543, § 573 BGB)." },
          { ex: "In Rostock beschwert sich ein Mieter über laute Musik nach 22 Uhr. Du sprichst mit beiden Parteien. Sie vereinbaren: Musik leiser ab 22 Uhr. Das hältst du im Vermerk fest." },
          { note: "Eine neutrale Stelle kann helfen, z. B. eine **Mediation**. Der Mediator entscheidet nicht, er hilft beim Einigen." }
        ],
        card: {
          title: "Konflikte lösen",
          bullets: ["1. Beide Seiten anhören", "2. Hausordnung, Vertrag prüfen", "3. Neutral, Ich-Botschaften", "4. Lösung schriftlich festhalten", "5. Später nachfragen", "danach: Abmahnung möglich", "Hilfe: Mediation"],
          merke: "Merke: Erst reden und vermitteln – Abmahnung und Kündigung kommen zuletzt.",
          quelle: "BGB §§ 541, 543 · RLP LF 5"
        },
        src: "BGB §§ 541, 543, 573 Abs. 2 Nr. 1; Rahmenlehrplan Lernfeld 5 („reagieren situationsgerecht und wenden Methoden der Konfliktlösung an“)"
      }
    ]},
    { id: "lf5-7", title: "Ende des Mietverhältnisses", subs: [
      { id: "lf5-7-1", title: "Kündigung durch Mieter und Vermieter",
        content: [
          { p: "Ein unbefristeter Mietvertrag endet meist durch **Kündigung**. Sie muss **schriftlich** sein, also eigenhändig unterschrieben (§ 568 BGB). Eine E-Mail reicht nicht." },
          { h: "Fristen (§ 573c BGB)" },
          { rules: [
            ["Mieter", ["immer 3 Monate"]],
            ["Vermieter bis 5 Jahre Mietdauer", ["3 Monate"]],
            ["Vermieter ab 5 Jahre", ["6 Monate"]],
            ["Vermieter ab 8 Jahre", ["9 Monate"]],
            ["Zugang", ["bis 3. Werktag des Monats", "der Monat zählt dann mit"]]
          ] },
          { h: "Vermieter braucht einen Grund (§ 573 BGB)" },
          { ul: ["erhebliche Pflichtverletzung des Mieters", "Eigenbedarf für sich, Familie oder Haushalt", "Hinderung angemessener wirtschaftlicher Verwertung"] },
          { ex: "Die Kündigung eines Mieters geht am 02.03. zu. Das ist vor Ablauf des 3. Werktags. März zählt also mit. Das Mietverhältnis endet am 31.05." },
          { note: "Der Mieter kann der Vermieterkündigung bei Härte widersprechen (§ 574 BGB). Der Widerspruch muss bis 2 Monate vor Mietende erfolgen." }
        ],
        card: {
          title: "Ordentliche Kündigung",
          rules: [
            ["Form", ["schriftlich, unterschrieben"]],
            ["Mieter", ["3 Monate"]],
            ["Vermieter", ["bis 5 Jahre → 3 Monate", "ab 5 Jahre → 6 Monate", "ab 8 Jahre → 9 Monate", "nur mit Grund (§ 573)"]],
            ["Zugang", ["bis 3. Werktag des Monats"]]
          ],
          merke: "Merke: Zugang bis 3. Werktag im März → Ende 31.05.",
          quelle: "BGB §§ 568, 573, 573c, 574"
        },
        src: "BGB §§ 568 Abs. 1, 573, 573c Abs. 1, 574, 574b Abs. 2; Rahmenlehrplan Lernfeld 5 („Beendigung von Mietverhältnissen“)"
      },
      { id: "lf5-7-2", title: "Abnahme und Abnahmeprotokoll",
        content: [
          { p: "Am Ende gibt der Mieter die Wohnung zurück (§ 546 BGB). Bei der **Wohnungsabnahme** gehst du mit ihm durch alle Räume. Das Ergebnis hältst du im **Abnahmeprotokoll** fest." },
          { h: "Inhalt des Protokolls" },
          { ul: ["Datum, Anschrift, anwesende Personen", "Zustand jedes Raumes", "Mängel und Schäden, mit Fotos", "Zählerstände: Strom, Wasser, Wärme", "Anzahl der zurückgegebenen Schlüssel", "neue Anschrift des Mieters", "Unterschriften beider Seiten"] },
          { h: "Abnutzung oder Schaden?" },
          { rules: [
            ["normale Abnutzung (§ 538)", ["Mieter haftet nicht", "z. B. leichte Laufspuren"]],
            ["Schaden", ["Mieter muss ersetzen", "z. B. Brandloch im Teppich"]]
          ] },
          { ex: "Bei der Abnahme in Waren findest du ein großes Loch in der Badtür. Ihr haltet es mit Foto fest. Beide unterschreiben. Die Reparaturkosten können mit der Kaution verrechnet werden." },
          { note: "Ersatzansprüche des Vermieters verjähren schon **6 Monate** nach Rückgabe (§ 548 BGB). Das Protokoll ist das wichtigste Beweismittel." },
          { warn: "Ob der Mieter beim Auszug renovieren muss, hängt vom Mietvertrag ab. Viele Klauseln dazu sind unwirksam. Lass das im Zweifel im Betrieb prüfen." }
        ],
        card: {
          title: "Abnahmeprotokoll",
          bullets: ["Räume einzeln prüfen", "Mängel mit Fotos", "Zählerstände notieren", "Schlüssel zählen", "neue Anschrift", "beide unterschreiben", "Abnutzung → Mieter haftet nicht"],
          merke: "Merke: Ansprüche verjähren 6 Monate nach Rückgabe – Protokoll genau führen.",
          quelle: "BGB §§ 538, 546, 548 · RLP LF 5"
        },
        src: "BGB §§ 538, 546, 548 Abs. 1; Rahmenlehrplan Lernfeld 5 („Abnahmeprotokoll“)"
      },
      { id: "lf5-7-3", title: "Kaution abrechnen",
        content: [
          { p: "Die **Kaution** sichert Forderungen des Vermieters. Sie beträgt höchstens **drei Nettokaltmieten** (§ 551 BGB). Der Mieter darf sie in drei Monatsraten zahlen." },
          { h: "Regeln (§ 551 BGB)" },
          { ul: ["getrennt vom Vermögen des Vermieters anlegen", "mindestens zum Sparzins mit 3 Monaten Kündigungsfrist", "Zinsen gehören dem Mieter", "Abrechnung nach Auszug in angemessener Frist"] },
          { p: "Steht die Betriebskostenabrechnung noch aus, darf der Vermieter einen angemessenen Teil zurückbehalten. Der Rest wird ausgezahlt." },
          { calc: { title: "Rechenbeispiel: Kautionsabrechnung", rows: [
            { label: "Kaution: 3 × 500,00 €", n: "1.500,00 €" },
            { op: "+", label: "Zinsen (laut Sparbuch)", n: "12,40 €" },
            { op: "=", label: "Guthaben des Mieters", n: "1.512,40 €", t: "sub" },
            { op: "–", label: "Reparatur Badtür (Protokoll)", n: "280,00 €" },
            { op: "–", label: "Einbehalt Betriebskosten", n: "150,00 €" },
            { op: "=", label: "Auszahlung an Mieter", n: "1.082,40 €", t: "sum" }
          ] } },
          { ex: "Herr P. zieht in Schwerin aus. Du überweist 1.082,40 €. Nach der Betriebskostenabrechnung rechnest du die 150,00 € genau ab." },
          { note: "Abzüge müssen belegt sein: Protokoll, Rechnung oder Kostenvoranschlag." }
        ],
        card: {
          title: "Kaution abrechnen",
          bullets: ["max. 3 Nettokaltmieten", "getrennt anlegen, Zinsen → Mieter"],
          calc: { title: "Rechnung: Herr P.", rows: [
            { label: "Kaution", n: "1.500,00 €" },
            { op: "+", label: "Zinsen", n: "12,40 €" },
            { op: "=", label: "Guthaben", n: "1.512,40 €", t: "sub" },
            { op: "–", label: "Reparatur Badtür", n: "280,00 €" },
            { op: "–", label: "Einbehalt Betriebskosten", n: "150,00 €" },
            { op: "=", label: "Auszahlung", n: "1.082,40 €", t: "sum" }
          ] },
          merke: "Merke: Nur belegte Forderungen abziehen, Rest zügig auszahlen.",
          quelle: "BGB § 551 · RLP LF 5"
        },
        src: "BGB § 551; Rahmenlehrplan Lernfeld 5 („bearbeiten die Vorgänge bei Beendigung des Mietverhältnisses und wickeln es ab“)"
      }
    ]},
    { id: "lf5-8", title: "Buchen in der Hausbewirtschaftung", subs: [
      { id: "lf5-8-1", title: "Mieten buchen",
        content: [
          { p: "Wohnungsunternehmen buchen die Miete in zwei Schritten. Zuerst entsteht die Forderung: die **Sollstellung** am Monatsanfang. Dann folgt die **Zahlung**." },
          { calc: { title: "Sollstellung einer Wohnung (Monat)", rows: [
            { label: "Grundmiete (Sollmiete)", n: "480,00 €" },
            { op: "+", label: "Vorauszahlung Betriebskosten", n: "120,00 €" },
            { op: "+", label: "Vorauszahlung Heizkosten", n: "80,00 €" },
            { op: "=", label: "Forderung an den Mieter", n: "680,00 €", t: "sum" }
          ] } },
          { h: "Buchungssätze" },
          { calc: { title: "Buchungssatz Sollstellung", rows: [
            { label: "Soll: Mietforderungen", n: "680,00 €" },
            { op: "=", label: "Summe Soll", n: "680,00 €", t: "sub" },
            { label: "Haben: Sollmieten", n: "480,00 €" },
            { op: "+", label: "Haben: Umlagen (120,00 € + 80,00 €)", n: "200,00 €" },
            { op: "=", label: "Summe Haben", n: "680,00 €", t: "sum" }
          ] } },
          { rules: [
            ["Zahlung", ["Soll: Bank 680,00\u00a0€", "Haben: Mietforderungen 680,00\u00a0€"]],
            ["Leerstand (Grundmiete)", ["Soll: Erlösschmälerungen 480,00\u00a0€", "Haben: Mietforderungen 480,00\u00a0€"]]
          ] },
          { p: "Steht eine Wohnung leer, wird trotzdem die volle Sollmiete gebucht. Der Ausfall erscheint als **Erlösschmälerung**. So sieht man, wie viel Miete fehlt." },
          { ex: "Am 01.11. bucht die Genossenschaft in Waren alle Sollmieten. Am 05.11. gleicht der Kontoauszug die meisten Forderungen aus. Offene Posten gehen in das Mahnwesen." },
          { warn: "Kontennummern und Kontennamen richten sich nach dem Kontenrahmen deiner Schule und deines Betriebs. Seit 2026 gilt eine neue Gliederungsverordnung für Wohnungsunternehmen." }
        ],
        card: {
          title: "Mieten buchen",
          rules: [
            ["Zahlung", ["Soll: Bank 680,00\u00a0€", "Haben: Mietforderungen 680,00\u00a0€"]]
          ],
          calc: { title: "Rechnung: Sollstellung", rows: [
            { label: "Soll: Mietforderungen", n: "680,00 €" },
            { op: "=", label: "Summe Soll", n: "680,00 €", t: "sub" },
            { label: "Haben: Sollmieten", n: "480,00 €" },
            { op: "+", label: "Haben: Umlagen", n: "200,00 €" },
            { op: "=", label: "Summe Haben", n: "680,00 €", t: "sum" }
          ] },
          merke: "Merke: Erst die Forderung (Soll), dann die Zahlung buchen.",
          quelle: "RLP LF 5 (Mietenbuchungen) · HGB § 238"
        },
        src: "Rahmenlehrplan Lernfeld 5 („Mietenbuchungen“); HGB § 238; Kontenrahmen der Wohnungswirtschaft (Kontenklasse 6: Sollmieten, Umlagen)"
      },
      { id: "lf5-8-2", title: "Betriebs- und Heizkosten buchen und abrechnen",
        content: [
          { p: "Betriebs- und Heizkosten laufen in der Buchführung über zwei Seiten. Die **Rechnungen** sind Aufwand. Die **Vorauszahlungen** der Mieter sind Umlagen (Erlöse). Mit der Abrechnung werden beide abgeglichen." },
          { h: "Buchungssätze im Jahr" },
          { rules: [
            ["Rechnung, z. B. Müll", ["Soll: Betriebskosten 900,00\u00a0€", "Haben: Bank 900,00\u00a0€"]],
            ["Vorauszahlung (Monat)", ["Soll: Mietforderungen 950,00\u00a0€", "Haben: Umlagen 950,00\u00a0€"]]
          ] },
          { calc: { title: "Abrechnung des Hauses", rows: [
            { label: "Umlagefähige Kosten", n: "12.000,00 €" },
            { op: "–", label: "Vorauszahlungen aller Mieter: 12 × 950,00 €", n: "11.400,00 €" },
            { op: "=", label: "Nachzahlungen gesamt", n: "600,00 €", t: "sum" }
          ] } },
          { h: "Buchungssätze nach der Abrechnung" },
          { rules: [
            ["Nachzahlung", ["Soll: Mietforderungen 600,00\u00a0€", "Haben: Umlagen 600,00\u00a0€"]],
            ["Guthaben (z. B. 50,00 €)", ["Soll: Umlagen 50,00\u00a0€", "Haben: Mietforderungen 50,00\u00a0€", "Auszahlung später über Bank"]]
          ] },
          { note: "Zum Jahresabschluss ist meist noch nicht abgerechnet. Dann zeigt die Bilanz die Kosten als **unfertige Leistungen** und die Vorauszahlungen als **erhaltene Anzahlungen**." },
          { warn: "Wie genau gebucht wird, hängt vom Kontenrahmen deiner Schule und deines Betriebs ab. Halte dich an die Kontenpläne aus dem Unterricht." }
        ],
        card: {
          title: "Betriebskosten buchen",
          rules: [
            ["Rechnung", ["Soll: Betriebskosten 900,00\u00a0€", "Haben: Bank 900,00\u00a0€"]],
            ["Vorauszahlung", ["Soll: Mietforderungen 950,00\u00a0€", "Haben: Umlagen 950,00\u00a0€"]],
            ["Nachzahlung", ["Soll: Mietforderungen 600,00\u00a0€", "Haben: Umlagen 600,00\u00a0€"]],
            ["Guthaben", ["Soll: Umlagen 50,00\u00a0€", "Haben: Mietforderungen 50,00\u00a0€"]]
          ],
          merke: "Merke: Kosten minus Vorauszahlungen = Nachzahlung oder Guthaben.",
          quelle: "RLP LF 5 · HGB §§ 238, 266"
        },
        src: "Rahmenlehrplan Lernfeld 5 („Buchung der Betriebs- und Heizkosten und deren Abrechnung“); HGB §§ 238, 266; Kontenrahmen der Wohnungswirtschaft"
      },
      { id: "lf5-8-3", title: "Hausbewirtschaftungskosten buchen",
        content: [
          { p: "**Hausbewirtschaftungskosten** sind alle Kosten, die ein Haus im Betrieb verursacht. Sie mindern den Gewinn. Ein Teil davon ist umlagefähig, der größere Teil trägt der Vermieter." },
          { rules: [
            ["Betriebskosten", ["laufende Kosten nach BetrKV", "meist umgelegt"]],
            ["Instandhaltungskosten", ["Reparaturen, Wartung", "trägt der Vermieter"]],
            ["Verwaltungskosten", ["Personal, Büro, Verwaltervertrag"]],
            ["Abschreibungen", ["Wertverlust des Gebäudes"]],
            ["Zinsen", ["für Kredite der Finanzierung"]]
          ] },
          { h: "Besonderheit: Umsatzsteuer" },
          { p: "Wohnungsvermietung ist **umsatzsteuerfrei** (§ 4 Nr. 12 UStG). Dann darf der Vermieter keine Vorsteuer abziehen (§ 15 Abs. 2 UStG). Die Rechnung wird deshalb **brutto** als Aufwand gebucht." },
          { calc: { title: "Rechenbeispiel: Malerrechnung Treppenhaus", rows: [
            { label: "Rechnung netto", n: "1.000,00 €" },
            { op: "+", label: "Umsatzsteuer", f: "19 %", n: "190,00 €" },
            { op: "=", label: "Aufwand (brutto)", n: "1.190,00 €", t: "sum" }
          ] } },
          { rules: [
            ["Buchungssatz", ["Soll: Instandhaltungskosten 1.190,00\u00a0€", "Haben: Bank 1.190,00\u00a0€"]]
          ] },
          { warn: "Bei Gewerbemieten kann der Vermieter zur Umsatzsteuer optieren (§ 9 UStG). Dann gilt die Vorsteuerregel anders." }
        ],
        card: {
          title: "Hausbewirtschaftungskosten",
          bullets: ["Betriebs-, Instandhaltungs-", "Verwaltungskosten, AfA, Zinsen", "Wohnungsmiete: ohne Vorsteuer"],
          calc: { title: "Rechnung: Maler", rows: [
            { label: "netto", n: "1.000,00 €" },
            { op: "+", label: "USt 19 %", n: "190,00 €" },
            { op: "=", label: "Aufwand brutto", n: "1.190,00 €", t: "sum" }
          ] },
          merke: "Merke: Bei Wohnungsvermietung bucht man Rechnungen brutto als Aufwand.",
          quelle: "UStG §§ 4 Nr. 12, 15 · RLP LF 5"
        },
        src: "UStG § 4 Nr. 12 Buchst. a, § 9, § 15 Abs. 2; Rahmenlehrplan Lernfeld 5 („Buchung von Hausbewirtschaftungskosten“)"
      }
    ]}
  ]
});
