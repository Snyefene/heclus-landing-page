import Navbar     from "@/components/Navbar";
import Hero        from "@/components/Hero";
import StatsBar    from "@/components/StatsBar";
import Pipeline    from "@/components/Pipeline";
import Features    from "@/components/Features";
import HowItWorks  from "@/components/HowItWorks";
import VideoDemo   from "@/components/VideoDemo";
import FeaturedVideos from "@/components/FeaturedVideos";
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
      <VideoDemo />
      <FeaturedVideos />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
