"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const metrics = [
  { value: 5000, suffix: "+", label: "Installations Completed", sub: "Across South India" },
  { value: 500, suffix: "+", label: "Tonnes Processed Annually", sub: "Across all client sites" },
  { value: 25, suffix: "+", label: "Industry Sectors Served", sub: "Apartments · Industrial · Commercial" },
  { value: 7, suffix: "+", label: "Years of Operation", sub: "Based in South India" },
];

export default function ImpactMetrics() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="impact" style={{
      padding: "80px 0",
      background: "#FFFFFF",
      borderTop: "1px solid #DDE8E3",
      borderBottom: "1px solid #DDE8E3",
    }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header */}
        <div style={{ marginBottom: "56px", paddingBottom: "40px", borderBottom: "1px solid #DDE8E3" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}
          >
            <div>
              <div style={{ marginBottom: "16px" }}>
                <span className="section-label">
                  Company Scale
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 800, color: "#0D1F1A", lineHeight: 1.2, letterSpacing: "-0.01em",
              }}>
                ECOBURNER at a Glance
              </h2>
            </div>
            <p style={{ color: "#4A6259", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "360px" }}>
              A decade of field experience across South India&apos;s healthcare,
              manufacturing, and municipal sectors.
            </p>
          </motion.div>
        </div>

        {/* Metrics — clean data cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              style={{
                padding: "36px 28px",
                border: "1px solid #DDE8E3",
                borderRadius: "12px",
                background: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(26,122,74,0.04)",
                transition: "all 0.3s ease",
              }}
              whileHover={{ translateY: -4, boxShadow: "0 8px 24px rgba(26,122,74,0.08)", borderColor: "#1A7A4A" }}
            >
              <div style={{
                fontSize: "3rem",
                fontWeight: 900,
                color: "#1A7A4A",
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: "0.03em",
                lineHeight: 1,
                marginBottom: "10px",
              }}>
                {inView ? (
                  <CountUp start={0} end={m.value} duration={2} suffix={m.suffix} delay={idx * 0.1} separator="," />
                ) : `0${m.suffix}`}
              </div>
              <div style={{ color: "#0D1F1A", fontWeight: 600, fontSize: "1rem", marginBottom: "4px" }}>
                {m.label}
              </div>
              <div style={{ color: "#8FA89F", fontSize: "1rem" }}>{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
