import { Github, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-semibold text-sm">Aegis Vault</span>
        </div>

        {/* Center */}
        <p className="text-xs text-muted-foreground">
          Made by{" "}
          <a
            href="https://github.com/leonardoReizz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Leonardo Reis
          </a>
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/leonardoReizz/aegis-vault"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
            Powered by Tauri + Rust
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
