window.IMMO = window.IMMO || [];
window.IMMO.push({
  id: "lf2",
  kind: "lf",
  nr: 2,
  title: "Das Immobilienunternehmen repräsentieren",
  short: "LF 2 · Unternehmen repräsentieren",
  hours: "60 Stunden (Richtwert)",
  intro: "Du lernst, wie dein Ausbildungsbetrieb aufgebaut ist, welche Rechtsform er hat und welche Ziele er verfolgt. So kannst du dein Unternehmen bei Kunden sicher vorstellen.",
  source: "KMK-Rahmenlehrplan 2006, Lernfeld 2",
  topics: [
    { id: "lf2-1", title: "Aufbau eines Unternehmens", subs: [
      { id: "lf2-1-1", title: "Organigramm, Stelle, Abteilung",
        content: [
          { p: "Jedes Unternehmen verteilt seine Aufgaben auf Menschen. Diese Ordnung heißt **Aufbauorganisation**. Sie legt fest, wer was macht und wer wem Anweisungen gibt." },
          { p: "Ein **Organigramm** ist das Schaubild dazu. Es zeigt Stellen und Abteilungen als Kästchen. Linien zeigen, wer wem unterstellt ist." },
          { h: "Die Bausteine" },
          { rules: [
            ["Stelle", ["kleinste Einheit", "Aufgaben für eine Person", "z. B. Sachbearbeitung Vermietung"]],
            ["Instanz", ["Stelle mit Leitungsbefugnis", "darf Anweisungen geben", "z. B. Abteilungsleitung"]],
            ["Abteilung", ["mehrere Stellen zusammen", "unter einer Instanz", "z. B. Abteilung Vermietung"]]
          ] },
          { p: "Abteilungen werden oft nach **Aufgaben** gebildet (z. B. Vermietung, Technik, Rechnungswesen). Größere Unternehmen teilen auch nach **Regionen** oder **Beständen** ein." },
          { ex: "Eine Wohnungsgenossenschaft in Waren hat einen Vorstand. Darunter liegen die Abteilungen Vermietung, Technik und Rechnungswesen. Du bist als Azubi meist einer Abteilung zugeordnet." },
          { note: "Tipp: Zeichne das Organigramm deines Ausbildungsbetriebs. Der Rahmenlehrplan nennt ausdrücklich die Aufbauorganisation des eigenen Unternehmens." }
        ],
        card: {
          title: "Organigramm, Stelle, Abteilung",
          rules: [
            ["Stelle", ["kleinste Einheit", "Aufgaben für eine Person"]],
            ["Instanz", ["Stelle mit Leitungsbefugnis", "darf Anweisungen geben"]],
            ["Abteilung", ["mehrere Stellen", "unter einer Instanz"]],
            ["Organigramm", ["Schaubild der Aufbauorganisation", "Linien = wer ist wem unterstellt"]]
          ],
          merke: "Merke: Das Organigramm zeigt, wer was macht und wer wem Anweisungen gibt.",
          quelle: "KMK-RLP LF 2 (Aufbauorganisation)"
        },
        src: "Rahmenlehrplan Lernfeld 2 („Aufbauorganisation des eigenen Ausbildungsunternehmens“); betriebswirtschaftliches Grundwissen"
      },
      { id: "lf2-1-2", title: "Leitungssysteme (Einlinie, Mehrlinie, Stablinie)",
        content: [
          { p: "Ein **Leitungssystem** regelt den Weg der Anweisungen. Man nennt diesen Weg auch **Dienstweg**. Es gibt drei Grundformen." },
          { h: "Die drei Systeme" },
          { rules: [
            ["Einlinie", ["jeder hat genau einen Vorgesetzten", "Vorteil: klare Zuständigkeit", "Nachteil: lange Dienstwege"]],
            ["Mehrlinie", ["mehrere Vorgesetzte je Fachgebiet", "Vorteil: Fachleute entscheiden", "Nachteil: widersprüchliche Anweisungen"]],
            ["Stablinie", ["Einlinie plus Stabsstellen", "Stab berät die Leitung", "Stab darf nichts anweisen"]]
          ] },
          { p: "Eine **Stabsstelle** unterstützt die Leitung mit Fachwissen. Beispiele sind Recht, Datenschutz oder Controlling. Entscheiden darf nur die Leitung." },
          { ex: "In einer Hausverwaltung in Rostock berät die Stabsstelle Recht den Geschäftsführer bei einer Räumungsklage. Die Anweisung an die Abteilung Vermietung gibt aber der Geschäftsführer." },
          { note: "Viele Wohnungsunternehmen arbeiten nach dem Stabliniensystem. Frag in deinem Betrieb, welche Stabsstellen es gibt." }
        ],
        card: {
          title: "Leitungssysteme",
          rules: [
            ["Einlinie", ["genau ein Vorgesetzter", "+ klare Zuständigkeit", "– lange Dienstwege"]],
            ["Mehrlinie", ["mehrere Fach-Vorgesetzte", "+ Fachleute entscheiden", "– Anweisungen widersprechen"]],
            ["Stablinie", ["Einlinie plus Stabsstellen", "Stab berät, weist nicht an"]]
          ],
          merke: "Merke: Ein Stab berät nur – entscheiden und anweisen darf die Linie.",
          quelle: "KMK-RLP LF 2 (Aufbauorganisation)"
        },
        src: "Rahmenlehrplan Lernfeld 2 („Aufbauorganisation“); betriebswirtschaftliches Grundwissen zu Leitungssystemen"
      }
    ]},
    { id: "lf2-2", title: "Rechtsformen", subs: [
      { id: "lf2-2-1", title: "Einzelunternehmen",
        content: [
          { p: "Beim **Einzelunternehmen** gehört der Betrieb einer einzigen Person. Sie heißt **Inhaber** oder Inhaberin. Viele kleine Maklerbüros sind so aufgebaut." },
          { h: "Die Regeln" },
          { rules: [
            ["Gründung", ["eine Person", "kein Vertrag nötig"]],
            ["Mindestkapital", ["keins vorgeschrieben"]],
            ["Leitung", ["Inhaber allein"]],
            ["Haftung", ["unbeschränkt", "auch mit Privatvermögen"]],
            ["Gewinn", ["steht allein dem Inhaber zu"]],
            ["Verlust", ["trägt allein der Inhaber"]]
          ] },
          { p: "Wer ein Handelsgewerbe betreibt, ist **Kaufmann** nach § 1 HGB. Er muss sich ins **Handelsregister** eintragen lassen. Die Firma trägt dann den Zusatz „e. K.“ oder „e. Kfm.“ bzw. „e. Kfr.“." },
          { p: "**Firma** heißt im HGB der Name, unter dem der Kaufmann seine Geschäfte betreibt. Es ist nicht das Unternehmen selbst." },
          { ex: "Frau K. führt in Schwerin das Maklerbüro „Immobilien K. e. Kfr.“. Kann sie eine Rechnung nicht zahlen, darf der Gläubiger auch auf ihr Privatkonto zugreifen." },
          { note: "Vorteil: schnelle Entscheidungen. Nachteil: hohes Risiko und nur das Kapital einer Person." }
        ],
        card: {
          title: "Einzelunternehmen",
          rules: [
            ["Gründung", ["eine Person"]],
            ["Kapital", ["kein Mindestkapital"]],
            ["Leitung", ["Inhaber allein"]],
            ["Haftung", ["unbeschränkt", "auch Privatvermögen"]],
            ["Gewinn", ["allein beim Inhaber"]],
            ["Firma", ["Zusatz „e. K.“"]]
          ],
          merke: "Merke: Der Inhaber entscheidet allein – und haftet mit allem, was er hat.",
          quelle: "HGB §§ 1, 17, 19, 29 · KMK-RLP LF 2"
        },
        src: "HGB § 1 (Kaufmann), § 17 (Firma), § 19 Abs. 1 Nr. 1 (Zusatz e. K.), § 29 (Anmeldung zum Handelsregister); Rahmenlehrplan Lernfeld 2"
      },
      { id: "lf2-2-2", title: "GmbH",
        content: [
          { p: "Die **GmbH** ist eine Gesellschaft mit beschränkter Haftung. Sie ist eine **Kapitalgesellschaft**: Die Gesellschafter geben Geld, die GmbH ist selbst Trägerin von Rechten und Pflichten (**juristische Person**). Viele kommunale Wohnungsunternehmen sind GmbHs." },
          { h: "Die Regeln" },
          { rules: [
            ["Gründung", ["eine oder mehrere Personen", "Gesellschaftsvertrag beim Notar"]],
            ["Stammkapital", ["mindestens 25.000,00 €", "bei Anmeldung mind. 12.500,00 € eingezahlt"]],
            ["Haftung", ["nur das Gesellschaftsvermögen", "kein Zugriff auf Privatvermögen"]],
            ["Entstehung", ["mit Eintragung ins Handelsregister"]]
          ] },
          { h: "Die Organe" },
          { rules: [
            ["Geschäftsführer", ["leitet die GmbH", "vertritt sie nach außen"]],
            ["Gesellschafterversammlung", ["oberstes Organ", "beschließt über den Gewinn"]],
            ["Aufsichtsrat", ["nur wenn Vertrag oder Gesetz es verlangt"]]
          ] },
          { p: "Der Gewinn wird nach dem Verhältnis der **Geschäftsanteile** verteilt. Der Gesellschaftsvertrag kann etwas anderes regeln." },
          { calc: { title: "Rechenbeispiel: Gewinnverteilung in der GmbH", rows: [
            { label: "Gesellschafter A: 60.000,00 €", f: "× 15.000 : 25.000", n: "36.000,00 €" },
            { op: "+", label: "Gesellschafter B: 60.000,00 €", f: "× 10.000 : 25.000", n: "24.000,00 €" },
            { op: "=", label: "ausgeschütteter Gewinn (A + B)", n: "60.000,00 €", t: "sum" }
          ] } },
          { ex: "Die Stadt Waren und eine Bank gründen eine Wohnungsbau-GmbH. Gerät die GmbH in Schulden, haftet nur das Vermögen der GmbH." },
          { note: "Die **UG (haftungsbeschränkt)** ist eine Sonderform. Sie darf mit weniger als 25.000,00 € starten, muss aber Gewinne teilweise zurücklegen (§ 5a GmbHG)." }
        ],
        card: {
          title: "GmbH",
          rules: [
            ["Kapital", ["mind. 25.000,00 €"]],
            ["Organe", ["Geschäftsführer", "Gesellschafterversammlung", "Aufsichtsrat (nur wenn Pflicht)"]],
            ["Haftung", ["nur Gesellschaftsvermögen"]]
          ],
          calc: { title: "Gewinnverteilung", rows: [
            { label: "A: 60.000 € × 60 %", n: "36.000,00 €" },
            { op: "+", label: "B: 60.000 € × 40 %", n: "24.000,00 €" },
            { op: "=", label: "Gewinn (A + B)", n: "60.000,00 €", t: "sum" }
          ] },
          merke: "Merke: Gewinn nach Geschäftsanteilen – Haftung nur mit dem GmbH-Vermögen.",
          quelle: "GmbHG §§ 5, 7, 13, 29, 35, 48, 52"
        },
        src: "GmbHG § 1 (Gründung durch eine oder mehrere Personen), § 2 (notarieller Vertrag), § 5 Abs. 1 (Stammkapital 25.000 €), § 5a (UG), § 7 Abs. 2 (Mindesteinzahlung), § 11 (Entstehung), § 13 (juristische Person, Haftung), § 29 Abs. 3 (Gewinnverteilung), § 35 (Geschäftsführer), § 48 (Gesellschafterversammlung), § 52 (Aufsichtsrat); Rahmenlehrplan Lernfeld 2"
      },
      { id: "lf2-2-3", title: "AG",
        content: [
          { p: "Die **Aktiengesellschaft (AG)** ist eine Kapitalgesellschaft. Ihr **Grundkapital** ist in **Aktien** aufgeteilt. Wer eine Aktie kauft, wird **Aktionär** und damit Miteigentümer." },
          { p: "AGs können viel Kapital sammeln, weil viele Menschen Aktien kaufen können. Große Wohnungskonzerne in Deutschland sind oft AGs." },
          { h: "Die Regeln" },
          { rules: [
            ["Gründung", ["eine oder mehrere Personen", "Satzung beim Notar"]],
            ["Grundkapital", ["mindestens 50.000,00 €"]],
            ["Aktie", ["Nennbetrag mind. 1,00 €", "oder Stückaktie"]],
            ["Haftung", ["nur das Gesellschaftsvermögen", "Aktionär riskiert nur seine Einlage"]]
          ] },
          { h: "Die Organe" },
          { rules: [
            ["Vorstand", ["leitet die AG in eigener Verantwortung", "vertritt sie nach außen"]],
            ["Aufsichtsrat", ["mindestens 3 Mitglieder", "bestellt den Vorstand", "überwacht den Vorstand"]],
            ["Hauptversammlung", ["Versammlung der Aktionäre", "wählt Aufsichtsratsmitglieder", "beschließt über den Bilanzgewinn"]]
          ] },
          { p: "Den Gewinnanteil je Aktie nennt man **Dividende**. Er richtet sich nach dem Anteil am Grundkapital." },
          { calc: { title: "Rechenbeispiel: Dividende für Jonas", rows: [
            { label: "Beschlossene Dividende je Aktie", n: "0,80 €" },
            { op: "×", label: "Aktien von Jonas", n: "250 Stück" },
            { op: "=", label: "Dividende für Jonas (vor Steuern)", n: "200,00 €", t: "sum" }
          ] } },
          { note: "Vorstand und Aufsichtsrat sind getrennt. Niemand darf beides zugleich sein (§ 105 AktG)." }
        ],
        card: {
          title: "AG",
          rules: [
            ["Kapital", ["mind. 50.000,00 €"]],
            ["Organe", ["Vorstand (leitet)", "Aufsichtsrat (überwacht)", "Hauptversammlung (Aktionäre)"]],
            ["Haftung", ["nur Gesellschaftsvermögen"]]
          ],
          calc: { title: "Dividende für Jonas", rows: [
            { label: "Dividende je Aktie", n: "0,80 €" },
            { op: "×", label: "Aktien", n: "250 Stück" },
            { op: "=", label: "Dividende (vor Steuern)", n: "200,00 €", t: "sum" }
          ] },
          merke: "Merke: Vorstand leitet, Aufsichtsrat überwacht, Hauptversammlung entscheidet.",
          quelle: "AktG §§ 1, 7, 8, 76, 95, 111, 118"
        },
        src: "AktG § 1 (Haftung, Grundkapital in Aktien), § 2 (Gründer), § 7 (Mindestgrundkapital 50.000 €), § 8 (Nennbetrags- und Stückaktien), § 23 (notarielle Satzung), § 60 (Gewinnverteilung), § 76 (Vorstand), § 84 (Bestellung durch Aufsichtsrat), § 95 (mindestens drei Aufsichtsratsmitglieder), § 105 (Unvereinbarkeit), § 111 (Überwachung), §§ 118, 119, 174 (Hauptversammlung); Rahmenlehrplan Lernfeld 2"
      },
      { id: "lf2-2-4", title: "Genossenschaft (eG) – typisch für Wohnungsunternehmen",
        content: [
          { p: "Eine **eingetragene Genossenschaft (eG)** ist ein Zusammenschluss vieler Mitglieder. Ihr Zweck ist nicht vor allem Gewinn. Sie soll ihre **Mitglieder fördern** (§ 1 GenG). Bei einer **Wohnungsgenossenschaft** heißt das: Die Mitglieder bekommen guten und bezahlbaren Wohnraum. Statt Mietvertrag gibt es oft einen **Dauernutzungsvertrag**." },
          { h: "Die Regeln" },
          { rules: [
            ["Gründung", ["mindestens 3 Mitglieder", "schriftliche Satzung"]],
            ["Kapital", ["kein gesetzliches Mindestkapital", "Mitglieder zeichnen Geschäftsanteile"]],
            ["Register", ["Genossenschaftsregister"]],
            ["Prüfung", ["Pflichtmitglied im Prüfungsverband"]],
            ["Stimmrecht", ["jedes Mitglied hat 1 Stimme", "egal wie viele Anteile"]]
          ] },
          { h: "Die Organe" },
          { rules: [
            ["Vorstand", ["mindestens 2 Personen", "leitet und vertritt die eG"]],
            ["Aufsichtsrat", ["mindestens 3 Personen", "überwacht den Vorstand"]],
            ["Generalversammlung", ["Versammlung aller Mitglieder", "über 1.500 Mitglieder: Vertreterversammlung möglich"]]
          ] },
          { p: "Für Schulden der eG haftet nur ihr Vermögen. Ob Mitglieder in der Insolvenz nachschießen müssen, regelt die **Satzung**. Den Gewinnanteil nennt man **Dividende**. Er wird nach den **Geschäftsguthaben** verteilt, wenn die Satzung nichts anderes sagt." },
          { calc: { title: "Rechenbeispiel: Genossenschaftsdividende für Frau K.", rows: [
            { label: "Geschäftsanteil", n: "500,00 €" },
            { op: "×", label: "Anteile von Frau K.", n: "3 Stück" },
            { op: "=", label: "Geschäftsguthaben", n: "1.500,00 €", t: "sub" },
            { op: "×", label: "Dividendensatz laut Beschluss", n: "4 %" },
            { op: "=", label: "Dividende für Frau K. (vor Steuern)", n: "60,00 €", t: "sum" }
          ] } },
          { ex: "Lisa zieht in Rostock in eine Genossenschaftswohnung. Sie zeichnet die Pflichtanteile laut Satzung und wird Mitglied. Damit darf sie in der Generalversammlung mitbestimmen." },
          { warn: "Höhe der Anteile, Nachschusspflicht und Dividende stehen in der Satzung deiner Genossenschaft. Die Zahlen oben sind nur ein Beispiel. Bei höchstens 20 Mitgliedern erlaubt das Gesetz einen kleineren Vorstand und den Verzicht auf den Aufsichtsrat." }
        ],
        card: {
          title: "Genossenschaft (eG)",
          rules: [
            ["Kapital", ["kein Mindestkapital"]],
            ["Organe", ["Vorstand (mind. 2)", "Aufsichtsrat (mind. 3)", "Generalversammlung"]],
            ["Haftung", ["nur Genossenschaftsvermögen"]]
          ],
          calc: { title: "Dividende für Frau K.", rows: [
            { label: "3 Anteile × 500,00 €", n: "1.500,00 €" },
            { op: "×", label: "Dividendensatz", n: "4 %" },
            { op: "=", label: "Dividende (vor Steuern)", n: "60,00 €", t: "sum" }
          ] },
          merke: "Merke: Die eG fördert ihre Mitglieder – jedes Mitglied hat eine Stimme.",
          quelle: "GenG §§ 1, 2, 4, 19, 24, 36, 43"
        },
        src: "GenG § 1 (Förderzweck), § 2 (Haftung), § 4 (mindestens drei Mitglieder), § 5 (schriftliche Satzung), § 6 Nr. 3 (Nachschusspflicht), § 7 (Geschäftsanteil), § 10 (Genossenschaftsregister), § 19 (Gewinnverteilung), § 24 (Vorstand), § 36 (Aufsichtsrat), § 43 (Generalversammlung, Stimmrecht), § 43a (Vertreterversammlung), § 54 (Prüfungsverband); Rahmenlehrplan Lernfeld 2"
      },
      { id: "lf2-2-5", title: "Rechtsformen im Vergleich: Kapital, Organe, Haftung",
        content: [
          { h: "Mindestkapital" },
          { rules: [
            ["Einzelunternehmen", ["keins"]],
            ["GmbH", ["25.000,00 € Stammkapital"]],
            ["AG", ["50.000,00 € Grundkapital"]],
            ["eG", ["keins (Satzung kann eins festlegen)"]]
          ] },
          { h: "Organe" },
          { rules: [
            ["Einzelunternehmen", ["Inhaber"]],
            ["GmbH", ["Geschäftsführer", "Gesellschafterversammlung", "Aufsichtsrat nur wenn Pflicht"]],
            ["AG", ["Vorstand", "Aufsichtsrat", "Hauptversammlung"]],
            ["eG", ["Vorstand", "Aufsichtsrat", "Generalversammlung"]]
          ] },
          { h: "Haftung" },
          { rules: [
            ["Einzelunternehmen", ["unbeschränkt, auch privat"]],
            ["GmbH", ["nur Gesellschaftsvermögen"]],
            ["AG", ["nur Gesellschaftsvermögen"]],
            ["eG", ["nur Genossenschaftsvermögen", "Nachschuss nur laut Satzung"]]
          ] },
          { h: "Woher kommt das Kapital?" },
          { ul: [
            "Einzelunternehmen: Ersparnisse des Inhabers und Kredite.",
            "GmbH: Einlagen der Gesellschafter.",
            "AG: Verkauf von Aktien, auch an der Börse.",
            "eG: Geschäftsanteile vieler Mitglieder."
          ] },
          { ex: "Ein Kunde fragt dich: „Wer haftet bei euch?“ Arbeitest du bei einer GmbH, antwortest du: „Für Schulden haftet das Vermögen der GmbH.“" }
        ],
        card: {
          title: "Rechtsformen im Vergleich",
          rules: [
            ["Mindestkapital", ["Einzel: keins", "GmbH: 25.000,00 €", "AG: 50.000,00 €", "eG: keins"]],
            ["Leitung", ["Einzel: Inhaber", "GmbH: Geschäftsführer", "AG/eG: Vorstand"]],
            ["Haftung", ["Einzel: unbeschränkt", "GmbH, AG, eG: nur Firmenvermögen"]]
          ],
          merke: "Merke: Nur beim Einzelunternehmen haftet der Inhaber mit seinem Privatvermögen.",
          quelle: "HGB · GmbHG § 5 · AktG § 7 · GenG § 2"
        },
        src: "HGB § 1; GmbHG §§ 5, 13, 35, 48, 52; AktG §§ 1, 7, 76, 95, 118; GenG §§ 2, 6, 8a, 24, 36, 43; Rahmenlehrplan Lernfeld 2 („Kapitalbeschaffung, Organe, Haftung“)"
      }
    ]},
    { id: "lf2-3", title: "Ziele und Leitbild", subs: [
      { id: "lf2-3-1", title: "Ökonomische, soziale, ökologische Ziele",
        content: [
          { p: "Ein Unternehmen verfolgt mehrere Ziele zugleich. Der Rahmenlehrplan unterscheidet drei Gruppen." },
          { rules: [
            ["Ökonomisch", ["wirtschaftliche Ziele", "z. B. Gewinn, Rentabilität", "z. B. wenig Leerstand"]],
            ["Sozial", ["Ziele für Menschen", "z. B. bezahlbare Mieten", "z. B. sichere Arbeitsplätze"]],
            ["Ökologisch", ["Ziele für die Umwelt", "z. B. Energie sparen", "z. B. Dächer mit Solaranlagen"]]
          ] },
          { p: "Die **Rentabilität** zeigt, wie gut sich das eingesetzte Kapital verzinst. Die **Eigenkapitalrentabilität** vergleicht den Gewinn mit dem Eigenkapital." },
          { calc: { title: "Rechenbeispiel: Eigenkapitalrentabilität", rows: [
            { label: "Jahresgewinn", n: "120.000,00 €" },
            { op: ":", label: "Eigenkapital", n: "2.000.000,00 €" },
            { op: "=", label: "Ergebnis", n: "0,06", t: "sub" },
            { op: "×", label: "in Prozent", n: "100" },
            { op: "=", label: "Eigenkapitalrentabilität", n: "6,00 %", t: "sum" }
          ] } },
          { ex: "Eine Wohnungsgesellschaft in Schwerin will Leerstand senken (ökonomisch), Mieten für Familien bezahlbar halten (sozial) und Heizenergie sparen (ökologisch)." },
          { note: "Kommunale Unternehmen und Genossenschaften betonen oft soziale Ziele. Private Unternehmen stellen meist den Gewinn stärker in den Vordergrund." }
        ],
        card: {
          title: "Unternehmensziele",
          rules: [
            ["Ökonomisch", ["Gewinn, Rentabilität"]],
            ["Sozial", ["bezahlbare Mieten, Arbeitsplätze"]],
            ["Ökologisch", ["Energie sparen, Umwelt schonen"]]
          ],
          calc: { title: "Eigenkapitalrentabilität", rows: [
            { label: "Gewinn", n: "120.000,00 €" },
            { op: ":", label: "Eigenkapital", n: "2.000.000,00 €" },
            { op: "=", label: "Ergebnis", n: "0,06", t: "sub" },
            { op: "×", label: "in Prozent", n: "100" },
            { op: "=", label: "Rentabilität", n: "6,00 %", t: "sum" }
          ] },
          merke: "Merke: Gute Unternehmen planen Gewinn, Menschen und Umwelt gemeinsam.",
          quelle: "KMK-RLP LF 2 (Unternehmensziele)"
        },
        src: "Rahmenlehrplan Lernfeld 2 („Ökonomische, soziale, ökologische Ziele“); betriebswirtschaftliches Grundwissen (Rentabilität)"
      },
      { id: "lf2-3-2", title: "Zielkonflikte",
        content: [
          { p: "Ziele können sich gegenseitig beeinflussen. Man unterscheidet drei Beziehungen." },
          { rules: [
            ["Zielharmonie", ["ein Ziel fördert das andere"]],
            ["Zielkonflikt", ["ein Ziel behindert das andere"]],
            ["Zielneutralität", ["Ziele berühren sich nicht"]]
          ] },
          { h: "Beispiele aus der Wohnungswirtschaft" },
          { ul: [
            "Harmonie: Neue Fenster senken Heizkosten und machen Wohnungen leichter vermietbar.",
            "Konflikt: Eine Mieterhöhung bringt mehr Gewinn, aber Mieten werden weniger bezahlbar.",
            "Konflikt: Eine energetische Sanierung schont die Umwelt, kostet aber viel Geld.",
            "Neutralität: Ein neues Logo beeinflusst den Heizenergieverbrauch nicht."
          ] },
          { p: "Bei einem Zielkonflikt muss die Leitung **Prioritäten** setzen. Das heißt: Sie legt fest, welches Ziel gerade wichtiger ist." },
          { ex: "Eine Genossenschaft in Waren saniert ein Haus. Sie legt nur einen Teil der Kosten auf die Mieten um. So verbindet sie Umweltziel und soziales Ziel." }
        ],
        card: {
          title: "Zielkonflikte",
          rules: [
            ["Harmonie", ["ein Ziel fördert das andere"]],
            ["Konflikt", ["ein Ziel behindert das andere"]],
            ["Neutralität", ["kein Einfluss aufeinander"]]
          ],
          merke: "Merke: Bei Zielkonflikten setzt die Leitung Prioritäten.",
          quelle: "KMK-RLP LF 2 (Unternehmensziele)"
        },
        src: "Rahmenlehrplan Lernfeld 2 („Ökonomische, soziale, ökologische Ziele“); betriebswirtschaftliches Grundwissen zu Zielbeziehungen"
      },
      { id: "lf2-3-3", title: "Unternehmensleitbild",
        content: [
          { p: "Ein **Leitbild** beschreibt in wenigen Sätzen, wofür ein Unternehmen steht. Es nennt Auftrag, Werte und Ziele. Es richtet sich an Mitarbeiter und an Kunden." },
          { h: "Was ein Leitbild enthält" },
          { ul: [
            "Wer sind wir?",
            "Was ist unser Auftrag?",
            "Für wen arbeiten wir?",
            "Welche Werte sind uns wichtig?",
            "Wie gehen wir miteinander um?"
          ] },
          { h: "Wozu es dient" },
          { rules: [
            ["Nach innen", ["gibt Orientierung", "stärkt den Zusammenhalt"]],
            ["Nach außen", ["zeigt Kunden, wofür man steht", "schafft Vertrauen"]]
          ] },
          { p: "Das einheitliche Bild nach außen nennt man **Corporate Identity**. Dazu gehören das Erscheinungsbild (Logo, Farben), die Sprache und das Verhalten der Mitarbeiter." },
          { ex: "Im Leitbild einer Wohnungsgenossenschaft steht: „Wir bieten unseren Mitgliedern sicheres und bezahlbares Wohnen.“ Wenn du freundlich und zuverlässig mit Mietern sprichst, lebst du dieses Leitbild." },
          { note: "Tipp: Lies das Leitbild deines Betriebs. Es steht oft auf der Internetseite oder im Geschäftsbericht." }
        ],
        card: {
          title: "Unternehmensleitbild",
          bullets: [
            "Leitbild = wofür das Unternehmen steht",
            "nennt Auftrag, Werte, Ziele",
            "nach innen: Orientierung",
            "nach außen: Vertrauen bei Kunden",
            "Corporate Identity = einheitliches Bild",
            "Logo, Sprache, Verhalten"
          ],
          merke: "Merke: Du repräsentierst das Leitbild bei jedem Kundenkontakt.",
          quelle: "KMK-RLP LF 2 (Unternehmensleitbilder)"
        },
        src: "Rahmenlehrplan Lernfeld 2 („Unternehmensleitbilder“, Ziel: Unternehmen repräsentieren); betriebswirtschaftliches Grundwissen"
      }
    ]},
    { id: "lf2-4", title: "Der Immobilienmarkt", subs: [
      { id: "lf2-4-1", title: "Teilmärkte der Immobilienwirtschaft",
        content: [
          { p: "Auf dem **Immobilienmarkt** treffen Angebot und Nachfrage nach Grundstücken, Gebäuden und Wohnungen aufeinander. Er besteht aus vielen **Teilmärkten**." },
          { h: "Einteilung der Teilmärkte" },
          { rules: [
            ["Nach Nutzung", ["Wohnimmobilien", "Gewerbeimmobilien (Büro, Handel, Lager)", "Sonderimmobilien (Hotel, Pflegeheim)"]],
            ["Nach Geschäft", ["Mietmarkt", "Kaufmarkt"]],
            ["Nach Alter", ["Neubau", "Bestand"]],
            ["Nach Ort", ["Stadt", "ländlicher Raum"]]
          ] },
          { p: "Immobilien sind **unbeweglich**. Deshalb ist jeder Markt örtlich begrenzt. Eine leere Wohnung in Waren hilft niemandem, der in Rostock sucht." },
          { p: "Wie gut ein Bestand vermietet ist, zeigt die **Leerstandsquote**. Sie gibt an, wie viele Wohnungen leer stehen." },
          { calc: { title: "Rechenbeispiel: Leerstandsquote", rows: [
            { label: "Leere Wohnungen", n: "45" },
            { op: ":", label: "Wohnungen gesamt", n: "1.500" },
            { op: "=", label: "Ergebnis", n: "0,03", t: "sub" },
            { op: "×", label: "in Prozent", n: "100" },
            { op: "=", label: "Leerstandsquote", n: "3,00 %", t: "sum" }
          ] } },
          { ex: "Eine Hausverwaltung in Neubrandenburg betreut Mietwohnungen im Bestand. Sie ist damit auf dem Teilmarkt „Wohnen, Miete, Bestand“ tätig." }
        ],
        card: {
          title: "Teilmärkte",
          rules: [
            ["Nutzung", ["Wohnen, Gewerbe, Sonder"]],
            ["Geschäft", ["Miete oder Kauf"]],
            ["Alter", ["Neubau oder Bestand"]]
          ],
          calc: { title: "Leerstandsquote", rows: [
            { label: "Leere Wohnungen", n: "45" },
            { op: ":", label: "Wohnungen gesamt", n: "1.500" },
            { op: "=", label: "Ergebnis", n: "0,03", t: "sub" },
            { op: "×", label: "in Prozent", n: "100" },
            { op: "=", label: "Leerstandsquote", n: "3,00 %", t: "sum" }
          ] },
          merke: "Merke: Immobilien sind unbeweglich – jeder Markt ist örtlich begrenzt.",
          quelle: "KMK-RLP LF 2 (Teilmärkte)"
        },
        src: "Rahmenlehrplan Lernfeld 2 („Teilmärkte der Immobilienwirtschaft“, Marktstellung des Unternehmens); immobilienwirtschaftliches Grundwissen"
      },
      { id: "lf2-4-2", title: "Anbieter: Wohnungsunternehmen, Makler, Bauträger, WEG-Verwalter",
        content: [
          { p: "Der Rahmenlehrplan nennt vier wichtige Anbieter immobilienwirtschaftlicher Dienstleistungen. Makler, Bauträger und Wohnimmobilienverwalter brauchen eine **Erlaubnis** nach § 34c Gewerbeordnung." },
          { rules: [
            ["Wohnungsunternehmen", ["besitzt und vermietet Wohnungen", "kommunal, genossenschaftlich oder privat"]],
            ["Makler", ["vermittelt Miet- oder Kaufverträge", "Provision nur bei Erfolg"]],
            ["Bauträger", ["baut auf eigenem Grundstück", "verkauft Häuser oder Wohnungen"]],
            ["WEG-Verwalter", ["verwaltet das Gemeinschaftseigentum", "für die Eigentümergemeinschaft"]]
          ] },
          { h: "Wichtige Regeln für Makler" },
          { ul: [
            "Die Provision gibt es nur, wenn ein Vertrag zustande kommt (§ 652 BGB).",
            "Mietwohnung: Wer den Makler beauftragt, zahlt ihn (Bestellerprinzip).",
            "Kauf von Wohnung oder Einfamilienhaus durch Verbraucher: Käufer und Verkäufer teilen meist die Provision.",
            "Der Maklervertrag braucht dann Textform (z. B. E-Mail)."
          ] },
          { calc: { title: "Rechenbeispiel: geteilte Provision beim Hauskauf", rows: [
            { label: "Kaufpreis Einfamilienhaus", n: "200.000,00 €" },
            { op: "×", label: "vereinbarte Provision", f: "3,00 %", n: "6.000,00 €" },
            { op: "+", label: "Umsatzsteuer", f: "19 %", n: "1.140,00 €" },
            { op: "=", label: "Provision gesamt", n: "7.140,00 €", t: "sub" },
            { op: ":", label: "geteilt auf Käufer und Verkäufer", n: "2" },
            { op: "=", label: "Anteil je Seite", n: "3.570,00 €", t: "sum" }
          ] } },
          { ex: "Ein WEG-Verwalter in Rostock lädt zur Eigentümerversammlung ein und kümmert sich um die Reparatur des Dachs. Die einzelnen Wohnungen verwalten die Eigentümer selbst." },
          { warn: "Die Höhe der Provision ist frei vereinbart, 3,00 % ist nur ein Beispiel. Die Regeln zur Weiterbildungspflicht nach § 34c GewO wurden 2026 geändert – frag im Betrieb nach dem aktuellen Stand." }
        ],
        card: {
          title: "Anbieter am Markt",
          rules: [
            ["Wohnungsunt.", ["besitzt und vermietet"]],
            ["Makler", ["vermittelt, Lohn nur bei Erfolg"]],
            ["Bauträger", ["baut und verkauft"]],
            ["WEG-Verwalter", ["Gemeinschaftseigentum"]]
          ],
          calc: { title: "Provision Hauskauf", rows: [
            { label: "200.000,00 € × 3,00 %", n: "6.000,00 €" },
            { op: "+", label: "USt 19 %", n: "1.140,00 €" },
            { op: "=", label: "gesamt", n: "7.140,00 €", t: "sub" },
            { op: ":", label: "Käufer und Verkäufer", n: "2" },
            { op: "=", label: "Anteil je Seite", n: "3.570,00 €", t: "sum" }
          ] },
          merke: "Merke: Mietwohnung – wer den Makler bestellt, bezahlt ihn.",
          quelle: "GewO § 34c · BGB §§ 652, 656c · WoVermittG § 2"
        },
        src: "GewO § 34c (Erlaubnis); BGB § 652 (Maklerlohn), §§ 656a–656d (Maklervertrag bei Wohnung und Einfamilienhaus: Textform, Teilung); WoVermittG § 2 Abs. 1a (Bestellerprinzip); WEG §§ 18, 26, 27 (Verwalter); UStG § 12 Abs. 1 (19 %); Rahmenlehrplan Lernfeld 2"
      }
    ]},
    { id: "lf2-5", title: "Beruf und Zukunft", subs: [
      { id: "lf2-5-1", title: "Einsatzfelder von Immobilienkaufleuten",
        content: [
          { p: "Als Immobilienkauffrau kannst du in vielen Bereichen arbeiten. Die Ausbildungsordnung nennt die Inhalte, die du dafür lernst." },
          { h: "Typische Einsatzfelder" },
          { rules: [
            ["Bewirtschaftung", ["Wohnungen vermieten", "Mieter betreuen", "Betriebskosten abrechnen"]],
            ["WEG-Verwaltung", ["Eigentümerversammlungen", "Hausgeld abrechnen"]],
            ["Vermittlung", ["Makler für Miete und Kauf"]],
            ["Bauprojekte", ["Bauträger", "Projektentwicklung"]],
            ["Finanzierung", ["Bankabteilungen für Immobilien"]],
            ["Rechnungswesen", ["Buchhaltung im Wohnungsunternehmen"]]
          ] },
          { p: "Arbeitgeber sind zum Beispiel Wohnungsgenossenschaften, kommunale Wohnungsgesellschaften, Hausverwaltungen, Maklerbüros und Banken." },
          { ex: "Nach der Ausbildung arbeitet Lisa bei einer Hausverwaltung in Rostock. Sie betreut drei Eigentümergemeinschaften und bereitet die Jahresabrechnungen vor." },
          { note: "Tipp: Schau dir in der Ausbildung möglichst viele Abteilungen an. So findest du heraus, was dir am meisten liegt." }
        ],
        card: {
          title: "Einsatzfelder",
          bullets: [
            "Vermietung und Mieterbetreuung",
            "WEG-Verwaltung",
            "Makler: Miete und Kauf",
            "Bauträger, Projektentwicklung",
            "Immobilienfinanzierung (Bank)",
            "Rechnungswesen"
          ],
          merke: "Merke: Der Beruf bietet viele Wege – vom Vermieten bis zum Bauen.",
          quelle: "ImmobKfmAusbV · KMK-RLP LF 2"
        },
        src: "Verordnung über die Berufsausbildung zum Immobilienkaufmann/zur Immobilienkauffrau 2006 (Ausbildungsrahmenplan); Rahmenlehrplan Lernfeld 2 („Berufliche Tätigkeiten und Perspektiven“)"
      },
      { id: "lf2-5-2", title: "Weiterbildung und Karriere",
        content: [
          { p: "Nach der Ausbildung kannst du dich weiterbilden. So übernimmst du mehr Verantwortung und verdienst oft mehr." },
          { h: "Wege nach der Ausbildung" },
          { rules: [
            ["Fortbildung IHK", ["Geprüfte/r Immobilienfachwirt/in", "berufsbegleitend möglich"]],
            ["Zertifikat", ["zertifizierter WEG-Verwalter (IHK-Prüfung)"]],
            ["Studium", ["z. B. Immobilienwirtschaft", "auch dual oder berufsbegleitend"]],
            ["Spezialisierung", ["z. B. Bewertung, Vertrieb, Technik"]]
          ] },
          { p: "Für eine Aufstiegsfortbildung wie den Fachwirt gibt es staatliche Förderung: das **Aufstiegs-BAföG** (Aufstiegsfortbildungsförderungsgesetz)." },
          { p: "Wohnungseigentümer können einen **zertifizierten Verwalter** verlangen (§ 19 Abs. 2 Nr. 6 WEG). Dafür legt man eine Prüfung bei der IHK ab (§ 26a WEG)." },
          { ex: "Jonas arbeitet nach der Ausbildung zwei Jahre bei einer Genossenschaft in Schwerin. Dann macht er abends den Immobilienfachwirt und wird Teamleiter in der Vermietung." },
          { warn: "Zugangsvoraussetzungen und Förderhöhen ändern sich. Prüfe sie vor einer Anmeldung bei der IHK oder auf aufstiegs-bafoeg.de." }
        ],
        card: {
          title: "Weiterbildung und Karriere",
          bullets: [
            "Geprüfte/r Immobilienfachwirt/in (IHK)",
            "zertifizierter WEG-Verwalter",
            "Studium Immobilienwirtschaft",
            "dual oder berufsbegleitend möglich",
            "Förderung: Aufstiegs-BAföG",
            "Spezialisierung: Bewertung, Vertrieb"
          ],
          merke: "Merke: Die Ausbildung ist der Start – Fortbildung bringt Verantwortung.",
          quelle: "WEG §§ 19, 26a · AFBG · KMK-RLP LF 2"
        },
        src: "WEG § 19 Abs. 2 Nr. 6, § 26a (zertifizierter Verwalter); Aufstiegsfortbildungsförderungsgesetz (AFBG); Verordnung über die Prüfung zum anerkannten Fortbildungsabschluss Geprüfter Immobilienfachwirt/Geprüfte Immobilienfachwirtin; Rahmenlehrplan Lernfeld 2 („Berufliche Tätigkeiten und Perspektiven“)"
      }
    ]}
  ]
});
