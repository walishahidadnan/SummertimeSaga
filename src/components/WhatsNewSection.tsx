import { Sparkles, Check } from "lucide-react";

const WhatsNewSection = () => {
  const updates = [
    "High-definition Graphics",
    "16:9 aspect ratio for large screens",
    "Diverse maps and new locations",
    "Bug fixes and optimizations",
    "Fully guided routes",
    "Advanced accessibility options",
    "Exclusive content and dialogues",
    "Fast loading times",
    "All translations available",
    "Several mini-games introduced",
    "Optimized game engine",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-coral/5 via-pink/5 to-golden/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 border border-golden/20 mb-4">
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="text-sm font-medium text-golden">Latest Update</span>
            </div>
            <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-4">
              What's <span className="gradient-text">New</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out the latest improvements and features in this version.
            </p>
          </div>

          {/* Updates Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {updates.map((update, index) => (
              <div
                key={update}
                className="flex items-center gap-3 p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                  <Check className="w-4 h-4 text-teal" />
                </div>
                <span className="text-sm font-medium text-foreground">{update}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;