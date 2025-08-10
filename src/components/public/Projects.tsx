import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { ExternalLink, Github, Play } from "lucide-react";
import photoTech from "../../assets/images/tech-code.jpg";
import infraPhoto from "../../assets/images/infra.jpg";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Servidor dedicado",
      description: "Infraestrutura local para deploy de aplicações",
      image: photoTech,
      technologies: ["Docker", "Firewall", "Coolify", "Nginx"],
      category: "Infra",
      status: "Concluído",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 2,
      title: "Minha biblioteca",
      description:
        "Estudo de Kotlin para construção de aplicativos Mobile. Consome API's com informações sobre a maioria dos livros catalogados no mundo.",
      image: infraPhoto,
      technologies: ["Kotlin", "Mobile"],
      category: "Frontend",
      status: "Concluído",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 3,
      title: "TrelloHub",
      description:
        "Aplicação para gerenciamento de issues e tarefas no Github. ",
      image: photoTech,
      technologies: ["Go", "Redis", "Docker", "Kubernetes"],
      category: "Backend",
      status: "Concluído",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "Aplicativo bancário mobile com biometria, transferências e investimentos.",
      image: infraPhoto,
      technologies: ["React Native", "TypeScript", "GraphQL"],
      category: "Mobile",
      status: "Em desenvolvimento",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 5,
      title: "Data Analytics Dashboard",
      description:
        "Dashboard interativo para análise de dados com visualizações em tempo real.",
      image: photoTech,
      technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
      category: "Data Science",
      status: "Concluído",
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const carouselVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col justify-between items-center mx-auto min-h-screen w-full py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.main className="w-full flex-1 px-6" variants={carouselVariants}>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
          onSelect={(index: any) => setCurrentProject(index || 0)}
        >
          <CarouselContent className="ml-0">
            {projects.map((project, index) => (
              <CarouselItem key={project.id} className="pl-6">
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    {/* Project Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[70vh] object-cover transition-transform duration-500 group-hover:scale-110"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Project Info Overlay */}
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-end p-8 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="space-y-4">
                        {/* Category Badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm"
                          >
                            {project.category}
                          </Badge>
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                          className="text-4xl font-bold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          {project.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          className="text-lg text-gray-200 max-w-2xl leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          {project.description}
                        </motion.p>

                        {/* Technologies */}
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.7 + techIndex * 0.1,
                              }}
                            >
                              <Badge
                                variant="outline"
                                className="bg-white/10 text-white border-white/20 backdrop-blur-sm"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                          className="flex gap-4 pt-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="lg"
                              className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                              <Play size={18} className="mr-2" />
                              Ver Demo
                            </Button>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="lg"
                              variant="outline"
                              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                            >
                              <Github size={18} className="mr-2" />
                              Código
                            </Button>
                          </motion.div>
                        </motion.div>

                        {/* Status */}
                        <motion.div
                          className="flex items-center gap-2 pt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              project.status === "Concluído"
                                ? "bg-green-400"
                                : "bg-yellow-400"
                            }`}
                          />
                          <span className="text-sm text-gray-300">
                            {project.status}
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Hover Effect Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm" />
          </motion.div>
        </Carousel>

        {/* Project Counter */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProject ? "bg-primary w-8" : "bg-muted"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.main>

      {/* Footer Section */}
      <motion.footer
        className="flex flex-col items-center w-full mt-12"
        variants={titleVariants}
      >
        <Separator className="w-full max-w-4xl mb-8" />
        <motion.div
          className="text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Meus Projetos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Uma coleção dos meus trabalhos mais recentes e significativos
          </p>
        </motion.div>
      </motion.footer>
    </motion.div>
  );
}
