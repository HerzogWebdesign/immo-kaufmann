window.IMMO = window.IMMO || [];
window.IMMO.push({
  id: "lf4",
  kind: "lf",
  nr: 4,
  title: "Wohnräume vermieten",
  short: "LF 4 · Wohnräume vermieten",
  hours: "60 Stunden (Richtwert)",
  intro: "Du lernst, wie eine Wohnung vom freien Angebot bis zur Schlüsselübergabe vermietet wird. Dabei beachtest du Markt, Recht und Kundenwunsch.",
  source: "KMK-Rahmenlehrplan 2006, Lernfeld 4",
  topics: [
    { id: "lf4-1", title: "Markt und Marketing", subs: [
      { id: "lf4-1-1", title: "Den Wohnungsmarkt vor Ort analysieren",
        content: [
          { p: "Bevor du eine Wohnung anbietest, musst du den **Markt** kennen. Markt heißt: Hier treffen Angebot und Nachfrage zusammen." },
          { p: "Gibt es mehr Wohnungen als Interessenten, ist der Markt **entspannt**. Gibt es mehr Interessenten als Wohnungen, ist er **angespannt**." },
          { h: "Was du untersuchst" },
          { ul: [
            "Angebot: Wie viele Wohnungen sind frei?",
            "Nachfrage: Wer sucht? Studenten, Familien, Senioren?",
            "Miethöhe: Was kostet ein Quadratmeter?",
            "Lage: Verkehr, Schulen, Einkaufen, Arbeitsplätze.",
            "Wettbewerb: Was bieten andere Vermieter an?"
          ] },
          { rules: [
            ["Quellen", ["Mietspiegel der Gemeinde (falls vorhanden)", "Statistisches Amt MV", "Immobilienportale", "eigener Wohnungsbestand"]]
          ] },
          { calc: { title: "Rechenbeispiel: Leerstandsquote", rows: [
            { label: "leer stehende Wohnungen", n: "48" },
            { op: ":", label: "Wohnungen im Bestand", n: "1.200" },
            { op: "=", label: "Ergebnis", n: "0,04", t: "sub" },
            { op: "×", label: "in Prozent", n: "100" },
            { op: "=", label: "Leerstandsquote", n: "4,00 %", t: "sum" }
          ] } },
          { calc: { title: "Rechenbeispiel: Miete je Quadratmeter", rows: [
            { label: "Nettokaltmiete", n: "520,00 €" },
            { op: ":", label: "Wohnfläche", n: "65,00 m²" },
            { op: "=", label: "Miete je m²", n: "8,00 €/m²", t: "sum" }
          ] } },
          { ex: "Ein Wohnungsunternehmen in Waren hat 48 von 1.200 Wohnungen frei. Die Quote von 4,00 % zeigt: Es muss aktiv um Mieter werben." },
          { note: "**Nettokaltmiete** ist die Miete ohne Betriebs- und Heizkosten. Mit ihr vergleichst du Wohnungen am besten." }
        ],
        card: {
          title: "Wohnungsmarkt analysieren",
          rules: [
            ["Markt", ["entspannt: mehr Wohnungen", "angespannt: mehr Suchende"]],
            ["Prüfen", ["Angebot", "Nachfrage", "Miete je m²", "Lage"]]
          ],
          calc: { title: "Rechnung: Leerstandsquote", rows: [
            { label: "leere Wohnungen", n: "48" },
            { op: ":", label: "Bestand", n: "1.200" },
            { op: "×", label: "Prozent", n: "100" },
            { op: "=", label: "Leerstandsquote", n: "4,00 %", t: "sum" }
          ] },
          merke: "Merke: Erst den Markt kennen, dann Miete und Werbung planen.",
          quelle: "KMK-RLP LF 4 (Marktanalyse)"
        },
        src: "Rahmenlehrplan Lernfeld 4 („Marktanalyse“); Mietspiegel nach BGB §§ 558c, 558d"
      },
      { id: "lf4-1-2", title: "Marketinginstrumente",
        content: [
          { p: "**Marketing** heißt: Das Unternehmen richtet sein Angebot nach den Wünschen der Kunden aus. Dafür gibt es vier Werkzeuge, die **Marketinginstrumente**." },
          { rules: [
            ["Produkt", ["Wohnung, Ausstattung, Service"]],
            ["Preis", ["Miethöhe, Kaution, Rabatte"]],
            ["Kommunikation", ["Werbung, Exposé, Social Media"]],
            ["Vertrieb", ["Wege zum Kunden: Portal, Büro, Makler"]]
          ] },
          { ex: "Eine Genossenschaft in Rostock baut Bäder seniorengerecht um (Produkt). Sie wirbt in der Seniorenzeitung (Kommunikation)." },
          { h: "Preis: die Mietpreisbremse" },
          { p: "In Gebieten mit **angespanntem Wohnungsmarkt** gilt die **Mietpreisbremse**. Bei einer neuen Vermietung darf die Miete dort höchstens 10 % über der **ortsüblichen Vergleichsmiete** liegen. Das ist die übliche Miete für ähnliche Wohnungen im Ort." },
          { ul: [
            "Ausnahme: Neubau, erstmals vermietet nach dem 01.10.2014.",
            "Ausnahme: erste Vermietung nach umfassender Modernisierung.",
            "Ausnahme: Die Vormiete war schon höher.",
            "Ausnahmen musst du dem Mieter vor Vertragsschluss in Textform nennen."
          ] },
          { calc: { title: "Rechenbeispiel: höchste Miete mit Mietpreisbremse", rows: [
            { label: "ortsübliche Vergleichsmiete", n: "9,00 €/m²" },
            { op: "+", label: "Zuschlag", f: "× 10 %", n: "0,90 €/m²" },
            { op: "=", label: "höchstens zulässig je m²", n: "9,90 €/m²", t: "sub" },
            { op: "×", label: "Wohnfläche", n: "60,00 m²" },
            { op: "=", label: "höchste Nettokaltmiete", n: "594,00 €", t: "sum" }
          ] } },
          { warn: "Wo die Mietpreisbremse gilt, legt das Land per Verordnung fest. In MV galt sie im November 2026 laut Landesverordnungen in Rostock und Greifswald sowie seit 2026 in acht Küstenorten (z. B. Kühlungsborn, Zingst, Binz). In Waren galt sie nicht. Prüfe vor jeder Vermietung den aktuellen Stand." }
        ],
        card: {
          title: "Marketinginstrumente",
          rules: [
            ["Produkt", ["Wohnung, Ausstattung"]],
            ["Preis", ["Miete, Kaution"]],
            ["Kommunik.", ["Werbung, Exposé"]],
            ["Vertrieb", ["Portal, Büro, Makler"]],
            ["Bremse", ["max. Vergleichsmiete + 10 %"]]
          ],
          calc: { title: "Rechnung: Mietpreisbremse", rows: [
            { label: "Vergleichsmiete", n: "9,00 €/m²" },
            { op: "+", label: "10 %", n: "0,90 €/m²" },
            { op: "=", label: "höchstens", n: "9,90 €/m²", t: "sum" }
          ] },
          merke: "Merke: Vier Instrumente – Produkt, Preis, Kommunikation, Vertrieb.",
          quelle: "BGB §§ 556d–556g · KMK-RLP LF 4"
        },
        src: "BGB §§ 556d bis 556g (Mietpreisbremse); Mietenbegrenzungsverordnungen M-V (Stand November 2026, vor Ort prüfen); Rahmenlehrplan Lernfeld 4 („Absatzwerbung“, „Mietpreisbindungen“)"
      },
      { id: "lf4-1-3", title: "Werbung für Wohnungen (z. B. AIDA)",
        content: [
          { p: "Eine gute Anzeige führt den Leser Schritt für Schritt zur Anfrage. Dabei hilft die **AIDA-Formel**. Sie besteht aus vier Stufen." },
          { rules: [
            ["A – Attention", ["Aufmerksamkeit wecken", "starke Überschrift, gutes Foto"]],
            ["I – Interest", ["Interesse wecken", "Lage, Größe, Ausstattung"]],
            ["D – Desire", ["Wunsch wecken", "Nutzen für den Mieter zeigen"]],
            ["A – Action", ["Handlung auslösen", "Termin buchen, anrufen"]]
          ] },
          { ex: "Anzeige aus Schwerin: „Wohnen mit Seeblick!“ (A). „3 Zimmer, 72 m², Balkon, 5 Minuten zum Pfaffenteich“ (I). „Abends die Sonne auf dem Balkon genießen“ (D). „Jetzt Besichtigung online buchen“ (A)." },
          { h: "Regeln für Anzeigen" },
          { ul: [
            "Alle Angaben müssen stimmen.",
            "Pflichtangaben aus dem Energieausweis gehören hinein.",
            "Keine Wünsche nach Herkunft, Religion oder Alter nennen.",
            "Fotos zeigen die echte Wohnung."
          ] },
          { note: "Falsche Angaben in der Werbung können wettbewerbswidrig sein. Sie verärgern außerdem Interessenten." }
        ],
        card: {
          title: "Werbung mit AIDA",
          rules: [
            ["Attention", ["Aufmerksamkeit wecken"]],
            ["Interest", ["Interesse wecken"]],
            ["Desire", ["Wunsch wecken"]],
            ["Action", ["Handlung auslösen"]]
          ],
          merke: "Merke: Jede Anzeige endet mit einer klaren Aufforderung zum Handeln.",
          quelle: "KMK-RLP LF 4 (Absatzwerbung) · GEG § 87"
        },
        src: "Rahmenlehrplan Lernfeld 4 („Absatzwerbung“); Gebäudeenergiegesetz § 87 (Pflichtangaben in Anzeigen); AGG § 19"
      }
    ]},
    { id: "lf4-2", title: "Mietobjekt und Angebot", subs: [
      { id: "lf4-2-1", title: "Arten von Mietobjekten",
        content: [
          { p: "Nicht jede Wohnung ist gleich. Die Art entscheidet, welche Regeln für Miete und Vertrag gelten." },
          { h: "Nach der Finanzierung" },
          { rules: [
            ["frei finanziert", ["ohne staatliche Förderung", "Miete frei vereinbar (Grenzen beachten)"]],
            ["gefördert", ["mit Fördergeld gebaut", "nur mit Wohnberechtigungsschein", "Miete begrenzt"]]
          ] },
          { h: "Nach der Nutzung" },
          { ul: [
            "Wohnung im Mehrfamilienhaus.",
            "Einfamilienhaus oder Reihenhaus.",
            "Möblierte Wohnung oder WG-Zimmer.",
            "Werkwohnung: an Mitarbeiter eines Betriebs vermietet.",
            "Ferienwohnung: nur zum vorübergehenden Gebrauch."
          ] },
          { p: "Bei einer **Genossenschaft** heißt der Vertrag oft **Nutzungsvertrag**. Das Mitglied nutzt die Wohnung. Für ihn gilt aber weitgehend das Mietrecht." },
          { ex: "An der Ostsee vermietet eine Verwaltung Ferienwohnungen für eine Woche. Der Kündigungsschutz und die Mietpreisbremse gelten dafür nicht." },
          { note: "Wohnraum zum vorübergehenden Gebrauch ist von vielen Mieterschutzregeln ausgenommen (BGB § 549 Abs. 2)." }
        ],
        card: {
          title: "Arten von Mietobjekten",
          rules: [
            ["frei", ["ohne Förderung"]],
            ["gefördert", ["nur mit WBS", "Miete begrenzt"]],
            ["Nutzung", ["Wohnung, Haus", "möbliert, WG-Zimmer", "Werkwohnung", "Ferienwohnung"]]
          ],
          merke: "Merke: Die Art der Wohnung bestimmt, welche Regeln gelten.",
          quelle: "BGB §§ 549, 576 · WoFG § 27 · RLP LF 4"
        },
        src: "BGB § 549 Abs. 2 (vorübergehender Gebrauch), §§ 576 ff. (Werkwohnungen); Wohnraumförderungsgesetz § 27; Rahmenlehrplan Lernfeld 4 („Mietobjekte“)"
      },
      { id: "lf4-2-2", title: "Das Exposé",
        content: [
          { p: "Das **Exposé** ist die Beschreibung der Wohnung für Interessenten. Es soll informieren und Lust auf eine Besichtigung machen." },
          { h: "Was hineingehört" },
          { ul: [
            "Lage: Ort, Stadtteil, Umgebung.",
            "Wohnung: Zimmer, Wohnfläche, Etage, Ausstattung.",
            "Fotos und Grundriss.",
            "Kosten: Kaltmiete, Vorauszahlungen, Kaution.",
            "Frei ab: Datum des Einzugs.",
            "Energieausweis: Pflichtangaben.",
            "Kontakt: Ansprechpartner, Telefon, E-Mail."
          ] },
          { calc: { title: "Rechenbeispiel: Kosten im Exposé", rows: [
            { label: "Wohnfläche 65,00 m²", f: "× 8,00 €/m²", n: "520,00 €" },
            { op: "+", label: "Vorauszahlung Betriebskosten", n: "130,00 €" },
            { op: "+", label: "Vorauszahlung Heizkosten", n: "75,00 €" },
            { op: "=", label: "Gesamtmiete im Monat", n: "725,00 €", t: "sum" }
          ] } },
          { ex: "Frau K. fragt nach der Warmmiete. Du nennst ihr die Gesamtmiete von 725,00 € und erklärst die drei Teile." },
          { note: "Die **Wohnfläche** im Exposé muss stimmen. Sie wird später oft in den Mietvertrag übernommen." }
        ],
        card: {
          title: "Das Exposé",
          bullets: [
            "Lage und Umgebung",
            "Zimmer, Fläche, Ausstattung",
            "Fotos, Grundriss",
            "Kaltmiete, Vorauszahlungen, Kaution",
            "Energieausweis-Angaben"
          ],
          calc: { title: "Rechnung: Gesamtmiete", rows: [
            { label: "Kaltmiete", n: "520,00 €" },
            { op: "+", label: "Betriebskosten", n: "130,00 €" },
            { op: "+", label: "Heizkosten", n: "75,00 €" },
            { op: "=", label: "Gesamtmiete", n: "725,00 €", t: "sum" }
          ] },
          merke: "Merke: Das Exposé informiert ehrlich und macht Lust auf die Besichtigung.",
          quelle: "GEG § 87 · KMK-RLP LF 4 (Exposé)"
        },
        src: "Rahmenlehrplan Lernfeld 4 („Mietangebot – Exposé“); Gebäudeenergiegesetz § 87; BGB § 556 (Betriebskosten-Vorauszahlung)"
      },
      { id: "lf4-2-3", title: "Wohnfläche berechnen",
        content: [
          { p: "Die Wohnfläche steht im Exposé und im Mietvertrag. Nach ihr richten sich Miete und oft auch die Betriebskosten. Deshalb muss sie stimmen." },
          { p: "Gerechnet wird meist nach der **Wohnflächenverordnung (WoFlV)**. Für geförderte Wohnungen ist sie Pflicht. Bei frei finanzierten Wohnungen gilt sie, wenn nichts anderes vereinbart ist." },
          { h: "So zählt die Fläche" },
          { ul: [
            "Raumhöhe ab 2 m: Fläche zählt **ganz**.",
            "Raumhöhe 1 m bis unter 2 m (Dachschräge): zählt **zur Hälfte**.",
            "Raumhöhe unter 1 m: zählt **gar nicht**.",
            "Balkon, Loggia, Terrasse: meist **ein Viertel**, höchstens die Hälfte.",
            "Keller, Waschküche, Heizungsraum, Garage: gehören **nicht** zur Wohnfläche."
          ] },
          { calc: { title: "Rechenbeispiel: Dachzimmer", rows: [
            { label: "Dachzimmer gesamt", n: "20,00 m²" },
            { op: "–", label: "davon Schräge (1,50 m hoch)", n: "4,00 m²" },
            { op: "=", label: "Fläche ab 2 m Höhe", n: "16,00 m²", t: "sub" },
            { label: "Fläche ab 2 m: 16,00 m²", f: "× 100 %", n: "16,00 m²" },
            { op: "+", label: "Schräge: 4,00 m²", f: "× 50 %", n: "2,00 m²" },
            { op: "=", label: "Wohnfläche", n: "18,00 m²", t: "sum" }
          ] } },
          { calc: { title: "Mit Balkon (8 m²)", rows: [
            { label: "Wohnfläche Zimmer", n: "18,00 m²" },
            { op: "+", label: "Balkon: 8,00 m²", f: "× 25 %", n: "2,00 m²" },
            { op: "=", label: "Wohnfläche gesamt", n: "20,00 m²", t: "sum" }
          ] } },
          { note: "**Wichtig:** Ist die Wohnung mehr als 10 % kleiner als im Vertrag steht, darf der Mieter die Miete mindern (Rechtsprechung des Bundesgerichtshofs)." }
        ],
        card: {
          title: "Wohnfläche berechnen",
          rules: [
            ["Regel: WoFlV", ["ab 2 m Höhe → 100 %", "1 bis unter 2 m → 50 %", "unter 1 m → 0 %", "Balkon → meist 25 %, max. 50 %", "Keller, Garage → 0 %"]]
          ],
          calc: { title: "Rechnung: Dachzimmer", rows: [
            { label: "Dachzimmer gesamt", n: "20,00 m²" },
            { op: "–", label: "davon Schräge 1,50 m", n: "4,00 m²" },
            { label: "ab 2 m: 16,00 m²", f: "× 100 %", n: "16,00 m²" },
            { op: "+", label: "Schräge: 4,00 m²", f: "× 50 %", n: "2,00 m²" },
            { op: "=", label: "Wohnfläche", n: "18,00 m²", t: "sum" }
          ] },
          merke: "Merke: Über 10 % zu wenig Fläche = Mangel → Mietminderung.",
          quelle: "WoFlV §§ 2, 4 · KMK-RLP LF 4"
        },
        src: "Wohnflächenverordnung §§ 2 und 4; Rahmenlehrplan Lernfeld 4 („Wohnflächenberechnung“)"
      },
      { id: "lf4-2-4", title: "Energieausweis",
        content: [
          { p: "Der **Energieausweis** zeigt, wie viel Energie ein Gebäude braucht. So kann der Mieter die Heizkosten besser einschätzen. Geregelt ist er im **Gebäudeenergiegesetz (GEG)**." },
          { rules: [
            ["Bedarfsausweis", ["berechnet aus Bauweise und Technik", "unabhängig vom Verhalten der Mieter"]],
            ["Verbrauchsausweis", ["gemessener Verbrauch der letzten 3 Jahre", "hängt vom Heizverhalten ab"]]
          ] },
          { h: "Deine Pflichten bei der Vermietung" },
          { ul: [
            "Ausweis spätestens bei der Besichtigung vorlegen.",
            "Oder gut sichtbar bei der Besichtigung aushängen.",
            "Nach Vertragsschluss sofort Original oder Kopie übergeben.",
            "In Anzeigen die Pflichtangaben nennen."
          ] },
          { rules: [
            ["Pflichtangaben", ["Art des Ausweises", "Energiebedarf oder -verbrauch", "wichtigster Energieträger", "Baujahr des Gebäudes", "Effizienzklasse (A+ bis H)"]]
          ] },
          { ex: "In einer Anzeige für Rostock steht: „Verbrauchsausweis, 112 kWh/(m²·a), Fernwärme, Baujahr 1975, Klasse D.“ So sind alle Pflichtangaben erfüllt." },
          { note: "Ein Energieausweis gilt **10 Jahre**. Fehlt er, droht ein Bußgeld." },
          { warn: "Das GEG und die EU-Gebäuderichtlinie werden 2026 überarbeitet. Prüfe im Betrieb, ob sich Pflichtangaben oder Klassen geändert haben." }
        ],
        card: {
          title: "Energieausweis",
          rules: [
            ["Arten", ["Bedarfsausweis: berechnet", "Verbrauchsausweis: gemessen"]],
            ["Pflicht", ["bei Besichtigung vorlegen", "nach Vertrag übergeben", "Angaben in jede Anzeige"]],
            ["Gültig", ["10 Jahre"]]
          ],
          merke: "Merke: Kein Vermietungsgespräch ohne gültigen Energieausweis.",
          quelle: "GEG §§ 79, 80, 87 · KMK-RLP LF 4"
        },
        src: "Gebäudeenergiegesetz §§ 79, 80, 87; Stand November 2026, Überarbeitung des GEG offen"
      }
    ]},
    { id: "lf4-3", title: "Mieterauswahl", subs: [
      { id: "lf4-3-1", title: "Mieter finden",
        content: [
          { p: "Für jede freie Wohnung suchst du einen passenden Mieter. Jeder Tag Leerstand kostet Geld. Deshalb nutzt du mehrere Wege." },
          { ul: [
            "Immobilienportale im Internet.",
            "Eigene Website des Unternehmens.",
            "Interessentenliste oder Warteliste.",
            "Aushang, Zeitung, Social Media.",
            "Empfehlung durch zufriedene Mieter.",
            "Beauftragung eines Maklers."
          ] },
          { h: "Bestellerprinzip beim Makler" },
          { p: "Wer den Makler beauftragt, bezahlt ihn. Das ist das **Bestellerprinzip**. Meist beauftragt der Vermieter den Makler. Dann darf der Makler vom Mieter kein Geld verlangen." },
          { rules: [
            ["Mieter zahlt nur", ["wenn er den Makler beauftragt", "und der Makler nur für ihn sucht"]],
            ["Höchstens", ["2 Nettokaltmieten", "plus Umsatzsteuer"]],
            ["Form", ["Vertrag in Textform"]]
          ] },
          { calc: { title: "Rechenbeispiel: höchste Maklerprovision", rows: [
            { label: "Nettokaltmiete 500,00 €", f: "× 2", n: "1.000,00 €" },
            { op: "+", label: "Umsatzsteuer", f: "× 19 %", n: "190,00 €" },
            { op: "=", label: "höchste Provision", n: "1.190,00 €", t: "sum" }
          ] } },
          { ex: "Eine Hausverwaltung in Waren beauftragt einen Makler für eine Wohnung. Die Provision zahlt die Hausverwaltung für den Eigentümer, nicht der neue Mieter." }
        ],
        card: {
          title: "Mieter finden",
          rules: [
            ["Wege", ["Portal, Website", "Warteliste, Empfehlung", "Makler"]],
            ["Makler", ["Wer bestellt, bezahlt", "max. 2 Kaltmieten + USt"]]
          ],
          calc: { title: "Rechnung: höchste Provision", rows: [
            { label: "Kaltmiete 500,00 €", f: "× 2", n: "1.000,00 €" },
            { op: "+", label: "USt", f: "× 19 %", n: "190,00 €" },
            { op: "=", label: "Provision", n: "1.190,00 €", t: "sum" }
          ] },
          merke: "Merke: Beauftragt der Vermieter den Makler, zahlt der Mieter nichts.",
          quelle: "WoVermittG §§ 2, 3 · KMK-RLP LF 4"
        },
        src: "Wohnungsvermittlungsgesetz § 2 Abs. 1 und 1a (Bestellerprinzip), § 3 Abs. 2 (Höchstbetrag); Umsatzsteuergesetz § 12 Abs. 1; Rahmenlehrplan Lernfeld 4"
      },
      { id: "lf4-3-2", title: "Mieterselbstauskunft: erlaubte Fragen",
        content: [
          { p: "Mit der **Mieterselbstauskunft** gibt der Interessent Angaben über sich. So prüfst du, ob er die Miete zahlen kann. Du darfst aber nur fragen, was für das Mietverhältnis wichtig ist." },
          { rules: [
            ["erlaubt", ["Name, Anschrift, Geburtsdatum", "Beruf und Arbeitgeber", "Nettoeinkommen", "Zahl der einziehenden Personen", "Haustiere", "Mietschulden, Insolvenz"]],
            ["nicht erlaubt", ["Religion, Partei", "Herkunft", "Schwangerschaft, Kinderwunsch", "Gesundheit", "Hobbys, Vereine"]]
          ] },
          { p: "Auf eine unerlaubte Frage darf der Interessent falsch antworten. Später darfst du ihm deswegen nicht kündigen." },
          { p: "Lügt er bei einer erlaubten Frage, kann der Vertrag angefochten werden. Dann kann das Mietverhältnis enden." },
          { ex: "Lea füllt in Greifswald die Selbstauskunft aus. Die Frage „Planen Sie Kinder?“ darf dort nicht stehen. Die Frage nach dem Einkommen ist erlaubt." },
          { note: "Frag nicht alles auf einmal. Viele Daten brauchst du erst, wenn der Interessent die Wohnung wirklich will (siehe Datenschutz)." }
        ],
        card: {
          title: "Selbstauskunft",
          rules: [
            ["erlaubt", ["Name, Anschrift", "Beruf, Einkommen", "Zahl der Personen", "Tiere, Mietschulden"]],
            ["verboten", ["Religion, Partei, Herkunft", "Schwangerschaft, Kinderwunsch", "Gesundheit"]]
          ],
          merke: "Merke: Auf unerlaubte Fragen darf der Mieter falsch antworten.",
          quelle: "DSGVO Art. 5, 6 · AGG § 19 · BGB § 123"
        },
        src: "DSGVO Art. 5 und 6; Orientierungshilfe der Datenschutzkonferenz zur Einholung von Selbstauskünften bei Mietinteressenten; AGG § 19; BGB § 123 (Anfechtung); Rahmenlehrplan Lernfeld 4 („Mieterselbstauskunft“)"
      },
      { id: "lf4-3-3", title: "Datenschutz bei Mieterdaten",
        content: [
          { p: "Mieterdaten sind **personenbezogene Daten**. Für sie gilt die **Datenschutz-Grundverordnung (DSGVO)**. Du darfst Daten nur erheben, wenn du sie wirklich brauchst." },
          { h: "Grundsätze" },
          { ul: [
            "Datenminimierung: so wenig Daten wie möglich.",
            "Zweckbindung: nur für die Vermietung nutzen.",
            "Information: Interessent erfährt, was mit den Daten passiert.",
            "Löschung: Daten löschen, wenn sie nicht mehr nötig sind.",
            "Sicherheit: Unterlagen verschließen, Dateien schützen."
          ] },
          { h: "Welche Daten wann" },
          { rules: [
            ["vor Besichtigung", ["Name, Kontakt"]],
            ["Interessent will Wohnung", ["Einkommen, Beruf", "Zahl der Personen"]],
            ["vor Vertragsschluss", ["Einkommensnachweis", "Bonitätsauskunft (z. B. SCHUFA)"]]
          ] },
          { ex: "Nach der Besichtigung in Schwerin sagt Tom ab. Seine Gehaltsnachweise gibst du zurück oder vernichtest sie datenschutzgerecht." },
          { note: "Kopien vom Personalausweis brauchst du meist nicht. Ein Blick auf den Ausweis genügt zur Prüfung." },
          { warn: "Wie lange abgelehnte Bewerbungen aufbewahrt werden, regelt das Löschkonzept deines Betriebs. Frag deinen Datenschutzbeauftragten." }
        ],
        card: {
          title: "Datenschutz Mieterdaten",
          rules: [
            ["Regeln", ["so wenig wie möglich", "nur für die Vermietung", "informieren", "löschen, wenn nicht nötig"]],
            ["Stufen", ["Besichtigung: Name, Kontakt", "Interesse: Einkommen, Beruf", "Vertrag: Nachweise, Bonität"]]
          ],
          merke: "Merke: Erst fragen, wenn du die Daten wirklich brauchst.",
          quelle: "DSGVO Art. 5, 6, 13, 17 · RLP LF 4"
        },
        src: "DSGVO Art. 5 (Grundsätze), Art. 6 Abs. 1 Buchst. b (vorvertragliche Maßnahmen), Art. 13 (Information), Art. 17 (Löschung); Orientierungshilfe der Datenschutzkonferenz zu Selbstauskünften; Rahmenlehrplan Lernfeld 4 („Datenschutz“)"
      },
      { id: "lf4-3-4", title: "Gleichbehandlung (AGG)",
        content: [
          { p: "Das **Allgemeine Gleichbehandlungsgesetz (AGG)** schützt vor Benachteiligung. Bei der Mieterauswahl darfst du niemanden wegen bestimmter Merkmale ablehnen." },
          { rules: [
            ["geschützt", ["ethnische Herkunft, rassistische Gründe", "Geschlecht", "Religion, Weltanschauung", "Behinderung", "Alter", "sexuelle Identität"]]
          ] },
          { h: "Wann es gilt" },
          { ul: [
            "Herkunft und rassistische Gründe: bei jeder Vermietung.",
            "Andere Merkmale: vor allem bei großen Vermietern.",
            "Wer höchstens 50 Wohnungen vermietet, ist dafür meist ausgenommen.",
            "Ausgenommen ist auch, wer mit dem Mieter auf einem Grundstück wohnt."
          ] },
          { p: "Erlaubt ist eine Auswahl, die **sozial stabile Bewohnerstrukturen** schafft. Gemeint ist eine gute Mischung im Haus." },
          { ex: "Ein Wohnungsunternehmen in Rostock lehnt Herrn A. ab, weil er einen ausländischen Namen hat. Das ist verboten. Er kann Schadensersatz und Entschädigung fordern." },
          { note: "Ansprüche muss der Betroffene innerhalb von 2 Monaten geltend machen. Dokumentiere deshalb, warum du dich für einen Mieter entschieden hast." }
        ],
        card: {
          title: "Gleichbehandlung (AGG)",
          rules: [
            ["geschützt", ["Herkunft, rassistische Gründe", "Geschlecht, Religion", "Behinderung, Alter", "sexuelle Identität"]],
            ["Ausnahme", ["max. 50 Wohnungen", "Vermieter wohnt im Haus"]],
            ["Frist", ["2 Monate für Ansprüche"]]
          ],
          merke: "Merke: Wegen der Herkunft darf nie jemand abgelehnt werden.",
          quelle: "AGG §§ 1, 19, 21 · KMK-RLP LF 4"
        },
        src: "Allgemeines Gleichbehandlungsgesetz §§ 1, 19 (Abs. 1 bis 5), 21 (Ansprüche, Frist 2 Monate); Rahmenlehrplan Lernfeld 4 („Mieterauswahl“)"
      },
      { id: "lf4-3-5", title: "Geförderter Wohnraum: Belegungs- und Mietpreisbindung, Wohnberechtigungsschein",
        content: [
          { p: "Manche Wohnungen wurden mit staatlichem Geld gebaut oder modernisiert. Das heißt **geförderter Wohnraum** oder Sozialwohnung. Dafür gelten Bindungen." },
          { rules: [
            ["Belegungsbindung", ["nur an Haushalte mit WBS", "teils benennt die Gemeinde den Mieter"]],
            ["Mietpreisbindung", ["Miete höchstens wie in der Förderzusage", "keine höhere Miete verlangen"]]
          ] },
          { h: "Der Wohnberechtigungsschein (WBS)" },
          { ul: [
            "Der Mieter beantragt ihn bei der zuständigen Stelle der Stadt.",
            "Er bekommt ihn, wenn sein Einkommen unter einer Grenze liegt.",
            "Der WBS nennt die passende Wohnungsgröße.",
            "Er gilt ein Jahr."
          ] },
          { calc: { title: "Rechenbeispiel: Einkommensgrenze nach Bundesrecht", rows: [
            { label: "Zweipersonenhaushalt", n: "18.000,00 €" },
            { op: "+", label: "weitere Person (Kind)", n: "4.100,00 €" },
            { op: "+", label: "Zuschlag je Kind", n: "500,00 €" },
            { op: "=", label: "Grenze für 3 Personen im Jahr", n: "22.600,00 €", t: "sum" }
          ] } },
          { ex: "Familie M. (zwei Erwachsene, ein Kind) zieht in Waren in eine geförderte Wohnung. Vor dem Vertrag lässt du dir den gültigen WBS zeigen." },
          { note: "Ohne gültigen WBS darfst du eine gebundene Wohnung nicht vermieten. Sonst drohen Geldleistungen an die Förderstelle." },
          { warn: "Die Länder dürfen eigene Einkommensgrenzen und Regeln festlegen. In MV gelten die Förderrichtlinien des Landes. Frag die aktuellen Werte bei der Stadt oder im Betrieb nach." }
        ],
        card: {
          title: "Geförderter Wohnraum",
          rules: [
            ["Belegung", ["nur mit WBS"]],
            ["Miete", ["max. laut Förderzusage"]],
            ["WBS", ["Einkommen unter Grenze", "gilt 1 Jahr"]]
          ],
          calc: { title: "Rechnung: Grenze 3 Personen", rows: [
            { label: "2 Personen", n: "18.000,00 €" },
            { op: "+", label: "weitere Person", n: "4.100,00 €" },
            { op: "+", label: "Kind", n: "500,00 €" },
            { op: "=", label: "Grenze im Jahr", n: "22.600,00 €", t: "sum" }
          ] },
          merke: "Merke: Gebundene Wohnung nur mit WBS – MV kann andere Grenzen haben.",
          quelle: "WoFG §§ 9, 26–28 · Landesrecht MV"
        },
        src: "Wohnraumförderungsgesetz § 9 Abs. 2 (Einkommensgrenzen des Bundes, Länder können abweichen), §§ 26 bis 28 (Belegungs- und Mietbindung, WBS); Förderrichtlinien des Landes MV (Werte vor Ort prüfen); Rahmenlehrplan Lernfeld 4 („Belegungsbindungen“, „Mietpreisbindungen“)"
      }
    ]},
    { id: "lf4-4", title: "Der Mietvertrag", subs: [
      { id: "lf4-4-1", title: "Arten: unbefristet, Zeitmiete, Staffelmiete, Indexmiete",
        content: [
          { p: "Mietverträge unterscheiden sich nach der **Dauer** und nach der **Entwicklung der Miete**." },
          { rules: [
            ["unbefristet", ["Normalfall", "läuft, bis jemand kündigt"]],
            ["Zeitmiete", ["endet zu einem festen Datum", "nur mit gesetzlichem Grund"]],
            ["Staffelmiete", ["Erhöhungen stehen schon im Vertrag", "als Eurobetrag"]],
            ["Indexmiete", ["Miete folgt dem Verbraucherpreisindex"]]
          ] },
          { h: "Zeitmiete: erlaubte Gründe" },
          { ul: [
            "Der Vermieter will die Wohnung später selbst oder für Familie nutzen.",
            "Er will das Haus abreißen oder stark umbauen.",
            "Er will an einen Mitarbeiter vermieten (Werkwohnung).",
            "Den Grund muss er bei Vertragsschluss schriftlich nennen."
          ] },
          { h: "Staffel- und Indexmiete" },
          { ul: [
            "Beide müssen **schriftlich** vereinbart werden (§§ 557a, 557b BGB).",
            "Die Miete bleibt jeweils mindestens 1 Jahr gleich.",
            "Bei der Indexmiete erklärt der Vermieter die Änderung in Textform.",
            "Mit Mietpreisbremse muss jede Staffel die Grenze einhalten."
          ] },
          { calc: { title: "Rechenbeispiel: Indexmiete (Beispielwerte)", rows: [
            { label: "Index neu", n: "123,0" },
            { op: "–", label: "Index bei letzter Anpassung", n: "120,0" },
            { op: "=", label: "Anstieg in Punkten", n: "3,0", t: "sub" },
            { op: ":", label: "Index bei letzter Anpassung", n: "120,0" },
            { op: "=", label: "Ergebnis", n: "0,025", t: "sub" },
            { op: "×", label: "in Prozent", n: "100" },
            { op: "=", label: "Anstieg in Prozent", n: "2,50 %", t: "sub" },
            { label: "Miete bisher", n: "600,00 €" },
            { op: "+", label: "Anstieg", f: "× 2,50 %", n: "15,00 €" },
            { op: "=", label: "neue Miete", n: "615,00 €", t: "sum" }
          ] } },
          { ex: "Ein Student in Greifswald unterschreibt eine Staffelmiete. Im Vertrag steht: ab 01.10. des nächsten Jahres 20,00 € mehr. So kennt er seine Kosten im Voraus." },
          { warn: "Der Bundestag berät 2026 eine Mietrechtsreform. Geplant sind Grenzen für Indexmieten und Kurzzeitverträge. Ob sie schon gilt, prüfst du im Betrieb." }
        ],
        card: {
          title: "Arten von Mietverträgen",
          rules: [
            ["unbefristet", ["Normalfall"]],
            ["Zeitmiete", ["nur mit Grund (§ 575)"]],
            ["Staffel", ["Erhöhung im Vertrag", "je Stufe min. 1 Jahr"]],
            ["Index", ["folgt Preisindex", "min. 1 Jahr gleich"]]
          ],
          calc: { title: "Rechnung: Indexmiete", rows: [
            { label: "Miete bisher", n: "600,00 €" },
            { op: "+", label: "Index +2,50 %", n: "15,00 €" },
            { op: "=", label: "neue Miete", n: "615,00 €", t: "sum" }
          ] },
          merke: "Merke: Zeitmiete nur mit Grund – sonst gilt der Vertrag unbefristet.",
          quelle: "BGB §§ 557a, 557b, 575 · KMK-RLP LF 4"
        },
        src: "BGB § 557a (Staffelmiete), § 557b (Indexmiete), § 575 (Zeitmietvertrag); Stand November 2026, laufende Mietrechtsreform offen; Rahmenlehrplan Lernfeld 4 („Arten des Mietvertrages“)"
      },
      { id: "lf4-4-2", title: "Form des Vertrags",
        content: [
          { p: "Ein Mietvertrag kann grundsätzlich auch mündlich geschlossen werden. In der Praxis schließt man ihn aber immer **schriftlich**. So kann man später alles beweisen." },
          { rules: [
            ["Schriftform", ["Papier mit eigenhändiger Unterschrift"]],
            ["Textform", ["lesbare Erklärung ohne Unterschrift", "z. B. E-Mail"]]
          ] },
          { h: "Was das Gesetz verlangt" },
          { ul: [
            "Vertrag über mehr als 1 Jahr: Schriftform nötig.",
            "Fehlt sie, gilt der Vertrag als unbefristet.",
            "Staffel- und Indexmiete: schriftlich vereinbaren (§§ 557a, 557b BGB).",
            "Zeitmiete: Grund schriftlich mitteilen."
          ] },
          { p: "Viele Unternehmen nutzen **Formularmietverträge**. Das sind vorgedruckte Verträge. Ihre Klauseln gelten als **Allgemeine Geschäftsbedingungen** und dürfen den Mieter nicht unangemessen benachteiligen." },
          { ex: "Eine Mieterin vereinbart per Handschlag fünf Jahre Kündigungsverzicht. Ohne Schriftform gilt der Vertrag als unbefristet. Sie kann also früher kündigen." },
          { note: "Beide Seiten unterschreiben auf demselben Vertrag. Anlagen wie die Hausordnung fest verbinden oder im Vertrag nennen." }
        ],
        card: {
          title: "Form des Vertrags",
          rules: [
            ["Schriftform", ["Papier + Unterschrift"]],
            ["Textform", ["ohne Unterschrift, z. B. E-Mail"]],
            ["Pflicht", ["über 1 Jahr: schriftlich", "Staffel, Index: schriftlich"]]
          ],
          merke: "Merke: Ohne Schriftform gilt ein langer Vertrag als unbefristet.",
          quelle: "BGB §§ 126, 126b, 305 ff., 550"
        },
        src: "BGB § 126 (Schriftform), § 126b (Textform), §§ 305 bis 310 (AGB), § 550 (Form des Mietvertrags), §§ 557a, 557b, 575; Rahmenlehrplan Lernfeld 4 („Form des Vertrages“)"
      },
      { id: "lf4-4-3", title: "Was im Wohnraummietvertrag steht",
        content: [
          { p: "Im Mietvertrag verpflichtet sich der Vermieter, die Wohnung zu überlassen. Der Mieter verpflichtet sich, die Miete zu zahlen. Alles Weitere regelt der Vertrag genauer." },
          { h: "Typische Inhalte" },
          { ul: [
            "Vertragspartner: Vermieter und alle Mieter.",
            "Mietsache: Adresse, Lage, Räume, Keller, Stellplatz.",
            "Mietbeginn und Dauer.",
            "Miete: Nettokaltmiete.",
            "Betriebskosten: Vorauszahlung oder Pauschale.",
            "Mietkaution.",
            "Schönheitsreparaturen und Kleinreparaturen.",
            "Tierhaltung, Untervermietung.",
            "Hausordnung als Anlage."
          ] },
          { rules: [
            ["Miete fällig", ["spätestens am 3. Werktag", "im Voraus für den Monat"]],
            ["Betriebskosten", ["nur wenn vereinbart"]]
          ] },
          { ex: "Im Vertrag für eine Wohnung in Schwerin fehlt die Vereinbarung zu Betriebskosten. Dann muss der Mieter nur die Kaltmiete zahlen." },
          { note: "Klauseln, die den Mieter unangemessen benachteiligen, sind unwirksam. Nutze deshalb geprüfte Vertragsmuster deines Betriebs." }
        ],
        card: {
          title: "Inhalt des Mietvertrags",
          bullets: [
            "Vertragspartner",
            "Mietsache und Räume",
            "Beginn und Dauer",
            "Kaltmiete + Betriebskosten",
            "Kaution",
            "Reparaturen, Tiere",
            "Miete fällig bis 3. Werktag",
            "Hausordnung als Anlage"
          ],
          merke: "Merke: Betriebskosten zahlt der Mieter nur, wenn es im Vertrag steht.",
          quelle: "BGB §§ 535, 556, 556b · KMK-RLP LF 4"
        },
        src: "BGB § 535 (Pflichten), § 556 (Betriebskosten), § 556b (Fälligkeit), §§ 307 ff. (AGB-Kontrolle); Rahmenlehrplan Lernfeld 4 („Inhalte des Wohnraummietvertrages“)"
      },
      { id: "lf4-4-4", title: "Mietkaution",
        content: [
          { p: "Die **Mietkaution** ist eine Sicherheit für den Vermieter. Mit ihr deckt er offene Forderungen nach dem Auszug, z. B. Schäden oder Mietschulden." },
          { rules: [
            ["Höchstens", ["3 Nettokaltmieten", "ohne Betriebs- und Heizkosten"]],
            ["Raten", ["Mieter darf in 3 Monatsraten zahlen", "1. Rate zu Beginn des Mietverhältnisses", "2. und 3. Rate mit den nächsten Mieten"]],
            ["Anlage", ["getrennt vom Vermögen des Vermieters", "Zinsen gehören dem Mieter"]]
          ] },
          { calc: { title: "Rechenbeispiel: höchste Kaution", rows: [
            { label: "Nettokaltmiete", n: "540,00 €" },
            { op: "×", label: "Monatsmieten", n: "3" },
            { op: "=", label: "höchste Kaution", n: "1.620,00 €", t: "sum" }
          ] } },
          { calc: { title: "Rechenbeispiel: Kaution in Raten", rows: [
            { label: "Kaution", n: "1.620,00 €" },
            { op: ":", label: "Raten", n: "3" },
            { op: "=", label: "je Rate", n: "540,00 €", t: "sum" }
          ] } },
          { calc: { title: "Rechenbeispiel: Zahlung im ersten Monat", rows: [
            { label: "Nettokaltmiete", n: "540,00 €" },
            { op: "+", label: "Vorauszahlung Betriebskosten", n: "160,00 €" },
            { op: "+", label: "Vorauszahlung Heizkosten", n: "80,00 €" },
            { op: "=", label: "Gesamtmiete", n: "780,00 €", t: "sub" },
            { op: "+", label: "1. Kautionsrate", n: "540,00 €" },
            { op: "=", label: "Zahlung im ersten Monat", n: "1.320,00 €", t: "sum" }
          ] } },
          { ul: [
            "Formen: Barkaution auf Kautionskonto.",
            "Formen: Bürgschaft, z. B. der Bank.",
            "Formen: Kautionsversicherung."
          ] },
          { note: "Eine höhere Kaution aus der Gesamtmiete (3 × 780,00 € = 2.340,00 €) wäre unzulässig. Abweichungen zum Nachteil des Mieters sind unwirksam." }
        ],
        card: {
          title: "Mietkaution",
          rules: [
            ["Höchstens", ["3 Nettokaltmieten"]],
            ["Raten", ["3 Monatsraten erlaubt"]],
            ["Anlage", ["getrennt, Zinsen für Mieter"]]
          ],
          calc: { title: "Rechnung: Kaution", rows: [
            { label: "Kaltmiete", n: "540,00 €" },
            { op: "×", label: "Monatsmieten", n: "3" },
            { op: "=", label: "höchste Kaution", n: "1.620,00 €", t: "sub" },
            { op: ":", label: "Raten", n: "3" },
            { op: "=", label: "je Rate", n: "540,00 €", t: "sum" }
          ] },
          merke: "Merke: Kaution aus der Kaltmiete – nie aus der Warmmiete.",
          quelle: "BGB § 551 · KMK-RLP LF 4"
        },
        src: "BGB § 551 (Begrenzung und Anlage von Mietsicherheiten); Rahmenlehrplan Lernfeld 4 („Inhalte des Wohnraummietvertrages“)"
      },
      { id: "lf4-4-5", title: "Hausordnung",
        content: [
          { p: "Die **Hausordnung** regelt das Zusammenleben im Haus. Sie soll Streit vermeiden und das Haus sauber und sicher halten." },
          { p: "Für den Mieter verbindlich wird sie, wenn sie **Teil des Mietvertrags** ist. Meist hängt sie als Anlage am Vertrag." },
          { h: "Typische Regeln" },
          { ul: [
            "Ruhezeiten, z. B. Nachtruhe.",
            "Reinigung von Treppenhaus und Gehweg.",
            "Winterdienst bei Schnee und Eis.",
            "Mülltrennung.",
            "Flure und Rettungswege frei halten.",
            "Grillen auf dem Balkon.",
            "Fahrräder und Kinderwagen abstellen."
          ] },
          { ex: "In einem Haus in Rostock stehen Kartons im Treppenhaus. Du verweist freundlich auf die Hausordnung: Fluchtwege müssen frei bleiben." },
          { note: "Neue Pflichten mit Kosten oder Arbeit (z. B. Treppenreinigung) kann der Vermieter nicht einfach nachträglich einführen. Dafür braucht er eine Vereinbarung." },
          { warn: "Feste Ruhezeiten regelt kein Bundesgesetz einheitlich. Maßgeblich sind Hausordnung und örtliche Vorschriften." }
        ],
        card: {
          title: "Hausordnung",
          bullets: [
            "regelt das Zusammenleben",
            "gilt als Teil des Mietvertrags",
            "Ruhezeiten",
            "Reinigung, Winterdienst",
            "Müll trennen",
            "Fluchtwege frei halten"
          ],
          merke: "Merke: Die Hausordnung gilt, wenn sie zum Mietvertrag gehört.",
          quelle: "BGB §§ 241, 535 · KMK-RLP LF 4"
        },
        src: "BGB § 241 Abs. 2 (Rücksichtnahme), § 535 (Mietvertrag), § 569 Abs. 2 (Hausfrieden); Rahmenlehrplan Lernfeld 4 („Hausordnung“)"
      }
    ]},
    { id: "lf4-5", title: "Vermietungsgespräch und Übergabe", subs: [
      { id: "lf4-5-1", title: "Gesprächs- und Verhandlungstechniken",
        content: [
          { p: "Im **Vermietungsgespräch** findest du heraus, was der Interessent braucht. Dann zeigst du, wie die Wohnung zu ihm passt." },
          { rules: [
            ["1. Begrüßung", ["freundlich, mit Namen"]],
            ["2. Bedarf ermitteln", ["Wünsche und Budget erfragen"]],
            ["3. Angebot", ["Wohnung mit Nutzen vorstellen"]],
            ["4. Einwände", ["ruhig und sachlich antworten"]],
            ["5. Abschluss", ["nächsten Schritt vereinbaren"]]
          ] },
          { h: "Techniken" },
          { ul: [
            "Offene Fragen: „Was ist Ihnen wichtig?“",
            "Geschlossene Fragen: „Brauchen Sie einen Stellplatz?“",
            "Aktives Zuhören: wiederholen, nachfragen.",
            "Sie-Stil: den Kunden in den Mittelpunkt stellen.",
            "Nutzen nennen: Merkmal → Vorteil für den Kunden."
          ] },
          { ex: "Frau K. findet die Wohnung in Waren zu klein. Du antwortest: „Dafür sparen Sie Heizkosten, und der Balkon erweitert den Wohnraum im Sommer.“" },
          { note: "Bleib ehrlich. Versprich nichts, was du nicht halten kannst, z. B. eine spätere Renovierung." }
        ],
        card: {
          title: "Vermietungsgespräch",
          rules: [
            ["Phasen", ["Begrüßung", "Bedarf ermitteln", "Angebot", "Einwände", "Abschluss"]],
            ["Technik", ["offene Fragen", "aktiv zuhören", "Nutzen nennen"]]
          ],
          merke: "Merke: Erst zuhören, dann anbieten.",
          quelle: "KMK-RLP LF 4 (Verhandlungstechniken)"
        },
        src: "Rahmenlehrplan Lernfeld 4 („Verhandlungs- und Kommunikationstechniken“)"
      },
      { id: "lf4-5-2", title: "Wohnungsbesichtigung auf Englisch",
        content: [
          { p: "Manche Interessenten sprechen kein Deutsch, z. B. Studierende aus dem Ausland. Dann führst du die Besichtigung auf Englisch." },
          { rules: [
            ["Wörter", ["flat / apartment = Wohnung", "tenant = Mieter", "landlord = Vermieter", "rent = Miete", "deposit = Kaution", "utilities = Nebenkosten", "living space = Wohnfläche", "tenancy agreement = Mietvertrag"]]
          ] },
          { h: "Sätze für die Besichtigung" },
          { ul: [
            "Welcome! Let me show you the flat.",
            "The flat has two rooms and a balcony.",
            "The living space is 55 square metres.",
            "The rent is 480 euros plus utilities.",
            "The deposit is three months’ basic rent.",
            "Do you have any questions?"
          ] },
          { ex: "Ein Student aus Spanien besichtigt in Greifswald ein WG-Zimmer. Du erklärst ihm: „The rent includes heating.“" },
          { warn: "Welcher Wortschatz geprüft wird, legt deine Englischlehrkraft fest." }
        ],
        card: {
          title: "Besichtigung auf Englisch",
          bullets: [
            "flat = Wohnung",
            "tenant = Mieter",
            "landlord = Vermieter",
            "rent = Miete",
            "deposit = Kaution",
            "utilities = Nebenkosten",
            "living space = Wohnfläche",
            "tenancy agreement = Mietvertrag"
          ],
          merke: "Merke: Kurze Sätze, langsam sprechen, Zahlen wiederholen.",
          quelle: "KMK-RLP LF 4 (Fremdsprache)"
        },
        src: "Rahmenlehrplan Lernfeld 4 („Fremdsprachige Kommunikation“)"
      },
      { id: "lf4-5-3", title: "Übergabe und Übergabeprotokoll",
        content: [
          { p: "Bei der **Übergabe** bekommt der Mieter die Wohnung und die Schlüssel. Der Vermieter muss sie im vertragsgemäßen Zustand übergeben." },
          { p: "Im **Übergabeprotokoll** haltet ihr den Zustand gemeinsam fest. Es hilft beim Auszug, Streit über Schäden zu vermeiden." },
          { h: "Was ins Protokoll gehört" },
          { ul: [
            "Datum, Adresse, Beteiligte.",
            "Zustand jedes Raums.",
            "Mängel genau beschreiben, am besten mit Foto.",
            "Zählerstände: Strom, Wasser, Heizung.",
            "Schlüssel: Art und Anzahl.",
            "Unterschrift von Mieter und Vermieter."
          ] },
          { rules: [
            ["Schlüssel", ["Haustür: 2", "Wohnung: 2", "Briefkasten: 2", "Keller: 1"]]
          ] },
          { ex: "In Schwerin entdeckt Tom einen Kratzer im Parkett. Du schreibst ihn ins Protokoll. Beim Auszug muss Tom dafür nicht zahlen." },
          { note: "Nimmt der Mieter die Wohnung trotz bekannter Mängel ohne Vorbehalt an, verliert er Rechte wegen dieser Mängel. Deshalb alles notieren." },
          { note: "Der Mieter meldet sich innerhalb von 2 Wochen beim Meldeamt an. Dafür stellst du ihm die **Wohnungsgeberbestätigung** aus." }
        ],
        card: {
          title: "Übergabeprotokoll",
          bullets: [
            "Datum, Beteiligte",
            "Zustand jedes Raums",
            "Mängel mit Foto",
            "Zählerstände",
            "Schlüssel: Art und Anzahl",
            "Unterschrift beider Seiten",
            "Wohnungsgeberbestätigung"
          ],
          merke: "Merke: Was nicht im Protokoll steht, ist später schwer zu beweisen.",
          quelle: "BGB §§ 535, 536b · BMG §§ 17, 19"
        },
        src: "BGB § 535 Abs. 1 (Überlassung), § 536b (Kenntnis des Mangels); Bundesmeldegesetz § 17 (Anmeldung binnen 2 Wochen), § 19 (Wohnungsgeberbestätigung); Rahmenlehrplan Lernfeld 4 („übergeben die Mietsache und fertigen Übergabeprotokolle an“)"
      }
    ]}
  ]
});
