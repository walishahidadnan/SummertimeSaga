import { Download, Smartphone, Calendar, HardDrive, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppInfoCard = () => {
  const appInfo = [
    { label: "App Name", value: "Summertime Saga Mod APK", icon: Smartphone },
    { label: "File Size", value: "1.14 GB", icon: HardDrive },
    { label: "Mod Features", value: "Unlimited Money, Unlocked Cookie Jar", icon: Star },
    { label: "Latest Version", value: "22.0.0-wip.6705", icon: Calendar },
    { label: "Compatibility", value: "Android 5.0 or Above", icon: Smartphone },
    { label: "Content Rating", value: "18+", icon: User },
    { label: "Offered by", value: "Kompas Productions", icon: User },
    { label: "Last Updated", value: "1 Day ago", icon: Calendar },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-6 md:p-10 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-coral/30 to-pink/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-golden/30 to-coral/30 rounded-full blur-3xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left - App Preview */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-coral via-pink to-golden p-1 shadow-glow mb-6">
                  <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
                    <div className="text-center p-4">
                      <div className="text-6xl md:text-7xl mb-2">🎮</div>
                      <p className="font-poppins font-bold text-lg gradient-text">Summertime</p>
                      <p className="font-poppins font-bold text-foreground">Saga</p>
                    </div>
                  </div>
                </div>
                <Button className="btn-download gap-2 w-full max-w-xs">
                  <Download className="w-5 h-5" />
                  Download APK
                </Button>
              </div>

              {/* Right - Info Table */}
              <div className="space-y-3">
                {appInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-foreground truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfoCard;