import { Shield, Github } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-surface py-3" : "py-5"
      }`}
    >
      <div className="container px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-bold text-sm">Aegis Vault</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Como funciona
          </a>
          <a
            href="#download"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Download
          </a>
          <a
            href="#roadmap"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Roadmap
          </a>
        </div>

        <a
          href="https://github.com/leonardoReizz/aegis-vault"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
