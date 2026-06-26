"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917736880801";

const products = [
  {
    slug: "ss-incinerator-plant-residential",
    title: "Stainless Steel Incinerator Plant - Residential",
    subtitle: "Solid Waste Management",
    images: ["/images/ss-1.png", "/images/ss-2.png"],
  },
  {
    slug: "ss-incinerator-plant-commercial",
    title: "Stainless Steel Incinerator Plant - Commercial",
    subtitle: "Solid Waste Management",
    images: ["/images/new ss-1.png", "/images/new ss-2.png"],
  },
  {
    slug: "smokeless-incinerator",
    title: "Smokeless Incinerator",
    subtitle: "Eco-Friendly Waste Solution",
    images: ["/images/smoke-1.png", "/images/smoke-2.png"],
  },
  {
    slug: "frp-biogas-plant",
    title: "FRP Biogas Plant",
    subtitle: "Organic Waste to Energy",
    images: ["/images/bio-1.png", "/images/bio-2.png"],
  },
  {
    slug: "eco-bin",
    title: "Eco-Bin Compost Machine",
    subtitle: "Food Waste Compost Machine",
    images: ["/images/eco-1.png", "/images/eco-2.png"],
  },

  {
    slug: "oil-grease-trap",
    title: "Oil Grease Trap",
    subtitle: "Wastewater Treatment",
    images: ["/images/oil-1.png", "/images/oil-2.png"],
  },
  {
    slug: "stp-plant",
    title: "STP Plant",
    subtitle: "Sewage Treatment Solution",
    images: ["/images/stp-1.png", "/images/stp-2.png"],
  },
  {
    slug: "sanitary-pad-disposal",
    title: "Sanitary Pad Disposal",
    subtitle: "Hygiene Waste Solution",
    images: ["/images/sanitary-1.png", "/images/sanitary-2.png"],
  },
  {
    slug: "food-waste-disposal",
    title: "Food Waste Disposal",
    subtitle: "Organic Waste Management",
    images: ["/images/food-1.png", "/images/food-2.png"],
  },
];

function ProductCard({ product, idx, onSelect }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Stagger start time so cards don't slide exactly in sync
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
      }, 10000);
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
      onClick={() => onSelect(product)}
      style={{
        background: "#FFFFFF",
        border: "1px solid #DDE8E3",
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "pointer",
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
                objectFit: "contain",
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

/* ── Product Popup Modal ── */
function ProductModal({ product, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const next = () => setImgIdx((p) => (p + 1) % product.images.length);
  const prev = () => setImgIdx((p) => (p - 1 + product.images.length) % product.images.length);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I am interested in your ${product.title}. Please share details and pricing.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF",
          borderRadius: "20px",
          overflow: "hidden",
          maxWidth: "680px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
        }}
      >
        {/* Close button */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "16px 20px 0" }}>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid #DDE8E3",
              background: "#F4F7F5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#0D1F1A",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#e53e3e"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#e53e3e"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#F4F7F5"; e.currentTarget.style.color = "#0D1F1A"; e.currentTarget.style.borderColor = "#DDE8E3"; }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Image area */}
        <div style={{ position: "relative", aspectRatio: "4/3", background: "#F4F7F5", margin: "0 20px", borderRadius: "14px", overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={product.images[imgIdx]}
                alt={product.title}
                fill
                sizes="680px"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                style={{
                  position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)",
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)", border: "1px solid #DDE8E3",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#0D1F1A", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                style={{
                  position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)", border: "1px solid #DDE8E3",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#0D1F1A", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {/* Dot indicators */}
          {product.images.length > 1 && (
            <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px" }}>
              {product.images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setImgIdx(i)}
                  style={{
                    width: i === imgIdx ? "20px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === imgIdx ? "#1A7A4A" : "rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div style={{ padding: "24px 24px 28px" }}>
          {product.subtitle && (
            <div style={{ marginBottom: "10px" }}>
              <span style={{
                display: "inline-block",
                background: "#D4EDDA",
                color: "#1A7A4A",
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: "20px",
                padding: "4px 12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}>
                {product.subtitle}
              </span>
            </div>
          )}
          <h3 style={{
            color: "#0D1F1A",
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
            lineHeight: 1.3,
            marginBottom: "20px",
          }}>
            {product.title}
          </h3>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ flex: 1, minWidth: "200px", justifyContent: "center" }}
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </a>
            <a
              href="/contact"
              className="btn-outline"
              style={{ flex: 1, minWidth: "200px", justifyContent: "center" }}
            >
              Fill Enquiry Form
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const scrollRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

    // 1. Helper to select and scroll
    const selectAndScroll = (slug) => {
      const prod = products.find((p) => p.slug === slug);
      if (prod) {
        setSelectedProduct(prod);
        const element = document.getElementById("products");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // 2. Listen to custom select-product events (e.g. from footer clicks on same page)
    const handleSelectEvent = (e) => {
      selectAndScroll(e.detail);
    };

    window.addEventListener("select-product", handleSelectEvent);

    // 3. Handle query param on mount (e.g. navigation from other pages)
    const params = new URLSearchParams(window.location.search);
    const selectSlug = params.get("select");
    if (selectSlug) {
      // Small timeout to allow page layout to settle before scrolling
      const timer = setTimeout(() => {
        selectAndScroll(selectSlug);
      }, 500);
      return () => {
        stopAutoplay();
        window.removeEventListener("select-product", handleSelectEvent);
        clearTimeout(timer);
      };
    }

    return () => {
      stopAutoplay();
      window.removeEventListener("select-product", handleSelectEvent);
    };
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
              <ProductCard product={product} idx={idx} onSelect={setSelectedProduct} />
            </div>
          ))}
        </div>
      </div>

      {/* Product Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
