"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917736880801";
const WHATSAPP_MSG = encodeURIComponent("Hi, I need a waste management solution");

export default function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "64px 5vw" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ position: "relative", width: "44px", height: "44px", flexShrink: 0 }}>
                <Image src="/images/logo.jpeg" alt="ECOBURNER" fill sizes="44px" style={{ objectFit: "contain", objectPosition: "left" }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "1.3rem", letterSpacing: "0.08em", lineHeight: 1 }}>
                  <span style={{ color: "#2d8a42" }}>ECO</span>
                  <span style={{ color: "#c8b84a" }}>BURNER</span>
                </div>
                <div style={{ fontSize: "0.6rem", color: "#666", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Waste Management Solutions
                </div>
              </div>
            </div>
            <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.7 }}>
              Industrial-grade waste management solutions for South India&apos;s hospitals,
              factories, and municipalities. Compliance-ready. Environment-safe.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px" }}>
              Products
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "SS Incinerator Plant", href: "/#products" },
                { label: "FRP Biogas Plant", href: "/#products" },
                { label: "Eco-Bin Compost Machine", href: "/#products" },
                { label: "Napkin Burning Incinerator", href: "/#products" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{ color: "#555", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#2d8a42")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px" }}>
              Company
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "About Us", href: "/#why-ecoburner" },
                { label: "Installations", href: "/#installations" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{ color: "#555", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#2d8a42")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px" }}>
              Contact
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={15} style={{ color: "#2d8a42", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "#555", fontSize: "1rem", lineHeight: 1.6 }}>Kasaragod, Kerala, India — 671 121</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={15} style={{ color: "#2d8a42", flexShrink: 0 }} />
                <a href="tel:+917736880801" style={{ color: "#555", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#2d8a42")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}>
                  +91-77368-80801
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={15} style={{ color: "#2d8a42", flexShrink: 0 }} />
                <a href="mailto:ecoburnerinc@gmail.com" style={{ color: "#555", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#2d8a42")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}>
                  ecoburnerinc@gmail.com
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MessageCircle size={15} style={{ color: "#2d8a42", flexShrink: 0 }} />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
                  style={{ color: "#555", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#2d8a42")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #1a1a1a", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <p style={{ color: "#444", fontSize: "1rem" }}>
            © {new Date().getFullYear()} ECOBURNER WASTE MANAGEMENT SOLUTIONS PVT LTD. All rights reserved.
          </p>
          <p style={{ color: "#444", fontSize: "1rem" }}>
            Kasaragod, Kerala, India · GST Registered · ISO Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
