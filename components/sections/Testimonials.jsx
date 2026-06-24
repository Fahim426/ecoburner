"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "80px 0", background: "#F4F7F5", borderTop: "1px solid #DDE8E3", borderBottom: "1px solid #DDE8E3" }}>
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
                Client Feedback
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#0D1F1A", lineHeight: 1.2, letterSpacing: "-0.01em",
            }}>
              Trusted by Facilities<br /><span className="gradient-text">Across South India</span>
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
