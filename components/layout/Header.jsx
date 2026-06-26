"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "About", href: "/#why-ecoburner" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isDarkHeroPage = pathname?.startsWith("/solutions/");
  const isTransparent = !scrolled && isDarkHeroPage;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: isTransparent ? "transparent" : "rgba(255, 255, 255, 0.95)",
        borderBottom: isTransparent ? "none" : "1px solid #DDE8E3",
        boxShadow: isTransparent ? "none" : "0 4px 20px rgba(26,122,74,0.08)",
        backdropFilter: isTransparent ? "none" : "blur(8px)",
      }}
    >
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90px",
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{ position: "relative", width: "48px", height: "48px", flexShrink: 0 }}>
              <Image src="/images/logo.png" alt="ECOBURNER Logo" fill style={{ objectFit: "contain", objectPosition: "left" }} priority />
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "2rem", letterSpacing: "0.08em", lineHeight: 1 }}>
                <span style={{ color: isTransparent && isDarkHeroPage ? "#FFFFFF" : "#1A7A4A" }}>ECO</span>
                <span style={{ color: "#c8b84a" }}>BURNER</span>
              </div>
              <div style={{
                fontSize: "0.85rem",
                color: isTransparent && isDarkHeroPage ? "rgba(255,255,255,0.7)" : "#4A6259",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                lineHeight: 1.2,
                marginTop: "4px"
              }}>
                Waste Management Solutions
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: isTransparent && isDarkHeroPage ? "#FFFFFF" : "#0D1F1A",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1A7A4A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isTransparent && isDarkHeroPage ? "#FFFFFF" : "#0D1F1A")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions (Download + Phone) */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "24px" }}>
            <a
              href="/brochure.pdf"
              download="ECOBURNER_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                border: isTransparent && isDarkHeroPage ? "1.5px solid #FFFFFF" : "1.5px solid #0D1F1A",
                color: isTransparent && isDarkHeroPage ? "#FFFFFF" : "#0D1F1A",
                background: "transparent",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "1.05rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isTransparent && isDarkHeroPage ? "#FFFFFF" : "#0D1F1A";
                e.currentTarget.style.color = isTransparent && isDarkHeroPage ? "#0D1F1A" : "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = isTransparent && isDarkHeroPage ? "#FFFFFF" : "#0D1F1A";
              }}
            >
              <Download size={13} />
              Brochure
            </a>
            
            <a
              href="tel:+917736880801"
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                color: isTransparent && isDarkHeroPage ? "#FFFFFF" : "#0D1F1A", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A7A4A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isTransparent && isDarkHeroPage ? "#FFFFFF" : "#0D1F1A")}
            >
              <Phone size={13} />
              +91-77368-80801
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              padding: "8px",
              background: "none",
              border: "none",
              color: isTransparent && isDarkHeroPage ? "#FFFFFF" : "#0D1F1A",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#FFFFFF",
          borderTop: "1px solid #DDE8E3",
          padding: "16px 2rem",
          boxShadow: "0 4px 12px rgba(26,122,74,0.08)",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "#0D1F1A",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                borderBottom: "1px solid #DDE8E3",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/brochure.pdf"
            download="ECOBURNER_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 0",
              color: "#0D1F1A",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 600,
              borderBottom: "1px solid #DDE8E3",
            }}
          >
            <Download size={16} />
            Download Brochure
          </a>
          <a
            href="tel:+917736880801"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 0",
              color: "#0D1F1A",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 500,
              borderBottom: "1px solid #DDE8E3",
            }}
          >
            <Phone size={16} />
            +91-77368-80801
          </a>
        </div>
      )}
    </header>
  );
}
