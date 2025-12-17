import { Check, X, Sparkles } from "lucide-react";

const ComparisonSection = () => {
  const features = [
    { name: "Characters Unlocked", original: false, mod: true },
    { name: "Ads Blocker", original: false, mod: true },
    { name: "Location Unlocked", original: false, mod: true },
    { name: "Cheat Mode", original: false, mod: true },
    { name: "Unlimited Money", original: false, mod: true },
    { name: "HD Graphics", original: true, mod: true },
    { name: "Offline Play", original: true, mod: true },
    { name: "Regular Updates", original: true, mod: true },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-4">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-sm font-medium text-teal">Comparison</span>
          </div>
          <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-4">
            MOD vs <span className="gradient-text">Original</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See why the MOD APK version is the superior choice for the ultimate gaming experience.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-coral/20 via-pink/20 to-golden/20 p-4 md:p-6">
              <div className="text-left font-poppins font-bold text-foreground">
                Features
              </div>
              <div className="text-center font-poppins font-bold text-muted-foreground">
                Original
              </div>
              <div className="text-center font-poppins font-bold gradient-text">
                MOD APK
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-border">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="grid grid-cols-3 p-4 md:p-5 hover:bg-muted/30 transition-colors"
                >
                  <div className="text-foreground font-medium text-sm md:text-base">
                    {feature.name}
                  </div>
                  <div className="flex justify-center">
                    {feature.original ? (
                      <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                        <Check className="w-5 h-5 text-teal" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                        <X className="w-5 h-5 text-destructive" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-teal" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;