"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917736880801";
const WHATSAPP_MSG = encodeURIComponent("Hello EcoBurner Team,\n\nI visited your website and would like to know more about your waste management and incinerator solutions.\n\nPlease contact me with further details.\n\nThank you.");

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  // Delay appearance slightly so it doesn't pop up on first load instantly
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      id="whatsapp-float-btn"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        height: "48px",
        padding: "0 20px",
        background: "#25D366",
        borderRadius: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        textDecoration: "none",
        cursor: "pointer",
        color: "white",
        fontWeight: 600,
        fontSize: "0.95rem",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(37,211,102,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.35)";
      }}
    >
      <MessageCircle size={20} style={{ color: "white" }} fill="white" />
      <span style={{ whiteSpace: "nowrap" }}>Chat on WhatsApp</span>
    </a>
  );
}
