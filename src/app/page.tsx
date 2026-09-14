import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import PricingTiers from "@/components/PricingTiers";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f9fa]">
      <Navbar />
      <Hero />
      <Calculator />
      <PricingTiers />
      <Faq />
      <Footer />
    </main>
  );
}
