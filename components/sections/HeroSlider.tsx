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
    label: "WASTE-TO-ENERGY TECHNOLOGY",
    headline: "Waste Is Not The End.",
    headlineAccent: "It's The Beginning Of Energy.",
    subtext:
      "High-efficiency biogas systems that convert organic waste into clean, usable power — slashing utility costs.",
  },
  {
    id: 2,
    image: "/images/2.png",
    label: "SMART COMPOSTING SOLUTIONS",
    headline: "Smart Composting Solutions For",
    headlineAccent: "Greener Communities.",
    subtext:
      "Advanced organic waste composters designed for apartments, housing societies, and commercial parks.",
  },
  {
    id: 3,
    image: "/images/3.png",
    label: "SANITARY DISPOSAL SYSTEMS",
    headline: "Creating Cleaner Washrooms For",
    headlineAccent: "Schools, Offices And Institutions.",
    subtext:
      "Compact, automated, and smoke-free sanitary napkin incinerators for hygienic public and corporate spaces.",
  },
  {
    id: 4,
    image: "/images/4.png",
    label: "INDUSTRIAL INCINERATION",
    headline: "Industrial-Grade Incineration for",
    headlineAccent: "a Cleaner, Safer Future.",
    subtext:
      "Heavy-duty thermal disposal systems engineered to eliminate solid, hazardous, and dry industrial waste legally and safely.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="hero-section">
      {/* Responsive layout styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hero-section {
          position: relative;
          width: 100%;
          height: calc(100vh - 90px);
          min-height: 550px;
          overflow: hidden;
          background-color: #FFFFFF;
          border-bottom: 1px solid #DDE8E3;
          margin-top: 90px; /* Offset header on all screens */
        }
        .hero-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hero-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-color: #FFFFFF;
          overflow: hidden;
        }
        .hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.85) 60%, rgba(255, 255, 255, 0.95) 100%);
          z-index: 1;
          pointer-events: none;
        }
        .hero-content-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          padding: 0 5vw;
          background: transparent;
          display: flex;
          align-items: center;
          z-index: 10;
        }
        .hero-content-inner {
          width: 100%;
          margin: 0 auto;
          max-width: 480px;
          padding-bottom: 60px; /* Ensure space for bottom dots */
        }
        .hero-nav-row {
          display: block;
        }
        .hero-indicators {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 20;
        }
        .hero-arrows {
          position: absolute;
          bottom: 24px;
          right: 5vw;
          display: flex;
          gap: 8px;
          z-index: 20;
        }
        .hero-headline-container {
          min-height: 80px;
          display: flex;
          align-items: flex-end;
          margin-bottom: 8px;
        }
        .hero-subtext-container {
          min-height: 80px;
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 600px;
          }
          .hero-gradient-overlay {
            background: linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0) 100%);
          }
          .hero-content-inner {
            margin-left: 0;
            margin-right: auto;
            max-width: 540px;
            padding-bottom: 0;
          }
          .hero-headline-container {
            min-height: 130px;
          }
          .hero-subtext-container {
            min-height: 90px;
          }
        }
         @media (max-width: 767px) {
          .hero-section {
            height: 500px;
            min-height: auto;
          }
          .hero-gradient-overlay {
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.94) 60%, rgba(255, 255, 255, 0.98) 100%);
          }
          .hero-content-wrapper {
            align-items: flex-start;
            padding-top: 20px;
          }
          .hero-content-inner {
            padding-bottom: 60px;
          }
          .hero-headline-container {
            min-height: auto;
            margin-bottom: 12px;
          }
          .hero-subtext-container {
            min-height: auto;
            margin-bottom: 24px;
          }
        }
        @media (max-width: 480px) {
          .hero-arrows {
            display: none; /* Hide navigation arrows on small mobile screens to keep layout clean */
          }
        }
      `}} />

      <div className="hero-container">
        {/* Full-width Image Slider */}
        <div className="hero-image-wrapper">
          <AnimatePresence initial={false}>
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={slides[current].image}
                alt={slides[current].headline}
                fill
                sizes="100vw"
                className="hero-slide-image"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Soft gradient overlay for text readability */}
        <div className="hero-gradient-overlay" />

        {/* Content Wrapper */}
        <div className="hero-content-wrapper">
          <div className="hero-content-inner">
            
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "2px", background: "#1A7A4A" }} />
              <AnimatePresence mode="wait">
                <motion.span
                  key={`label-${current}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="section-label"
                  style={{ background: "#D4EDDA", color: "#1A7A4A", fontSize: "0.8rem", letterSpacing: "0.1em" }}
                >
                  {slides[current].label}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Headline */}
            <div className="hero-headline-container">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`headline-${current}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
                    fontWeight: 900,
                    color: "#0D1F1A",
                    lineHeight: 1.15,
                    margin: 0,
                    width: "100%"
                  }}
                >
                  {slides[current].headline}
                  <br />
                  <span className="gradient-text">{slides[current].headlineAccent}</span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subtext */}
            <div className="hero-subtext-container">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`subtext-${current}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: "#4A6259",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    margin: 0,
                    width: "100%"
                  }}
                >
                  {slides[current].subtext}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Primary CTA */}
            <div style={{ marginBottom: "32px" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#1A7A4A",
                  color: "white",
                  fontWeight: 600,
                  padding: "12px 28px",
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
            </div>

            {/* Navigation Row */}
            <div className="hero-nav-row">
              {/* Indicators */}
              <div className="hero-indicators">
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
                      width: idx === current ? "24px" : "8px",
                      background: idx === current ? "#1A7A4A" : "rgba(13,31,26,0.15)",
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="hero-arrows">
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(13,31,26,0.05)",
                    border: "1px solid #DDE8E3",
                    color: "#0D1F1A",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1A7A4A";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#1A7A4A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(13,31,26,0.05)";
                    e.currentTarget.style.color = "#0D1F1A";
                    e.currentTarget.style.borderColor = "#DDE8E3";
                  }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(13,31,26,0.05)",
                    border: "1px solid #DDE8E3",
                    color: "#0D1F1A",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1A7A4A";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#1A7A4A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(13,31,26,0.05)";
                    e.currentTarget.style.color = "#0D1F1A";
                    e.currentTarget.style.borderColor = "#DDE8E3";
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
