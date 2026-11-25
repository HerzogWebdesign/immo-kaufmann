window.IMMO = window.IMMO || [];
window.IMMO.push({
  id: "lf3",
  kind: "lf",
  nr: 3,
  title: "Werteströme und Werte erfassen und dokumentieren",
  short: "LF 3 · Werteströme erfassen",
  hours: "40 Stunden (Richtwert)",
  intro: "Du lernst, wie ein Immobilienunternehmen jeden Geldfluss mit Beleg bucht. Am Ende kannst du Konten abschließen und Gewinn oder Verlust ermitteln.",
  source: "KMK-Rahmenlehrplan 2006, Lernfeld 3",
  topics: [

    // ---------------------------------------------------------------
    { id: "lf3-1", title: "Grundlagen der Buchführung", subs: [

      { id: "lf3-1-1", title: "Wozu Buchführung?",
        content: [
          { p: "**Buchführung** heißt: Jeder Geschäftsvorfall wird lückenlos aufgeschrieben. Ein **Geschäftsvorfall** ist jeder Vorgang, der Vermögen oder Schulden verändert." },
          { p: "Im Wohnungsunternehmen sind das zum Beispiel Mieteingänge, Handwerkerrechnungen, Gehälter und Darlehenszinsen." },
          { h: "Aufgaben der Buchführung" },
          { ul: [
            "**Dokumentieren:** Jeder Vorgang ist nachvollziehbar.",
            "**Informieren:** Die Leitung sieht Vermögen, Schulden und Erfolg.",
            "**Kontrollieren:** Offene Mieten und unbezahlte Rechnungen fallen auf.",
            "**Rechenschaft ablegen:** gegenüber Eigentümern, Genossenschaftsmitgliedern und Banken.",
            "**Steuern berechnen:** Das Finanzamt braucht die Zahlen.",
            "**Beweisen:** Bei Streit dienen die Bücher als Beweismittel."
          ] },
          { ex: "Herr M. aus Waren sagt, er habe die Märzmiete überwiesen. Auf seinem Mieterkonto fehlt der Eingang. Mit dem Kontoauszug klärst du den Fall schnell." },
          { note: "Ohne Buchführung weiß niemand, ob das Unternehmen Gewinn oder Verlust macht." }
        ],
        card: {
          title: "Wozu Buchführung?",
          bullets: [
            "Geschäftsvorfall = ändert Vermögen",
            "oder ändert Schulden",
            "Aufgabe 1: dokumentieren",
            "Aufgabe 2: informieren",
            "Aufgabe 3: kontrollieren",
            "Aufgabe 4: Rechenschaft ablegen",
            "Aufgabe 5: Steuern berechnen",
            "Aufgabe 6: Beweis bei Streit"
          ],
          merke: "Merke: Jeder Geschäftsvorfall wird lückenlos gebucht.",
          quelle: "HGB § 238 · KMK-RLP LF 3"
        },
        src: "HGB § 238; Rahmenlehrplan Lernfeld 3 („Aufgaben der Buchführung“)"
      },

      { id: "lf3-1-2", title: "Rechtliche Regeln (HGB, GoB, Aufbewahrung)",
        content: [
          { p: "Jeder **Kaufmann** muss Bücher führen (§ 238 HGB). Das gilt auch für GmbH, AG und Genossenschaft. Sehr kleine Einzelkaufleute können befreit sein (§ 241a HGB)." },
          { p: "Die Bücher folgen den **Grundsätzen ordnungsmäßiger Buchführung (GoB)**. Ein Fachkundiger muss sich in angemessener Zeit zurechtfinden (§ 238 Abs. 1 HGB)." },
          { h: "So muss gebucht werden (§ 239 HGB)" },
          { ul: [
            "in einer lebenden Sprache",
            "vollständig",
            "richtig",
            "zeitgerecht",
            "geordnet",
            "nichts unleserlich machen oder radieren"
          ] },
          { h: "Aufbewahrungsfristen seit 01.01.2025" },
          { rules: [
            ["10 Jahre", ["Bücher (Konten, Journal)", "Inventare", "Bilanzen und Jahresabschlüsse"]],
            ["8 Jahre", ["Buchungsbelege, z. B. Rechnungen und Kontoauszüge"]],
            ["6 Jahre", ["empfangene Geschäftsbriefe", "Kopien abgesandter Geschäftsbriefe"]]
          ] },
          { calc: { title: "Rechenbeispiel: Handwerkerrechnung vom 15.03.2025", rows: [
            { label: "Beleg entstanden", n: "15.03.2025" },
            { label: "Frist beginnt am Ende des Jahres", n: "31.12.2025" },
            { op: "+", label: "Frist für Buchungsbelege", n: "8 Jahre" },
            { op: "=", label: "Frist endet", n: "31.12.2033", t: "sum" }
          ] } },
          { note: "Die Frist läuft nicht ab, solange der Beleg für eine noch offene Steuer wichtig ist (§ 147 Abs. 3 AO). Für Banken und Versicherungen gelten weiter 10 Jahre." },
          { warn: "Ob ältere Belege aus der Zeit vor 2025 schon nach 8 Jahren weg dürfen, regelt eine Übergangsvorschrift. Vor dem Vernichten immer im Betrieb nachfragen." }
        ],
        card: {
          title: "Rechtliche Regeln",
          rules: [
            ["Pflicht", ["§ 238 HGB: Kaufleute"]],
            ["Bücher", ["vollständig, richtig", "zeitgerecht, geordnet"]],
            ["10 J.", ["Bücher, Inventar, Bilanz"]],
            ["8 J.", ["Buchungsbelege (seit 2025)"]],
            ["6 J.", ["Geschäftsbriefe"]]
          ],
          calc: { title: "Rechnung: Beleg 15.03.2025", rows: [
            { label: "Fristbeginn", n: "31.12.2025" },
            { op: "+", label: "Buchungsbeleg", n: "8 Jahre" },
            { op: "=", label: "Fristende", n: "31.12.2033", t: "sum" }
          ] },
          merke: "Merke: Frist beginnt erst am Ende des Kalenderjahres.",
          quelle: "HGB §§ 238, 239, 257 · AO § 147"
        },
        src: "HGB §§ 238, 239, 241a, 257 Abs. 1 und 4 (Fassung seit 01.01.2025); AO § 147 Abs. 1, 3, 4 (geprüft auf gesetze-im-internet.de, 25.11.2026); Rahmenlehrplan Lernfeld 3"
      },

      { id: "lf3-1-3", title: "Belege – keine Buchung ohne Beleg",
        content: [
          { p: "Ein **Beleg** beweist einen Geschäftsvorfall. Ohne Beleg wird nichts gebucht. Dieser Grundsatz gehört zu den GoB." },
          { h: "Arten von Belegen" },
          { rules: [
            ["Fremdbelege", ["kommen von außen", "z. B. Handwerkerrechnung", "z. B. Kontoauszug der Bank"]],
            ["Eigenbelege", ["erstellt das Unternehmen selbst", "z. B. Kopie der eigenen Rechnung", "z. B. Liste der Sollmieten", "z. B. Gehaltsabrechnung"]]
          ] },
          { h: "So wird ein Beleg bearbeitet" },
          { ul: [
            "1. prüfen: sachlich und rechnerisch richtig?",
            "2. kontieren: Konten auf den Beleg schreiben",
            "3. buchen",
            "4. ablegen: geordnet und auffindbar"
          ] },
          { calc: { title: "Rechenbeispiel: Kontoauszug prüfen", rows: [
            { label: "alter Kontostand", n: "12.400,00 €" },
            { op: "+", label: "Mieteingänge", n: "3.250,00 €" },
            { op: "=", label: "Zwischensumme", n: "15.650,00 €", t: "sub" },
            { op: "–", label: "Überweisung an Malerbetrieb", n: "1.190,00 €" },
            { op: "=", label: "neuer Kontostand", n: "14.460,00 €", t: "sum" }
          ] } },
          { ex: "Ein Malerbetrieb aus Schwerin schickt eine Rechnung. Du prüfst Leistung und Betrag. Dann kontierst und buchst du sie." }
        ],
        card: {
          title: "Belege",
          rules: [
            ["Grundsatz", ["keine Buchung ohne Beleg"]],
            ["Fremd", ["Rechnung, Kontoauszug"]],
            ["Eigen", ["eigene Rechnung, Mietliste"]],
            ["Ablauf", ["1. prüfen", "2. kontieren", "3. buchen", "4. ablegen"]]
          ],
          merke: "Merke: Der Beleg ist der Beweis für jede Buchung.",
          quelle: "HGB §§ 238, 257 · KMK-RLP LF 3"
        },
        src: "HGB § 238 Abs. 1, § 257 Abs. 1 Nr. 4; Rahmenlehrplan Lernfeld 3 („Vorgänge anhand von Belegen erfassen“)"
      }
    ]},

    // ---------------------------------------------------------------
    { id: "lf3-2", title: "Inventur, Inventar, Bilanz", subs: [

      { id: "lf3-2-1", title: "Inventur – zählen und bewerten",
        content: [
          { p: "Die **Inventur** ist die Bestandsaufnahme. Du stellst alle Vermögensteile und Schulden fest. Dann bewertest du sie in Euro." },
          { p: "Inventur ist Pflicht: bei Gründung und zum Schluss jedes Geschäftsjahres (§ 240 HGB)." },
          { h: "Zwei Arten der Aufnahme" },
          { rules: [
            ["körperlich", ["zählen, messen, wiegen", "z. B. Bargeld in der Kasse", "z. B. Heizöl im Tank"]],
            ["buchmäßig", ["nach Unterlagen", "z. B. Bankguthaben laut Kontoauszug", "z. B. Darlehen laut Bankbestätigung"]]
          ] },
          { calc: { title: "Rechenbeispiel: Kasse zählen", rows: [
            { label: "Scheine 50,00 €", f: "× 10", n: "500,00 €" },
            { op: "+", label: "Scheine 20,00 €", f: "× 12", n: "240,00 €" },
            { op: "+", label: "Scheine 10,00 €", f: "× 15", n: "150,00 €" },
            { op: "+", label: "Münzen gesamt", n: "37,50 €" },
            { op: "=", label: "Kassenbestand", n: "927,50 €", t: "sum" }
          ] } },
          { ex: "Am 31.12. zählt Frau K. in der Geschäftsstelle in Rostock die Kasse. Das Ergebnis trägt sie in die Inventurliste ein und unterschreibt." },
          { warn: "Welche Inventurverfahren (z. B. Stichtag oder permanente Inventur, § 241 HGB) im Unterricht vertieft werden, legt deine Schule fest." }
        ],
        card: {
          title: "Inventur",
          bullets: [
            "= Bestandsaufnahme am Stichtag",
            "Pflicht: Gründung und Jahresende",
            "körperlich: zählen, messen",
            "buchmäßig: nach Unterlagen"
          ],
          calc: { title: "Rechnung: Kasse", rows: [
            { label: "Scheine 50,00 €", f: "× 10", n: "500,00 €" },
            { op: "+", label: "Scheine 20,00 €", f: "× 12", n: "240,00 €" },
            { op: "+", label: "Scheine 10,00 €", f: "× 15", n: "150,00 €" },
            { op: "+", label: "Münzen", n: "37,50 €" },
            { op: "=", label: "Kassenbestand", n: "927,50 €", t: "sum" }
          ] },
          merke: "Merke: Inventur = Tätigkeit, Inventar = Ergebnis.",
          quelle: "HGB §§ 240, 241 · KMK-RLP LF 3"
        },
        src: "HGB §§ 240, 241; Rahmenlehrplan Lernfeld 3 („Inventur, Inventar, Bilanz“)"
      },

      { id: "lf3-2-2", title: "Inventar – das Verzeichnis",
        content: [
          { p: "Das **Inventar** ist das Ergebnis der Inventur. Es ist ein ausführliches Verzeichnis aller Vermögensteile und Schulden mit Mengen und Werten." },
          { h: "Aufbau in drei Teilen" },
          { rules: [
            ["A. Vermögen", ["Anlagevermögen: bleibt lange, z. B. Wohngebäude", "Umlaufvermögen: ändert sich oft, z. B. Bank, Kasse"]],
            ["B. Schulden", ["langfristig, z. B. Bankdarlehen", "kurzfristig, z. B. offene Handwerkerrechnungen"]],
            ["C. Reinvermögen", ["Vermögen minus Schulden", "= Eigenkapital"]]
          ] },
          { calc: { title: "Rechenbeispiel: Wohnungsgenossenschaft in Waren", rows: [
            { label: "Grundstücke mit Wohnbauten", n: "2.400.000,00 €" },
            { op: "+", label: "Betriebs- und Geschäftsausstattung", n: "60.000,00 €" },
            { op: "+", label: "Mietforderungen", n: "15.000,00 €" },
            { op: "+", label: "Bankguthaben", n: "120.000,00 €" },
            { op: "+", label: "Kasse", n: "5.000,00 €" },
            { op: "=", label: "A. Summe Vermögen", n: "2.600.000,00 €", t: "sub" },
            { op: "–", label: "B. Summe Schulden", n: "1.700.000,00 €" },
            { op: "=", label: "C. Reinvermögen (Eigenkapital)", n: "900.000,00 €", t: "sum" }
          ] } },
          { p: "Das Vermögen ist nach **Liquidität** geordnet: Was am schwersten zu Geld wird, steht oben. Die Schulden sind nach **Fälligkeit** geordnet: langfristige zuerst." },
          { note: "Das Inventar wird in Staffelform geschrieben, also untereinander. Es kann sehr lang werden, weil jedes Teil einzeln steht." }
        ],
        card: {
          title: "Inventar",
          bullets: [
            "A. Vermögen (nach Liquidität)",
            "B. Schulden (nach Fälligkeit)",
            "C. Reinvermögen = A – B"
          ],
          calc: { title: "Rechnung: Genossenschaft", rows: [
            { label: "A. Vermögen", n: "2.600.000,00 €" },
            { op: "–", label: "B. Schulden", n: "1.700.000,00 €" },
            { op: "=", label: "C. Reinvermögen", n: "900.000,00 €", t: "sum" }
          ] },
          merke: "Merke: Reinvermögen = Vermögen – Schulden = Eigenkapital.",
          quelle: "HGB § 240 · KMK-RLP LF 3"
        },
        src: "HGB § 240 Abs. 1; Rahmenlehrplan Lernfeld 3 („Inventur, Inventar, Bilanz“)"
      },

      { id: "lf3-2-3", title: "Bilanz – Aktiva und Passiva",
        content: [
          { p: "Die **Bilanz** ist eine kurze Übersicht. Sie stellt Vermögen und Kapital in Kontenform gegenüber (§ 242, § 247 HGB)." },
          { rules: [
            ["Aktiva (links)", ["Mittelverwendung: Wo steckt das Geld?", "Anlagevermögen", "Umlaufvermögen"]],
            ["Passiva (rechts)", ["Mittelherkunft: Woher kommt das Geld?", "Eigenkapital", "Fremdkapital (Schulden)"]]
          ] },
          { calc: { title: "Aktiva: Wohnungsgenossenschaft in Waren, 31.12.", rows: [
            { label: "A. Anlagevermögen", n: "" },
            { label: "Grundstücke mit Wohnbauten", n: "2.400.000,00 €" },
            { op: "+", label: "Betriebs- und Geschäftsausstattung", n: "60.000,00 €" },
            { op: "=", label: "Summe Anlagevermögen", n: "2.460.000,00 €", t: "sub" },
            { label: "B. Umlaufvermögen", n: "" },
            { label: "Mietforderungen", n: "15.000,00 €" },
            { op: "+", label: "Bank", n: "120.000,00 €" },
            { op: "+", label: "Kasse", n: "5.000,00 €" },
            { op: "=", label: "Summe Umlaufvermögen", n: "140.000,00 €", t: "sub" },
            { label: "Summe Anlagevermögen", n: "2.460.000,00 €" },
            { op: "+", label: "Summe Umlaufvermögen", n: "140.000,00 €" },
            { op: "=", label: "Summe Aktiva", n: "2.600.000,00 €", t: "sum" }
          ] } },
          { calc: { title: "Passiva: Wohnungsgenossenschaft in Waren, 31.12.", rows: [
            { label: "A. Eigenkapital", n: "900.000,00 €" },
            { label: "B. Fremdkapital", n: "" },
            { label: "Verbindlichkeiten gegenüber Kreditinstituten", n: "1.650.000,00 €" },
            { op: "+", label: "Verbindlichkeiten aus Lieferungen und Leistungen", n: "50.000,00 €" },
            { op: "=", label: "Summe Fremdkapital", n: "1.700.000,00 €", t: "sub" },
            { label: "Eigenkapital", n: "900.000,00 €" },
            { op: "+", label: "Summe Fremdkapital", n: "1.700.000,00 €" },
            { op: "=", label: "Summe Passiva", n: "2.600.000,00 €", t: "sum" }
          ] } },
          { note: "Probe: Summe Aktiva 2.600.000,00 € = Summe Passiva 2.600.000,00 €. Beide Seiten sind immer gleich hoch. Das Wort Bilanz kommt vom italienischen „bilancia“ (Waage)." },
          { p: "**Verbindlichkeiten aus Lieferungen und Leistungen** sind offene Rechnungen, z. B. vom Dachdecker. **Verbindlichkeiten gegenüber Kreditinstituten** sind Bankdarlehen." },
          { warn: "Wohnungsunternehmen gliedern ihre Bilanz nach einer besonderen Verordnung (JAbschlWUV). Im 1. Jahr reicht meist die einfache Form. Frag deine Lehrkraft." }
        ],
        card: {
          title: "Bilanz",
          rules: [
            ["Aktiva", ["Anlagevermögen", "Umlaufvermögen"]],
            ["Passiva", ["Eigenkapital", "Fremdkapital"]]
          ],
          calc: { title: "Rechnung: Genossenschaft", rows: [
            { label: "Aktiva: Anlagevermögen", n: "2.460.000,00 €" },
            { op: "+", label: "Aktiva: Umlaufvermögen", n: "140.000,00 €" },
            { op: "=", label: "Summe Aktiva", n: "2.600.000,00 €", t: "sum" },
            { label: "Passiva: Eigenkapital", n: "900.000,00 €" },
            { op: "+", label: "Passiva: Fremdkapital", n: "1.700.000,00 €" },
            { op: "=", label: "Summe Passiva", n: "2.600.000,00 €", t: "sum" }
          ] },
          merke: "Merke: Summe Aktiva = Summe Passiva – immer.",
          quelle: "HGB §§ 242, 247, 266 · KMK-RLP LF 3"
        },
        src: "HGB §§ 242, 247, 266; Rahmenlehrplan Lernfeld 3 („Inventur, Inventar, Bilanz“)"
      }
    ]},

    // ---------------------------------------------------------------
    { id: "lf3-3", title: "Buchen auf Bestandskonten", subs: [

      { id: "lf3-3-1", title: "Vier Arten von Bilanzveränderungen",
        content: [
          { p: "Jeder Geschäftsvorfall ändert mindestens zwei Posten der Bilanz. Danach gibt es genau vier Arten." },
          { rules: [
            ["Aktivtausch", ["Aktivposten +", "Aktivposten –", "Bilanzsumme bleibt gleich"]],
            ["Passivtausch", ["Passivposten +", "Passivposten –", "Bilanzsumme bleibt gleich"]],
            ["Aktiv-Passiv-Mehrung", ["Aktivposten +", "Passivposten +", "Bilanzsumme steigt"]],
            ["Aktiv-Passiv-Minderung", ["Aktivposten –", "Passivposten –", "Bilanzsumme sinkt"]]
          ] },
          { h: "Beispiele mit Buchungssatz" },
          { rules: [
            ["Aktivtausch", ["Mieter zahlt offene Miete per Bank", "Soll: Bank 650,00\u00a0€", "Haben: Mietforderungen 650,00\u00a0€"]],
            ["Passivtausch", ["Offene Rechnung wird in ein Bankdarlehen umgewandelt", "Soll: Verbindlichkeiten aLuL 10.000,00\u00a0€", "Haben: Verbindlichkeiten gegenüber Kreditinstituten 10.000,00\u00a0€"]],
            ["Mehrung", ["Bank zahlt ein Darlehen aus", "Soll: Bank 50.000,00\u00a0€", "Haben: Verbindlichkeiten gegenüber Kreditinstituten 50.000,00\u00a0€"]],
            ["Minderung", ["Rechnung des Dachdeckers per Bank bezahlt", "Soll: Verbindlichkeiten aLuL 2.000,00\u00a0€", "Haben: Bank 2.000,00\u00a0€"]]
          ] },
          { calc: { title: "Aktiva nach der Darlehensauszahlung (Mehrung)", rows: [
            { label: "Summe Aktiva vorher", n: "2.600.000,00 €" },
            { op: "+", label: "Bank: Darlehen ausgezahlt", n: "50.000,00 €" },
            { op: "=", label: "Summe Aktiva nachher", n: "2.650.000,00 €", t: "sum" }
          ] } },
          { calc: { title: "Passiva nach der Darlehensauszahlung (Mehrung)", rows: [
            { label: "Summe Passiva vorher", n: "2.600.000,00 €" },
            { op: "+", label: "Verbindlichkeiten gegenüber Kreditinstituten", n: "50.000,00 €" },
            { op: "=", label: "Summe Passiva nachher", n: "2.650.000,00 €", t: "sum" }
          ] } },
          { note: "Summe Aktiva = Summe Passiva, auch nach jedem Vorgang. aLuL heißt „aus Lieferungen und Leistungen“: offene Rechnungen von Lieferanten und Handwerkern." }
        ],
        card: {
          title: "Bilanzveränderungen",
          rules: [
            ["Aktivtausch", ["A + / A –", "Summe gleich"]],
            ["Passivtausch", ["P + / P –", "Summe gleich"]],
            ["Mehrung", ["A + / P +", "Summe steigt"]],
            ["Minderung", ["A – / P –", "Summe sinkt"]]
          ],
          merke: "Merke: Jeder Vorgang ändert mindestens zwei Posten.",
          quelle: "KMK-RLP LF 3 (Bestandsvorgänge)"
        },
        src: "Rahmenlehrplan Lernfeld 3 („Bestands- und Erfolgsvorgänge“); Grundsätze der doppelten Buchführung"
      },

      { id: "lf3-3-2", title: "Aktiv- und Passivkonten",
        content: [
          { p: "Die Bilanz wird in einzelne **Konten** aufgelöst. Jedes Konto hat zwei Seiten: links **Soll**, rechts **Haben**. Man nennt es auch T-Konto." },
          { rules: [
            ["Aktivkonto", ["Anfangsbestand → Soll", "Zugänge → Soll", "Abgänge → Haben", "Schlussbestand → Haben"]],
            ["Passivkonto", ["Anfangsbestand → Haben", "Zugänge → Haben", "Abgänge → Soll", "Schlussbestand → Soll"]]
          ] },
          { p: "Der Anfangsbestand steht auf der Seite, auf der der Posten in der Bilanz steht. Aktiva links, Passiva rechts." },
          { calc: { title: "Soll-Seite: Bankkonto im Januar", rows: [
            { label: "Anfangsbestand", n: "120.000,00 €" },
            { op: "+", label: "Zugänge (Mieteingänge)", n: "18.500,00 €" },
            { op: "=", label: "Summe Soll", n: "138.500,00 €", t: "sum" }
          ] } },
          { calc: { title: "Saldo: Schlussbestand ermitteln", rows: [
            { label: "Summe Soll (größere Seite)", n: "138.500,00 €" },
            { op: "–", label: "Abgänge (Rechnungen, Gehälter)", n: "9.200,00 €" },
            { op: "=", label: "Schlussbestand (Saldo)", n: "129.300,00 €", t: "sum" }
          ] } },
          { calc: { title: "Haben-Seite: Bankkonto im Januar", rows: [
            { label: "Abgänge (Rechnungen, Gehälter)", n: "9.200,00 €" },
            { op: "+", label: "Schlussbestand (Saldo)", n: "129.300,00 €" },
            { op: "=", label: "Summe Haben", n: "138.500,00 €", t: "sum" }
          ] } },
          { ex: "Bank, Kasse und Mietforderungen sind Aktivkonten. Eigenkapital, Darlehen und offene Handwerkerrechnungen sind Passivkonten." },
          { note: "Der Schlussbestand steht auf der kleineren Seite. Danach gilt: Summe Soll 138.500,00 € = Summe Haben 138.500,00 €." }
        ],
        card: {
          title: "Aktiv- und Passivkonten",
          bullets: [
            "Aktiv: AB, Zugang → Soll",
            "Passiv: AB, Zugang → Haben"
          ],
          calc: { title: "Rechnung: Bankkonto", rows: [
            { label: "Soll: AB", n: "120.000,00 €" },
            { op: "+", label: "Soll: Zugänge", n: "18.500,00 €" },
            { op: "=", label: "Summe Soll", n: "138.500,00 €", t: "sub" },
            { op: "–", label: "Haben: Abgänge", n: "9.200,00 €" },
            { op: "=", label: "Saldo: SB", n: "129.300,00 €", t: "sub" },
            { label: "Haben: Abgänge", n: "9.200,00 €" },
            { op: "+", label: "Haben: SB", n: "129.300,00 €" },
            { op: "=", label: "Summe Haben", n: "138.500,00 €", t: "sum" }
          ] },
          merke: "Merke: AB = Anfangsbestand, SB = Schlussbestand; Soll = Haben.",
          quelle: "KMK-RLP LF 3 (Hauptbuch)"
        },
        src: "Rahmenlehrplan Lernfeld 3 („Grundbuch, Hauptbuch“, „Bestands- und Erfolgsvorgänge“)"
      },

      { id: "lf3-3-3", title: "Der Buchungssatz",
        content: [
          { p: "Der **Buchungssatz** sagt kurz, auf welchen Konten gebucht wird. Zuerst kommt das Konto im Soll. Dann folgt „an“ und das Konto im Haben." },
          { p: "Form: **Soll-Konto an Haben-Konto Betrag**." },
          { h: "In vier Schritten zum Buchungssatz" },
          { ul: [
            "1. Welche Konten sind betroffen?",
            "2. Aktivkonto oder Passivkonto?",
            "3. Zugang oder Abgang?",
            "4. Soll oder Haben?"
          ] },
          { rules: [
            ["Einfach", ["Soll: Bank 650,00\u00a0€", "Haben: Mietforderungen 650,00\u00a0€"]],
            ["Zusammengesetzt", ["Soll: Verbindlichkeiten aLuL 1.500,00\u00a0€", "Haben: Bank 1.000,00\u00a0€", "Haben: Kasse 500,00\u00a0€"]]
          ] },
          { ex: "Die Hausverwaltung in Schwerin zahlt eine Schlüsseldienst-Rechnung über 1.500,00 €. 1.000,00 € gehen per Bank, 500,00 € bar." },
          { calc: { title: "Soll-Seite: zusammengesetzter Buchungssatz", rows: [
            { label: "Verbindlichkeiten aLuL", n: "1.500,00 €" },
            { op: "=", label: "Summe Soll", n: "1.500,00 €", t: "sum" }
          ] } },
          { calc: { title: "Haben-Seite: zusammengesetzter Buchungssatz", rows: [
            { label: "Bank", n: "1.000,00 €" },
            { op: "+", label: "Kasse", n: "500,00 €" },
            { op: "=", label: "Summe Haben", n: "1.500,00 €", t: "sum" }
          ] } },
          { note: "Probe: Summe Soll 1.500,00 € = Summe Haben 1.500,00 €. Das ist die **doppelte Buchführung**." }
        ],
        card: {
          title: "Der Buchungssatz",
          bullets: [
            "Soll-Konto an Haben-Konto Betrag",
            "1. Welche Konten?",
            "2. Aktiv oder Passiv?",
            "3. Zugang oder Abgang?",
            "4. Soll oder Haben?"
          ],
          calc: { title: "Rechnung: Schlüsseldienst", rows: [
            { label: "Soll: Verb. aLuL", n: "1.500,00 €" },
            { op: "=", label: "Summe Soll", n: "1.500,00 €", t: "sub" },
            { label: "Haben: Bank", n: "1.000,00 €" },
            { op: "+", label: "Haben: Kasse", n: "500,00 €" },
            { op: "=", label: "Summe Haben", n: "1.500,00 €", t: "sum" }
          ] },
          merke: "Merke: Summe Soll = Summe Haben in jedem Buchungssatz.",
          quelle: "KMK-RLP LF 3 (Grundbuch)"
        },
        src: "Rahmenlehrplan Lernfeld 3 („Grundbuch, Hauptbuch“, „Bestands- und Erfolgsvorgänge“)"
      },

      { id: "lf3-3-4", title: "Grundbuch und Hauptbuch (Achtung: nicht das Grundbuch beim Amtsgericht)",
        content: [
          { p: "Jede Buchung wird zweimal festgehalten: zuerst nach der **Zeit**, dann nach der **Sache**." },
          { rules: [
            ["Grundbuch (Journal)", ["Buchungen nach Datum geordnet", "mit Beleg-Nr., Text, Buchungssatz, Betrag"]],
            ["Hauptbuch", ["Buchungen nach Konten geordnet", "alle T-Konten der Buchführung"]]
          ] },
          { h: "Eine Zeile im Grundbuch" },
          { rules: [
            ["Datum", ["05.02."]],
            ["Beleg", ["Kontoauszug Nr. 14"]],
            ["Text", ["Mieteingang Frau K., Whg. 3"]],
            ["Soll", ["Bank 650,00 €"]],
            ["Haben", ["Mietforderungen 650,00 €"]]
          ] },
          { p: "Danach überträgst du den Betrag ins Hauptbuch: 650,00 € ins Soll des Bankkontos und ins Haben des Kontos Mietforderungen." },
          { warn: "Verwechslungsgefahr: Das **Grundbuch beim Amtsgericht** zeigt Eigentum und Belastungen von Grundstücken (Grundbuchordnung). Mit der Buchführung hat es nichts zu tun." },
          { note: "Heute erledigt das Buchhaltungsprogramm beides auf einmal. Die Logik bleibt gleich." }
        ],
        card: {
          title: "Grundbuch und Hauptbuch",
          rules: [
            ["Grundbuch", ["nach Datum (Journal)"]],
            ["Hauptbuch", ["nach Konten (T-Konten)"]],
            ["Zeile", ["Datum", "Beleg", "Buchungstext", "Soll: Bank 650,00\u00a0€", "Haben: Mietforderungen 650,00\u00a0€"]],
            ["Achtung", ["nicht Grundbuch Amtsgericht"]]
          ],
          merke: "Merke: Erst zeitlich ins Grundbuch, dann sachlich ins Hauptbuch.",
          quelle: "KMK-RLP LF 3 (Grundbuch, Hauptbuch)"
        },
        src: "Rahmenlehrplan Lernfeld 3 („Grundbuch, Hauptbuch“); HGB § 239 Abs. 2; Grundbuchordnung (zur Abgrenzung)"
      }
    ]},

    // ---------------------------------------------------------------
    { id: "lf3-4", title: "Erfolgskonten", subs: [

      { id: "lf3-4-1", title: "Aufwand und Ertrag",
        content: [
          { p: "Manche Vorgänge ändern das **Eigenkapital**. Das sind **Erfolgsvorgänge**. Sie werden auf Erfolgskonten gebucht." },
          { rules: [
            ["Aufwand", ["mindert das Eigenkapital", "wird im Soll gebucht", "z. B. Instandhaltungskosten", "z. B. Gehälter", "z. B. Darlehenszinsen"]],
            ["Ertrag", ["mehrt das Eigenkapital", "wird im Haben gebucht", "z. B. Sollmieten", "z. B. Umlagen für Betriebskosten"]]
          ] },
          { p: "**Sollmieten** sind die Mieten, die laut Mietvertrag zu zahlen sind. Sie werden zum Monatsanfang als Forderung gebucht." },
          { h: "Buchungssätze" },
          { rules: [
            ["Miete fällig", ["Soll: Mietforderungen 650,00\u00a0€", "Haben: Sollmieten 650,00\u00a0€"]],
            ["Miete bezahlt", ["Soll: Bank 650,00\u00a0€", "Haben: Mietforderungen 650,00\u00a0€"]],
            ["Reparatur bezahlt", ["Soll: Instandhaltungskosten 476,00\u00a0€", "Haben: Bank 476,00\u00a0€"]]
          ] },
          { calc: { title: "Rechenbeispiel: Wirkung auf das Eigenkapital", rows: [
            { label: "Ertrag: Sollmiete", n: "650,00 €" },
            { op: "=", label: "Summe Erträge", n: "650,00 €", t: "sub" },
            { label: "Aufwand: Reparatur", n: "476,00 €" },
            { op: "=", label: "Summe Aufwendungen", n: "476,00 €", t: "sub" },
            { label: "Summe Erträge", n: "650,00 €" },
            { op: "–", label: "Summe Aufwendungen", n: "476,00 €" },
            { op: "=", label: "Gewinn", n: "174,00 €", t: "sub" },
            { label: "Eigenkapital vorher", n: "900.000,00 €" },
            { op: "+", label: "Gewinn", n: "174,00 €" },
            { op: "=", label: "Eigenkapital nachher", n: "900.174,00 €", t: "sum" }
          ] } },
          { note: "Die Reparatur einer Mietwohnung wird mit dem Bruttobetrag gebucht. Warum, erfährst du in 5.2." }
        ],
        card: {
          title: "Aufwand und Ertrag",
          rules: [
            ["Aufwand", ["mindert Eigenkapital", "Buchung im Soll"]],
            ["Ertrag", ["mehrt Eigenkapital", "Buchung im Haben"]],
            ["Buchung", ["Soll: Mietforderungen 650,00\u00a0€", "Haben: Sollmieten 650,00\u00a0€"]]
          ],
          merke: "Merke: Aufwand im Soll, Ertrag im Haben.",
          quelle: "KMK-RLP LF 3 (Erfolgsvorgänge)"
        },
        src: "Rahmenlehrplan Lernfeld 3 („Bestands- und Erfolgsvorgänge“); HGB § 242 Abs. 2"
      },

      { id: "lf3-4-2", title: "Gewinn- und Verlustrechnung",
        content: [
          { p: "Am Jahresende sammelt das **GuV-Konto** alle Aufwendungen und Erträge. Die **Gewinn- und Verlustrechnung** ist Teil des Jahresabschlusses (§ 242 Abs. 2 HGB)." },
          { rules: [
            ["Soll-Seite", ["alle Aufwendungen"]],
            ["Haben-Seite", ["alle Erträge"]],
            ["Saldo", ["Erträge größer → Gewinn", "Aufwendungen größer → Verlust"]]
          ] },
          { calc: { title: "Erträge (Haben): Wohnungsgenossenschaft in Waren, ein Jahr", rows: [
            { label: "Sollmieten", n: "96.000,00 €" },
            { op: "+", label: "Umlagen (Betriebskosten)", n: "24.000,00 €" },
            { op: "=", label: "Summe Erträge", n: "120.000,00 €", t: "sum" }
          ] } },
          { calc: { title: "Aufwendungen (Soll): Wohnungsgenossenschaft in Waren, ein Jahr", rows: [
            { label: "Betriebskosten", n: "26.000,00 €" },
            { op: "+", label: "Instandhaltungskosten", n: "30.000,00 €" },
            { op: "+", label: "Personalaufwand", n: "28.000,00 €" },
            { op: "+", label: "Abschreibungen", n: "18.000,00 €" },
            { op: "+", label: "Zinsaufwand", n: "8.000,00 €" },
            { op: "=", label: "Summe Aufwendungen", n: "110.000,00 €", t: "sum" }
          ] } },
          { calc: { title: "Erfolg: Erträge minus Aufwendungen", rows: [
            { label: "Summe Erträge", n: "120.000,00 €" },
            { op: "–", label: "Summe Aufwendungen", n: "110.000,00 €" },
            { op: "=", label: "Gewinn", n: "10.000,00 €", t: "sum" }
          ] } },
          { p: "**Abschreibungen** erfassen den Wertverlust von Gebäuden und Geräten über die Jahre. Der Gewinn steht als Saldo auf der Soll-Seite. Dann sind beide Seiten des GuV-Kontos gleich: 110.000,00 € + 10.000,00 € = 120.000,00 €." },
          { h: "Buchungssätze zum Abschluss" },
          { rules: [
            ["Aufwandskonto", ["Soll: GuV 30.000,00\u00a0€", "Haben: Instandhaltungskosten 30.000,00\u00a0€"]],
            ["Ertragskonto", ["Soll: Sollmieten 96.000,00\u00a0€", "Haben: GuV 96.000,00\u00a0€"]]
          ] }
        ],
        card: {
          title: "Gewinn- und Verlustrechnung",
          rules: [
            ["Saldo", ["Erträge > Aufwand → Gewinn"]]
          ],
          calc: { title: "Rechnung: Genossenschaft", rows: [
            { label: "Ertrag: Sollmieten", n: "96.000,00 €" },
            { op: "+", label: "Ertrag: Umlagen", n: "24.000,00 €" },
            { op: "=", label: "Summe Erträge", n: "120.000,00 €", t: "sub" },
            { label: "Aufw.: Instandhaltung", n: "30.000,00 €" },
            { op: "+", label: "Aufw.: übrige", n: "80.000,00 €" },
            { op: "=", label: "Summe Aufwendungen", n: "110.000,00 €", t: "sub" },
            { label: "Summe Erträge", n: "120.000,00 €" },
            { op: "–", label: "Summe Aufwendungen", n: "110.000,00 €" },
            { op: "=", label: "Gewinn", n: "10.000,00 €", t: "sum" }
          ] },
          merke: "Merke: Erträge größer als Aufwendungen → Gewinn.",
          quelle: "HGB §§ 242, 275 · KMK-RLP LF 3"
        },
        src: "HGB § 242 Abs. 2, § 275; Rahmenlehrplan Lernfeld 3 („Erfolgsermittlung“, „Kontenabschluss“)"
      },

      { id: "lf3-4-3", title: "Erfolg ermitteln",
        content: [
          { p: "Den Erfolg kannst du auf zwei Wegen ermitteln. Beide führen zum gleichen Ergebnis." },
          { rules: [
            ["GuV-Rechnung", ["Erträge minus Aufwendungen"]],
            ["Eigenkapitalvergleich", ["Eigenkapital am Jahresende", "minus Eigenkapital am Jahresanfang", "plus Privatentnahmen", "minus Privateinlagen"]]
          ] },
          { p: "**Privatentnahmen** gibt es nur beim Einzelunternehmen. Die Inhaberin nimmt Geld für sich heraus. **Privateinlagen** sind Geld, das sie privat einzahlt." },
          { calc: { title: "Rechenbeispiel: Hausverwaltung von Frau K. in Rostock", rows: [
            { label: "Eigenkapital 31.12.", n: "85.000,00 €" },
            { op: "–", label: "Eigenkapital 01.01.", n: "70.000,00 €" },
            { op: "=", label: "Zunahme Eigenkapital", n: "15.000,00 €", t: "sub" },
            { op: "+", label: "Privatentnahmen", n: "30.000,00 €" },
            { op: "–", label: "Privateinlagen", n: "5.000,00 €" },
            { op: "=", label: "Gewinn", n: "40.000,00 €", t: "sum" }
          ] } },
          { calc: { title: "Probe mit Weg 1: GuV-Rechnung derselben Hausverwaltung (Beispielwerte)", rows: [
            { label: "Ertrag: Verwaltergebühren", n: "118.000,00 €" },
            { op: "+", label: "Ertrag: Zinserträge", n: "2.000,00 €" },
            { op: "=", label: "Summe Erträge", n: "120.000,00 €", t: "sub" },
            { label: "Aufwand: Personal", n: "60.000,00 €" },
            { op: "+", label: "Aufwand: Büromiete und Material", n: "20.000,00 €" },
            { op: "=", label: "Summe Aufwendungen", n: "80.000,00 €", t: "sub" },
            { label: "Summe Erträge", n: "120.000,00 €" },
            { op: "–", label: "Summe Aufwendungen", n: "80.000,00 €" },
            { op: "=", label: "Gewinn", n: "40.000,00 €", t: "sum" }
          ] } },
          { p: "Der Gewinn auf dem GuV-Konto wird ins Eigenkapital übertragen." },
          { rules: [
            ["Gewinn", ["Soll: GuV 40.000,00\u00a0€", "Haben: Eigenkapital 40.000,00\u00a0€"]],
            ["Verlust", ["Soll: Eigenkapital (Betrag des Verlusts)", "Haben: GuV (gleicher Betrag)"]]
          ] },
          { warn: "Bei GmbH und Genossenschaft heißt der Gewinn „Jahresüberschuss“. Die Gegenbuchung kann dort anders lauten. Halte dich an die Vorgabe deiner Schule." }
        ],
        card: {
          title: "Erfolg ermitteln",
          bullets: [
            "Weg 1: Erträge – Aufwendungen",
            "Weg 2: Eigenkapitalvergleich"
          ],
          calc: { title: "Rechnung: Eigenkapitalvergleich", rows: [
            { label: "EK 31.12.", n: "85.000,00 €" },
            { op: "–", label: "EK 01.01.", n: "70.000,00 €" },
            { op: "=", label: "Zunahme", n: "15.000,00 €", t: "sub" },
            { op: "+", label: "Entnahmen", n: "30.000,00 €" },
            { op: "–", label: "Einlagen", n: "5.000,00 €" },
            { op: "=", label: "Gewinn", n: "40.000,00 €", t: "sum" }
          ] },
          merke: "Merke: Gewinn bucht man im Soll auf GuV, im Haben auf Eigenkapital.",
          quelle: "HGB §§ 242, 275 · KMK-RLP LF 3"
        },
        src: "HGB §§ 242, 275; Rahmenlehrplan Lernfeld 3 („Erfolgsermittlung“)"
      }
    ]},

    // ---------------------------------------------------------------
    { id: "lf3-5", title: "Umsatzsteuer", subs: [

      { id: "lf3-5-1", title: "Vorsteuer und Umsatzsteuer",
        content: [
          { p: "Auf viele Leistungen kommt **Umsatzsteuer**. Der Regelsatz beträgt **19 %** (§ 12 Abs. 1 UStG). Am Ende zahlt sie der Endverbraucher." },
          { rules: [
            ["Vorsteuer", ["steht auf Eingangsrechnungen", "Forderung an das Finanzamt", "Aktivkonto"]],
            ["Umsatzsteuer", ["stellst du selbst in Rechnung", "Schuld beim Finanzamt", "Passivkonto"]],
            ["Zahllast", ["Umsatzsteuer minus Vorsteuer", "geht ans Finanzamt"]]
          ] },
          { calc: { title: "Rechenbeispiel: Hausverwaltung in Rostock, ein Monat", rows: [
            { label: "Verwaltergebühr netto", n: "1.000,00 €" },
            { op: "+", label: "Umsatzsteuer", f: "× 19 %", n: "190,00 €" },
            { op: "=", label: "Rechnung brutto", n: "1.190,00 €", t: "sum" }
          ] } },
          { calc: { title: "Rechenbeispiel: Zahllast im selben Monat", rows: [
            { label: "Umsatzsteuer aus der Verwaltergebühr", n: "190,00 €" },
            { op: "–", label: "Vorsteuer aus Büromaterial (200,00 € netto)", f: "× 19 %", n: "38,00 €" },
            { op: "=", label: "Zahllast an das Finanzamt", n: "152,00 €", t: "sum" }
          ] } },
          { h: "Buchungssätze" },
          { calc: { title: "Buchungssatz Ausgangsrechnung", rows: [
            { label: "Soll: Forderungen", n: "1.190,00 €" },
            { op: "=", label: "Summe Soll", n: "1.190,00 €", t: "sub" },
            { label: "Haben: Umsatzerlöse", n: "1.000,00 €" },
            { op: "+", label: "Haben: Umsatzsteuer", n: "190,00 €" },
            { op: "=", label: "Summe Haben", n: "1.190,00 €", t: "sum" }
          ] } },
          { calc: { title: "Buchungssatz Eingangsrechnung", rows: [
            { label: "Soll: Büromaterial", n: "200,00 €" },
            { op: "+", label: "Soll: Vorsteuer", n: "38,00 €" },
            { op: "=", label: "Summe Soll", n: "238,00 €", t: "sub" },
            { label: "Haben: Bank", n: "238,00 €" },
            { op: "=", label: "Summe Haben", n: "238,00 €", t: "sum" }
          ] } },
          { calc: { title: "Buchungssatz Zahllast", rows: [
            { label: "Soll: Umsatzsteuer", n: "190,00 €" },
            { op: "=", label: "Summe Soll", n: "190,00 €", t: "sub" },
            { label: "Haben: Vorsteuer", n: "38,00 €" },
            { op: "+", label: "Haben: Bank (Zahllast)", n: "152,00 €" },
            { op: "=", label: "Summe Haben", n: "190,00 €", t: "sum" }
          ] } },
          { note: "Die Umsatzsteuer ist für das Unternehmen kein Aufwand. Sie wird nur weitergereicht. Das gilt aber nur, wenn es die Vorsteuer abziehen darf." }
        ],
        card: {
          title: "Vorsteuer und Umsatzsteuer",
          rules: [
            ["Vorsteuer", ["Eingang, Forderung (aktiv)"]],
            ["USt", ["Ausgang, Schuld (passiv)"]],
            ["Satz", ["19 % (Regelsatz)"]]
          ],
          calc: { title: "Rechnung: Zahllast", rows: [
            { label: "Umsatzsteuer", n: "190,00 €" },
            { op: "–", label: "Vorsteuer", n: "38,00 €" },
            { op: "=", label: "Zahllast", n: "152,00 €", t: "sum" }
          ] },
          merke: "Merke: Zahllast = Umsatzsteuer – Vorsteuer.",
          quelle: "UStG §§ 12, 15, 18 · KMK-RLP LF 3"
        },
        src: "UStG § 12 Abs. 1, § 15 Abs. 1, § 18; Rahmenlehrplan Lernfeld 3 („Umsatzsteuerbuchungen“)"
      },

      { id: "lf3-5-2", title: "Wohnraummiete ist umsatzsteuerfrei",
        content: [
          { p: "Die Vermietung von Grundstücken und Wohnungen ist **steuerfrei** (§ 4 Nr. 12 Satz 1 Buchst. a UStG). Auf die Wohnungsmiete kommt also keine Umsatzsteuer." },
          { p: "Die Kehrseite: Wer steuerfrei vermietet, darf die **Vorsteuer nicht abziehen** (§ 15 Abs. 2 Satz 1 Nr. 1 UStG). Die Umsatzsteuer auf Handwerkerrechnungen wird dann zum Aufwand." },
          { h: "Nicht steuerfrei sind zum Beispiel" },
          { ul: [
            "kurzfristige Vermietung an Gäste, z. B. Ferienwohnung",
            "Vermietung von Stellplätzen für Fahrzeuge, wenn sie allein vermietet werden",
            "Vermietung von Betriebsvorrichtungen, z. B. Maschinen"
          ] },
          { calc: { title: "Rechenbeispiel: Malerrechnung für eine Mietwohnung in Waren", rows: [
            { label: "Malerarbeiten netto", n: "2.000,00 €" },
            { op: "+", label: "Umsatzsteuer", f: "× 19 %", n: "380,00 €" },
            { op: "=", label: "Aufwand für das Wohnungsunternehmen", n: "2.380,00 €", t: "sum" }
          ] } },
          { rules: [
            ["Buchungssatz", ["Soll: Instandhaltungskosten 2.380,00\u00a0€", "Haben: Verbindlichkeiten aLuL 2.380,00\u00a0€"]]
          ] },
          { p: "Bei gewerblichen Mietern kann der Vermieter auf die Steuerfreiheit verzichten (**Option**, § 9 UStG). Das geht nur, wenn der Mieter selbst steuerpflichtige Umsätze macht. Bei Wohnraum ist das ausgeschlossen." },
          { warn: "Ob ein mitvermieteter Stellplatz steuerfrei ist, hängt vom Einzelfall ab. Im Betrieb entscheidet das die Buchhaltung oder Steuerberatung." }
        ],
        card: {
          title: "Wohnraummiete steuerfrei",
          bullets: [
            "Wohnungsmiete: keine USt",
            "dafür: kein Vorsteuerabzug",
            "USt auf Rechnung → Aufwand",
            "steuerpflichtig: Ferienwohnung",
            "steuerpflichtig: Stellplatz allein"
          ],
          calc: { title: "Rechnung: Maler", rows: [
            { label: "netto", n: "2.000,00 €" },
            { op: "+", label: "USt", f: "× 19 %", n: "380,00 €" },
            { op: "=", label: "Aufwand", n: "2.380,00 €", t: "sum" }
          ] },
          merke: "Merke: Steuerfreie Miete → Handwerker brutto als Aufwand.",
          quelle: "UStG §§ 4 Nr. 12, 9, 15 · KMK-RLP LF 3"
        },
        src: "UStG § 4 Nr. 12 Satz 1 Buchst. a und Satz 2, § 9 Abs. 1 und 2, § 15 Abs. 2 Satz 1 Nr. 1; Rahmenlehrplan Lernfeld 3"
      }
    ]},

    // ---------------------------------------------------------------
    { id: "lf3-6", title: "Abschluss und Ordnung", subs: [

      { id: "lf3-6-1", title: "Konten abschließen, Schlussbilanzkonto",
        content: [
          { p: "Am Jahresende werden alle Konten abgeschlossen. Die Reihenfolge ist fest. Das **Schlussbilanzkonto (SBK)** sammelt alle Schlussbestände." },
          { h: "Reihenfolge" },
          { ul: [
            "1. Vorsteuer mit Umsatzsteuer verrechnen",
            "2. Aufwands- und Ertragskonten → GuV-Konto",
            "3. Saldo des GuV-Kontos → Eigenkapital",
            "4. alle Bestandskonten → Schlussbilanzkonto"
          ] },
          { h: "Buchungssätze" },
          { rules: [
            ["Aufwand", ["Soll: GuV 30.000,00\u00a0€", "Haben: Instandhaltungskosten 30.000,00\u00a0€"]],
            ["Ertrag", ["Soll: Sollmieten 96.000,00\u00a0€", "Haben: GuV 96.000,00\u00a0€"]],
            ["Gewinn", ["Soll: GuV 10.000,00\u00a0€", "Haben: Eigenkapital 10.000,00\u00a0€"]],
            ["Aktivkonto", ["Soll: SBK 151.000,00\u00a0€", "Haben: Bank 151.000,00\u00a0€"]],
            ["Passivkonto", ["Soll: Eigenkapital 910.000,00\u00a0€", "Haben: SBK 910.000,00\u00a0€"]]
          ] },
          { calc: { title: "Aktiva im SBK: Wohnungsgenossenschaft in Waren, 31.12.", rows: [
            { label: "Grundstücke mit Wohnbauten", n: "2.382.000,00 €" },
            { op: "+", label: "Betriebs- und Geschäftsausstattung", n: "60.000,00 €" },
            { op: "=", label: "Summe Anlagevermögen", n: "2.442.000,00 €", t: "sub" },
            { label: "Mietforderungen", n: "12.000,00 €" },
            { op: "+", label: "Bank", n: "151.000,00 €" },
            { op: "+", label: "Kasse", n: "5.000,00 €" },
            { op: "=", label: "Summe Umlaufvermögen", n: "168.000,00 €", t: "sub" },
            { label: "Summe Anlagevermögen", n: "2.442.000,00 €" },
            { op: "+", label: "Summe Umlaufvermögen", n: "168.000,00 €" },
            { op: "=", label: "Summe Aktiva", n: "2.610.000,00 €", t: "sum" }
          ] } },
          { calc: { title: "Passiva im SBK: Wohnungsgenossenschaft in Waren, 31.12.", rows: [
            { label: "Eigenkapital 01.01.", n: "900.000,00 €" },
            { op: "+", label: "Gewinn", n: "10.000,00 €" },
            { op: "=", label: "Eigenkapital 31.12.", n: "910.000,00 €", t: "sub" },
            { label: "Verbindlichkeiten gegenüber Kreditinstituten", n: "1.650.000,00 €" },
            { op: "+", label: "Verbindlichkeiten aLuL", n: "50.000,00 €" },
            { op: "=", label: "Summe Fremdkapital", n: "1.700.000,00 €", t: "sub" },
            { label: "Eigenkapital 31.12.", n: "910.000,00 €" },
            { op: "+", label: "Summe Fremdkapital", n: "1.700.000,00 €" },
            { op: "=", label: "Summe Passiva", n: "2.610.000,00 €", t: "sum" }
          ] } },
          { note: "Probe: Summe Aktiva 2.610.000,00 € = Summe Passiva 2.610.000,00 €. Im neuen Jahr öffnet das **Eröffnungsbilanzkonto (EBK)** die Konten wieder, z. B. Soll: Bank 151.000,00 €, Haben: EBK 151.000,00 €." }
        ],
        card: {
          title: "Konten abschließen",
          bullets: [
            "1. Vorsteuer mit USt verrechnen",
            "2. Erfolgskonten → GuV",
            "3. GuV-Saldo → Eigenkapital",
            "4. Bestandskonten → SBK"
          ],
          calc: { title: "Rechnung: SBK-Probe", rows: [
            { label: "Aktiva: Anlagevermögen", n: "2.442.000,00 €" },
            { op: "+", label: "Aktiva: Umlaufvermögen", n: "168.000,00 €" },
            { op: "=", label: "Summe Aktiva", n: "2.610.000,00 €", t: "sum" },
            { label: "Passiva: Eigenkapital", n: "910.000,00 €" },
            { op: "+", label: "Passiva: Fremdkapital", n: "1.700.000,00 €" },
            { op: "=", label: "Summe Passiva", n: "2.610.000,00 €", t: "sum" }
          ] },
          merke: "Merke: Im SBK sind Aktiva und Passiva gleich hoch.",
          quelle: "HGB § 242 · KMK-RLP LF 3"
        },
        src: "HGB § 242; Rahmenlehrplan Lernfeld 3 („Kontenabschluss“, Ziel: Übernahme in GuV und Schlussbilanzkonto)"
      },

      { id: "lf3-6-2", title: "Kontenrahmen der Immobilienwirtschaft",
        content: [
          { p: "Ein **Kontenrahmen** ist ein Ordnungssystem für alle Konten einer Branche. Daraus macht jedes Unternehmen seinen eigenen **Kontenplan**." },
          { p: "Die Wohnungswirtschaft nutzt den Kontenrahmen ihres Verbands **GdW** (Bundesverband deutscher Wohnungs- und Immobilienunternehmen). Er passt zu den Besonderheiten der Branche, z. B. Sollmieten und Umlagen." },
          { h: "Kontenklassen (Gliederung nach Klassen)" },
          { rules: [
            ["Klasse 0", ["Anlagevermögen"]],
            ["Klasse 1", ["zum Verkauf bestimmte Grundstücke und andere Vorräte"]],
            ["Klasse 2", ["Forderungen, flüssige Mittel"]],
            ["Klasse 3", ["Eigenkapital, Rückstellungen"]],
            ["Klasse 4", ["Verbindlichkeiten"]],
            ["Klasse 6", ["Erträge"]],
            ["Klasse 7", ["Bautätigkeit"]],
            ["Klasse 8", ["Aufwendungen"]],
            ["Klasse 9", ["Abschlusskonten (z. B. GuV, Schlussbilanzkonto)"]]
          ] },
          { ex: "Die Sollmiete gehört zu den Erträgen, also Klasse 6. Eine Malerrechnung für eine Mietwohnung ist Aufwand, also Klasse 8." },
          { warn: "Kontonummern nach Vorgabe von Schule/Betrieb. Die Klassen oben stammen aus einer verbreiteten Fassung nach dem GdW-Kontenrahmen. Die amtliche GdW-Ausgabe konnte nicht eingesehen werden." }
        ],
        card: {
          title: "Kontenrahmen Immobilien",
          rules: [
            ["0", ["Anlagevermögen"]],
            ["1", ["Verkaufsgrundstücke, Vorräte"]],
            ["2", ["Forderungen, flüssige Mittel"]],
            ["3", ["Eigenkapital, Rückstellungen"]],
            ["4", ["Verbindlichkeiten"]],
            ["6", ["Erträge"]],
            ["7", ["Bautätigkeit"]],
            ["8", ["Aufwendungen"]],
            ["9", ["Abschlusskonten"]]
          ],
          merke: "Merke: Kontonummern nach Vorgabe von Schule/Betrieb.",
          quelle: "GdW-Kontenrahmen (Klassen) · KMK-RLP LF 3"
        },
        src: "Rahmenlehrplan Lernfeld 3 („Kontenrahmen der Immobilienwirtschaft“); Klassengliederung nach dem Kontenplan Immobilienwirtschaft (Intex Publishing, Anlehnung an den GdW-Kontenrahmen, abgerufen 25.11.2026)"
      },

      { id: "lf3-6-3", title: "Organisation der Buchführung",
        content: [
          { p: "Die Buchführung braucht eine feste Ordnung. Sonst gehen Belege verloren und Fehler bleiben unentdeckt." },
          { h: "Bücher der Buchführung" },
          { rules: [
            ["Grundbuch", ["alle Buchungen nach Datum"]],
            ["Hauptbuch", ["alle Sachkonten"]],
            ["Nebenbücher", ["Mieterkonten (ein Konto je Mieter)", "Konten der Lieferanten und Handwerker", "Anlagenbuchhaltung", "Lohn- und Gehaltsbuchhaltung"]]
          ] },
          { h: "Der Weg eines Belegs" },
          { ul: [
            "1. Eingang mit Datum stempeln",
            "2. sachlich und rechnerisch prüfen",
            "3. kontieren",
            "4. buchen",
            "5. ablegen und Frist beachten"
          ] },
          { p: "Heute wird fast immer mit Software gebucht. Auch dann gelten die GoB. Das Finanzamt beschreibt die Regeln für digitale Bücher in den **GoBD**." },
          { ex: "Frau K. scannt eine Handwerkerrechnung ein. Das Programm bucht sie und legt sie digital ab. Eine spätere Änderung muss erkennbar bleiben (§ 239 Abs. 3 HGB)." },
          { warn: "Welches Buchungsprogramm genutzt wird und wie Belege abgelegt werden, regelt dein Betrieb." }
        ],
        card: {
          title: "Organisation",
          rules: [
            ["Bücher", ["Grundbuch: nach Datum", "Hauptbuch: Sachkonten", "Nebenbuch: Mieterkonten"]],
            ["Beleg", ["1. Eingang stempeln", "2. prüfen", "3. kontieren", "4. buchen", "5. ablegen"]]
          ],
          merke: "Merke: Änderungen müssen immer erkennbar bleiben.",
          quelle: "HGB §§ 238, 239 · AO § 147 · RLP LF 3"
        },
        src: "HGB §§ 238, 239; AO §§ 146, 147; BMF-Schreiben zu den GoBD; Rahmenlehrplan Lernfeld 3 („Organisation der Buchführung“)"
      }
    ]}
  ]
});
