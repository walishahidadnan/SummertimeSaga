import { Download, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/herobg.webp"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Summer beach sunset"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Animated Decorations */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        <div className="absolute top-32 left-10 w-20 h-20 bg-coral/30 rounded-full blur-2xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-golden/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-primary/20 mb-8 animate-fade-in shadow-lg">
            <Star className="w-4 h-4 text-golden fill-golden" />
            <span className="text-sm font-semibold text-primary">Latest Version 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-slide-up drop-shadow-lg">
            <span className="gradient-text">Summertime Saga</span>
            <br />
            <span className="text-foreground">MOD APK</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-slide-up drop-shadow-md" style={{ animationDelay: "0.1s" }}>
            Unlock the ultimate gaming experience with unlimited money, all characters unlocked, and full cookie jar access. Your adventure awaits!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button className="btn-download text-lg px-10 py-6 gap-3 pulse-glow">
              <Download className="w-5 h-5" />
              Download APK Free
            </Button>
            <Button variant="outline" className="px-8 py-6 rounded-2xl border-2 bg-card/50 backdrop-blur-sm hover:bg-card/80 gap-2">
              <span>View Features</span>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm">
              <Shield className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-foreground">100% Safe</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-golden" />
              <span className="text-sm font-medium text-foreground">Fast Download</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm">
              <Star className="w-5 h-5 text-coral" />
              <span className="text-sm font-medium text-foreground">10M+ Downloads</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;