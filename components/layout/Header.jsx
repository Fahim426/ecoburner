"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "About", href: "/#why-ecoburner" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s ease",
        background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.5)" : "none",
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
              <Image src="/images/logo.jpeg" alt="ECOBURNER Logo" fill style={{ objectFit: "contain", objectPosition: "left" }} priority />
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "2rem", letterSpacing: "0.08em", lineHeight: 1 }}>
                <span style={{ color: "#2d8a42" }}>ECO</span>
                <span style={{ color: "#c8b84a" }}>BURNER</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#888", letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1.2, marginTop: "4px" }}>
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
                  fontWeight: 600,
                  color: "#b0b0b0",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#b0b0b0")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone only — no CTA button */}
          <a
            className="hidden md:flex"
            href="tel:+917736880801"
            style={{
              alignItems: "center", gap: "6px",
              color: "#aaa", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
          >
            <Phone size={13} />
            +91-77368-80801
          </a>

          {/* Mobile hamburger - we'll hide with CSS at large screens */}
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              padding: "8px",
              background: "none",
              border: "none",
              color: "#b0b0b0",
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
          background: "rgba(10,10,10,0.98)",
          borderTop: "1px solid #1a1a1a",
          padding: "16px 2rem",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "#b0b0b0",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                borderBottom: "1px solid #1a1a1a",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
