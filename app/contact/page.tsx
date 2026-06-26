"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2,
  Clock, ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "917736880801";
const WHATSAPP_MSG = encodeURIComponent("Hello EcoBurner Team,\n\nI visited your website and would like to know more about your waste management and incinerator solutions.\n\nPlease contact me with further details.\n\nThank you.");

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid #DDE8E3",
  borderRadius: "8px",
  padding: "16px 18px",
  color: "#0D1F1A",
  fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
  outline: "none",
  transition: "all 0.2s ease",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#4A6259",
  fontSize: "clamp(0.85rem, 1vw, 1rem)",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "8px",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", product: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // 👉 IMPORTANT: PASTE YOUR WEB3FORMS ACCESS KEY BELOW
          access_key: "YOUR_ACCESS_KEY_HERE", 
          subject: "New B2B Enquiry from EcoBurner Website",
          from_name: "EcoBurner Web Portal",
          name: form.name,
          company: form.company,
          phone: form.phone,
          email: form.email,
          product: form.product,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong! Please use WhatsApp instead.");
      }
    } catch (error) {
      alert("Network error! Please use WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === field ? "#1A7A4A" : "#DDE8E3",
    boxShadow: focused === field ? "0 0 0 3px rgba(26,122,74,0.1)" : "none",
  });

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", paddingTop: "72px" }}>

      {/* ── HERO BANNER ── */}
      <section className="hero-section" style={{
        padding: "72px 5vw 64px",
        background: "linear-gradient(135deg, #EEF6F1 0%, #FFFFFF 100%)",
        borderBottom: "1px solid #DDE8E3",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* radial glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(26,122,74,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "20px" }}>
              <span className="section-label">Get in Touch</span>
            </div>
            <h1 style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 900,
              color: "#0D1F1A",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}>
              Request a <span className="gradient-text">Free Consultation</span>
            </h1>
            <p style={{ color: "#4A6259", fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)", lineHeight: 1.8, maxWidth: "700px" }}>
              Tell us your waste type, volume, and location. Our team will respond
              within <strong style={{ color: "#0D1F1A" }}>24 hours</strong> with a
              tailored recommendation and quote — no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="main-content" style={{ padding: "72px 5vw", width: "100%" }}>
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 lg:gap-[6vw] items-start" style={{
          maxWidth: "100%",
        }}>

          {/* ── LEFT: FORM ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {submitted ? (
              /* Success state */
              <div style={{
                background: "#EEF6F1",
                border: "1px solid #1A7A4A",
                borderRadius: "16px",
                padding: "64px 40px",
                textAlign: "center",
              }}>
                <div style={{
                  width: "72px", height: "72px", borderRadius: "50%",
                  background: "rgba(26,122,74,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px",
                }}>
                  <CheckCircle2 size={36} style={{ color: "#1A7A4A" }} />
                </div>
                <h2 style={{ color: "#0D1F1A", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 800, marginBottom: "12px" }}>
                  Enquiry Received
                </h2>
                <p style={{ color: "#4A6259", fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)", lineHeight: 1.7, marginBottom: "32px" }}>
                  Thank you. Our team will review your requirements and get back to you
                  within 24 hours. For urgent inquiries, reach us directly on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: "14px 28px", fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)" }}
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{
                  color: "#0D1F1A", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 800,
                  marginBottom: "8px",
                }}>
                  Send Us a Message
                </h2>
                <p style={{ color: "#8FA89F", fontSize: "clamp(0.85rem, 1vw, 1rem)", marginBottom: "36px" }}>
                  All fields marked <span style={{ color: "#e53e3e" }}>*</span> are required
                </p>

                {/* Row 1: Name + Company */}
                <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={labelStyle}>
                      Full Name <span style={{ color: "#e53e3e" }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="Your full name"
                      style={focusStyle("name")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Commercial/Residential</label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                      placeholder="Apartment, hotel, industry, etc."
                      style={focusStyle("company")}
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Email */}
                <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={labelStyle}>
                      Phone <span style={{ color: "#e53e3e" }}>*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      style={focusStyle("phone")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="you@company.com"
                      style={focusStyle("email")}
                    />
                  </div>
                </div>

                {/* Product of Interest */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>
                    Product of Interest <span style={{ color: "#e53e3e" }}>*</span>
                  </label>
                  <select
                    id="contact-product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    onFocus={() => setFocused("product")}
                    onBlur={() => setFocused(null)}
                    required
                    style={{ ...focusStyle("product"), cursor: "pointer" }}
                  >
                    <option value="">Select a product...</option>
                    <option>Stainless Steel Incinerator Plant - Residential</option>
                    <option>Stainless Steel Incinerator Plant - Commercial</option>
                    <option>Smokeless Incinerator</option>
                    <option>FRP Biogas Plant</option>
                    <option>Eco-Bin – Food Waste Compost Machine</option>
                    <option>Oil Grease Trap</option>
                    <option>STP Plant</option>
                    <option>Sanitary Pad Disposal</option>
                    <option>Food Waste Disposal</option>
                    <option>Not sure – need advice</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "32px" }}>
                  <label style={labelStyle}>Requirements / Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={5}
                    placeholder="Describe your waste volume, site location, or any specific requirements..."
                    style={{
                      ...focusStyle("message"),
                      resize: "none",
                      lineHeight: 1.7,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "16px",
                    fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{
                        width: "16px", height: "16px",
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "white",
                        borderRadius: "50%",
                        display: "inline-block",
                        animation: "spin 0.8s linear infinite",
                      }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── RIGHT: CONTACT INFO ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Contact methods */}
            <div style={{
              background: "#FFFFFF",
              border: "1px solid #DDE8E3",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(26,122,74,0.03)",
            }}>
              <div style={{ padding: "24px 24px 20px", borderBottom: "1px solid #DDE8E3" }}>
                <h3 style={{ color: "#0D1F1A", fontWeight: 700, fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}>
                  Reach Us Directly
                </h3>
              </div>
              <div style={{ padding: "8px 0" }}>
                {[
                  {
                    icon: Phone,
                    label: "Call Us",
                    value: "+91-77368-80801",
                    sub: "24 x 7 assistance",
                    href: "tel:+917736880801",
                    color: "#1A7A4A",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "Chat Instantly",
                    sub: "Fastest response",
                    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
                    color: "#25D366",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@ecoburner.in",
                    sub: "Reply within 24 hours",
                    href: "mailto:info@ecoburner.in",
                    color: "#1A7A4A",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "South India",
                    sub: "Serving Across South India",
                    href: "https://maps.google.com/?q=Kerala,India",
                    color: "#1A7A4A",
                  },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "16px 24px",
                        textDecoration: "none",
                        borderBottom: "1px solid #F4F7F5",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#F4F7F5")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      <div style={{
                        width: "40px", height: "40px", borderRadius: "10px",
                        background: c.label === "WhatsApp" ? "rgba(37,211,102,0.12)" : "rgba(26,122,74,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Icon size={18} style={{ color: c.color }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ color: "#8FA89F", fontSize: "clamp(0.85rem, 1vw, 1rem)", marginBottom: "4px" }}>{c.label}</div>
                        <div style={{ color: "#0D1F1A", fontWeight: 600, fontSize: "clamp(1rem, 1.2vw, 1.2rem)", marginBottom: "2px" }}>{c.value}</div>
                        <div style={{ color: "#4A6259", fontSize: "clamp(0.85rem, 1vw, 1rem)" }}>{c.sub}</div>
                      </div>
                      <ArrowRight size={14} style={{ color: "#8FA89F", flexShrink: 0 }} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #DDE8E3",
              height: "220px",
              background: "#F4F7F5",
            }}>
              <iframe
                title="ECOBURNER Location - South India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.8!2d74.9869!3d12.4996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4d30bfb96d431%3A0x7e4a1e9c2b0aee6b!2sKasaragod%2C%20Kerala!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp shortcut */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-cta"
              className="btn-whatsapp"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "16px",
                fontSize: "0.92rem",
                borderRadius: "10px",
              }}
            >
              <MessageCircle size={19} />
              Prefer WhatsApp? Chat Directly
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder, select { color: #8FA89F; }
        
        @media (max-width: 768px) {
          .contact-grid { 
            grid-template-columns: 1fr !important; 
            gap: 40px !important;
          }
          .form-row { 
            grid-template-columns: 1fr !important; 
            gap: 20px !important;
          }
          .hero-section {
            padding: 48px 1.2rem !important;
          }
          .trust-strip {
            gap: 16px !important;
            padding: 16px 1.2rem !important;
            justify-content: flex-start !important;
          }
          .main-content {
            padding: 48px 1.2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
