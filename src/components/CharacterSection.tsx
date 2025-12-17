import { Users } from "lucide-react";

const CharactersSection = () => {
  const characters = [
    {
      name: "MC (Main Character)",
      role: "The Protagonist",
      description: "Navigate through high school life, uncover family secrets, and make important decisions that affect your journey.",
      emoji: "🎮",
      gradient: "from-coral to-pink",
    },
    {
      name: "Debbie",
      role: "Supportive Figure",
      description: "A kind and caring figure who helps MC after a life-changing event. She provides guidance throughout the story.",
      emoji: "💝",
      gradient: "from-pink to-coral",
    },
    {
      name: "Master Somrak",
      role: "Martial Arts Instructor",
      description: "A skilled Muay Thai instructor who trains the MC in combat and self-discipline. Wise and disciplined.",
      emoji: "🥋",
      gradient: "from-teal to-cyan-500",
    },
    {
      name: "Erik",
      role: "Best Friend",
      description: "MC's loyal best friend and sidekick. Known for his humor, Erik provides comic relief and moral support.",
      emoji: "🤝",
      gradient: "from-golden to-amber-500",
    },
    {
      name: "Harold",
      role: "Erik's Father",
      description: "A hardworking man who is protective of his son. Known for his serious personality but caring side.",
      emoji: "👨",
      gradient: "from-slate-500 to-slate-700",
    },
  ];

  return (
    <section id="characters" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 border border-pink/20 mb-4">
            <Users className="w-4 h-4 text-pink" />
            <span className="text-sm font-medium text-pink">Meet The Cast</span>
          </div>
          <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-4">
            Top <span className="gradient-text">Characters</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interact with over 65 unique characters, each with their own backstory and personality.
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className="glass-card rounded-3xl overflow-hidden group hover:shadow-glow transition-all duration-300"
            >
              {/* Character Avatar */}
              <div className={`h-32 bg-gradient-to-br ${character.gradient} flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-125 transition-transform duration-300">
                  {character.emoji}
                </span>
              </div>

              {/* Character Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-poppins font-bold text-xl text-foreground">
                    {character.name}
                  </h3>
                  <span className="text-sm font-medium text-primary">
                    {character.role}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {character.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;