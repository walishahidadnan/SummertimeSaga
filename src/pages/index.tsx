import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppInfoCard from "@/components/AppInfoCard";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeatureSection";
import CharactersSection from "@/components/CharacterSection";
import InstallSection from "@/components/InstallSection";
import ComparisonSection from "@/components/ComparisonSection";
import WhatsNewSection from "@/components/WhatsNewSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AppInfoCard />
        <AboutSection />
        <FeaturesSection />
        <CharactersSection />
        <InstallSection />
        <ComparisonSection />
        <WhatsNewSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
