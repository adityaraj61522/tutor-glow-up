import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import VisualSection from "@/components/VisualSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      
      <main>
        <HeroSection />
        <AboutSection />
        <FeatureHighlights />
        <VisualSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;