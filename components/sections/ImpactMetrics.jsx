"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const metrics = [
  { value: 50, suffix: "+", label: "Installations Completed", sub: "Across South India" },
  { value: 500, suffix: "+", label: "Tonnes Processed Annually", sub: "Across all client sites" },
  { value: 25, suffix: "+", label: "Industry Sectors Served", sub: "Healthcare · Industrial · Municipal" },
  { value: 2, suffix: "+", label: "Years of Operation", sub: "Based in Kasaragod, South India" },
];

export default function ImpactMetrics() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="impact" style={{
      padding: "80px 0",
      background: "#0c0c0c",
      borderTop: "1px solid #1a1a1a",
      borderBottom: "1px solid #1a1a1a",
    }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header */}
        <div style={{ marginBottom: "56px", paddingBottom: "40px", borderBottom: "1px solid #1a1a1a" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "2px", background: "#2d8a42" }} />
                <span style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.2rem)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d8a42" }}>
                  Company Scale
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.01em",
              }}>
                ECOBURNER at a Glance
              </h2>
            </div>
            <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "360px" }}>
              A decade of field experience across South India&apos;s healthcare,
              manufacturing, and municipal sectors.
            </p>
          </motion.div>
        </div>

        {/* Metrics — clean data row */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            borderTop: "1px solid #1e1e1e",
            borderLeft: "1px solid #1e1e1e",
          }}
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
                borderRight: "1px solid #1e1e1e",
                borderBottom: "1px solid #1e1e1e",
                background: "#0c0c0c",
              }}
            >
              <div style={{
                fontSize: "3rem",
                fontWeight: 900,
                color: "white",
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: "0.03em",
                lineHeight: 1,
                marginBottom: "10px",
              }}>
                {inView ? (
                  <CountUp start={0} end={m.value} duration={2} suffix={m.suffix} delay={idx * 0.1} separator="," />
                ) : `0${m.suffix}`}
              </div>
              <div style={{ color: "#aaa", fontWeight: 600, fontSize: "1rem", marginBottom: "4px" }}>
                {m.label}
              </div>
              <div style={{ color: "#444", fontSize: "1rem" }}>{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
