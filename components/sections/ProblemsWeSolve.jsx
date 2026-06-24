"use client";
import { motion } from "framer-motion";
import { Building2, Truck, AlertTriangle, Maximize2, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Building2,
    title: "Waste Accumulation",
    desc: "Dense apartment complexes and commercial estates face massive daily accumulation of organic and solid waste, exceeding local storage capacities.",
  },
  {
    icon: Truck,
    title: "High Transport Costs",
    desc: "Relying on daily waste-hauling trucks to transport waste to distant municipal yards creates an escalating, high-cost recurring monthly expense.",
  },
  {
    icon: AlertTriangle,
    title: "Odour & Pest Issues",
    desc: "Untreated organic waste decomposes rapidly, releasing offensive odours and attracting disease-carrying pests, creating unhygienic conditions.",
  },
  {
    icon: Maximize2,
    title: "Limited Disposal Space",
    desc: "Modern residential properties and business facilities lack the physical footprint required for large-scale compost piles or waste sorting zones.",
  },
  {
    icon: TrendingUp,
    title: "Rising Operating Costs",
    desc: "Constantly increasing tipping fees, labor costs, and municipal disposal charges put severe long-term financial pressure on operations.",
  },
];

export default function ProblemsWeSolve() {
  return (
    <section id="problems" style={{ padding: "80px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 5vw" }}>

        {/* Header row */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          marginBottom: "56px",
          paddingBottom: "40px",
          borderBottom: "1px solid #DDE8E3",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "16px" }}>
              <span className="section-label">
                Challenges
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#0D1F1A",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              marginBottom: "16px",
            }}>
              Problems We <span className="gradient-text">Solve</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ color: "#4A6259", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "420px" }}
          >
            Traditional waste management is expensive, inefficient, and legally risky. 
            We eliminate these operational bottlenecks directly at the source.
          </motion.p>
        </div>

        {/* Problems — 5-col grid with gap */}
        <div id="problems-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                style={{
                  padding: "36px 24px",
                  border: "1px solid #DDE8E3",
                  borderRadius: "12px",
                  position: "relative",
                  background: "#FFFFFF",
                  transition: "all 0.3s ease",
                }}
                whileHover={{ borderColor: "#1A7A4A", boxShadow: "0 4px 16px rgba(26,122,74,0.10)" }}
              >
                {/* Step number — styled badge */}
                <div style={{
                  position: "absolute", top: "20px", right: "20px",
                  background: "#EEF6F1",
                  color: "#1A7A4A",
                  fontWeight: 700,
                  borderRadius: "8px",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  userSelect: "none",
                }}>
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div style={{
                  width: "40px", height: "40px", borderRadius: "8px",
                  background: "rgba(26,122,74,0.08)",
                  border: "1px solid rgba(26,122,74,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  <Icon size={18} style={{ color: "#1A7A4A" }} />
                </div>
                <h3 style={{ color: "#0D1F1A", fontWeight: 600, fontSize: "1.125rem", marginBottom: "10px", lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ color: "#4A6259", fontSize: "0.95rem", lineHeight: 1.7 }}>{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
