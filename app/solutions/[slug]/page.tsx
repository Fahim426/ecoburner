import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

const WHATSAPP_NUMBER = "917736880801";
const WHATSAPP_MSG = encodeURIComponent("Hello EcoBurner Team,\n\nI visited your website and would like to know more about your waste management and incinerator solutions.\n\nPlease contact me with further details.\n\nThank you.");

const productsData = {
  "industrial-burner": {
    title: "Industrial Waste Burners",
    tag: "Industrial",
    image: "/images/product-industrial.png",
    hero: "/images/hero1.png",
    description:
      "High-volume industrial waste burners for manufacturing facilities, chemical plants, and industrial estates. Designed to handle hazardous and non-hazardous solid waste streams with continuous or batch operation modes.",
    specs: [
      { label: "Capacity Range", value: "50 kg/hr – 1000 kg/hr" },
      { label: "Operating Temperature", value: "850°C – 1200°C" },
      { label: "Waste Types", value: "Industrial, Chemical, Mixed" },
      { label: "Fuel", value: "Diesel / Natural Gas" },
      { label: "Compliance", value: "Hazardous Waste Rules 2016" },
      { label: "Operation Mode", value: "Continuous / Batch" },
    ],
    features: [
      "Heavy-duty refractory lining for longevity",
      "Multiple feed systems for different waste forms",
      "Remote diagnostics and monitoring",
      "SCADA-compatible control systems",
      "Custom engineering for specific waste streams",
      "On-site installation and commissioning",
    ],
    usedBy: ["Factories", "Chemical Plants", "Pharmaceutical Companies", "Industrial Estates", "Textile Mills"],
  },
  "small-scale-waste": {
    title: "Small-Scale Waste Solutions",
    tag: "Compact",
    image: "/images/product-smallscale.png",
    hero: "/images/hero4.png",
    description:
      "Affordable, compact waste incineration units designed for small businesses, retail outlets, warehouses, and institutions that need compliance-ready waste disposal without large infrastructure investment.",
    specs: [
      { label: "Capacity", value: "2 kg/hr – 25 kg/hr" },
      { label: "Operating Temperature", value: "800°C – 950°C" },
      { label: "Footprint", value: "Compact — fits in 6×4 ft space" },
      { label: "Power", value: "Single phase 230V" },
      { label: "Fuel", value: "LPG / Diesel" },
      { label: "Compliance", value: "Solid Waste Management Rules" },
    ],
    features: [
      "Plug-and-play installation",
      "Easy for non-technical operators",
      "Low maintenance — minimal moving parts",
      "Affordable upfront cost",
      "Ideal for space-constrained sites",
      "Portable models available",
    ],
    usedBy: ["Small Businesses", "Retail Outlets", "Warehouses", "Apartments", "Institutions"],
  },
  "biogas-system": {
    title: "Biogas Systems",
    tag: "Green Energy",
    image: "/images/product-biogas.png",
    hero: "/images/hero2.png",
    description:
      "Convert organic waste into renewable biogas energy with ECOBURNER's anaerobic digestion systems. Ideal for food processing, hotels, canteens, and municipalities aiming to generate energy while eliminating organic waste.",
    specs: [
      { label: "Feedstock", value: "Food Waste, Organic Waste, Agri Waste" },
      { label: "Biogas Yield", value: "0.3–0.5 m³ per kg of input" },
      { label: "System Capacity", value: "100 kg/day – 5000 kg/day" },
      { label: "By-Product", value: "Slurry (natural fertilizer)" },
      { label: "Energy Output", value: "Cooking Gas / Generator Fuel" },
      { label: "ROI", value: "3–5 years (typical)" },
    ],
    features: [
      "Converts waste into green energy",
      "Slurry by-product used as organic fertilizer",
      "Reduces electricity and LPG costs",
      "Zero liquid discharge design",
      "Eligible for green energy subsidies",
      "MNRE compliant design",
    ],
    usedBy: ["Hotels & Restaurants", "Food Processing Units", "Municipal Bodies", "Educational Institutions", "Residential Apartments"],
  },
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug as keyof typeof productsData];
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.title} | ECOBURNER Waste Management South India`,
    description: product.description,
    keywords: `${product.title}, waste management South India, incinerator South India, ECOBURNER`,
  };
}

export default async function SolutionDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = productsData[slug as keyof typeof productsData];
  if (!product) notFound();

  return (
    <div className="bg-bg-primary min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-72 sm:h-96">
        <Image src={product.hero} alt={product.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#0D1F1A]/40 to-bg-primary" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link
              href="/#solutions"
              className="flex items-center gap-2 text-text-muted hover:text-text-primary text-sm mb-4 transition-colors font-medium"
            >
              <ArrowLeft size={16} />
              Back to Solutions
            </Link>
            <span className="text-xs font-bold text-green-primary bg-green-light px-2.5 py-1 rounded-full mb-3 inline-block">
              {product.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary">
              {product.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
              <p className="text-text-secondary text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 size={18} className="text-green-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Used By */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Ideal For</h2>
              <div className="flex flex-wrap gap-2">
                {product.usedBy.map((u) => (
                  <span
                    key={u}
                    className="text-sm text-text-secondary bg-bg-surface border border-bg-elevated px-4 py-2 rounded-full font-medium"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Specs */}
            <div className="bg-bg-surface border border-[#DDE8E3] rounded-2xl p-6 shadow-sm">
              <h3 className="text-text-primary font-bold text-lg mb-4">Technical Specifications</h3>
              <div className="space-y-3">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 text-sm py-2 border-b border-[#DDE8E3]">
                    <span className="text-text-secondary">{s.label}</span>
                    <span className="text-text-primary font-semibold text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-bg-elevated border border-[#DDE8E3] rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-text-primary font-bold text-lg">Get a Quote</h3>
              <p className="text-text-secondary text-sm">
                Tell us your requirements and we&apos;ll recommend the right configuration.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I am interested in your ${product.title}. Please share details and pricing.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a href="/contact" className="btn-outline w-full justify-center">
                Fill Enquiry Form
              </a>
              <a
                href="tel:+917736880801"
                className="flex items-center justify-center gap-2 text-text-secondary hover:text-green-primary text-sm transition-colors font-medium"
              >
                <Phone size={16} />
                +91-77368-80801
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
