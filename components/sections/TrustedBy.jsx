"use client";

const logos = [
  { src: "/images/logo-1.png", alt: "Government of Karnataka" },
  { src: "/images/logo-2.png", alt: "Kalyan Silks" },
  { src: "/images/logo-3.png", alt: "CM Multispeciality Hospital" },
  { src: "/images/logo-4.png", alt: "ABC" },
  { src: "/images/logo-5.webp", alt: "Indo Fish Meal & Oil Co." },
  { src: "/images/logo-6.jpeg", alt: "City Gold" },
  { src: "/images/logo-7.jpeg", alt: "Aramana Hospital" },
  { src: "/images/logo-8.png", alt: "Wintouch Academy" },
  { src: "/images/logo-9.jpg", alt: "The Global Public School" },
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
          <div className="animate-marquee" style={{ display: "flex", gap: "80px", alignItems: "center" }}>
            {doubleLogos.map((logo, idx) => (
              <div
                key={idx}
                style={{
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "140px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.opacity = "0.85";
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: "110px",
                    width: "auto",
                    maxWidth: "260px",
                    objectFit: "contain",
                    display: "block",
                    opacity: "0.85",
                    transition: "opacity 0.3s ease",
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
