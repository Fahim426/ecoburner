"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    slug: "ss-incinerator-plant",
    title: "SS Incinerator Plant",
    subtitle: "Solid Waste Management",
    images: ["/images/product-ss-incinerator.jpg", "/images/ss-2.jpg", "/images/ss-3.jpg"],
  },
  {
    slug: "frp-biogas-plant",
    title: "FRP Biogas Plant",
    subtitle: "Organic Waste to Energy",
    images: ["/images/product-frp-biogas.png", "/images/bio-2.jpeg"],
  },
  {
    slug: "eco-bin",
    title: "Eco-Bin",
    subtitle: "Food Waste Compost Machine",
    images: ["/images/product-ecobin.jpg", "/images/eco-2.jpeg"],
  },
  {
    slug: "napkin-burning-incinerator",
    title: "Napkin Burning Incinerator",
    subtitle: "Sanitary Waste Disposal",
    images: ["/images/product-napkin.jpg", "/images/napkin-2.jpg"],
  },
];

function ProductCard({ product, idx }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Stagger start time so cards don't slide exactly in sync
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, idx * 1200);
    return () => clearTimeout(timeout);
  }, [idx, product.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: "0 24px 56px rgba(0,0,0,0.6), 0 0 32px rgba(45,138,66,0.15)",
      }}
      style={{
        background: "#0e0e0e",
        border: "1px solid #1e1e1e",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "default",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
        transition: "border-color 0.3s ease",
      }}
    >
      {/* Image Container */}
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={product.images[currentImage]}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Title bar */}
      <div style={{
        padding: "16px 18px",
        borderTop: "1px solid #1a1a1a",
      }}>
        <h3 style={{
          color: "white",
          fontWeight: 700,
          fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)",
          lineHeight: 1.3,
          marginBottom: product.subtitle ? "4px" : 0,
        }}>
          {product.title}
        </h3>
        {product.subtitle && (
          <p style={{ color: "#2d8a42", fontSize: "clamp(0.85rem, 1vw, 0.95rem)", fontWeight: 600 }}>
            {product.subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" style={{ padding: "80px 0", background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "2px", background: "#2d8a42" }} />
            <span style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.2rem)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d8a42" }}>
              Our Products
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}>
            What We <span className="gradient-text">Manufacture</span>
          </h2>
        </motion.div>

        {/* 4-column product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <ProductCard key={product.slug} product={product} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
