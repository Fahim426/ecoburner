"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const slides = [
  {
    id: 1,
    image: "/images/1.png",
    label: "Eco-Burner Facility",
    headline: "Industrial Waste Solutions",
    headlineAccent: "Engineered for Scale",
    subtext:
      "State-of-the-art waste management systems designed for hospitals, factories, and municipalities.",
  },
  {
    id: 2,
    image: "/images/2.png",
    label: "Advanced Biogas Plants",
    headline: "Convert Organic Waste into",
    headlineAccent: "Clean Renewable Energy",
    subtext:
      "High-efficiency digester systems that turn food and organic waste into usable biogas — reducing disposal costs.",
  },
  {
    id: 3,
    image: "/images/3.png",
    label: "Automated Control Systems",
    headline: "Smart Waste Processing",
    headlineAccent: "At Your Fingertips",
    subtext:
      "Fully automated, easy-to-operate processing plants ensuring safe, compliant, and reliable waste disposal.",
  },
  {
    id: 4,
    image: "/images/4.png",
    label: "SS Incinerator Plant",
    headline: "Safe, Hygienic Disposal of",
    headlineAccent: "Industrial & Bio Waste",
    subtext:
      "Heavy-duty stainless steel incinerators engineered to eliminate biohazard risks safely and efficiently.",
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
        backgroundColor: "#0a0a0a",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
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
          {/* Overlays */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.15) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 30%, rgba(0,0,0,0.5) 100%)",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              paddingTop: "72px", // offset fixed header
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
                  <div style={{ width: "32px", height: "2px", background: "#2d8a42" }} />
                  <span className="section-label">{slides[current].label}</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                    fontWeight: 900,
                    color: "white",
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
                    color: "#b0b0b0",
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    maxWidth: "520px",
                    marginTop: "20px",
                    marginBottom: "32px",
                  }}
                >
                  {slides[current].subtext}
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "8px" }}
                >
                  <div style={{
                    width: "1px", height: "40px",
                    background: "linear-gradient(to bottom, rgba(45,138,66,0.8), transparent)",
                  }} />
                  <span style={{ color: "#555", fontSize: "0.875rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
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
              background: idx === current ? "#2d8a42" : "rgba(255,255,255,0.3)",
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
          background: "rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          background: "rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
}
