import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesSection from "@/components/ServicesSection";
import OkanaganHomeowners from "@/components/OkanaganHomeowners";
import HowItWorks from "@/components/HowItWorks";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <ServicesSection />
      <OkanaganHomeowners />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </main>
  );
}
