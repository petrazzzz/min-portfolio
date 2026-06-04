"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cykelappen() {
  const [aktivKoncept, setAktivKoncept] = useState(0);

  const koncept = [
    {
      titel: "Hemskärmen",
      text: "En personlig startvy som visar aktiv profil, senaste rutt och snabb åtkomst till cykelpumpar, verkstäder och nya rutter – allt samlat på ett ställe.",
      bild: "/cykel_home.png",
    },
    {
      titel: "Ruttfilter",
      text: "Anpassa din cykling efter dina behov – välj trappfri rutt, röststyrning, talstöd eller rullstolsanpassad väg. Designat för att vara tillgängligt för alla.",
      bild: "/cykel_ruttfilter.png",
    },
    {
      titel: "Nätverk",
      text: "En gemenskap för cyklister – hitta kommande event, läs intervjuer med andra cyklister och delta i forum. Cykling är roligare tillsammans.",
      bild: "/cykel_natverk.png",
    },
  ];

  return (
    <main style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontWeight: 300, background: "#ffffff", minHeight: "100vh", color: "#1a1814", paddingTop: "calc(4rem + 1.5rem)" }}>

      {/* Navigation */}
      <nav style={{
        position: "fixed", top: 0, width: "100%",
        padding: "1.5rem clamp(1.5rem, 5vw, 4rem)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
        boxShadow: "0 1px 0 #e2ded9", zIndex: 100, boxSizing: "border-box"
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "1.25rem", textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.125rem", fontWeight: 400, letterSpacing: "0.02em", fontStyle: "normal", color: "#1a1814" }}>Petra Frisk / Portfolio</span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7a7570", border: "1px solid #e2ded9", borderRadius: "999px", padding: "0.3rem 0.85rem" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4caf50", display: "inline-block", flexShrink: 0 }} />
            öppen för LIA
          </span>
        </Link>
        <div style={{ display: "flex", gap: "2rem" }}>
          {[["Projekt", "/#projekt"], ["Om mig", "/#ommig"], ["Kontakt", "/#kontakt"]].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontSize: "0.875rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7a7570", textDecoration: "none" }}>{label}</Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "3rem clamp(1.5rem, 5vw, 4rem) 3rem", maxWidth: "1320px", margin: "0 auto", borderBottom: "1px solid #e2ded9" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", marginBottom: "1.5rem" }}>
          Case study / Interaktionsdesign
        </p>
        <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(3rem, 6vw, 6.5rem)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "2rem", maxWidth: "20ch" }}>
          Cykelappen
        </h1>
        <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.375rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.7, maxWidth: "60ch", marginBottom: "3rem" }}>
          En app som gör cyklingen enklare, tryggare och mer inkluderande – för alla cyklister i Sverige.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid #e2ded9" }}>
          {[
            { label: "Roll", värde: "UX Designer" },
            { label: "Typ", värde: "Grupprojekt" },
            { label: "Kurs", värde: "Interaktionsdesign" },
            { label: "Fokus", värde: "Research, personas, prototyp, användbarhetstestning" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7570" }}>{item.label}</span>
              <span style={{ fontSize: "0.875rem", fontWeight: 400, color: "#1a1814" }}>{item.värde}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Översikt */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ position: "sticky", top: "calc(4rem + 1.5rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Översikt</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Att skapa trygghet och gemenskap för alla cyklister
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Många cyklister stöter dagligen på praktiska hinder – pumpar som är trasiga, vägar som känns otrygga och brist på information om säkra rutter. Det är ett vardagsproblem som drabbar alla, men som extra hårt slår mot de som inte har erfarenhet eller rätt utrustning.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Idén till Cykelappen växte fram ur dessa insikter: en app som samlar praktisk hjälp, trygghetsfunktioner och social gemenskap på ett ställe – och som är utformad för att inkludera alla cyklister, oavsett ålder, förmåga eller vana.
          </p>
        </div>
      </section>

      {/* Research & Insikter */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ position: "sticky", top: "calc(4rem + 1.5rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Research & Insikter</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Från 9 intervjuer till tre bärande insikter
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Vi genomförde 9 intervjuer med cyklister i olika åldrar och med olika vana. Resultaten pekade tydligt mot tre insikter som formade hela designriktningen.
          </p>
          {[
            {
              nr: "01",
              titel: "Trygghet är det viktigaste",
              text: "Känslan av trygghet – både på vägen och med appen – var den absolut mest avgörande faktorn. Otrygga vägavsnitt och brist på information om omgivningen gjorde att många undvek att cykla.",
              citat: "Jag vet inte vilka vägar som är säkra, så jag håller mig till de jag känner till.",
            },
            {
              nr: "02",
              titel: "Praktiska funktioner före sociala",
              text: "Deltagarna ville ha hjälp med konkreta, vardagliga problem – som att hitta en pump eller planera en säker rutt – snarare än sociala funktioner som ranking eller tävlingar.",
              citat: "Jag behöver inte en app som talar om hur snabb jag är. Jag behöver veta var närmaste pump finns.",
            },
            {
              nr: "03",
              titel: "Inkludering för alla – oavsett förutsättningar",
              text: "Det var tydligt att existerande cykelappar designades för sportcyklister. Äldre cyklister, nybörjare och personer med funktionsnedsättning kände sig utanför och efterfrågade en app som möter dem där de är.",
              citat: "De flesta appar känns som de är gjorda för tävlingscyklister. Jag cyklar bara till jobbet.",
            },
          ].map((insikt) => (
            <div key={insikt.nr} style={{ paddingTop: "2rem", borderTop: "1px solid #e2ded9" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", color: "#c8633a", marginBottom: "0.5rem" }}>{insikt.nr}</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", fontWeight: 400, margin: "0 0 0.75rem", color: "#1a1814" }}>{insikt.titel}</h3>
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", margin: 0, lineHeight: 1.8 }}>{insikt.text}</p>
              <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic", fontSize: "1rem", fontWeight: 300, color: "#7a7570", lineHeight: 1.6, marginTop: "0.75rem" }}>
                "{insikt.citat}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Personas */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ position: "sticky", top: "calc(4rem + 1.5rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Personas</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Två cyklister, två perspektiv
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {[
            {
              namn: "Luca",
              ålder: "42 år",
              roll: "Pendlarcyklisten",
              beskrivning: "Luca cyklar till jobbet varje dag och har gjort det i tio år. Han vill ha snabb och tillförlitlig information om rutter och väglag – utan distraktioner. Trygghet handlar för Luca om att vet att vägen fungerar.",
              behov: "Snabb rutt, pålitlig info om väglag, minimalt krångel",
              frustration: "Appar som är röriga eller kräver för mycket interaktion medan man cyklar",
            },
            {
              namn: "Magda",
              ålder: "57 år",
              roll: "Fritidscyklisten",
              beskrivning: "Magda har börjat cykla mer på sistone för hälsans skull, men känner sig osäker på okända vägar. Hon vill kunna rapportera och se andras rapporter om otrygga platser, och gärna hitta andra att cykla med.",
              behov: "Trygghetsinformation, sällskap, enkelt och tydligt gränssnitt",
              frustration: "Känner sig inte hemma i appar gjorda för sportcyklister",
            },
          ].map((persona) => (
            <div key={persona.namn} style={{ padding: "1.5rem", border: "1px solid #e2ded9", borderRadius: "6px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, margin: "0 0 0.25rem", color: "#1a1814" }}>{persona.namn}, {persona.ålder}</h3>
                <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", margin: 0 }}>{persona.roll}</p>
              </div>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "#7a7570", lineHeight: 1.7, margin: 0 }}>{persona.beskrivning}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingTop: "1rem", borderTop: "1px solid #e2ded9" }}>
                <p style={{ fontSize: "0.875rem", color: "#7a7570", margin: 0 }}><em>Behov:</em> {persona.behov}</p>
                <p style={{ fontSize: "0.875rem", color: "#7a7570", margin: 0 }}><em>Frustration:</em> {persona.frustration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design & Koncept */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", marginBottom: "3rem" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Design & Koncept</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
              Från insikter till designlösningar
            </h2>
          </div>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, alignSelf: "end" }}>
            Utifrån research och personas tog vi fram tre kärnkoncept som tillsammans bildar Cykelappens upplevelse. Fokus låg på att skapa ett gränssnitt som är enkelt nog för Magda men tillräckligt snabbt för Luca.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Koncept {aktivKoncept + 1} / {koncept.length}</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, margin: "0 0 1rem", color: "#1a1814", lineHeight: 1.2 }}>{koncept[aktivKoncept].titel}</h3>
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, margin: 0 }}>{koncept[aktivKoncept].text}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
              <button onClick={() => setAktivKoncept((aktivKoncept - 1 + koncept.length) % koncept.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {koncept.map((_, i) => (
                  <button key={i} onClick={() => setAktivKoncept(i)} style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", cursor: "pointer", background: i === aktivKoncept ? "#c8633a" : "#e2ded9", padding: 0 }} />
                ))}
              </div>
              <button onClick={() => setAktivKoncept((aktivKoncept + 1) % koncept.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
            <div style={{ position: "relative", width: "320px", height: "570px", flexShrink: 0 }}>
              {koncept.map((item, i) => (
                <div key={item.titel} style={{ width: "320px", height: "570px", borderRadius: "6px", overflow: "hidden", background: item.bild ? "transparent" : "#f7f5f2", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: 0, left: 0, opacity: i === aktivKoncept ? 1 : 0 }}>
                  {item.bild ? (
                    <Image src={item.bild} alt={item.titel} width={560} height={1000} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                  ) : (
                    <span style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "#b0aba5" }}>Bild kommer snart</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testresultat */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ position: "sticky", top: "calc(4rem + 1.5rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Testresultat</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Vad som fungerade och vad vi lärde oss
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Sex personer mellan 20 och 69 år med olika teknikvana testade prototypen. Appen upplevdes överlag som trygg och genomtänkt, men vissa delar skapade förvirring. De flesta klarade uppgifterna på egen hand, men några fastnade i flöden.
          </p>
          <div style={{ paddingTop: "1.5rem", borderTop: "1px solid #e2ded9" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", marginBottom: "1rem" }}>Vad uppskattades</p>
            {[
              "SOS-knappen var den funktion som uppskattades mest. Deltagarna kände sig tryggare bara av att veta att den fanns tillgänglig.",
              "Funktionen att hitta cykelpumpar och verkstäder upplevdes som mycket praktisk.",
              "Ruttfilter och personliga profiler uppskattades – det kändes som att appen anpassade sig efter användaren.",
            ].map((punkt) => (
              <div key={punkt} style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                <span style={{ color: "#c8633a", flexShrink: 0, fontWeight: 400 }}>–</span>
                {punkt}
              </div>
            ))}
          </div>
          <div style={{ paddingTop: "1.5rem", borderTop: "1px solid #e2ded9" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", marginBottom: "1rem" }}>Förbättringsområden</p>
            {[
              "En tillbaka-knapp saknades i onboardingen, vilket förvirrade några deltagare.",
              "Startsidan upplevdes rörig med för många val synliga samtidigt.",
              "Kartvyn behövde förenklas – för många element på samma yta skapade förvirring.",
            ].map((punkt) => (
              <div key={punkt} style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                <span style={{ color: "#c8633a", flexShrink: 0, fontWeight: 400 }}>–</span>
                {punkt}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflektion */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ position: "sticky", top: "calc(4rem + 1.5rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Reflektion</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Vad jag tar med mig
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div style={{ background: "#f7f5f2", borderRadius: "6px", padding: "2rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", marginBottom: "1rem" }}>Reflektion</p>
            <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", fontWeight: 300, color: "#1a1814", lineHeight: 1.7, margin: 0 }}>
              "Det som överraskade mig mest var hur mycket SOS-knappen kunde betyda för upplevd trygghet. Det påminde mig om att de enklaste funktionerna ofta har störst påverkan på användarupplevelsen."
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://www.figma.com/design/u4B8U6aLaVH2ariD1SZl9a/Petra-HJPR-prototype--Copy-?node-id=2021-1681&t=MgLHK2qxBAYIRCpC-1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 2rem", background: "#c8633a", color: "#fff", border: "1.5px solid #c8633a", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}>
              Se prototyp i Figma →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem clamp(1.5rem, 5vw, 4rem)", borderTop: "1px solid #e2ded9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 400, color: "#7a7570", letterSpacing: "0.05em" }}>2026 Petra Frisk</span>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 2rem", background: "transparent", color: "#1a1814", border: "1.5px solid #e2ded9", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}>
          ← Tillbaka till projekt
        </Link>
      </footer>

    </main>
  );
}
