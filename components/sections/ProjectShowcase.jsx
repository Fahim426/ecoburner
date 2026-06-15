"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const installations = [
  {
    image: "/images/product-ss-incinerator.jpg",
    title: "SS Incinerator Plant",
    location: "Kasaragod, Kerala",
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
  {
    image: "/images/product-napkin.jpg",
    title: "Napkin Burning Incinerator",
    location: "South India",
    type: "Healthcare",
  },
];

export default function ProjectShowcase() {
  return (
    <section id="installations" style={{ padding: "80px 0", background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: "32px", flexWrap: "wrap",
          marginBottom: "48px", paddingBottom: "40px", borderBottom: "1px solid #1a1a1a",
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
                Product Range
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.01em",
            }}>
              What We Manufacture
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "420px" }}
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
                y: -12,
                scale: 1.02,
                boxShadow: "0 24px 56px rgba(0,0,0,0.6), 0 0 32px rgba(45,138,66,0.15)",
              }}
              style={{
                background: "#0e0e0e",
                border: "1px solid #1e1e1e",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.4s ease",
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
              <div style={{ padding: "32px", borderTop: "1px solid #1a1a1a" }}>
                <span style={{
                  display: "inline-block",
                  fontSize: "1rem", fontWeight: 700,
                  color: "#2d8a42", letterSpacing: "0.1em", textTransform: "uppercase",
                  marginBottom: "6px",
                }}>
                  {inst.type}
                </span>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.3 }}>
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
