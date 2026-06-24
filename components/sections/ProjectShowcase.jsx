"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const installations = [
  {
    image: "/images/product-ss-incinerator.jpg",
    title: "Stainless Steel Incinerator Plant",
    location: "South India",
    type: "Incineration",
  },
  {
    image: "/images/product-frp-biogas.png",
    title: "FRP Biogas Plant",
    location: "South India",
    type: "Green Energy",
  },
  {
    image: "/images/product-ecobin.jpg",
    title: "Eco-Bin Compost Machine",
    location: "South India",
    type: "Composting",
  },

];

export default function ProjectShowcase() {
  return (
    <section id="installations" style={{ padding: "80px 0", background: "#FFFFFF", borderTop: "1px solid #DDE8E3", borderBottom: "1px solid #DDE8E3" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: "32px", flexWrap: "wrap",
          marginBottom: "48px", paddingBottom: "40px", borderBottom: "1px solid #DDE8E3",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "16px" }}>
              <span className="section-label">
                Product Range
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#0D1F1A", lineHeight: 1.2, letterSpacing: "-0.01em",
            }}>
              What We Manufacture
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ color: "#4A6259", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "420px" }}
          >
            Each unit is fabricated at our facility and delivered fully documented
            for regulatory compliance.
          </motion.p>
        </div>

        {/* Photo grid — 2×2 large */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[24px]">
          {installations.map((inst, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 24px rgba(26,122,74,0.10)",
                borderColor: "#1A7A4A",
              }}
              style={{
                background: "#FFFFFF",
                border: "1px solid #DDE8E3",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(26,122,74,0.04)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <Image
                  src={inst.image}
                  alt={inst.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 590px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.6s ease",
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "32px", borderTop: "1px solid #DDE8E3" }}>
                <div style={{ marginBottom: "12px" }}>
                  <span style={{
                    display: "inline-block",
                    background: "#D4EDDA",
                    color: "#1A7A4A",
                    fontSize: "11px",
                    fontWeight: 600,
                    borderRadius: "20px",
                    padding: "3px 10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    {inst.type}
                  </span>
                </div>
                <h3 style={{ color: "#0D1F1A", fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.3 }}>
                  {inst.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
