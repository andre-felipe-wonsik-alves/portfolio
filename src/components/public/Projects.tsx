import { motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel"; // shadcn
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
import { Github } from "lucide-react";
import infraPhoto from "../../assets/images/infra.jpg";
import mobilePhoto from "../../assets/images/mobile.jpg";
import githubPhoto from "../../assets/images/github.jpg";

const projects = [
  {
    id: 1,
    title: "Servidor dedicado",
    description: "Infraestrutura local para deploy de aplicações",
    image: infraPhoto,
    technologies: ["Docker", "Firewall", "Coolify", "Nginx", "Traefik"],
    category: "Infraestrutura",
    status: "Concluído",
  },
  {
    id: 2,
    title: "Minha biblioteca",
    description:
      "Estudo de Kotlin para construção de aplicativos Mobile. Consome API's com informações sobre a maioria dos livros catalogados no mundo.",
    image: mobilePhoto,
    technologies: ["Kotlin", "Mobile"],
    category: "Frontend",
    status: "Concluído",
    links: {
      demo: "#",
      github: "https://github.com/andre-felipe-wonsik-alves/bibliotecandre",
    },
  },
  {
    id: 3,
    title: "TrelloHub",
    description: "Aplicação para gerenciamento de issues e tarefas no Github.",
    image: githubPhoto,
    technologies: ["Go", "Redis", "Docker", "Kubernetes"],
    category: "Backend",
    status: "Concluído",
    links: {
      demo: "#",
      github: "https://github.com/andre-felipe-wonsik-alves/trellohub",
    },
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  // Mantém current em sincronia com o Embla
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Apenas slide ativo e vizinhos serão renderizados com <img />
  const visible = useMemo(() => {
    const len = projects.length;
    const prev = (current - 1 + len) % len;
    const next = (current + 1) % len;
    return new Set([prev, current, next]);
  }, [current]);

  return (
    <motion.div
      className="flex flex-col justify-between items-center mx-auto min-h-screen w-full py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <main className="w-full flex-1 px-6">
        <Carousel
          setApi={setApi}
          // Dica: desligar loop corta clones (menos imagens vivas)
          opts={{ align: "center", loop: false }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="ml-0">
            {projects.map((project, index) => {
              const isActive = index === current;
              const shouldLoadImage = visible.has(index);

              return (
                <CarouselItem key={project.id} className="pl-6">
                  <div
                    className="relative cursor-pointer"
                    // menos wrappers "motion", use transition do CSS
                  >
                    <div
                      // Evita shadow pesada em área grande; ring é barato
                      className="relative overflow-hidden rounded-2xl ring-1 ring-white/15"
                    >
                      {/* Imagem do projeto (virtualizada e otimizada) */}
                      {shouldLoadImage ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading={isActive ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={isActive ? "high" : "low"}
                          draggable={false}
                          className="w-full h-[70vh] object-cover transition-transform duration-500 hover:scale-105 transform-gpu will-change-transform select-none"
                          // evita reflow caro
                          style={{ contain: "paint" }}
                        />
                      ) : (
                        // Placeholder leve para manter o layout sem custo de imagem
                        <div
                          className="w-full h-[70vh] rounded-2xl bg-muted animate-pulse"
                          aria-label={`Prévia de ${project.title}`}
                        />
                      )}

                      {/* Overlay em gradiente (sem blur caro) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Info do projeto (anim mínima) */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                        <div className="space-y-4">
                          <Badge
                            variant="secondary"
                            className="bg-white/10 text-white border-white/20"
                          >
                            {project.category}
                          </Badge>

                          <h3 className="text-4xl font-bold">{project.title}</h3>

                          <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="bg-white/10 text-white border-white/20"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          {project?.links && (
                            <div className="flex gap-4 pt-4">
                              <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                              >
                                <a
                                  href={project.links.github}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <Github size={18} className="mr-2" />
                                  Código
                                </a>
                              </Button>
                            </div>
                          )}

                          <div className="flex items-center gap-2 pt-2">
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
                          </div>
                        </div>
                      </div>

                      {/* Overlay hover barato (sem blur) */}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Navegação */}
          <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>

        {/* Paginador */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        className="flex flex-col items-center w-full mt-12"
        variants={containerVariants}
      >
        <Separator className="w-full max-w-4xl mb-8" />
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Meus Projetos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Uma coleção dos meus trabalhos mais recentes e significativos
          </p>
        </div>
      </motion.footer>
    </motion.div>
  );
}
