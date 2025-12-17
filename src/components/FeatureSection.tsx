import {
  Unlock,
  MapPin,
  Coins,
  Film,
  Gauge,
  Cookie,
  MessageCircle,
  RefreshCw,
  Gift,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Unlock,
      title: "All Characters Unlocked",
      description: "Access every major and minor character from the start without completing missions.",
      color: "bg-coral/10 text-coral",
    },
    {
      icon: MapPin,
      title: "All Locations Unlocked",
      description: "Explore every location from beachside to secret routes without waiting.",
      color: "bg-teal/10 text-teal",
    },
    {
      icon: Coins,
      title: "Unlimited Money & Resources",
      description: "Get unlimited in-game money and gems to buy outfits, items, and unlock routes.",
      color: "bg-golden/10 text-golden",
    },
    {
      icon: Film,
      title: "Exclusive HD Content",
      description: "Experience new storylines and secret missions with HD video content.",
      color: "bg-pink/10 text-pink",
    },
    {
      icon: Gauge,
      title: "Enhanced Performance",
      description: "Optimized for smooth gameplay on both flagship and low-end devices.",
      color: "bg-teal/10 text-teal",
    },
    {
      icon: Cookie,
      title: "Unlock All Cookie Jar",
      description: "All hidden cookie jar locations unlocked from the start with instant rewards.",
      color: "bg-coral/10 text-coral",
    },
    {
      icon: MessageCircle,
      title: "Improved Communication",
      description: "Build confidence by interacting with characters across different storylines.",
      color: "bg-golden/10 text-golden",
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Get instant access to new characters, quests, and maps with each update.",
      color: "bg-pink/10 text-pink",
    },
    {
      icon: Gift,
      title: "All Unlockables",
      description: "Premium items, locations, and features available from the start.",
      color: "bg-teal/10 text-teal",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20 mb-4">
            <Gift className="w-4 h-4 text-golden" />
            <span className="text-sm font-medium text-golden">MOD Features</span>
          </div>
          <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-4">
            Premium Features <span className="gradient-text">Unlocked</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get access to all premium features for free with the modded version. No restrictions, no waiting.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-poppins font-bold text-xl mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;