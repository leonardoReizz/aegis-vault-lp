import { motion } from "framer-motion";
import { Shield, Apple, Monitor, Terminal, Github } from "lucide-react";
import { useReleaseAssets } from "../hooks/useReleaseAssets";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const HeroSection = () => {
  const links = useReleaseAssets();

  const platforms = [
    { label: "macOS (Apple Silicon)", icon: Apple, href: links.macArm },
    { label: "macOS (Intel)", icon: Apple, href: links.macIntel },
    { label: "Windows", icon: Monitor, href: links.windows },
    { label: "Linux", icon: Terminal, href: links.linux },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 flex flex-col items-center text-center px-4 py-24 md:py-32">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Free & Open Source
          </span>
        </motion.div>

        {/* Logo + Title */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 mb-6"
        >
          <div className="p-3 rounded-2xl glow-border bg-card">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Aegis <span className="text-gradient">Vault</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          Suas senhas protegidas com criptografia de nível militar.
          <br />
          Simples, seguro e totalmente sob seu controle.
        </motion.p>

        {/* Download buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {platforms.map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-medium transition-colors border border-border hover:border-primary/30"
            >
              <p.icon className="w-4 h-4" />
              {p.label}
            </a>
          ))}
        </motion.div>

        {/* GitHub link */}
        <motion.a
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          href="https://github.com/leonardoReizz/aegis-vault"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
          Ver no GitHub
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
