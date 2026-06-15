import HeroSlider from "@/components/sections/HeroSlider";
import WasteCrisis from "@/components/sections/WasteCrisis";
import ComplianceBenefits from "@/components/sections/ComplianceBenefits";
import Products from "@/components/sections/Products";
import WhyEcoburner from "@/components/sections/WhyEcoburner";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECOBURNER | Industrial & Biomedical Waste Management Solutions South India",
  description:
    "ECOBURNER delivers certified industrial and biomedical waste incinerators Across South India. Compliant with CPCB & KSPCB regulations. Hospitals, factories, clinics served.",
  keywords:
    "waste management South India, incinerator South India, biomedical waste disposal India, industrial waste South India, hospital waste management, ECOBURNER Kasaragod",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WasteCrisis />
      <ComplianceBenefits />
      <Products />
      <WhyEcoburner />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
