"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 62,
    suffix: "M+",
    unit: "Tonnes / Year",
    label: "Solid waste generated annually in India",
    source: "CPCB Annual Report",
  },
  {
    value: 80,
    suffix: "%",
    unit: "Untreated",
    label: "Of total waste remains scientifically unprocessed",
    source: "Ministry of Environment, India",
  },
  {
    value: 619,
    suffix: "T/Day",
    unit: "Biomedical",
    label: "Biomedical waste generated daily across Indian hospitals",
    source: "CPCB Bio-Medical Report",
  },
  {
    value: 10,
    suffix: "Lakh+",
    unit: "Fine / Closure",
    label: "Penalty range for non-compliant waste disposal units",
    source: "HWM Rules 2016 & BMWM Rules",
  },
];

export default function WasteCrisis() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="crisis"
      style={{
        padding: "80px 0",
        background: "#0c0c0c",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header — authoritative, not alarming */}
        <div className="header-grid grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[64px] items-center" style={{
          marginBottom: "64px",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(200,184,74,0.08)",
              border: "1px solid rgba(200,184,74,0.2)",
              borderRadius: "4px",
              padding: "6px 14px",
              marginBottom: "20px",
            }}>
              <span style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.2rem)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c8b84a" }}>
                Industry Data
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.25,
              marginBottom: "16px",
              letterSpacing: "-0.01em",
            }}>
              India&apos;s Waste Management<br />
              <span style={{ color: "#c8b84a" }}>Gap Is a Business Risk</span>
            </h2>
            <p style={{ color: "#aaa", fontSize: "1.125rem", lineHeight: 1.8, maxWidth: "420px" }}>
              Regulatory pressure from CPCB, KSPCB, and State Pollution Control
              Boards is intensifying. Non-compliant organisations face closures,
              fines, and reputational damage.
            </p>
          </motion.div>

          {/* Right — compliance note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              background: "#111",
              border: "1px solid #1e1e1e",
              borderLeft: "3px solid #2d8a42",
              borderRadius: "8px",
              padding: "28px 32px",
            }}
          >
            <p style={{ color: "#888", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Applicable Regulations
            </p>
            {[
              "Bio-Medical Waste Management Rules, 2016",
              "Hazardous & Other Wastes (Management) Rules, 2016",
              "Solid Waste Management Rules, 2016",
              "Kerala State PCB Guidelines — KSPCB",
            ].map((rule) => (
              <div key={rule} style={{
                display: "flex", alignItems: "flex-start", gap: "10px",
                marginBottom: "12px",
              }}>
                <div style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#2d8a42", flexShrink: 0, marginTop: "6px",
                }} />
                <span style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.5 }}>{rule}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats — clean data table style */}
        <div
          className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          ref={ref}
          style={{
            borderTop: "1px solid #1e1e1e",
            borderLeft: "1px solid #1e1e1e",
          }}
        >
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{
                padding: "32px 28px",
                borderRight: "1px solid #1e1e1e",
                borderBottom: "1px solid #1e1e1e",
                background: "#0e0e0e",
                transition: "background 0.3s",
                cursor: "default",
              }}
              whileHover={{ backgroundColor: "#121212" }}
            >
              {/* Unit tag */}
              <div style={{
                display: "inline-block",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "12px",
              }}>
                {s.unit}
              </div>

              {/* Big number */}
              <div style={{
                fontSize: "2.6rem",
                fontWeight: 900,
                color: "white",
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: "0.03em",
                lineHeight: 1,
                marginBottom: "12px",
              }}>
                {inView ? (
                  <CountUp
                    start={0}
                    end={s.value}
                    duration={2}
                    suffix={s.suffix}
                    delay={idx * 0.1}
                    separator=","
                  />
                ) : `0${s.suffix}`}
              </div>

              {/* Label */}
              <p style={{
                color: "#aaa",
                fontSize: "1rem",
                lineHeight: 1.5,
                marginBottom: "16px",
              }}>
                {s.label}
              </p>

              {/* Source */}
              <div style={{
                fontSize: "0.875rem",
                color: "#888",
                letterSpacing: "0.05em",
              }}>
                Source: {s.source}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .header-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
