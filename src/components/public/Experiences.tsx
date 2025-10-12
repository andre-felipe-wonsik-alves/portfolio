import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import atlaLogo from "../../assets/logos/atla.png";
import utfprLogo from "../../assets/logos/utfpr.png";

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      company: "ATLA Ensino",
      logo: atlaLogo,
      position: "Desenvolvedor e suporte ao usuário",
      period: "2023 - Presente",
      location: "Presencial",
      description: "Meu primeiro contato direto com o mercado de trabalho.",
      technologies: ["Angular", "TypeScript", "Ionic", "Langchain"],
      achievements: [
        "Construção de chatbots",
        "Backups de containers rodando em um servidor com Traefik",
        "Web design",
      ],
    },
    {
      id: 2,
      company: "UTFPR",
      logo: utfprLogo,
      position: "Aluno",
      period: "2020 - Presente",
      location: "Campo Mourão, PR",
      description:
        "Formação acadêmica focada em desenvolvimento de software e tecnologias emergentes.",
      technologies: ["C", "Python", "C++", "SQL", "Git"],
      achievements: [
        "Participação em projetos de pesquisa",
        "Desenvolvimento de aplicações acadêmicas",
        "Lecionamento de aulas sobre Retrieval Augmented Generation (RAG) na semana de informática",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants: Variants = {
    hover: {
      y: -10,
      rotateX: 5,
      rotateY: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      className="flex flex-col items-center min-h-[50vh] py-12 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Experiências Profissionais
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Minha jornada no desenvolvimento de software e tecnologia
        </p>
      </motion.div>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full"
        variants={containerVariants}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={cardVariants}
            whileHover="hover"
            style={{ perspective: 1000 }}
          >
            <Dialog>
              <motion.div variants={hoverVariants}>
                <Card className="h-[300px] cursor-pointer group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                  <DialogTrigger className="w-full h-full">
                    <CardContent className="flex flex-col h-full p-6 relative">
                      {/* Background decoration */}
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      />

                      {/* Logo */}
                      <motion.div
                        className="flex items-center justify-center mb-4 relative z-10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-20 h-20 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg">
                          <img
                            src={experience.logo}
                            alt={experience.company}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 text-center relative z-10">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {experience.company}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          {experience.position}
                        </p>

                        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            {experience.location}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <motion.div
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      >
                        <ExternalLink size={16} className="text-primary" />
                      </motion.div>
                    </CardContent>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <DialogHeader className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-lg bg-background border border-border flex items-center justify-center">
                            <img
                              src={experience.logo}
                              alt={experience.company}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          <div>
                            <DialogTitle className="text-2xl">
                              {experience.company}
                            </DialogTitle>
                            <p className="text-lg text-muted-foreground">
                              {experience.position}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            {experience.location}
                          </div>
                        </div>
                      </DialogHeader>

                      <DialogDescription className="text-base leading-relaxed mb-6">
                        {experience.description}
                      </DialogDescription>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            Tecnologias Utilizadas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            Principais Conquistas
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-2 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </DialogContent>
                </Card>
              </motion.div>
            </Dialog>
          </motion.div>
        ))}
      </motion.section>
    </motion.main>
  );
}
