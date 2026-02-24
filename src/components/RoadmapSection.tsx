import { motion } from "framer-motion";
import { History, ClipboardList, ShieldCheck, LogIn, KeyRound, Circle, CircleCheck, Globe } from "lucide-react";

type RoadmapItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  done?: boolean;
};

const roadmapItems: RoadmapItem[] = [
  {
    icon: LogIn,
    title: "Google Authentication",
    description:
      "Sign in with your Google account quickly and securely.",
    done: true,
  },
  {
    icon: ShieldCheck,
    title: "Two-Factor Authentication (2FA)",
    description:
      "TOTP-based 2FA with QR code setup and backup codes.",
    done: true,
  },
  {
    icon: KeyRound,
    title: "Standalone Password Generator",
    description:
      "Full page generator with strength indicator and quick save to any entry type.",
    done: true,
  },
  {
    icon: ClipboardList,
    title: "Audit Log",
    description:
      "Full change history tracking across vaults and credentials.",
  },
  {
    icon: History,
    title: "Password History & Rollback",
    description:
      "Version control for credentials with the ability to restore previous passwords at any time.",
  },
  {
    icon: Globe,
    title: "Browser Extension",
    description:
      "Auto-fill credentials directly from the vault into your browser.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's <span className="text-gradient">coming next</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Features planned for the upcoming versions of Aegis Vault.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${item.done ? "bg-emerald-500/15 group-hover:bg-emerald-500/25" : "bg-primary/10 group-hover:bg-primary/20"}`}>
                <item.icon className={`w-5 h-5 ${item.done ? "text-emerald-500" : "text-primary"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {item.done ? (
                    <CircleCheck className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Circle className="w-3 h-3 text-muted-foreground/40" />
                  )}
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
