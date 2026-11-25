window.IMMO = window.IMMO || [];
window.IMMO.push({
  id: "en",
  kind: "fach",
  nr: 6,
  title: "Englisch – berufsbezogene Fremdsprache",
  short: "Englisch · Fremdsprache",
  hours: "120 Stunden in 3 Jahren (BSVO M-V)",
  intro: "Im Büro rufen auch Menschen an, die kein Deutsch sprechen. Hier lernst du feste Sätze und Vokabeln für Telefon, E-Mail und Besichtigung. Die Themen sind ein Vorschlag: Maßgeblich ist der Plan deiner Schule, denn die BSVO M-V (Anlage 1) nennt nur die Gesamtstunden für drei Jahre.",
  source: "BSVO M-V Anlage 1; Themenvorschlag",
  topics: [
    { id: "en-1", title: "Im Büro: sich vorstellen, Telefonate, E-Mails", subs: [
      { id: "en-1-1", title: "Sich vorstellen und telefonieren",
        content: [
          { p: "Am Telefon zählt der erste Satz. Mit festen Sätzen bleibst du ruhig, auch wenn du nervös bist. Du musst nicht perfekt sprechen – höflich und klar reicht." },
          { h: "Sich vorstellen" },
          { ul: [
            "„My name is Lena.“",
            "„I'm a trainee at a housing company in Waren.“",
            "„I work in the letting department.“ (Vermietung)",
            "„Nice to meet you.“"
          ] },
          { h: "Feste Sätze am Telefon" },
          { rules: [
            ["Melden", ["„Good morning, [Firma], Lena speaking.“", "„How can I help you?“"]],
            ["Nachfragen", ["„Could you repeat that, please?“", "„Could you spell your name, please?“"]],
            ["Weiterleiten", ["„One moment, please.“", "„I'll put you through.“"]],
            ["Nicht da", ["„I'm afraid Mr Becker isn't available.“", "„Can I take a message?“"]],
            ["Rückruf", ["„He'll call you back this afternoon.“"]],
            ["Ende", ["„Thank you for calling. Goodbye.“"]]
          ] },
          { ex: "Ein Student aus Spanien ruft an. Er sucht ein Zimmer in Rostock. Lena sagt: „Could you spell your name, please?“ und schreibt den Namen Buchstabe für Buchstabe auf." },
          { note: "Wiederhole Namen und Telefonnummern immer zur Kontrolle: „Let me repeat that: …“ Die Null sprichst du in Telefonnummern oft „oh“ aus." }
        ],
        card: {
          title: "Telefonieren auf Englisch",
          rules: [
            ["Melden", ["…, Lena speaking.", "How can I help you?"]],
            ["Nachfragen", ["Could you repeat that?", "Could you spell that?"]],
            ["Weiter", ["I'll put you through."]],
            ["Nicht da", ["Can I take a message?", "He'll call you back."]],
            ["Ende", ["Thank you for calling."]]
          ],
          merke: "Merke: Namen und Nummern buchstabieren lassen und wiederholen.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (berufsbezogene Fremdsprache); Themenvorschlag"
      },
      { id: "en-1-2", title: "E-Mails auf Englisch",
        content: [
          { p: "Englische Geschäfts-E-Mails sind kurz und freundlich. Anrede und Gruß hängen davon ab, ob du den Namen kennst." },
          { rules: [
            ["Name bekannt", ["„Dear Mr Smith,“", "„Dear Ms Taylor,“"]],
            ["Name unbekannt", ["„Dear Sir or Madam,“"]],
            ["Gruß (neutral)", ["„Kind regards,“", "„Best regards,“"]],
            ["Gruß (sehr förmlich)", ["nach Namen: „Yours sincerely,“", "ohne Namen: „Yours faithfully,“"]]
          ] },
          { h: "Nützliche Sätze" },
          { ul: [
            "„Thank you for your email.“",
            "„I am writing to confirm the viewing on Monday.“",
            "„Please find attached the floor plan.“",
            "„Please let me know if you have any questions.“",
            "„I look forward to hearing from you.“"
          ] },
          { note: "Anders als im Deutschen beginnt die erste Zeile nach der Anrede **groß**. „Ms“ passt für jede Frau, egal ob verheiratet. Im britischen Englisch steht nach „Mr“ und „Ms“ kein Punkt." },
          { ex: "Frau K. aus Irland fragt nach einer Wohnung in Schwerin. Lena antwortet: „Dear Ms Kelly, thank you for your email. Please find attached the floor plan. Kind regards, Lena“ – jeweils in eigener Zeile." }
        ],
        card: {
          title: "E-Mails auf Englisch",
          rules: [
            ["Anrede", ["Dear Mr Smith,", "Dear Ms Taylor,", "Dear Sir or Madam,"]],
            ["Text", ["Thank you for your email.", "Please find attached …", "I look forward to hearing …"]],
            ["Gruß", ["Kind regards,", "Yours sincerely, (Name bekannt)", "Yours faithfully, (ohne Name)"]]
          ],
          merke: "Merke: Nach der Anrede geht es im Englischen groß weiter.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (berufsbezogene Fremdsprache); Themenvorschlag"
      }
    ]},
    { id: "en-2", title: "Wohnung und Haus: Räume, Ausstattung, Lage beschreiben", subs: [
      { id: "en-2-1", title: "Räume, Ausstattung und Lage",
        content: [
          { p: "Für Anzeige und Besichtigung brauchst du Wörter für Räume, Ausstattung und Lage. Wir nutzen britisches Englisch. Amerikanische Wörter stehen in Klammern." },
          { h: "Räume" },
          { ul: [
            "Wohnzimmer → living room",
            "Schlafzimmer → bedroom",
            "Küche → kitchen",
            "Bad → bathroom",
            "Flur → hallway",
            "Abstellraum → storage room",
            "Keller → cellar (basement)"
          ] },
          { h: "Ausstattung" },
          { ul: [
            "Einbauküche → fitted kitchen",
            "Aufzug → lift (elevator)",
            "Zentralheizung → central heating",
            "Badewanne → bath (bathtub)",
            "Stellplatz → parking space"
          ] },
          { h: "Lage" },
          { ul: [
            "„close to the city centre“ – nahe der Innenstadt",
            "„a quiet residential area“ – ruhiges Wohngebiet",
            "„good public transport links“ – gute Anbindung an Bus und Bahn",
            "„within walking distance of the lake“ – zu Fuß zum See"
          ] },
          { note: "Stockwerke: Im britischen Englisch ist „ground floor“ das Erdgeschoss und „first floor“ das 1. Obergeschoss. Im amerikanischen Englisch ist „first floor“ das Erdgeschoss." },
          { ex: "„The flat is on the second floor. It has two bedrooms, a fitted kitchen and a balcony. It is within walking distance of the lake.“ – So beschreibst du eine Wohnung in Waren." }
        ],
        card: {
          title: "Wohnung beschreiben",
          bullets: [
            "Wohnzimmer → living room",
            "Schlafzimmer → bedroom",
            "Bad → bathroom",
            "Einbauküche → fitted kitchen",
            "Aufzug → lift",
            "Erdgeschoss → ground floor",
            "1. OG → first floor (britisch)",
            "ruhige Lage → quiet area"
          ],
          merke: "Merke: Britisch „first floor“ = 1. OG, amerikanisch = Erdgeschoss.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (berufsbezogene Fremdsprache); Themenvorschlag"
      }
    ]},
    { id: "en-3", title: "Vermieten auf Englisch: Anzeige, Exposé, Besichtigung", subs: [
      { id: "en-3-1", title: "Anzeige und Exposé",
        content: [
          { p: "In einer englischen Anzeige nennst du Größe, Miete, Kosten und Einzugstermin. Achtung: Im Englischen zählt man meist nur die Schlafzimmer." },
          { rules: [
            ["Zimmerzahl", ["2-Zimmer-Wohnung → one-bedroom flat", "3-Zimmer-Wohnung → two-bedroom flat"]],
            ["Kosten", ["Kaltmiete → basic rent", "Betriebskosten → service charges", "Heizkosten → heating costs", "Kaution → deposit"]],
            ["Termin", ["„available from 1 March“"]]
          ] },
          { calc: { title: "Rechenbeispiel: Miete in der Anzeige", rows: [
            { label: "Kaltmiete (basic rent)", n: "480,00 €" },
            { op: "+", label: "Betriebskosten (service charges)", n: "120,00 €" },
            { op: "+", label: "Heizkosten (heating costs)", n: "75,00 €" },
            { op: "=", label: "Warmmiete (total rent)", n: "675,00 €", t: "sum" }
          ] } },
          { ex: "„Bright one-bedroom flat in Rostock, 52 square metres. Basic rent €480.00 plus service charges and heating. Available from 1 March.“" },
          { note: "Im Englischen trennt ein **Punkt** die Cent ab: €675.00. Das Euro-Zeichen steht vor der Zahl. In der App rechnen wir deutsch: 675,00 €." }
        ],
        card: {
          title: "Anzeige auf Englisch",
          bullets: [
            "2 Zimmer → one-bedroom flat",
            "Kaution → deposit",
            "ab 1. März → available from 1 March"
          ],
          calc: { title: "Rechnung: total rent", rows: [
            { label: "basic rent", n: "480,00 €" },
            { op: "+", label: "service charges", n: "120,00 €" },
            { op: "+", label: "heating costs", n: "75,00 €" },
            { op: "=", label: "total rent", n: "675,00 €", t: "sum" }
          ] },
          merke: "Merke: Englisch zählt Schlafzimmer – 2 Zimmer = one-bedroom flat.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (berufsbezogene Fremdsprache); Themenvorschlag; Bezug Rahmenlehrplan LF 4"
      },
      { id: "en-3-2", title: "Wohnungsbesichtigung",
        content: [
          { p: "Bei der Besichtigung (viewing) führst du durch die Wohnung. Du zeigst die Räume und beantwortest Fragen. Das passt zu LF 4, Thema 5.2." },
          { rules: [
            ["Begrüßen", ["„Welcome! Let me show you around.“"]],
            ["Zeigen", ["„This is the living room.“", "„It's about 25 square metres.“", "„The balcony faces south.“"]],
            ["Kosten", ["„The rent is 675 euros a month, including heating.“", "„The deposit is three months' basic rent.“"]],
            ["Abschluss", ["„Do you have any questions?“", "„Here is the application form.“"]]
          ] },
          { h: "Typische Fragen von Interessenten" },
          { ul: [
            "„Are pets allowed?“ – Sind Haustiere erlaubt?",
            "„When can I move in?“ – Wann kann ich einziehen?",
            "„Is there a washing machine connection?“ – Gibt es einen Waschmaschinenanschluss?"
          ] },
          { ex: "Eine Familie aus Polen besichtigt eine Wohnung in Waren. Lena sagt: „Welcome! Let me show you around.“ Am Ende gibt sie ihnen das Formular: „Here is the application form.“" },
          { note: "Weißt du eine Antwort nicht, sag ehrlich: „I'm not sure. I'll check and let you know.“ Versprich nichts, was du nicht weißt." }
        ],
        card: {
          title: "Besichtigung auf Englisch",
          rules: [
            ["Start", ["Let me show you around."]],
            ["Zeigen", ["This is the living room.", "It's about 25 square metres."]],
            ["Kosten", ["The rent is … a month.", "The deposit is …"]],
            ["Ende", ["Do you have any questions?", "Here is the application form."]],
            ["Unsicher", ["I'll check and let you know."]]
          ],
          merke: "Merke: Lieber nachfragen und zurückmelden als falsch antworten.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (berufsbezogene Fremdsprache); Themenvorschlag; Bezug Rahmenlehrplan LF 4; Kaution: § 551 BGB"
      }
    ]},
    { id: "en-4", title: "Mieter betreuen: Schadensmeldung, Beschwerde, höfliche Antworten", subs: [
      { id: "en-4-1", title: "Schadensmeldung und Beschwerde",
        content: [
          { p: "Mieter melden Schäden oft am Telefon. Du nimmst die Meldung auf und bleibst freundlich. Bei einer Beschwerde hörst du zuerst zu." },
          { h: "So meldet der Mieter einen Schaden" },
          { ul: [
            "„The heating isn't working.“",
            "„There is a leak in the bathroom.“",
            "„There is mould on the bedroom wall.“",
            "„The window won't close.“"
          ] },
          { h: "So antwortest du – Schritt für Schritt" },
          { rules: [
            ["1. Verständnis", ["„I'm sorry to hear that.“"]],
            ["2. Danken", ["„Thank you for letting us know.“"]],
            ["3. Daten", ["„Could I have your address and flat number, please?“"]],
            ["4. Lösung", ["„A plumber will come tomorrow between 8 and 10 am.“"]],
            ["5. Zusage", ["„We will get back to you by Friday.“"]]
          ] },
          { h: "Höflich bei Beschwerden" },
          { ul: [
            "„I understand your concern.“",
            "„I apologise for the inconvenience.“",
            "„I'll pass this on to the caretaker.“"
          ] },
          { ex: "Ein Mieter in Rostock ruft an: „There is a leak in the bathroom.“ Lena sagt: „I'm sorry to hear that. Could I have your address and flat number, please?“ Dann schreibt sie eine Schadensmeldung." }
        ],
        card: {
          title: "Schaden und Beschwerde",
          rules: [
            ["Mieter", ["The heating isn't working.", "There is a leak.", "There is mould on the wall."]],
            ["Du", ["I'm sorry to hear that.", "Thank you for letting us know.", "Could I have your address?", "We'll get back to you by …"]],
            ["Beschwerde", ["I understand your concern."]]
          ],
          merke: "Merke: Erst Verständnis zeigen, dann Daten aufnehmen, dann Termin nennen.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (berufsbezogene Fremdsprache); Themenvorschlag; Bezug Rahmenlehrplan LF 5"
      }
    ]},
    { id: "en-5", title: "Grundwortschatz Immobilien (Vokabelkarten)", subs: [
      { id: "en-5-1", title: "Vokabeln: Vermietung und Vertrag",
        content: [
          { p: "Diese Wörter brauchst du immer wieder. Lerne sie mit der Karte. Sprich sie dabei laut aus." },
          { rules: [
            ["Personen", ["Mieter → tenant", "Vermieter → landlord", "Makler → estate agent", "Interessent → prospective tenant"]],
            ["Vertrag", ["Mietvertrag → tenancy agreement", "Kaution → deposit", "Kündigung → notice", "kündigen → to give notice"]],
            ["Ablauf", ["Besichtigung → viewing", "Einzug → moving in", "Übergabe → handover", "Schlüssel → key"]]
          ] },
          { note: "Wohnung heißt britisch **flat**, amerikanisch **apartment**. Statt „tenancy agreement“ hörst du auch „lease“ oder „rental agreement“." },
          { ex: "„The tenant has given notice. The handover is on 31 May.“ – Der Mieter hat gekündigt. Die Übergabe ist am 31. Mai." }
        ],
        card: {
          title: "Vokabeln: Vermietung",
          bullets: [
            "Mieter → tenant",
            "Vermieter → landlord",
            "Mietvertrag → tenancy agreement",
            "Kaution → deposit",
            "Besichtigung → viewing",
            "Übergabe → handover",
            "kündigen → to give notice",
            "Wohnung → flat (apartment)"
          ],
          merke: "Merke: tenant = Mieter, landlord = Vermieter – nicht verwechseln!",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (berufsbezogene Fremdsprache); Themenvorschlag"
      },
      { id: "en-5-2", title: "Vokabeln: Verwaltung und Kosten",
        content: [
          { p: "Diese Wörter brauchst du in der Hausverwaltung. Es geht um Kosten, Reparaturen und Zahlungen." },
          { rules: [
            ["Verwaltung", ["Hausverwaltung → property management", "Hausmeister → caretaker", "Eigentümer → owner"]],
            ["Kosten", ["Betriebskosten → service charges", "Abrechnung → statement", "Zählerstand → meter reading", "Mieterhöhung → rent increase"]],
            ["Probleme", ["Reparatur → repair", "Handwerker → tradesperson", "Mietrückstand → rent arrears", "Mahnung → reminder"]]
          ] },
          { ex: "„Please send us your meter reading by Friday. You will receive your service charge statement in June.“ – Bitte schicken Sie uns bis Freitag Ihren Zählerstand. Die Abrechnung kommt im Juni." },
          { note: "„Arrears“ steht immer in der Mehrzahl: „The tenant is in arrears.“ – Der Mieter ist im Rückstand." }
        ],
        card: {
          title: "Vokabeln: Verwaltung",
          bullets: [
            "Hausverwaltung → property management",
            "Hausmeister → caretaker",
            "Betriebskosten → service charges",
            "Zählerstand → meter reading",
            "Reparatur → repair",
            "Handwerker → tradesperson",
            "Mietrückstand → rent arrears",
            "Mieterhöhung → rent increase"
          ],
          merke: "Merke: arrears steht immer im Plural – in arrears = im Rückstand.",
          quelle: "BSVO M-V Anl. 1 · Themenvorschlag"
        },
        src: "BSVO M-V Anlage 1 (berufsbezogene Fremdsprache); Themenvorschlag"
      }
    ]}
  ]
});
