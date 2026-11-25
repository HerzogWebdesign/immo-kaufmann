window.IMMO = window.IMMO || [];
window.IMMO.push({
  id: "sk",
  kind: "fach",
  nr: 8,
  title: "Sozialkunde",
  short: "Sozialkunde",
  hours: "160 Stunden in 3 Jahren (BSVO M-V)",
  intro: "Sozialkunde erklärt, wie Staat, Demokratie und Wirtschaft funktionieren. Vieles davon begegnet dir im Immobilienbüro: Gesetze, Ämter, Wohngeld. Die Themen sind ein Vorschlag: Maßgeblich ist der Plan deiner Schule, denn die BSVO M-V (Anlage 1) nennt nur die Gesamtstunden für drei Jahre.",
  source: "BSVO M-V Anlage 1; Themenvorschlag",
  topics: [
    { id: "sk-1", title: "Ausbildung und Arbeitswelt", subs: [
      { id: "sk-1-1", title: "Arbeitsrecht im Überblick",
        content: [
          { p: "Ausbildungsvertrag, Schutzgesetze und Tarif lernst du ausführlich in LF 1. Hier geht es um den Überblick: Wer regelt was, und wer hilft bei Streit?" },
          { rules: [
            ["Einzelner Vertrag", ["Arbeits- oder Ausbildungsvertrag", "zwischen dir und dem Betrieb"]],
            ["Gruppe", ["Tarifvertrag: Gewerkschaft und Arbeitgeber", "Betriebsvereinbarung: Betriebsrat und Betrieb"]],
            ["Staat", ["Gesetze, z. B. BBiG, JArbSchG", "gelten immer als Mindeststandard"]]
          ] },
          { h: "Hilfe bei Streit in der Ausbildung" },
          { ul: [
            "Zuerst: Gespräch mit Ausbilderin oder Ausbilder.",
            "Dann: Ausbildungsberatung der IHK.",
            "Wo es ihn gibt: Schlichtungsausschuss bei der IHK.",
            "Zuletzt: Arbeitsgericht."
          ] },
          { note: "Bei Streit aus dem Ausbildungsverhältnis muss zuerst der Schlichtungsausschuss angerufen werden, wenn die IHK einen gebildet hat (§ 111 Abs. 2 ArbGG)." },
          { ex: "Paul aus Rostock bekommt seine Ausbildungsvergütung zu spät. Er spricht zuerst mit seiner Ausbilderin. Hilft das nicht, fragt er die Ausbildungsberatung der IHK." }
        ],
        card: {
          title: "Arbeitsrecht im Überblick",
          rules: [
            ["Ebenen", ["Gesetz → Mindeststandard", "Tarifvertrag", "Betriebsvereinbarung", "Arbeitsvertrag"]],
            ["Hilfe", ["1. Gespräch im Betrieb", "2. IHK-Ausbildungsberatung", "3. Schlichtungsausschuss", "4. Arbeitsgericht"]]
          ],
          merke: "Merke: Erst reden, dann IHK – das Gericht kommt zuletzt.",
          quelle: "§ 111 ArbGG · BBiG · RLP LF 1"
        },
        src: "§ 111 Abs. 2 ArbGG; BBiG; BSVO M-V Anlage 1; Themenvorschlag; Vertiefung Rahmenlehrplan LF 1"
      }
    ]},
    { id: "sk-2", title: "Sozialversicherung und soziale Sicherung", subs: [
      { id: "sk-2-1", title: "Prinzipien der sozialen Sicherung",
        content: [
          { p: "Die fünf Sozialversicherungen und deine Abzüge lernst du in LF 1, Thema 4.2. Hier geht es um die Idee dahinter: Wie sichert der Staat Menschen in Not ab?" },
          { rules: [
            ["Versicherung", ["Geld aus Beiträgen", "Leistung, wenn der Fall eintritt", "z. B. Arbeitslosengeld, Rente"]],
            ["Versorgung", ["Geld aus Steuern", "für besondere Gruppen", "z. B. Beamte, Opfer von Gewalttaten"]],
            ["Fürsorge", ["Geld aus Steuern", "nur bei Bedarf", "z. B. Grundsicherung, Sozialhilfe, Wohngeld"]]
          ] },
          { h: "Grundsätze der Sozialversicherung" },
          { ul: [
            "**Pflicht:** Arbeitnehmer und Azubis sind versichert.",
            "**Solidarität:** Alle zahlen ein, wer Hilfe braucht, bekommt sie.",
            "**Generationenvertrag:** Die Arbeitenden zahlen heute die Renten.",
            "**Selbstverwaltung:** Versicherte und Arbeitgeber wählen Vertreter."
          ] },
          { ex: "Eine Mieterin in Waren verliert ihre Arbeit. Erst bekommt sie Arbeitslosengeld aus der Versicherung. Reicht ihr Geld für die Miete nicht, kann sie Wohngeld oder Grundsicherung beantragen." },
          { note: "Im Büro hilft dir das Wissen bei Mietrückstand: Du kannst auf Wohngeldstelle, Jobcenter oder Schuldnerberatung hinweisen. Mehr dazu in LF 5, Thema 1.3." }
        ],
        card: {
          title: "Soziale Sicherung",
          rules: [
            ["Versicherung", ["aus Beiträgen", "z. B. Rente, Arbeitslosengeld"]],
            ["Versorgung", ["aus Steuern, für Gruppen", "z. B. Beamte"]],
            ["Fürsorge", ["aus Steuern, nur bei Bedarf", "z. B. Wohngeld, Grundsicherung"]],
            ["Grundsätze", ["Pflicht, Solidarität", "Generationenvertrag"]]
          ],
          merke: "Merke: Versicherung zahlt aus Beiträgen, Fürsorge aus Steuern.",
          quelle: "SGB I §§ 3–10 · RLP LF 1"
        },
        src: "SGB I §§ 3–10 (soziale Rechte); SGB IV (Selbstverwaltung); BSVO M-V Anlage 1; Themenvorschlag; Vertiefung Rahmenlehrplan LF 1"
      }
    ]},
    { id: "sk-3", title: "Demokratie in Deutschland: Grundgesetz, Grundrechte, Wahlen", subs: [
      { id: "sk-3-1", title: "Grundgesetz und Grundrechte",
        content: [
          { p: "Das **Grundgesetz (GG)** ist die Verfassung der Bundesrepublik. Es gilt seit dem 23. Mai 1949. Kein Gesetz darf ihm widersprechen." },
          { h: "Wichtige Grundrechte (Art. 1 bis 19)" },
          { rules: [
            ["Art. 1", ["Die Würde des Menschen ist unantastbar."]],
            ["Art. 3", ["Gleichheit vor dem Gesetz", "kein Nachteil wegen Herkunft, Glaube, Behinderung"]],
            ["Art. 5", ["Meinungsfreiheit"]],
            ["Art. 12", ["freie Wahl von Beruf und Ausbildungsplatz"]],
            ["Art. 13", ["Die Wohnung ist unverletzlich."]],
            ["Art. 14", ["Eigentum ist geschützt.", "Eigentum verpflichtet."]]
          ] },
          { h: "Grundsätze des Staates (Art. 20)" },
          { ul: [
            "Demokratie: Die Macht geht vom Volk aus.",
            "Rechtsstaat: Auch der Staat hält sich an Gesetze.",
            "Sozialstaat: Der Staat sorgt für sozialen Ausgleich.",
            "Bundesstaat: Bund und Länder teilen sich die Aufgaben."
          ] },
          { note: "Grundrechte binden vor allem den Staat (Art. 1 Abs. 3 GG). Zwischen Vermieter und Mieter wirken sie über die Gesetze, z. B. über das Mietrecht im BGB." },
          { ex: "Art. 14 sagt: „Eigentum verpflichtet.“ Ein Vermieter darf mit seinem Haus also nicht alles machen. Das Mietrecht schützt zum Beispiel Mieter vor zu hohen Mieterhöhungen." },
          { note: "Ändern lässt sich das Grundgesetz nur mit zwei Dritteln im Bundestag und im Bundesrat (Art. 79 Abs. 2). Art. 1 und Art. 20 darf man gar nicht abschaffen (Art. 79 Abs. 3)." }
        ],
        card: {
          title: "Grundgesetz",
          rules: [
            ["Art. 1", ["Würde des Menschen"]],
            ["Art. 3", ["Gleichheit"]],
            ["Art. 13", ["Wohnung ist unverletzlich"]],
            ["Art. 14", ["Eigentum verpflichtet"]],
            ["Art. 20", ["Demokratie, Rechtsstaat", "Sozialstaat, Bundesstaat"]],
            ["Änderung", ["2/3 in Bundestag und Bundesrat"]]
          ],
          merke: "Merke: Kein Gesetz darf dem Grundgesetz widersprechen.",
          quelle: "GG Art. 1, 3, 13, 14, 20, 79"
        },
        src: "Grundgesetz Art. 1, 3, 5, 12, 13, 14, 20, 79; BSVO M-V Anlage 1; Themenvorschlag"
      },
      { id: "sk-3-2", title: "Wahlen",
        content: [
          { p: "In einer Demokratie wählt das Volk seine Vertreter. Die Wahl muss nach festen Grundsätzen ablaufen." },
          { h: "Wahlgrundsätze (Art. 38 GG)" },
          { ul: [
            "**allgemein:** Alle Staatsbürger ab dem Wahlalter dürfen wählen.",
            "**unmittelbar:** Du wählst die Abgeordneten direkt.",
            "**frei:** Niemand darf dich unter Druck setzen.",
            "**gleich:** Jede Stimme zählt gleich viel.",
            "**geheim:** Niemand erfährt, was du wählst."
          ] },
          { h: "Ab wann darfst du wählen?" },
          { rules: [
            ["Gemeinde (MV)", ["ab 16"]],
            ["Landtag (MV)", ["ab 16 (erstmals 2026)"]],
            ["Bundestag", ["ab 18"]],
            ["Europaparlament", ["ab 16"]]
          ] },
          { h: "Bundestagswahl: zwei Stimmen" },
          { ul: [
            "Erststimme: für eine Person aus deinem Wahlkreis.",
            "Zweitstimme: für eine Partei – sie entscheidet über die Sitzverteilung.",
            "Eine Partei braucht in der Regel mindestens 5 % der Zweitstimmen."
          ] },
          { ex: "Lena ist 17. Bei der Landtagswahl in MV im September 2026 durfte sie schon wählen. Bei der Bundestagswahl muss sie warten, bis sie 18 ist." }
        ],
        card: {
          title: "Wahlen",
          rules: [
            ["Grundsätze", ["allgemein, unmittelbar", "frei, gleich, geheim"]],
            ["Wahlalter", ["Gemeinde MV → 16", "Landtag MV → 16", "Bundestag → 18", "Europa → 16"]],
            ["Stimmen", ["Erststimme → Person", "Zweitstimme → Partei"]]
          ],
          merke: "Merke: Die Zweitstimme entscheidet über die Sitze im Bundestag.",
          quelle: "Art. 38 GG · BWahlG · LKWG M-V"
        },
        src: "Art. 38 GG; Bundeswahlgesetz; Europawahlgesetz § 6; Landes- und Kommunalwahlgesetz M-V (Wahlalter 16, Landtag erstmals 2026); BSVO M-V Anlage 1; Themenvorschlag"
      }
    ]},
    { id: "sk-4", title: "Staat und Gewaltenteilung: Bund, Land MV, Gemeinde", subs: [
      { id: "sk-4-1", title: "Gewaltenteilung",
        content: [
          { p: "Die Staatsgewalt ist auf drei Bereiche verteilt (Art. 20 Abs. 2 GG). Sie kontrollieren sich gegenseitig. So kann niemand allein die ganze Macht haben." },
          { rules: [
            ["Gesetze machen", ["Legislative", "Bundestag, Mitwirkung des Bundesrats"]],
            ["Gesetze ausführen", ["Exekutive", "Bundesregierung und Verwaltung"]],
            ["Recht sprechen", ["Judikative", "unabhängige Gerichte"]]
          ] },
          { h: "Wichtige Ämter im Bund" },
          { ul: [
            "Bundespräsident: Staatsoberhaupt, gewählt von der Bundesversammlung für 5 Jahre.",
            "Bundeskanzler: führt die Regierung, gewählt vom Bundestag.",
            "Bundestag: gewählt für 4 Jahre.",
            "Bundesrat: Vertretung der 16 Länder.",
            "Bundesverfassungsgericht: prüft, ob Gesetze zum Grundgesetz passen."
          ] },
          { ex: "Das Mietrecht steht im BGB, einem Bundesgesetz. Ändern kann es nur der Bundestag. Ein Amtsgericht entscheidet, wenn Mieter und Vermieter streiten." }
        ],
        card: {
          title: "Gewaltenteilung",
          rules: [
            ["Legislative", ["Bundestag, Bundesrat", "→ macht Gesetze"]],
            ["Exekutive", ["Regierung, Verwaltung", "→ führt Gesetze aus"]],
            ["Judikative", ["Gerichte", "→ spricht Recht"]],
            ["Amtszeit", ["Bundestag → 4 Jahre", "Bundespräsident → 5 Jahre"]]
          ],
          merke: "Merke: Drei Gewalten kontrollieren sich – keine hat die ganze Macht.",
          quelle: "GG Art. 20, 39, 54, 63"
        },
        src: "Grundgesetz Art. 20 Abs. 2, 39, 50, 54, 63, 93; BSVO M-V Anlage 1; Themenvorschlag"
      },
      { id: "sk-4-2", title: "Bund, Land MV und Gemeinde",
        content: [
          { p: "Deutschland ist ein **Bundesstaat**. Bund, Länder und Gemeinden haben eigene Aufgaben. Für dich in MV heißt das: drei Ebenen mit eigenen Regeln." },
          { rules: [
            ["Bund", ["Bundestag und Bundesregierung in Berlin", "z. B. Mietrecht (BGB), Baugesetzbuch"]],
            ["Land MV", ["Landtag und Landesregierung in Schwerin", "Landtag gewählt für 5 Jahre", "z. B. Landesbauordnung, Schulen"]],
            ["Kreis", ["6 Landkreise", "2 kreisfreie Städte: Rostock, Schwerin"]],
            ["Gemeinde", ["Gemeinde- oder Stadtvertretung, Bürgermeister", "z. B. Bebauungsplan, Hebesatz der Grundsteuer"]]
          ] },
          { p: "Gemeinden regeln ihre örtlichen Angelegenheiten selbst. Das heißt **kommunale Selbstverwaltung** (Art. 28 Abs. 2 GG)." },
          { ex: "Waren (Müritz) liegt im Landkreis Mecklenburgische Seenplatte. Will dort ein Wohnungsunternehmen bauen, prüft es den Bebauungsplan der Stadt. Die Bauordnung kommt vom Land, das Baugesetzbuch vom Bund." },
          { note: "Auch die Berufsschule ist Ländersache. Deshalb gilt für dich die Berufsschulverordnung von MV." }
        ],
        card: {
          title: "Bund, Land, Gemeinde",
          rules: [
            ["Bund", ["Mietrecht (BGB)", "Baugesetzbuch"]],
            ["Land MV", ["Landtag in Schwerin", "Landesbauordnung, Schulen"]],
            ["Kreis", ["6 Landkreise", "2 kreisfreie Städte"]],
            ["Gemeinde", ["Bebauungsplan", "Hebesatz Grundsteuer"]]
          ],
          merke: "Merke: Gemeinden regeln Örtliches selbst – Art. 28 Abs. 2 GG.",
          quelle: "GG Art. 28, 30, 70 · LV M-V Art. 27"
        },
        src: "Grundgesetz Art. 28 Abs. 2, 30, 70, 74; Verfassung des Landes M-V Art. 27; BauGB § 2; BSVO M-V Anlage 1; Themenvorschlag"
      }
    ]},
    { id: "sk-5", title: "Wirtschaftsordnung: soziale Marktwirtschaft, Verbraucherschutz", subs: [
      { id: "sk-5-1", title: "Soziale Marktwirtschaft",
        content: [
          { p: "In Deutschland gilt die **soziale Marktwirtschaft**. Angebot und Nachfrage bestimmen die Preise. Der Staat sorgt für fairen Wettbewerb und sozialen Ausgleich." },
          { rules: [
            ["Markt", ["Firmen dürfen frei wirtschaften", "Preise durch Angebot und Nachfrage"]],
            ["Wettbewerb", ["Bundeskartellamt verhindert Absprachen", "Gesetz gegen Wettbewerbsbeschränkungen"]],
            ["Sozialer Ausgleich", ["Sozialversicherung, Wohngeld", "Schutzgesetze, z. B. Mietrecht"]]
          ] },
          { ex: "In Rostock suchen viele Menschen eine Wohnung, die Mieten steigen. In manchen Dörfern stehen Wohnungen leer, die Mieten sinken. Das ist der Markt." },
          { p: "Der Staat begrenzt aber Mieterhöhungen. Bis zur ortsüblichen Vergleichsmiete darf die Miete in drei Jahren höchstens um 20 % steigen (Kappungsgrenze, § 558 Abs. 3 BGB)." },
          { calc: { title: "Rechenbeispiel: Kappungsgrenze", rows: [
            { label: "Kaltmiete vor drei Jahren", n: "500,00 €" },
            { op: "+", label: "höchstens 20 % Erhöhung", f: "× 20 %", n: "100,00 €" },
            { op: "=", label: "höchstmögliche Kaltmiete", n: "600,00 €", t: "sum" }
          ] } },
          { note: "Das gilt nur, wenn die ortsübliche Vergleichsmiete mindestens 600,00 € beträgt. Das Land kann die Grenze für bestimmte Gemeinden auf 15 % senken." }
        ],
        card: {
          title: "Soziale Marktwirtschaft",
          bullets: [
            "Preis: Angebot und Nachfrage",
            "Staat sichert Wettbewerb",
            "Staat sorgt für sozialen Ausgleich",
            "Beispiel: Kappungsgrenze 20 %"
          ],
          calc: { title: "Rechnung: Kappungsgrenze", rows: [
            { label: "Miete vor 3 Jahren", n: "500,00 €" },
            { op: "+", label: "20 %", f: "× 20 %", n: "100,00 €" },
            { op: "=", label: "höchstens", n: "600,00 €", t: "sum" }
          ] },
          merke: "Merke: Markt bestimmt den Preis – der Staat setzt soziale Grenzen.",
          quelle: "GG Art. 20 · § 558 Abs. 3 BGB · GWB"
        },
        src: "Grundgesetz Art. 20 Abs. 1 (Sozialstaat); § 558 Abs. 3 BGB; Gesetz gegen Wettbewerbsbeschränkungen (GWB); BSVO M-V Anlage 1; Themenvorschlag"
      },
      { id: "sk-5-2", title: "Verbraucherschutz",
        content: [
          { p: "Verbraucher kaufen oder mieten privat (§ 13 BGB). Unternehmer handeln beruflich (§ 14 BGB). Das Gesetz schützt Verbraucher besonders, weil sie oft weniger wissen." },
          { rules: [
            ["Widerruf", ["14 Tage ohne Begründung", "bei Verträgen online, per Telefon, an der Haustür"]],
            ["Bestellen online", ["Button muss „zahlungspflichtig bestellen“ o. Ä. heißen"]],
            ["Mangel beim Kauf", ["Gewährleistung meist 2 Jahre"]],
            ["Hilfe", ["Verbraucherzentrale MV"]]
          ] },
          { h: "Verbraucherschutz in der Immobilienwirtschaft" },
          { ul: [
            "Schließt ein Mieter den Mietvertrag per E-Mail, kann er widerrufen.",
            "Hat er die Wohnung vorher besichtigt, gibt es kein Widerrufsrecht.",
            "Vermittelt ein Makler eine Mietwohnung, zahlt ihn der, der ihn beauftragt hat (Bestellerprinzip)."
          ] },
          { ex: "Frau K. unterschreibt einen Mietvertrag für eine Wohnung in Schwerin, ohne sie gesehen zu haben. Der Vertrag kam per Post und E-Mail zustande. Sie kann ihn innerhalb von 14 Tagen widerrufen." },
          { note: "Das Widerrufsrecht gilt nur, wenn der Vermieter Unternehmer ist, z. B. ein Wohnungsunternehmen. Die Frist beginnt erst mit einer richtigen Widerrufsbelehrung. Fehlt sie, verlängert sich die Frist." }
        ],
        card: {
          title: "Verbraucherschutz",
          rules: [
            ["Widerruf", ["14 Tage", "online, Telefon, Haustür"]],
            ["Mietvertrag", ["vorher besichtigt", "→ kein Widerruf"]],
            ["Online", ["„zahlungspflichtig bestellen“"]],
            ["Kauf", ["Gewährleistung meist 2 Jahre"]],
            ["Makler", ["zahlt, wer beauftragt"]]
          ],
          merke: "Merke: Ohne Besichtigung kann ein Mieter den Fernvertrag widerrufen.",
          quelle: "BGB §§ 13, 312, 312g, 355, 438"
        },
        src: "BGB §§ 13, 14, 312 Abs. 4, 312b, 312c, 312g, 312j, 355, 356, 438; Wohnungsvermittlungsgesetz § 2 Abs. 1a; BSVO M-V Anlage 1; Themenvorschlag"
      }
    ]}
  ]
});
