"use client";

import { motion } from "framer-motion";
import { Wind, Droplets, Scale, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    desc: "Systems engineered to meet Bio-Medical Waste Management Rules 2016 and Hazardous Waste Rules 2016 — keeping you audit-ready with CPCB and KSPCB.",
  },
  {
    icon: Scale,
    title: "Legal Risk Elimination",
    desc: "Non-compliance carries penalties up to ₹10 lakh and facility closures. Proper incineration removes your organisation's legal exposure at the source.",
  },
  {
    icon: Droplets,
    title: "Groundwater Protection",
    desc: "Uncontrolled waste leaches toxins into soil and water tables. Contained incineration eliminates liquid effluent risk before it becomes a liability.",
  },
  {
    icon: Wind,
    title: "Emission Control",
    desc: "Secondary combustion chambers and gas scrubbing systems ensure particulate matter and dioxin levels remain well within permissible CPCB emission limits.",
  },
];

export default function ComplianceBenefits() {
  return (
    <section id="compliance" style={{ padding: "80px 0", background: "#0a0a0a" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header row */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          marginBottom: "56px",
          paddingBottom: "40px",
          borderBottom: "1px solid #1a1a1a",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "2px", background: "#2d8a42" }} />
              <span style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.2rem)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d8a42" }}>
                Why It Matters
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              marginBottom: "16px",
            }}>
              The Case for Proper<br />Waste Management
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ color: "#aaa", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "380px" }}
          >
            Beyond compliance — systematic waste disposal protects your people,
            your community, and your organisation&apos;s operating licence.
          </motion.p>
        </div>

        {/* Benefits — 4-col grid with shared border */}
        <div id="compliance-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{
          borderTop: "1px solid #1a1a1a",
          borderLeft: "1px solid #1a1a1a",
        }}>
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                style={{
                  padding: "36px 28px",
                  borderRight: "1px solid #1a1a1a",
                  borderBottom: "1px solid #1a1a1a",
                  position: "relative",
                  background: "#0a0a0a",
                  transition: "background 0.3s",
                }}
                whileHover={{ backgroundColor: "#0d0d0d" }}
              >
                {/* Step number — decorative */}
                <div style={{
                  position: "absolute", top: "20px", right: "20px",
                  fontSize: "2rem", fontWeight: 900, color: "#141414",
                  fontFamily: "'Bebas Neue', cursive", lineHeight: 1,
                  userSelect: "none",
                }}>
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div style={{
                  width: "40px", height: "40px", borderRadius: "8px",
                  background: "rgba(45,138,66,0.08)",
                  border: "1px solid rgba(45,138,66,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  <Icon size={18} style={{ color: "#2d8a42" }} />
                </div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.125rem", marginBottom: "10px", lineHeight: 1.3 }}>
                  {b.title}
                </h3>
                <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.75 }}>{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
