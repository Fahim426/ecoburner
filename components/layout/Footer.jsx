"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917736880801";
const WHATSAPP_MSG = encodeURIComponent("Hello EcoBurner Team,\n\nI visited your website and would like to know more about your waste management and incinerator solutions.\n\nPlease contact me with further details.\n\nThank you.");

export default function Footer() {
  return (
    <footer style={{ background: "#F4F7F5", borderTop: "1px solid #DDE8E3" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "40px 5vw 64px" }}>
        {/* Top-Right Social Links */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a
              href="https://www.instagram.com/ecoburner_incinerators?igsh=ZGt5NHhteHN4aWhr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid #DDE8E3",
                color: "#4A6259",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e1306c";
                e.currentTarget.style.borderColor = "#e1306c";
                e.currentTarget.style.background = "rgba(225, 48, 108, 0.08)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#4A6259";
                e.currentTarget.style.borderColor = "#DDE8E3";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "none";
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/61560497408401/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid #DDE8E3",
                color: "#4A6259",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#1877f2";
                e.currentTarget.style.borderColor = "#1877f2";
                e.currentTarget.style.background = "rgba(24, 119, 242, 0.08)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#4A6259";
                e.currentTarget.style.borderColor = "#DDE8E3";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "none";
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ position: "relative", width: "44px", height: "44px", flexShrink: 0 }}>
                <Image src="/images/logo.png" alt="ECOBURNER" fill sizes="44px" style={{ objectFit: "contain", objectPosition: "left" }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "1.3rem", letterSpacing: "0.08em", lineHeight: 1 }}>
                  <span style={{ color: "#1A7A4A" }}>ECO</span>
                  <span style={{ color: "#0D1F1A" }}>BURNER</span>
                </div>
                <div style={{ fontSize: "0.6rem", color: "#8FA89F", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Waste Management Solutions
                </div>
              </div>
            </div>
            <p style={{ color: "#4A6259", fontSize: "1rem", lineHeight: 1.7 }}>
              ECOBURNER Waste Management Solutions Pvt. Ltd. delivers innovative and environmentally responsible waste management systems designed for hospitals, industries, institutions, commercial establishments, and municipalities. With a focus on sustainability and operational excellence, we help organizations manage waste safely and efficiently while contributing to a cleaner, healthier, and more sustainable future for communities and the environment.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 style={{ color: "#0D1F1A", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px" }}>
              Products
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Stainless Steel Incinerator Plant - Residential", slug: "ss-incinerator-plant-residential" },
                { label: "Stainless Steel Incinerator Plant - Commercial", slug: "ss-incinerator-plant-commercial" },
                { label: "Smokeless Incinerator", slug: "smokeless-incinerator" },
                { label: "FRP Biogas Plant", slug: "frp-biogas-plant" },
                { label: "Eco-Bin Compost Machine", slug: "eco-bin" },
                { label: "Oil Grease Trap", slug: "oil-grease-trap" },
                { label: "STP Plant", slug: "stp-plant" },
                { label: "Sanitary Pad Disposal", slug: "sanitary-pad-disposal" },
                { label: "Food Waste Disposal", slug: "food-waste-disposal" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={`/#products?select=${l.slug}`}
                    scroll={false}
                    onClick={(e) => {
                      if (window.location.pathname === "/") {
                        e.preventDefault();
                        window.history.pushState(null, "", `/#products?select=${l.slug}`);
                        const event = new CustomEvent("select-product", { detail: l.slug });
                        window.dispatchEvent(event);
                      }
                    }}
                    style={{ color: "#4A6259", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1A7A4A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4A6259")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: "#0D1F1A", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px" }}>
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
                    style={{ color: "#4A6259", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1A7A4A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4A6259")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#0D1F1A", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px" }}>
              Contact
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={15} style={{ color: "#1A7A4A", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "#4A6259", fontSize: "1rem", lineHeight: 1.6 }}>Kerala | Karnataka | Tamil Nadu</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={15} style={{ color: "#1A7A4A", flexShrink: 0 }} />
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <a href="tel:+917736880801" style={{ color: "#4A6259", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1A7A4A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4A6259")}>
                    +91-77368-80801
                  </a>
                  <span style={{ color: "#4A6259" }}>|</span>
                  <a href="tel:+919567094916" style={{ color: "#4A6259", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1A7A4A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4A6259")}>
                    +91-95670-94916
                  </a>
                </div>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={15} style={{ color: "#1A7A4A", flexShrink: 0 }} />
                <a href="mailto:info@ecoburner.in" style={{ color: "#4A6259", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1A7A4A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4A6259")}>
                  info@ecoburner.in
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MessageCircle size={15} style={{ color: "#1A7A4A", flexShrink: 0 }} />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
                  style={{ color: "#4A6259", fontSize: "1rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1A7A4A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4A6259")}>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #DDE8E3", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <p style={{ color: "#8FA89F", fontSize: "1rem" }}>
            © {new Date().getFullYear()} ECOBURNER WASTE MANAGEMENT SOLUTIONS PVT LTD. All rights reserved.
          </p>
          <p style={{ color: "#8FA89F", fontSize: "1rem" }}>
            South India · GST Registered · ISO Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
