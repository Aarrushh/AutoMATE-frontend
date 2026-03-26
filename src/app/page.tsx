import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SymbioticWorkflow from "@/components/SymbioticWorkflow";
import TheBrain from "@/components/TheBrain";
import CostBenefitEngine from "@/components/CostBenefitEngine";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SymbioticWorkflow />
        <TheBrain />
        <CostBenefitEngine />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
