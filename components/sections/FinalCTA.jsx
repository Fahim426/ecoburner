"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "917736880801";
const WHATSAPP_MSG = encodeURIComponent("Hello EcoBurner Team,\n\nI visited your website and would like to know more about your waste management and incinerator solutions.\n\nPlease contact me with further details.\n\nThank you.");

export default function FinalCTA() {
  return (
    <section
      id="cta"
      style={{
        padding: "80px 0",
        background: "#EEF6F1",
        borderTop: "1px solid #DDE8E3",
      }}
    >
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>
        <div className="cta-grid grid grid-cols-1 lg:grid-cols-[1fr_auto_440px] gap-12 lg:gap-[60px] items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "20px" }}>
              <span className="section-label">
                Get Started
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              color: "#0D1F1A",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}>
              Let&apos;s Solve Your<br />
              <span className="gradient-text">Waste Management Problem</span>
            </h2>
            <p style={{ color: "#4A6259", fontSize: "1.15rem", lineHeight: 1.8, maxWidth: "480px" }}>
              Whether you&apos;re dealing with increasing waste volumes, high disposal costs, or operational inefficiencies, our team is here to help. Share your challenges with us, and we&apos;ll develop a reliable, sustainable, and long-term waste management solution designed specifically for your facility or community.
            </p>
          </motion.div>

          {/* Middle — Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {[
              { title: "Customized Waste Solutions", desc: "Tailored to your specific site waste volume." },
              { title: "Trusted Technical Expertise", desc: "Built for optimal performance and safety standards." },
              { title: "Achieve Long-Term Results", desc: "High-durability materials engineered to last." },
              { title: "Long-Term Cost Savings", desc: "Drastically reduce recurring hauling charges." },
            ].map((point) => (
              <div key={point.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(26,122,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1A7A4A" }} />
                </div>
                <div>
                  <h3 style={{ color: "#0D1F1A", fontSize: "1.125rem", fontWeight: 700, marginBottom: "4px" }}>{point.title}</h3>
                  <p style={{ color: "#4A6259", fontSize: "1rem", lineHeight: 1.5 }}>{point.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — action panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              background: "#FFFFFF",
              border: "1px solid #DDE8E3",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(26,122,74,0.06)",
            }}
          >
            {/* Panel header */}
            <div style={{ padding: "24px 28px", borderBottom: "1px solid #DDE8E3" }}>
              <p style={{ color: "#0D1F1A", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Contact Options
              </p>
            </div>

            <div style={{ padding: "8px 0" }}>
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                id="final-whatsapp-cta"
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "20px 28px",
                  textDecoration: "none",
                  borderBottom: "1px solid #F4F7F5",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F4F7F5")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: "rgba(37,211,102,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <MessageCircle size={20} style={{ color: "#25D366" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#0D1F1A", fontWeight: 600, fontSize: "1.125rem", marginBottom: "2px" }}>WhatsApp</div>
                  <div style={{ color: "#4A6259", fontSize: "1rem" }}>Fastest response</div>
                </div>
                <ArrowRight size={16} style={{ color: "#8FA89F" }} />
              </a>

              {/* Call */}
              <a
                href="tel:+917736880801"
                id="final-call-cta"
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "20px 28px",
                  textDecoration: "none",
                  borderBottom: "1px solid #F4F7F5",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F4F7F5")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: "rgba(26,122,74,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Phone size={20} style={{ color: "#1A7A4A" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#0D1F1A", fontWeight: 600, fontSize: "1.125rem", marginBottom: "2px" }}>+91-77368-80801</div>
                  <div style={{ color: "#4A6259", fontSize: "1rem" }}>24 * 7 assistance</div>
                </div>
                <ArrowRight size={16} style={{ color: "#8FA89F" }} />
              </a>

              {/* Form */}
              <a
                href="/contact"
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "20px 28px",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F4F7F5")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: "rgba(26,122,74,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <ArrowRight size={20} style={{ color: "#1A7A4A" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#0D1F1A", fontWeight: 600, fontSize: "1.125rem", marginBottom: "2px" }}>Submit an Enquiry Form</div>
                  <div style={{ color: "#4A6259", fontSize: "1rem" }}>Response within 24 hours</div>
                </div>
                <ArrowRight size={16} style={{ color: "#8FA89F" }} />
              </a>
            </div>

            {/* Panel footer */}
            <div style={{ padding: "16px 28px", borderTop: "1px solid #DDE8E3", background: "#F4F7F5" }}>
              <p style={{ color: "#8FA89F", fontSize: "1rem", textAlign: "center" }}>
                Serving Across South India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
