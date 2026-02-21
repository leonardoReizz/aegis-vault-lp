import { motion } from "framer-motion";
import {
  ShieldCheck,
  FolderLock,
  Share2,
  Cloud,
  KeyRound,
  Star,
  HardDrive,
  Monitor,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "AES-256-GCM + RSA",
    description:
      "Military-grade encryption with AES-256-GCM combined with RSA keys for maximum data protection.",
  },
  {
    icon: FolderLock,
    title: "Multiple Vaults",
    description:
      "Organize your passwords into separate vaults by context — work, personal, projects and more.",
  },
  {
    icon: Share2,
    title: "Secure Sharing",
    description:
      "Share vaults between users using RSA asymmetric encryption. Only key holders can access.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Optional per-vault sync. You decide what stays local and what goes to the cloud.",
  },
  {
    icon: KeyRound,
    title: "Password Generator",
    description:
      "Generate strong, unique passwords with one click. Control length, characters and complexity.",
  },
  {
    icon: Star,
    title: "Favorites",
    description:
      "Quickly access the credentials you use most with the built-in favorites system.",
  },
  {
    icon: HardDrive,
    title: "Key Backup",
    description:
      "Securely export and import your private keys. Never lose access to your vaults.",
  },
  {
    icon: Monitor,
    title: "Cross-Platform",
    description:
      "Available for macOS (ARM and Intel), Windows and Linux. The same experience on any system.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Uncompromising <span className="text-gradient">security</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every detail was designed to keep your passwords secure, accessible
            and fully under your control.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_40px_-12px_hsl(var(--glow-primary)/0.15)]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
