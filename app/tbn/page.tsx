"use client";
import { useState } from "react";
import Link from "next/link";

export default function TBN() {
  const [aktiv, setAktiv] = useState(0);
  const [aktivKoncept, setAktivKoncept] = useState(0);
  const bilder = [
    { src: "/problem1.png", alt: "Startsidan – identifierade problem" },
    { src: "/problem3.png", alt: "Benefits-sidan – identifierade problem" },
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
          Case study / UX Design
        </p>
        <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(3rem, 6vw, 6.5rem)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "2rem", maxWidth: "20ch" }}>
          TBN Atlantic Rainforest
        </h1>
        <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.375rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.7, maxWidth: "60ch", marginBottom: "3rem" }}>
          En redesign av en klimatorganisations hemsida med fokus på tydligare informationsarkitektur, starkare trovärdighet och mer engagerande storytelling.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid #e2ded9" }}>
          {[
            { label: "Roll", värde: "UX Designer" },
            { label: "Typ", värde: "Grupprojekt" },
            { label: "Kurs", värde: "UX Research, Tjänstedesign & Användbarhetstestning" },
            { label: "Fokus", värde: "Research, IA, UI, storytelling" },
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
            Att skapa en mer trovärdig och engagerande upplevelse
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            TBN Atlantic Rainforest är en ideell organisation som arbetar för att återställa den brasilianska Atlantskogen genom kolkrediter och donationer. Organisationens hemsida kommunicerade inte tillräckligt tydligt vad TBN gör, vem de riktar sig till eller varför man ska engagera sig.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Uppdraget var att utforska hur hemsidan kunde bli tydligare, mer trovärdig och mer engagerande – för både företag och privatpersoner som vill bidra till ett konkret miljöarbete.
          </p>
          <figure style={{ margin: 0 }}>
            <img src="/TBN_befintlig_hemsida.png" alt="TBN:s befintliga hemsida" style={{ width: "100%", borderRadius: "6px", display: "block", border: "1px solid #e2ded9" }} />
            <figcaption style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a7570", marginTop: "0.75rem" }}>TBN:s befintliga hemsida</figcaption>
          </figure>
        </div>
      </section>

      {/* Nulägesanalys */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ position: "sticky", top: "calc(4rem + 1.5rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Nulägesanalys</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Utmaningar i den befintliga upplevelsen
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Genom intervjuer med 9 respondenter från olika företag identifierade vi återkommande problem med den befintliga hemsidan – brister som påverkade trovärdighet, tydlighet och användarupplevelsen.
          </p>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "6px", overflow: "hidden" }}>
              <img src={bilder[aktiv].src} alt={bilder[aktiv].alt} style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
              <button onClick={() => setAktiv((aktiv - 1 + bilder.length) % bilder.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {bilder.map((_, i) => (
                  <button key={i} onClick={() => setAktiv(i)} style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", cursor: "pointer", background: i === aktiv ? "#c8633a" : "#e2ded9", padding: 0 }} />
                ))}
              </div>
              <button onClick={() => setAktiv((aktiv + 1) % bilder.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
            </div>
            <p style={{ textAlign: "center", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a7570", marginTop: "0.75rem" }}>
              {aktiv + 1} / {bilder.length} — {bilder[aktiv].alt}
            </p>
          </div>
        </div>
      </section>

      {/* Research & Insikter */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ position: "sticky", top: "calc(4rem + 1.5rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Research & Insikter</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Från intervjuer till designriktning
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Intervjuerna resulterade i tre centrala insikter som formade hela vår designriktning.
          </p>
          {[
            { nr: "01", titel: "Kolkrediter möts av skepsis", text: "9 av 9 respondenter var negativt inställda till kolkrediter vid första tanken. Narrativet behövde förskjutas mot NGO-fokus och certifierad kommunikation.", citat: "Första tankarna är negativa – många tycker att det öppnar en dörr för företag att köpa sig ur sitt miljöavtryck." },
            { nr: "02", titel: "Trygghet och trovärdighet är avgörande", text: "Hemsidan måste förmedla pålitlighet – helst genom tredjepartsverifikation kopplad till erkända standarder som Science Based Targets.", citat: "Kommunikationen ska vara pålitlig, faktabaserad och transparent, gärna kopplad till erkända standarder som Science Based Targets." },
            { nr: "03", titel: "Långsiktighet, inte projekt", text: "Alla respondenter betonade att miljöarbete inte är tidsbegränsat. Storytelling måste visa på ett pågående engagemang utan slutdatum.", citat: "Vi jobbar inte i projekt, för det har en början och slut." },
          ].map((insikt) => (
            <div key={insikt.nr} style={{ paddingTop: "2rem", borderTop: "1px solid #e2ded9" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", color: "#c8633a", marginBottom: "0.5rem" }}>{insikt.nr}</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", fontWeight: 400, margin: "0 0 0.75rem", color: "#1a1814" }}>{insikt.titel}</h3>
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", margin: 0, lineHeight: 1.8 }}>{insikt.text}</p>
              {insikt.citat && (
                <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic", fontSize: "1rem", fontWeight: 300, color: "#7a7570", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  "{insikt.citat}"
                </p>
              )}
            </div>
          ))}
          <div style={{ marginTop: "1rem" }}>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Utifrån insikterna identifierade vi två beteendetyper som designen behövde tillgodose.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[
                { typ: "Den evidensorienterade", text: "Fattar beslut utifrån fakta och data. Söker verifierbar information och tredjepartsgranskning innan förtroende byggs.", drivkraft: "Välgrundade beslut utifrån rådata" },
                { typ: "Den känslodrivna", text: "Motiveras av empati och värderingar. Drivs av engagemang för miljö och hållbarhet och vill se verklig förändring.", drivkraft: "Se faktisk förändring, agera i linje med sina värderingar" },
              ].map((t) => (
                <div key={t.typ} style={{ padding: "1.5rem", border: "1px solid #e2ded9", borderRadius: "6px" }}>
                  <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", fontWeight: 400, margin: "0 0 0.75rem", color: "#1a1814" }}>{t.typ}</h3>
                  <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "#7a7570", lineHeight: 1.7, marginBottom: "0.75rem" }}>{t.text}</p>
                  <p style={{ fontSize: "0.875rem", color: "#7a7570", margin: 0 }}><em>Drivkraft: {t.drivkraft}</em></p>
                </div>
              ))}
            </div>
          </div>
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
            Utifrån insikterna och beteendetyperna genomförde vi en workshop där vi genererade idéer och tog fram designkoncept. Vi fokuserade på att skapa en upplevelse som är hoppfull, tydlig och lugn – och som möter både den evidensorienterade och den känslodrivna besökaren.
          </p>
        </div>
        {(() => {
          const koncept = [
            { bild: "/figma_home.png", titel: "Startsida", text: "En omgjord startsida med tydligare hero-sektion, starkare värdeerbjudande och en direkt synlig call-to-action – så att besökaren omedelbart förstår vad TBN gör och varför det spelar roll." },
            { bild: "/figma_impact.png", titel: "Evidensbaserad impactsida", text: "En dedikerad sida med verifierade certifikat, mätbar statistik och källhänvisningar – för att möta den evidensorienterade besökaren och stärka organisationens trovärdighet." },
            { bild: "/figma_slider.png", titel: "Donations-slider", text: "En interaktiv slider där besökaren i realtid ser effekten av sin donation – antal träd, koldioxid och markyta. 5 av 5 testdeltagare upplevde ett ökat engagemang." },
          ];
          const k = koncept[aktivKoncept];
          return (
            <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Koncept {aktivKoncept + 1} / {koncept.length}</p>
                  <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, margin: "0 0 1rem", color: "#1a1814", lineHeight: 1.2 }}>{k.titel}</h3>
                  <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, margin: 0 }}>{k.text}</p>
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
              <img src={k.bild} alt={k.titel} style={{ width: "100%", borderRadius: "6px", display: "block" }} />
            </div>
            </div>
          );
        })()}
      </section>

      {/* Användbarhetstester */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ position: "sticky", top: "calc(4rem + 1.5rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Användbarhetstester</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Testa, lära och förbättra
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Vi genomförde 5 användbarhetstester på plats med miljömedvetna privatpersoner. Deltagarna fick ett scenario och navigerade genom prototypen medan de tänkte högt – vi observerade, antecknade och ställde följdfrågor.
          </p>
          {[
            { nr: "01", titel: "Otydlighet", text: "5 av 5 tyckte att det var otydligt vad TBN är och vem organisationen riktar sig till. Lika många hade svårt att tolka skillnaden mellan knapparna 'Donate', 'Invest' och 'Credits'." },
            { nr: "02", titel: "Tredjepartsverifikation", text: "5 av 5 ansåg att tredjepartsverifikationerna behövde tydligare förklaringar. 3 av 5 hade svårt att hitta certifikaten överhuvudtaget." },
            { nr: "03", titel: "Donations-slidern", text: "5 av 5 upplevde ett ökat engagemang när de använde donations-slidern och ville se den direkt på startsidan." },
          ].map((punkt) => (
            <div key={punkt.titel} style={{ paddingTop: "1.5rem", borderTop: "1px solid #e2ded9" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.5rem" }}>{punkt.nr}</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", fontWeight: 400, margin: "0 0 0.75rem", color: "#1a1814" }}>{punkt.titel}</h3>
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, margin: 0 }}>{punkt.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resultat */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div style={{ position: "sticky", top: "calc(4rem + 1.5rem)" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Resultat</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            En mer tydlig, engagerande och förtroendeingivande riktning
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Projektet resulterade i ett designkoncept som tydligare kommunicerar TBN:s påverkan och skapar en starkare koppling mellan besökaren och uppdraget.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Omgjord startsida med tydligare hero och call-to-action",
              "Evidensbaserad impactsida med verifierad statistik",
              "Interaktiv donations-slider som visar effekten i realtid",
              "Förbättrad tredjepartsverifikation med tydligare förklaringar",
            ].map((punkt) => (
              <div key={punkt} style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.7 }}>
                <span style={{ color: "#c8633a", flexShrink: 0, fontWeight: 400 }}>–</span>
                {punkt}
              </div>
            ))}
          </div>
          <div style={{ background: "#f7f5f2", borderRadius: "6px", padding: "2rem", marginTop: "1rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", marginBottom: "1rem" }}>Reflektion</p>
            <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", fontWeight: 300, color: "#1a1814", lineHeight: 1.7, margin: 0 }}>
              "Det mest värdefulla jag tog med mig var att se hur research och design hänger ihop. Varje designbeslut vi fattade kunde kopplas tillbaka till något en respondent sagt."
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://www.figma.com/proto/UQzA04Cr4elZgIZEPzYUNW/TBN-Homepage--Copy-?node-id=0-1&t=NCjRfTw3LASp82IH-1" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 2rem", background: "#c8633a", color: "#fff", border: "1.5px solid #c8633a", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}>
              Se prototyp i Figma →
            </a>
            <a href="https://drive.google.com/file/d/1hzQWzn7HzXDJLdBG3fJZVT46Dam2Uvw2/view?usp=sharing" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 2rem", background: "transparent", color: "#1a1814", border: "1.5px solid #e2ded9", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}>
              Se processdokumentation →
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