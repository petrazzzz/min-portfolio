"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Streamly() {
  const [aktivProcess, setAktivProcess] = useState(0);
  const processBilder = [
    { src: "/streamly_whiteboard.png", alt: "Planering av arbetssätt och metoder på whiteboard", objectPosition: "center 15%" },
    { src: "/streamly_dotvoting.png", alt: "Idégenerering och dot-voting av designkoncept", objectPosition: "center" },
  ];

  const [aktivStyleguide, setAktivStyleguide] = useState(0);
  const styleguideKoncept = [
    { bild: "/streamly_styleguide_farg.png", titel: "Färgpalett", text: "En varm, filmisk känsla i mörka toner. Basfärgerna är svart och mörkbrun, kompletterade med amber och orange som accentfärger för knappar, grafer och logotyp – framtagna med en WCAG 2.1-kontrastanalys för god läsbarhet." },
    { bild: "/streamly_styleguide_identitet.png", titel: "Typografi", text: "Playfair Display för rubriker ger en redaktionell, 'filmtidning'-känsla, medan Liter används för brödtext och gränssnittselement – inspirerat av hur streamingtjänster balanserar redaktionellt innehåll med tydlig UI." },
  ];

  const [aktivSkarm, setAktivSkarm] = useState(0);
  const skarmarKoncept = [
    { bild: "/skarm-nordic.png", titel: "Nordic Charts", text: "Filtren ligger samlade ovanför diagrammen så att användaren alltid ser vad som styr datan. Amber och orange skiljer filmer från serier i både stapel- och donutdiagrammet." },
    { video: "/skarm-compare-v2.mp4", titel: "Sök och jämför", text: "Användaren kan söka på en titel och jämföra den med en annan. Varje val får en egen accentfärg, amber och orange, så det är tydligt vilken data som hör till vilken titel." },
    { bild: "/skarm-about.png", titel: "About us", text: "Hero-bilden med filmomslag och en mörk toning sätter den filmiska känslan direkt, i linje med styleguiden." },
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
        <Link href="/" className="flex items-center gap-2 sm:gap-5" style={{ textDecoration: "none" }}>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 400, letterSpacing: "0.02em", fontStyle: "normal", color: "#1a1814" }}>Petra Frisk / Portfolio</span>
        </Link>
        <div className="flex gap-3 sm:gap-8">
          {[["Projekt", "/#projekt"], ["Om mig", "/#ommig"], ["Kontakt", "/#kontakt"]].map(([label, href]) => (
            <Link key={label} href={href} className="text-xs sm:text-sm" style={{ fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7a7570", textDecoration: "none" }}>{label}</Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section
        className="min-h-[85vh] flex flex-col justify-center"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%, #ffffff 100%), linear-gradient(135deg, #fdf6ee 0%, #f5ede0 45%, #e4e2d0 75%, #d9dcc4 100%)",
        }}
      >
        <div style={{ padding: "1.5rem clamp(1.5rem, 5vw, 4rem) 2rem", maxWidth: "1320px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
          <div className="grid grid-cols-1 md:grid-cols-[42fr_58fr] gap-10 md:gap-8 items-center">
            <div className="relative" style={{ zIndex: 2 }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>
                Case study / Datavisualisering
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1rem", maxWidth: "20ch" }}>
                Streamly
              </h1>
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", fontWeight: 300, color: "#5f5b52", lineHeight: 1.7 }}>
                Ett dashboard som gör film- och seriedata från streamingtjänster överskådligt och enkelt att utforska.
              </p>
            </div>
            <div className="relative" style={{ zIndex: 1 }}>
              <Image
                src="/streamly_startsidahero.png"
                alt="Streamly"
                width={1200}
                height={800}
                priority
                className="w-full"
                style={{ height: "auto", display: "block", objectFit: "contain", filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.3))" }}
              />
            </div>
          </div>
          <div className="gap-6 sm:gap-8" style={{ display: "flex", flexWrap: "wrap", marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(26, 24, 20, 0.14)" }}>
            {[
              { label: "Roll", värde: "UX Designer" },
              { label: "Typ", värde: "Grupprojekt" },
              { label: "Verktyg", värde: "Figma, dataset från TMDB/Netflix" },
              { label: "Fokus", värde: "Datavisualisering, dashboard-design, agilt arbete" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5f5b52" }}>{item.label}</span>
                <span style={{ fontSize: "0.875rem", fontWeight: 400, color: "#1a1814" }}>{item.värde}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / bakgrund */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-16" style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div className="static md:sticky md:top-[calc(4rem+1.5rem)]">
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Problem & bakgrund</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Att hitta det bästa i ett växande utbud
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Utbudet av filmer och serier växer ständigt, och det blir allt svårare att sålla bland alla rekommendationer för att hitta något värt att titta på. Syftet med projektet var att skapa en tjänst som gör det enkelt och inspirerande att upptäcka nya filmer och serier – genom att tydliggöra vad som faktiskt är populärt och högt rankat just nu.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Uppdraget blev att bygga en hemsida där användare kan jämföra populära filmer och serier mellan olika länder, se topplistor och sortera efter genre. Tjänsten riktar sig till personer som är intresserade av film och serier, och skulle upplevas ren och lättöverskådlig snarare än rörig.
          </p>
        </div>
      </section>

      {/* Samarbete */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-16" style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div className="static md:sticky md:top-[calc(4rem+1.5rem)]">
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Samarbete</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Där design möter data
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Projektet genomfördes i samarbete med en klass som läste Data Engineering (DE). DE-klassen ansvarade för att ta fram och bearbeta datan – hämtad från Netflix Tudum, IMDb och YouTube – som låg till grund för topplistorna, betygen och jämförelserna mellan länder.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Vår designgrupp ansvarade för research, intervjuer och användartester, samt det visuella – hur tjänsten skulle se ut och kännas. Beslut som till exempel att byta &apos;Monthly Nordic rank&apos; mot ett tydligare &apos;performance score&apos;, och att visa antal visningar per vecka istället för per månad i ett stapeldiagram, togs gemensamt mellan grupperna utifrån användarnas behov.
          </p>
        </div>
      </section>

      {/* Agil process (mindre sektion) */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-16" style={{ padding: "2.5rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div className="static md:sticky md:top-[calc(4rem+1.5rem)]">
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Agil process</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
            Från idé till beslut
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            Gruppen använde agila metoder genom hela projektet, bland annat Crazy 8s för att snabbt generera flera designidéer för olika element. Varje gruppmedlem fick sedan rösta fram de idéer de tyckte fungerade bäst, vilket gav ett demokratiskt underlag för beslut kring exempelvis hur statistik och rankningar skulle visualiseras.
          </p>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "6px", overflow: "hidden", position: "relative", aspectRatio: "1600 / 798" }}>
              {processBilder.map((bild, i) => (
                <Image key={bild.src} src={bild.src} alt={bild.alt} width={1200} height={800} priority style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: bild.objectPosition, display: "block", position: "absolute", top: 0, left: 0, opacity: i === aktivProcess ? 1 : 0, transition: "opacity 0.3s ease" }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
              <button onClick={() => setAktivProcess((aktivProcess - 1 + processBilder.length) % processBilder.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {processBilder.map((_, i) => (
                  <button key={i} onClick={() => setAktivProcess(i)} style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", cursor: "pointer", background: i === aktivProcess ? "#c8633a" : "#e2ded9", padding: 0 }} />
                ))}
              </div>
              <button onClick={() => setAktivProcess((aktivProcess + 1) % processBilder.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
            </div>
            <p style={{ textAlign: "center", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a7570", marginTop: "0.75rem" }}>
              {aktivProcess + 1} / {processBilder.length} — {processBilder[aktivProcess].alt}
            </p>
          </div>
        </div>
      </section>

      {/* Visuell design */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", borderBottom: "1px solid #e2ded9" }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-16" style={{ marginBottom: "3rem" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Visuell design</p>
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814" }}>
              Ett varmt, filmiskt designspråk
            </h2>
          </div>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, alignSelf: "end" }}>
            Med utgångspunkt i en tydlig färgpalett och typografi utformades diagram och datavisualiseringar för att vara lättlästa och snabba att tolka, med inspiration från hur streamingtjänster som Netflix balanserar redaktionellt innehåll med funktionell UI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-16" style={{ alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Identitet {aktivStyleguide + 1} / {styleguideKoncept.length}</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, margin: "0 0 1rem", color: "#1a1814", lineHeight: 1.2 }}>{styleguideKoncept[aktivStyleguide].titel}</h3>
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, margin: 0 }}>{styleguideKoncept[aktivStyleguide].text}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
              <button onClick={() => setAktivStyleguide((aktivStyleguide - 1 + styleguideKoncept.length) % styleguideKoncept.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {styleguideKoncept.map((_, i) => (
                  <button key={i} onClick={() => setAktivStyleguide(i)} style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", cursor: "pointer", background: i === aktivStyleguide ? "#c8633a" : "#e2ded9", padding: 0 }} />
                ))}
              </div>
              <button onClick={() => setAktivStyleguide((aktivStyleguide + 1) % styleguideKoncept.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            {styleguideKoncept.map((item, i) => (
              <Image key={item.bild} src={item.bild} alt={item.titel} width={1200} height={750} priority style={{ width: "100%", height: "auto", borderRadius: "6px", display: "block", position: i === 0 ? "relative" : "absolute", top: 0, left: 0, opacity: i === aktivStyleguide ? 1 : 0, transition: "opacity 0.3s ease" }} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
          <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, margin: 0, color: "#1a1814", lineHeight: 1.2 }}>
            Från system till skärmar
          </h3>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, marginTop: "0.75rem" }}>
            Med färger, typografi och komponenter på plats kunde vi bygga appens tre vyer konsekvent – även när flera personer designade samtidigt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-16" style={{ alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Skärmar {aktivSkarm + 1} / {skarmarKoncept.length}</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, margin: "0 0 1rem", color: "#1a1814", lineHeight: 1.2 }}>{skarmarKoncept[aktivSkarm].titel}</h3>
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, margin: 0 }}>{skarmarKoncept[aktivSkarm].text}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
              <button onClick={() => setAktivSkarm((aktivSkarm - 1 + skarmarKoncept.length) % skarmarKoncept.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {skarmarKoncept.map((_, i) => (
                  <button key={i} onClick={() => setAktivSkarm(i)} style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", cursor: "pointer", background: i === aktivSkarm ? "#c8633a" : "#e2ded9", padding: 0 }} />
                ))}
              </div>
              <button onClick={() => setAktivSkarm((aktivSkarm + 1) % skarmarKoncept.length)} style={{ background: "#1a1814", color: "#fff", border: "none", cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            {skarmarKoncept.map((item, i) => (
              <div
                key={item.video || item.bild}
                style={{
                  width: "100%", aspectRatio: "1920 / 1256", overflow: "hidden", borderRadius: "6px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  position: i === 0 ? "relative" : "absolute", top: 0, left: 0, opacity: i === aktivSkarm ? 1 : 0, transition: "opacity 0.3s ease"
                }}
              >
                {item.video ? (
                  <video src={item.video} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                ) : (
                  <Image src={item.bild!} alt={item.titel} width={1200} height={750} priority style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultat + lärdomar */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-16" style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", alignItems: "start", borderBottom: "1px solid #e2ded9" }}>
        <div className="static md:sticky md:top-[calc(4rem+1.5rem)]">
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "0.75rem" }}>Resultat & lärdomar</p>
          <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.375rem, 2vw, 2rem)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#1a1814", textWrap: "balance" }}>
            Resultatet
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8 }}>
            En klickbar prototyp där användaren kan filtrera Nordens topplistor efter land, år och genre, och jämföra två titlar sida vid sida. Designen byggdes på riktig data som Data Engineering-studenterna tog fram.
          </p>
          <div style={{ paddingTop: "1.5rem", borderTop: "1px solid #e2ded9" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", marginBottom: "1rem" }}>Lärdomar</p>
            {[
              "Tidigt samarbete med data-sidan sparar tid, eftersom designen måste utgå från vilken data som faktiskt finns.",
              "Korta sprintar och avstämningar gjorde att vi kunde ändra riktning snabbt.",
              "En gemensam styleguide gjorde att flera kunde designa parallellt utan att uttrycket spretade.",
            ].map((punkt) => (
              <div key={punkt} style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                <span style={{ color: "#c8633a", flexShrink: 0, fontWeight: 400 }}>–</span>
                {punkt}
              </div>
            ))}
          </div>
          <div style={{ background: "#f7f5f2", borderRadius: "6px", padding: "2rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8633a", marginBottom: "1rem" }}>Reflektion</p>
            <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", fontWeight: 300, color: "#1a1814", lineHeight: 1.7, margin: 0 }}>
              "Det som överraskade mig mest var hur mycket datan styr designen. En graf måste fungera med de siffror som finns, inte bara se bra ut."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex-col sm:flex-row justify-between items-start sm:items-center gap-4" style={{ padding: "2rem clamp(1.5rem, 5vw, 4rem)", borderTop: "1px solid #e2ded9", display: "flex" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 400, color: "#7a7570", letterSpacing: "0.05em" }}>2026 Petra Frisk</span>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 2rem", background: "transparent", color: "#1a1814", border: "1.5px solid #e2ded9", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}>
          ← Tillbaka till projekt
        </Link>
      </footer>

    </main>
  );
}
