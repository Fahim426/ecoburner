"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "917736880801";
const WHATSAPP_MSG = encodeURIComponent("Hi, I need a waste management solution");

export default function FinalCTA() {
  return (
    <section
      id="cta"
      style={{
        padding: "80px 0",
        background: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
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
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#2d8a42" }} />
              <span style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.2rem)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d8a42" }}>
                Get Started
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}>
              Speak to Our Team<br />
              <span style={{ color: "#2d8a42" }}>About Your Requirements</span>
            </h2>
            <p style={{ color: "#aaa", fontSize: "1.2rem", lineHeight: 1.8, maxWidth: "480px" }}>
              Tell us your waste type, daily volume, and site location.
              We will recommend the right system and provide a detailed,
              no-obligation quotation within 24 hours.
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
              { title: "Free Site Assessment", desc: "For institutional clients across South India." },
              { title: "Itemised Quotation", desc: "No hidden charges, full transparency." },
              { title: "CPCB-Compliant", desc: "Systems delivered with full regulatory documentation." },
            ].map((point) => (
              <div key={point.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(45,138,66,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2d8a42" }} />
                </div>
                <div>
                  <h3 style={{ color: "white", fontSize: "1.125rem", fontWeight: 700, marginBottom: "4px" }}>{point.title}</h3>
                  <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.5 }}>{point.desc}</p>
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
              background: "#0d0d0d",
              border: "1px solid #1e1e1e",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {/* Panel header */}
            <div style={{ padding: "24px 28px", borderBottom: "1px solid #1a1a1a" }}>
              <p style={{ color: "#aaa", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
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
                  borderBottom: "1px solid #141414",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#111")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: "rgba(37,211,102,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <MessageCircle size={20} style={{ color: "#25D366" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "1.125rem", marginBottom: "2px" }}>WhatsApp</div>
                  <div style={{ color: "#aaa", fontSize: "1rem" }}>Fastest response · Usually within 1 hour</div>
                </div>
                <ArrowRight size={16} style={{ color: "#aaa" }} />
              </a>

              {/* Call */}
              <a
                href="tel:+917736880801"
                id="final-call-cta"
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "20px 28px",
                  textDecoration: "none",
                  borderBottom: "1px solid #141414",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#111")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: "rgba(96,165,250,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Phone size={20} style={{ color: "#60a5fa" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "1.125rem", marginBottom: "2px" }}>+91-77368-80801</div>
                  <div style={{ color: "#aaa", fontSize: "1rem" }}>Mon – Sat, 9 AM – 6 PM</div>
                </div>
                <ArrowRight size={16} style={{ color: "#aaa" }} />
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
                onMouseEnter={(e) => (e.currentTarget.style.background = "#111")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: "rgba(45,138,66,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <ArrowRight size={20} style={{ color: "#2d8a42" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "1.125rem", marginBottom: "2px" }}>Submit an Enquiry Form</div>
                  <div style={{ color: "#aaa", fontSize: "1rem" }}>Response within 24 hours</div>
                </div>
                <ArrowRight size={16} style={{ color: "#aaa" }} />
              </a>
            </div>

            {/* Panel footer */}
            <div style={{ padding: "16px 28px", borderTop: "1px solid #1a1a1a", background: "#0a0a0a" }}>
              <p style={{ color: "#777", fontSize: "1rem", textAlign: "center" }}>
                Serving South India · Based in Kasaragod
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
