"use client";

const logos = [
  { src: "/images/logo-1-clean.png", alt: "Government of Karnataka", height: "130px" },
  { src: "/images/logo-2-clean.png", alt: "Kalyan Silks", height: "130px" },
  { src: "/images/logo-3-clean.png", alt: "CM Multispeciality Hospital", height: "130px" },
  { src: "/images/logo-4-clean.png", alt: "ABC", height: "130px" },
  { src: "/images/logo-5-clean.png", alt: "Indo Fish Meal & Oil Co.", height: "130px" },
  { src: "/images/logo-6-clean.png", alt: "City Gold", height: "150px" },
  { src: "/images/logo-7-clean.png", alt: "Aramana Hospital", height: "140px" },
  { src: "/images/logo-8-clean.png", alt: "Wintouch Academy", height: "130px" },
  { src: "/images/logo-9-clean.png", alt: "The Global Public School", height: "130px" },
];

export default function TrustedBy() {
  const doubleLogos = [...logos, ...logos];

  return (
    <section id="trusted-by" style={{ padding: "80px 0", background: "#FFFFFF", borderTop: "1px solid #DDE8E3", borderBottom: "1px solid #DDE8E3", overflow: "hidden" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ marginBottom: "16px" }}>
            <span className="section-label">
              Trusted Partners
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            color: "#0D1F1A",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}>
            Trusted by <span className="gradient-text">South India&apos;s Leading Enterprises</span>
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
          {/* Left/Right fading gradients to blend logos seamlessly into the white background */}
          <div style={{
            position: "absolute",
            top: 0, bottom: 0, left: 0, width: "120px",
            background: "linear-gradient(to right, #FFFFFF, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            top: 0, bottom: 0, right: 0, width: "120px",
            background: "linear-gradient(to left, #FFFFFF, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }} />

          {/* Scrolling track */}
          <div className="animate-marquee" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            {doubleLogos.map((logo, idx) => (
              <div
                key={idx}
                style={{
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  background: "#FFFFFF",
                  border: "1px solid #DDE8E3",
                  borderRadius: "10px",
                  padding: "16px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "120px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,122,74,0.08)";
                  e.currentTarget.style.borderColor = "#1A7A4A";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.filter = "brightness(0) opacity(0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#DDE8E3";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.filter = "brightness(0) opacity(0.5)";
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: "80px",
                    width: "auto",
                    maxWidth: "220px",
                    objectFit: "contain",
                    display: "block",
                    filter: "brightness(0) opacity(0.5)",
                    transition: "filter 0.3s ease",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
