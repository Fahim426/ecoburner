"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "80px 0", background: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: "32px", flexWrap: "wrap",
          marginBottom: "56px", paddingBottom: "40px", borderBottom: "1px solid #1a1a1a",
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
                Client Feedback
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.01em",
            }}>
              Trusted by Facilities<br />Across South India
            </h2>
          </motion.div>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ width: "100%", minHeight: "300px" }}
        >
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-f7e0c7fb-88cc-4a49-ae70-b21a000ef8f1" data-elfsight-app-lazy></div>
        </motion.div>
        
      </div>
    </section>
  );
}
