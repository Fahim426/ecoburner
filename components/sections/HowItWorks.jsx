"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Site Assessment",
    desc: "We evaluate your waste type, daily volume, site dimensions, and regulatory requirements before specifying any equipment.",
  },
  {
    number: "02",
    title: "System Selection & Quotation",
    desc: "Based on assessment, we recommend the appropriate incinerator or biogas system with a detailed, itemised quotation.",
  },
  {
    number: "03",
    title: "Manufacture & Delivery",
    desc: "All units are fabricated at our facility, inspected against quality standards, and delivered to your site with full documentation.",
  },
  {
    number: "04",
    title: "Installation & Commissioning",
    desc: "Our technical team handles full installation, trial runs, and operator training to ensure your team can run the system confidently.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    desc: "Annual maintenance contracts, spare parts availability, and direct access to our service team — throughout the equipment lifecycle.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" style={{ padding: "80px 0", background: "#FFFFFF", borderTop: "1px solid #DDE8E3" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: "32px", flexWrap: "wrap",
          marginBottom: "56px", paddingBottom: "40px", borderBottom: "1px solid #DDE8E3",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "16px" }}>
              <span className="section-label">
                Our Process
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#0D1F1A", lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}>
              From Enquiry to<br />Commissioned System
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ color: "#4A6259", fontSize: "1.25rem", lineHeight: 1.8, maxWidth: "420px" }}
          >
            A structured 5-step process ensures every installation is correct, compliant,
            and your team is fully equipped to operate it.
          </motion.p>
        </div>

        {/* Steps — horizontal timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-0 relative">
          {/* Connector line */}
          <div style={{
            position: "absolute",
            top: "22px", left: "10%", right: "10%",
            height: "1px", background: "#DDE8E3",
            zIndex: 0,
          }} />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{ padding: "0 16px 0 0", position: "relative", zIndex: 1 }}
            >
              {/* Step dot */}
              <div style={{
                display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: idx === 0 ? "#EEF6F1" : "#FFFFFF",
                  border: `1px solid ${idx === 0 ? "#1A7A4A" : "#DDE8E3"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(26,122,74,0.04)",
                }}>
                  <span style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "0.05em",
                    color: idx === 0 ? "#1A7A4A" : "#4A6259",
                  }}>
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 style={{ color: "#0D1F1A", fontWeight: 700, fontSize: "clamp(1.2rem, 2vw, 1.8rem)", marginBottom: "10px", lineHeight: 1.3 }}>
                {step.title}
              </h3>
              <p style={{ color: "#4A6259", fontSize: "clamp(1rem, 1.8vw, 1.4rem)", lineHeight: 1.7 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
