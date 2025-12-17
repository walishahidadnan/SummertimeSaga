import { Sparkles, Heart, Map, Gamepad } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-4">
              <Sparkles className="w-4 h-4 text-teal" />
              <span className="text-sm font-medium text-teal">About The Game</span>
            </div>
            <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-4">
              What is <span className="gradient-text">Summertime Saga</span>?
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Summertime Saga is an immersive Android game where you step into the shoes of a high school student navigating life in the charming town of Summerville. While the concept may seem straightforward, the gameplay offers depth as you deal with everyday challenges, build meaningful relationships, and uncover hidden mysteries.
            </p>
            <p>
              The game combines elements of mystery, romance, and drama, allowing your decisions to shape the storyline and outcomes. With over 65 unique characters to interact with, including favorites like Jenny, Roxxy, Debbie, and Erik, every playthrough offers something new.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { icon: Heart, title: "65+ Characters", desc: "Unique personalities", color: "coral" },
              { icon: Map, title: "30+ Locations", desc: "Explore Summerville", color: "teal" },
              { icon: Gamepad, title: "30+ Mini Games", desc: "Fun challenges", color: "golden" },
              { icon: Sparkles, title: "72 Languages", desc: "Global access", color: "pink" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-5 text-center hover:scale-105 transition-transform"
              >
                <div
                  className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center bg-${item.color}/10`}
                >
                  <item.icon className={`w-6 h-6 text-${item.color}`} />
                </div>
                <h3 className="font-poppins font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;