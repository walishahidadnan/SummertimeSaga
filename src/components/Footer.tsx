import { Gamepad2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "Features", href: "#features" },
      { name: "Characters", href: "#characters" },
      { name: "Install Guide", href: "#install" },
    ],
    support: [
      { name: "FAQ", href: "#faq" },
      { name: "Contact Us", href: "#" },
      { name: "Report Issue", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral to-pink flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-poppins font-bold text-lg">
                <span className="gradient-text">Summertime</span>
                <span className="text-foreground"> Saga</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your ultimate destination for downloading Summertime Saga MOD APK with all premium features unlocked.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-poppins font-bold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-poppins font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Summertime Saga MOD APK. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for gamers
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-muted/50 border border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Disclaimer:</strong> This website is not affiliated with or endorsed by the original game developers. 
            Summertime Saga is a trademark of Kompas Productions. All game content, characters, and trademarks are the property of their respective owners. 
            This site is for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;