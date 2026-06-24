import HeroSlider from "@/components/sections/HeroSlider";
import WasteCrisis from "@/components/sections/WasteCrisis";
import ProblemsWeSolve from "@/components/sections/ProblemsWeSolve";
import Products from "@/components/sections/Products";
import WhyEcoburner from "@/components/sections/WhyEcoburner";
import TrustedBy from "@/components/sections/TrustedBy";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECOBURNER | Industrial Waste Management Solutions South India",
  description:
    "ECOBURNER delivers certified industrial waste incinerators Across South India. Compliant with CPCB & KSPCB regulations. Factories, complexes, and clinics served.",
  keywords:
    "waste management South India, incinerator South India, industrial waste South India, general waste disposal, ECOBURNER South India",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WasteCrisis />
      <ProblemsWeSolve />
      <Products />
      <WhyEcoburner />
      <TrustedBy />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
