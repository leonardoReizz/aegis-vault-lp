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
      "Criptografia de nível militar com AES-256-GCM combinada com chaves RSA para máxima proteção dos seus dados.",
  },
  {
    icon: FolderLock,
    title: "Múltiplos Cofres",
    description:
      "Organize suas senhas em cofres separados por contexto — trabalho, pessoal, projetos e muito mais.",
  },
  {
    icon: Share2,
    title: "Compartilhamento Seguro",
    description:
      "Compartilhe cofres entre usuários usando criptografia assimétrica RSA. Só quem tem a chave acessa.",
  },
  {
    icon: Cloud,
    title: "Sync na Nuvem",
    description:
      "Sincronização opcional por cofre. Você decide o que fica local e o que vai para a nuvem.",
  },
  {
    icon: KeyRound,
    title: "Gerador de Senhas",
    description:
      "Gere senhas fortes e únicas com um clique. Controle o tamanho, caracteres e complexidade.",
  },
  {
    icon: Star,
    title: "Favoritos",
    description:
      "Acesse rapidamente as credenciais que você mais usa com o sistema de favoritos integrado.",
  },
  {
    icon: HardDrive,
    title: "Backup de Chaves",
    description:
      "Exporte e importe suas chaves privadas com segurança. Nunca perca o acesso aos seus cofres.",
  },
  {
    icon: Monitor,
    title: "Multiplataforma",
    description:
      "Disponível para macOS (ARM e Intel), Windows e Linux. A mesma experiência em qualquer sistema.",
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
            Segurança sem <span className="text-gradient">compromisso</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Cada detalhe foi pensado para manter suas senhas seguras, acessíveis
            e sob seu controle total.
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
