import { motion } from "framer-motion";
import { UserPlus, FolderPlus, Lock } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create your account",
    description:
      "Set up your profile and generate your cryptographic key pair in seconds.",
  },
  {
    icon: FolderPlus,
    step: "02",
    title: "Create your vaults",
    description:
      "Organize your passwords into separate vaults — personal, work, projects.",
  },
  {
    icon: Lock,
    step: "03",
    title: "Store and share",
    description:
      "Save credentials with full encryption and share vaults securely.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      {/* Subtle divider glow */}
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
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Three simple steps to protect your passwords.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border mb-6 relative">
                <s.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
