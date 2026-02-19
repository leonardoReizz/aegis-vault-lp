import { motion } from "framer-motion";
import { Apple, Monitor, Terminal, Github, Download } from "lucide-react";
import { useEffect, useState } from "react";

const GITHUB_RELEASE = "https://github.com/leonardoReizz/aegis-vault/releases/latest";

type Platform = "mac-arm" | "mac-intel" | "windows" | "linux" | null;

const detectPlatform = (): Platform => {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent.toLowerCase();
  const platform = (navigator as any).userAgentData?.platform?.toLowerCase() ?? navigator.platform?.toLowerCase() ?? "";
  
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  if (ua.includes("mac") || platform.includes("mac")) {
    // Simple ARM detection
    if (platform.includes("arm") || ua.includes("arm")) return "mac-arm";
    return "mac-arm"; // default to ARM for modern macs
  }
  return null;
};

const downloads = [
  {
    id: "mac-arm" as Platform,
    label: "macOS (Apple Silicon)",
    icon: Apple,
    href: `${GITHUB_RELEASE}/download/aegis-vault_aarch64.dmg`,
    ext: ".dmg",
  },
  {
    id: "mac-intel" as Platform,
    label: "macOS (Intel)",
    icon: Apple,
    href: `${GITHUB_RELEASE}/download/aegis-vault_x64.dmg`,
    ext: ".dmg",
  },
  {
    id: "windows" as Platform,
    label: "Windows",
    icon: Monitor,
    href: `${GITHUB_RELEASE}/download/aegis-vault_x64_en-US.msi`,
    ext: ".msi",
  },
  {
    id: "linux" as Platform,
    label: "Linux",
    icon: Terminal,
    href: `${GITHUB_RELEASE}/download/aegis-vault_amd64.deb`,
    ext: ".deb",
  },
];

const DownloadSection = () => {
  const [detected, setDetected] = useState<Platform>(null);

  useEffect(() => {
    setDetected(detectPlatform());
  }, []);

  const sorted = [...downloads].sort((a, b) => {
    if (a.id === detected) return -1;
    if (b.id === detected) return 1;
    return 0;
  });

  return (
    <section id="download" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Baixe o <span className="text-gradient">Aegis Vault</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            100% gratuito, para sempre. Escolha sua plataforma e comece agora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {sorted.map((d, i) => (
            <motion.a
              key={d.id}
              href={d.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-300 ${
                d.id === detected
                  ? "bg-primary/10 border-primary/40 glow-border"
                  : "bg-card border-border hover:border-primary/20"
              }`}
            >
              <d.icon className="w-8 h-8 text-primary" />
              <span className="font-medium text-sm text-foreground">{d.label}</span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Download className="w-3 h-3" />
                {d.ext}
              </span>
              {d.id === detected && (
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
                  Recomendado
                </span>
              )}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/leonardoReizz/aegis-vault"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            Ver todas as releases no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
