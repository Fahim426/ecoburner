"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    slug: "ss-incinerator-plant",
    title: "Stainless Steel Incinerator Plant",
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
    slug: "oil-grease-trap",
    title: "Oil Grease Trap",
    subtitle: "Wastewater Treatment",
    images: ["/images/product-ss-incinerator.jpg"],
  },
  {
    slug: "stp-plant",
    title: "STP Plant",
    subtitle: "Sewage Treatment Solution",
    images: ["/images/product-ss-incinerator.jpg"],
  },
  {
    slug: "sanitary-pad-disposal",
    title: "Sanitary Pad Disposal",
    subtitle: "Hygiene Waste Solution",
    images: ["/images/product-napkin.jpg"],
  },
  {
    slug: "food-waste-disposal",
    title: "Food Waste Disposal",
    subtitle: "Organic Waste Management",
    images: ["/images/product-ecobin.jpg"],
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
        y: -4,
        boxShadow: "0 8px 24px rgba(26,122,74,0.10)",
      }}
      style={{
        background: "#FFFFFF",
        border: "1px solid #DDE8E3",
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "default",
        boxShadow: "0 2px 10px rgba(26,122,74,0.04)",
        transition: "all 0.3s ease",
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
        padding: "20px 16px",
        borderTop: "1px solid #DDE8E3",
      }}>
        {product.subtitle && (
          <div style={{ marginBottom: "8px" }}>
            <span style={{
              display: "inline-block",
              background: "#D4EDDA",
              color: "#1A7A4A",
              fontSize: "11px",
              fontWeight: 600,
              borderRadius: "20px",
              padding: "3px 10px",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}>
              {product.subtitle}
            </span>
          </div>
        )}
        <h3 style={{
          color: "#0D1F1A",
          fontWeight: 600,
          fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)",
          lineHeight: 1.3,
        }}>
          {product.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const scrollRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        let scrollAmount;
        if (window.innerWidth >= 1024) {
          scrollAmount = (clientWidth + 24) / 4;
        } else if (window.innerWidth >= 640) {
          scrollAmount = (clientWidth + 24) / 2;
        } else {
          scrollAmount = clientWidth + 24;
        }

        // Check if we are close to the end of the scrollable area
        if (scrollLeft + clientWidth >= scrollWidth - 30) {
          // Loop back to the beginning smoothly
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        } else {
          // Scroll forward smoothly
          scrollRef.current.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: "smooth"
          });
        }
      }
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const scroll = (direction) => {
    stopAutoplay();
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      
      let scrollAmount;
      if (window.innerWidth >= 1024) {
        scrollAmount = (clientWidth + 24) / 4;
      } else if (window.innerWidth >= 640) {
        scrollAmount = (clientWidth + 24) / 2;
      } else {
        scrollAmount = clientWidth + 24;
      }

      const targetScroll = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
    // Restart autoplay after a 3-second delay of no interaction
    setTimeout(startAutoplay, 3000);
  };

  return (
    <section id="products" style={{ padding: "80px 0", background: "#F4F7F5", borderTop: "1px solid #DDE8E3", borderBottom: "1px solid #DDE8E3" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>
        {/* Header with scroll buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", gap: "24px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "16px" }}>
              <span className="section-label">
                Our Products
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#0D1F1A",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}>
              What We <span className="gradient-text">Manufacture</span>
            </h2>
          </motion.div>

          {/* Controls */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#FFFFFF",
                border: "1px solid #DDE8E3",
                color: "#0D1F1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1A7A4A"; e.currentTarget.style.background = "#EEF6F1"; e.currentTarget.style.color = "#1A7A4A"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#DDE8E3"; e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#0D1F1A"; }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#FFFFFF",
                border: "1px solid #DDE8E3",
                color: "#0D1F1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1A7A4A"; e.currentTarget.style.background = "#EEF6F1"; e.currentTarget.style.color = "#1A7A4A"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#DDE8E3"; e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#0D1F1A"; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-container"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {products.map((product, idx) => (
            <div
              key={product.slug}
              style={{
                flexShrink: 0,
              }}
              className="w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)] snap-item"
            >
              <ProductCard product={product} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
