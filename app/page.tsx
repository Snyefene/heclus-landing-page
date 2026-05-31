import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import Pipeline     from "@/components/Pipeline";
import SampleOutput from "@/components/SampleOutput";
import Features     from "@/components/Features";
import HowItWorks   from "@/components/HowItWorks";
import Pricing      from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ          from "@/components/FAQ";
import FinalCTA     from "@/components/FinalCTA";
import Footer       from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Pipeline />
      <SampleOutput />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
