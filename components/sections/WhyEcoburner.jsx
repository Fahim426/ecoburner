"use client";

import { motion } from "framer-motion";
import { Award, Wrench, DollarSign, Headphones, Flame } from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const reasons = [
  {
    icon: Award,
    title: "Safety & Performance First",
    desc: "Whether managing daily residential waste or high-volume commercial and industrial waste streams, ECOBURNER provides solutions designed for performance, safety, and long-term value.",
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
    desc: "We provide complete installation, operator training, annual maintenance contracts, and genuine spare parts management from our South India base.",
  },
  {
    icon: Flame,
    title: "Smokeless Incineration Technology",
    desc: "A smokeless incinerator is used to safely dispose of waste at ultra-high temperatures while preventing smoke, odors, and toxic emissions from entering the atmosphere. By using multi-stage combustion chambers, these devices burn municipal, industrial, or medical waste, reducing its original solid volume by up to 95%.",
  },
];

export default function WhyEcoburner() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="why-ecoburner" style={{ padding: "80px 0", background: "#1A7A4A", borderTop: "1px solid #DDE8E3", borderBottom: "1px solid #DDE8E3" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-[100px] items-start">

          {/* Left — sticky summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "20px" }}>
              <span className="section-label" style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}>
                Why ECOBURNER
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}>
              Built for Industrial<br />Procurement Standards
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "40px" }}>
              South India&apos;s hospitals, factories, and municipalities choose ECOBURNER
              because we combine engineering rigour with reliable service commitments.
            </p>

            {/* Metrics */}
            <div 
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              style={{
                marginTop: "24px",
              }}
            >
              {[
                { value: 5000, suffix: "+", label: "Installations", sub: "Across South India" },
                { value: 7, suffix: "+", label: "Years Active", sub: "Based in South India" },
                { value: 95, suffix: "%", label: "Volume Reduction", sub: "Through clean combustion" },
                { value: 24, suffix: "/7", label: "Support", sub: "Dedicated Service Team" },
              ].map((m, idx) => (
                <motion.div 
                  key={m.label} 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  style={{ 
                    padding: "24px", 
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    position: "relative",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: "3px", background: "#FFFFFF", transition: "height 1s ease 0.5s", height: inView ? "100%" : "0%" }} />
                  
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
                  <div style={{ color: "white", fontWeight: 600, fontSize: "1.1rem", marginBottom: "4px" }}>
                    {m.label}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>
                    {m.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — reason cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                    gap: "20px",
                    padding: "24px 28px",
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={20} style={{ color: "#FFFFFF" }} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                      <span style={{
                        background: "rgba(255,255,255,0.15)",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        borderRadius: "6px",
                        padding: "2px 8px",
                        fontSize: "0.85rem",
                      }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 style={{ color: "white", fontWeight: 700, fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)" }}>{r.title}</h3>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.7 }}>{r.desc}</p>
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
