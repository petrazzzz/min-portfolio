"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <main style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontWeight: 300, background: "#ffffff", minHeight: "100vh", color: "#1a1814" }}>

      {/* Navigation */}
      <nav style={{
        position: "fixed", top: 0, width: "100%",
        padding: "1.5rem clamp(1.5rem, 5vw, 4rem)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
        boxShadow: "0 1px 0 #e2ded9", zIndex: 100, boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.125rem", fontWeight: 400, letterSpacing: "0.02em", fontStyle: "normal" }}>Petra Frisk / Portfolio</span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", color: "#7a7570", border: "1px solid #e2ded9", borderRadius: "999px", padding: "0.3rem 0.85rem" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4caf50", display: "inline-block", flexShrink: 0 }} />
            öppen för LIA
          </span>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {[["Om mig", "#ommig"], ["Projekt", "#projekt"], ["Kontakt", "#kontakt"]].map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "7rem clamp(1.5rem, 5vw, 4rem) 4rem",
        maxWidth: "1320px",
        margin: "0 auto",
        gap: "4rem"
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.6rem", animation: "fadeUp 0.8s ease both" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#c8633a", display: "inline-block", flexShrink: 0 }} />
            UX-designstudent
          </p>

          <h1 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(3.5rem, 7vw, 6rem)", fontWeight: 300,
            lineHeight: 1.05, margin: "0 0 2rem", letterSpacing: "-0.02em",
            animation: "fadeUp 0.8s ease 0.15s both"
          }}>
            Jag lyssnar först<br />
            <em style={{ fontStyle: "italic", color: "#c8633a" }}>designar sedan</em>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, margin: "0 0 2.5rem", animation: "fadeUp 0.8s ease 0.3s both", maxWidth: "44ch" }}>
            Jag studerar UX-design och skapar upplevelser som känns intuitiva – från research till färdig prototyp.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem", animation: "fadeUp 0.8s ease 0.45s both" }}>
            <a href="#projekt" className="btn-primary">Se mina projekt</a>
            <a href="#kontakt" style={{ fontSize: "0.875rem", fontWeight: 400, color: "#1a1814", textDecoration: "none", borderBottom: "1px solid #1a1814", paddingBottom: "2px" }}>Kontakta mig →</a>
          </div>
        </div>

        <div className="hero-bild-wrapper">
          <img
            src="/petrafrisk_profilbild.png"
            alt="Petra Frisk"
            className="hero-bild"
          />
        </div>
      </section>

      {/* Om mig */}
      <section id="ommig" style={{ padding: "6rem clamp(1.5rem, 5vw, 4rem)", maxWidth: "1320px", margin: "0 auto", borderTop: "1px solid #e2ded9" }}>
        <p className="fade-up" style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "3rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c8633a", display: "inline-block", flexShrink: 0 }} />
          Om mig
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div className="fade-up">
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 300, lineHeight: 1.2, margin: "0 0 1.5rem", letterSpacing: "-0.01em", color: "#1a1814" }}>
              Jag trivs i hela <em style={{ fontStyle: "italic", color: "#c8633a" }}>processen</em>
            </h2>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Jag studerar UX-design på Stockholms Tekniska Institut med bakgrund inom digital kommunikation och sociala medier. Jag trivs i hela designprocessen – från tidiga intervjuer till testade prototyper – och gillar när research leder till design som faktiskt gör skillnad för användaren.
            </p>
            <a href="https://www.sti.se/utbildningar/ux-designer/" target="_blank" style={{ fontSize: "0.875rem", fontWeight: 400, color: "#c8633a", textDecoration: "none", borderBottom: "1px solid #c8633a", paddingBottom: "2px", display: "inline-block" }}>
              Läs mer om utbildningen →
            </a>
          </div>
          <div className="fade-up" style={{ borderLeft: "1px solid #e2ded9", paddingLeft: "4rem" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "1.5rem" }}>
              Kompetenser
            </p>
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7570", margin: "0 0 0.5rem" }}>Verktyg</p>
            {["Figma", "Canva", "HTML/CSS"].map((skill) => (
              <div key={skill} className="skill-item">{skill}</div>
            ))}
            <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7570", margin: "1.5rem 0 0.5rem" }}>Metoder</p>
            {["Wireframing", "Användartestning", "Interaktionsdesign", "Tjänstedesign"].map((skill) => (
              <div key={skill} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Projekt */}
      <section id="projekt" style={{ padding: "6rem clamp(1.5rem, 5vw, 4rem)", borderTop: "1px solid #e2ded9", maxWidth: "1320px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "3rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c8633a", display: "inline-block", flexShrink: 0 }} />
          Projekt
        </p>
        <div style={{ maxWidth: "380px" }}>
          <a href="/tbn" className="projekt-kort" style={{ textDecoration: "none", color: "inherit", display: "block", border: "1px solid #e2ded9", borderRadius: "6px", overflow: "hidden" }}>
            <div style={{ overflow: "hidden" }}>
              <img
                src="/tbn_startsida.png"
                alt="TBN Atlantic Rainforest"
                className="projekt-bild"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ padding: "1.5rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", margin: "0 0 0.5rem" }}>UX Research · Tjänstedesign</p>
              <h3 className="projekt-titel" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 400, margin: "0 0 0.5rem" }}>TBN Atlantic Rainforest</h3>
              <p className="projekt-beskrivning" style={{ fontSize: "0.875rem", fontWeight: 300, margin: 0, lineHeight: 1.7 }}>Omdesign av hemsida för en klimatorganisation med fokus på trovärdighet och engagemang.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" style={{ padding: "6rem clamp(1.5rem, 5vw, 4rem)", borderTop: "1px solid #e2ded9", maxWidth: "1320px", margin: "0 auto" }}>
        <p className="fade-up" style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8633a", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c8633a", display: "inline-block", flexShrink: 0 }} />
          Kontakt
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div className="fade-up">
            <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 300, margin: 0, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
              Låt oss skapa något<br /><em style={{ fontStyle: "italic", color: "#c8633a" }}>tillsammans</em>
            </h2>
          </div>
          <div className="fade-up">
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", fontWeight: 300, color: "#7a7570", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Jag söker LIA inom UX/tjänstedesign hösten 2026 (28 sept–20 nov). Nyfiken på att samarbeta? Hör av dig så berättar jag mer.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="mailto:petra.frisk@stud.sti.se" className="btn-primary">Maila mig</a>
              <a href="https://www.linkedin.com/in/petra-frisk-35428014a/" target="_blank" className="btn-primary">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "2rem clamp(1.5rem, 5vw, 4rem)", borderTop: "1px solid #e2ded9",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 400, color: "#7a7570", letterSpacing: "0.05em" }}>2026 Petra Frisk</span>
      </footer>

    </main>
  );
}
