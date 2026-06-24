"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const slides = [
  {
    id: 1,
    image: "/images/1.png",
    label: "ECO-FRIENDLY INCINERATION",
    headline: "Industrial Waste Solutions",
    headlineAccent: "Engineered for South India",
    subtext:
      "State-of-the-art waste management systems designed for apartments, factories, and commercial facilities.",
  },
  {
    id: 2,
    image: "/images/2.png",
    label: "WASTE-TO-ENERGY TECHNOLOGY",
    headline: "Convert Organic Waste into",
    headlineAccent: "Free Renewable Power",
    subtext:
      "High-efficiency biogas systems that turn organic waste into clean, usable fuel — slashing your operational costs.",
  },
  {
    id: 3,
    image: "/images/3.png",
    label: "SMART DIGITAL CONTROLS",
    headline: "Fully Automated Processing",
    headlineAccent: "At Your Fingertips",
    subtext:
      "Advanced control panels ensuring 100% compliance, effortless operation, and odor-free processing.",
  },
  {
    id: 4,
    image: "/images/4.png",
    label: "STAINLESS STEEL INCINERATORS",
    headline: "Safe, Complete Disposal of",
    headlineAccent: "Solid & Industrial Waste",
    subtext:
      "Heavy-duty incinerators engineered to eliminate high-volume waste challenges safely, cleanly, and legally.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          {/* Background image */}
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={slides[current].image}
              alt={slides[current].headline}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority={current === 0}
            />
          </div>
          {/* Overlays: White B2B horizontal gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(255,255,255,0.92) 40%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,0.0) 100%)",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              paddingTop: "90px", // offset fixed header
            }}
          >
            <div
              style={{
                maxWidth: "100%",
                margin: "0 auto",
                padding: "0 5vw",
                width: "100%",
              }}
            >
              <div style={{ maxWidth: "700px" }}>
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}
                >
                  <div style={{ width: "32px", height: "2px", background: "#1A7A4A" }} />
                  <span className="section-label" style={{ background: "#D4EDDA", color: "#1A7A4A" }}>
                    {slides[current].label}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                    fontWeight: 900,
                    color: "#0D1F1A",
                    lineHeight: 1.1,
                    marginBottom: "8px",
                  }}
                >
                  {slides[current].headline}
                  <br />
                  <span className="gradient-text">{slides[current].headlineAccent}</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{
                    color: "#4A6259",
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    maxWidth: "520px",
                    marginTop: "20px",
                    marginBottom: "32px",
                  }}
                >
                  {slides[current].subtext}
                </motion.p>

                {/* Primary CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                  style={{ marginBottom: "32px" }}
                >
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      background: "#1A7A4A",
                      color: "white",
                      fontWeight: 600,
                      padding: "14px 32px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#15623B";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#1A7A4A";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    Request Consultation
                  </Link>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "8px" }}
                >
                  <div style={{
                    width: "1px", height: "40px",
                    background: "linear-gradient(to bottom, #1A7A4A, transparent)",
                  }} />
                  <span style={{ color: "#4A6259", fontSize: "0.875rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Scroll to explore
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 10,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              height: "8px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s ease",
              width: idx === current ? "32px" : "8px",
              background: idx === current ? "#1A7A4A" : "rgba(13,31,26,0.2)",
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          right: "70px",
          bottom: "20px",
          zIndex: 10,
          padding: "10px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.9)",
          border: "1px solid #DDE8E3",
          color: "#0D1F1A",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#1A7A4A";
          e.currentTarget.style.color = "#1A7A4A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#DDE8E3";
          e.currentTarget.style.color = "#0D1F1A";
        }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
          zIndex: 10,
          padding: "10px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.9)",
          border: "1px solid #DDE8E3",
          color: "#0D1F1A",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#1A7A4A";
          e.currentTarget.style.color = "#1A7A4A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#DDE8E3";
          e.currentTarget.style.color = "#0D1F1A";
        }}
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
}
