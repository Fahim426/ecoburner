"use client";

import { motion } from "framer-motion";
import { Award, Wrench, DollarSign, Headphones } from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const reasons = [
  {
    icon: Award,
    title: "CPCB-Compliant Engineering",
    desc: "Every system is designed, tested, and commissioned to satisfy Central and State Pollution Control Board standards — not approximated.",
  },
  {
    icon: Wrench,
    title: "Site-Specific Customisation",
    desc: "We assess your waste type, volume, and site constraints before recommending a system. No generic catalogue sales.",
  },
  {
    icon: DollarSign,
    title: "Transparent, Competitive Pricing",
    desc: "Detailed line-item quotations. No hidden costs. Our pricing is structured for institutions managing tight capital expenditure.",
  },
  {
    icon: Headphones,
    title: "Committed After-Sales Support",
    desc: "Installation, operator training, annual maintenance contracts, and spare parts — managed from our Kasaragod base Across South India.",
  },
];

export default function WhyEcoburner() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="why-ecoburner" style={{ padding: "80px 0", background: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-[100px] items-start">

          {/* Left — sticky summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#2d8a42" }} />
              <span style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.2rem)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d8a42" }}>
                Why ECOBURNER
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}>
              Built for Industrial<br />Procurement Standards
            </h2>
            <p style={{ color: "#aaa", fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "40px" }}>
              South India&apos;s hospitals, factories, and municipalities choose ECOBURNER
              because we combine engineering rigour with reliable service commitments.
            </p>

            {/* Metrics */}
            <div 
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2"
              style={{
                borderTop: "1px solid #1e1e1e",
                borderLeft: "1px solid #1e1e1e",
                marginTop: "16px",
              }}
            >
              {[
                { value: 50, suffix: "+", label: "Installations", sub: "Across South India" },
                { value: 2, suffix: "+", label: "Years Active", sub: "Based in Kasaragod" },
                { value: 100, suffix: "%", label: "Compliance Rate", sub: "CPCB & KSPCB" },
                { value: 24, suffix: "/7", label: "Support", sub: "Dedicated Service Team" },
              ].map((m, idx) => (
                <motion.div 
                  key={m.label} 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  style={{ 
                    padding: "32px 24px", 
                    background: "#0c0c0c",
                    borderRight: "1px solid #1e1e1e",
                    borderBottom: "1px solid #1e1e1e",
                    position: "relative",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: "3px", background: "#2d8a42", transition: "height 1s ease 0.5s", height: inView ? "100%" : "0%" }} />
                  
                  <div style={{ 
                    fontSize: "3rem", 
                    fontWeight: 900, 
                    color: "white", 
                    marginBottom: "8px", 
                    fontFamily: "'Bebas Neue', cursive", 
                    letterSpacing: "0.03em",
                    lineHeight: 1,
                  }}>
                    {inView ? (
                      <CountUp start={0} end={m.value} duration={2.5} suffix={m.suffix} delay={idx * 0.1} separator="," />
                    ) : `0${m.suffix}`}
                  </div>
                  <div style={{ color: "#aaa", fontWeight: 600, fontSize: "1.1rem", marginBottom: "4px" }}>
                    {m.label}
                  </div>
                  <div style={{ color: "#888", fontSize: "0.95rem" }}>
                    {m.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — reason rows */}
          <div>
            {reasons.map((r, idx) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "28px 0",
                    borderBottom: idx < reasons.length - 1 ? "1px solid #1a1a1a" : "none",
                  }}
                >
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "8px",
                    border: "1px solid #222",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: "2px",
                  }}>
                    <Icon size={20} style={{ color: "#2d8a42" }} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ fontSize: "clamp(1rem, 1.5vw, 1.5rem)", color: "#aaa", fontWeight: 700, letterSpacing: "0.1em" }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 style={{ color: "white", fontWeight: 700, fontSize: "clamp(1.3rem, 2.2vw, 2rem)" }}>{r.title}</h3>
                    </div>
                    <p style={{ color: "#aaa", fontSize: "clamp(1rem, 1.8vw, 1.4rem)", lineHeight: 1.7 }}>{r.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
