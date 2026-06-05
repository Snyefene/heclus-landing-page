import Navbar     from "@/components/Navbar";
import Hero        from "@/components/Hero";
import StatsBar    from "@/components/StatsBar";
import Pipeline    from "@/components/Pipeline";
import Features    from "@/components/Features";
import HowItWorks  from "@/components/HowItWorks";
import Pricing     from "@/components/Pricing";
import FAQ         from "@/components/FAQ";
import FinalCTA    from "@/components/FinalCTA";
import Footer      from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Pipeline />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
