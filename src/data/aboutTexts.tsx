import { Separator } from "../components/ui/separator";
import { Card } from "../components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "../components/ui/dialog";
const todayDate = new Date();
const initialDate = new Date("01/01/2024");
import me from "../assets/images/me.jpeg";
import {
  MessageSquare,
  Users,
  Shuffle,
  ShieldCheck,
  UserCog,
  Lightbulb,
  Brain,
  Timer,
  Puzzle,
  Monitor,
  Server,
  Cloud,
  CheckCircle2,
} from "lucide-react";

const monthsPassed = todayDate.getMonth() - initialDate.getMonth();
const yearsPassed = todayDate.getFullYear() - initialDate.getFullYear();

export const aboutTexts = {
  resumo: (
    <>
      <section className="text-xl leading-relaxed">
        {/* Imagem retangular flutuando à direita */}
        <img
          src={me}
          alt="Foto de André Felipe"
          className="float-right w-48 md:w-64 h-auto object-cover ml-4 md:ml-6 mb-2 rounded-lg select-none"
          width={640} // ajuda o layout a reservar espaço e evitar CLS
          height={400}
          loading="lazy"
          decoding="async"
        />

        <p className="text-justify">
          Me chamo André Felipe Wonsik Alves, tenho{" "}
          {todayDate.getFullYear() - 2005} anos e, atualmente, sou um estudante
          do {Math.ceil((yearsPassed * 12 + monthsPassed) / 6)}º semestre do
          curso de{" "}
          <span className="font-extrabold text-primary">
            Ciência da Computação
          </span>{" "}
          na{" "}
          <span className="font-extrabold text-primary">
            Universidade Tecnológica Federal do Paraná (UTFPR)
          </span>
          . Coincidentemente, me formei no ensino médio técnico da mesma
          instituição, habilitado como{" "}
          <span className="text-primary font-extrabold">
            técnico em informática
          </span>
          .
        </p>

        <p className="text-justify mt-4">
          Mesmo antes do ensino médio, sempre tive vontade de seguir na área da
          computação e por isso escolhi a UTFPR. A curiosidade e interesse me
          direcionaram à computação; a ideia de uma área que se altera e expande
          a cada dia sempre me atraiu.
        </p>

        <p className="text-justify mt-4">
          <span className="italic">
            Assim, me considero uma pessoa capacitada e empenhada para entender
            diferentes microcosmos desse universo tão grande que é a computação.
          </span>
        </p>

        <p className="text-justify mt-4">
          <span className="font-extrabold text-primary">
            Me interesso muito, principalmente, por serviços relacionados à
            infraestrutura e <span className="italic">backend</span>
          </span>
          . Entendo sobre <span className="italic">CI/CD</span>, hospedagem de
          serviços, gerenciamento de DNS, manuseio de sistemas em servidores,
          boas práticas de programação, entre outros. Além disso, entendo o
          suficiente de computação gráfica (relacionada com{" "}
          <span className="italic">shaders</span> e GPU) e criação de jogos para
          o desenvolvimento de alguns projetos com o intuito de serem{" "}
          <span className="italic">hobbies</span>.
        </p>

        {/* Blockquote no estilo Markdown */}
        <figure className="mt-6 clear-both">
          <blockquote className="border-l-4 border-border pl-4 md:pl-6 italic text-muted-foreground">
            “Se eu vi mais longe, foi por estar sobre o ombro de gigantes”
          </blockquote>
          <figcaption className="mt-2 pl-4 md:pl-6 text-sm text-muted-foreground">
            — <cite className="not-italic">Isaac Newton</cite>
          </figcaption>
        </figure>
      </section>
    </>
  ),
  softSkills: (
    <>
      <h1 className="text-2xl font-bold">Soft skills</h1>
      <Separator className="mt-2 mb-5" />

      <div className="grid grid-cols-3 w-full h-80 gap-2">
        <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60">
          <div className="relative w-15 h-full bg-primary/10 flex items-center justify-center">
            <MessageSquare className="h-3/5 w-3/5 text-primary" aria-hidden />
            <span
              className="absolute inset-y-0 right-0 w-px bg-primary/20"
              aria-hidden
            />
          </div>
          <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Comunicação
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-tight">
              clara e objetiva
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Card>

        {/* Trabalho em equipe */}
        <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60">
          <div className="relative w-15 h-full bg-primary/10 flex items-center justify-center">
            <Users className="h-3/5 w-3/5 text-primary" aria-hidden />
            <span
              className="absolute inset-y-0 right-0 w-px bg-primary/20"
              aria-hidden
            />
          </div>
          <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Trabalho em equipe
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-tight">
              colaboração e empatia
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Card>

        {/* Adaptabilidade */}
        <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60">
          <div className="relative w-15 h-full bg-primary/10 flex items-center justify-center">
            <Shuffle className="h-3/5 w-3/5 text-primary" aria-hidden />
            <span
              className="absolute inset-y-0 right-0 w-px bg-primary/20"
              aria-hidden
            />
          </div>
          <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Adaptabilidade
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-tight">
              flexível a mudanças
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Card>

        {/* Responsabilidade */}
        <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60">
          <div className="relative w-15 h-full bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="h-3/5 w-3/5 text-primary" aria-hidden />
            <span
              className="absolute inset-y-0 right-0 w-px bg-primary/20"
              aria-hidden
            />
          </div>
          <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Responsabilidade
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-tight">
              compromisso com resultados
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Card>

        {/* Capacidade para gerenciar pessoas */}
        <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60">
          <div className="relative w-15 h-full bg-primary/10 flex items-center justify-center">
            <UserCog className="h-3/5 w-3/5 text-primary" aria-hidden />
            <span
              className="absolute inset-y-0 right-0 w-px bg-primary/20"
              aria-hidden
            />
          </div>
          <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Capacidade para gerenciar pessoas
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-tight">
              liderança e organização
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Card>

        {/* Curiosidade */}
        <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60">
          <div className="relative w-15 h-full bg-primary/10 flex items-center justify-center">
            <Lightbulb className="h-3/5 w-3/5 text-primary" aria-hidden />
            <span
              className="absolute inset-y-0 right-0 w-px bg-primary/20"
              aria-hidden
            />
          </div>
          <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Curiosidade
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-tight">
              aprender continuamente
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Card>
        {/* Resolução de problemas */}
        <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60">
          <div className="relative w-15 h-full bg-primary/10 flex items-center justify-center">
            <Puzzle className="h-3/5 w-3/5 text-primary" aria-hidden />
            <span
              className="absolute inset-y-0 right-0 w-px bg-primary/20"
              aria-hidden
            />
          </div>
          <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Resolução de problemas
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-tight">
              diagnóstico e solução rápida
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Card>

        {/* Gestão do tempo */}
        <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60">
          <div className="relative w-15 h-full bg-primary/10 flex items-center justify-center">
            <Timer className="h-3/5 w-3/5 text-primary" aria-hidden />
            <span
              className="absolute inset-y-0 right-0 w-px bg-primary/20"
              aria-hidden
            />
          </div>
          <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Gestão do tempo
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-tight">
              priorizar e cumprir prazos
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Card>

        {/* Pensamento crítico */}
        <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60">
          <div className="relative w-15 h-full bg-primary/10 flex items-center justify-center">
            <Brain className="h-3/5 w-3/5 text-primary" aria-hidden />
            <span
              className="absolute inset-y-0 right-0 w-px bg-primary/20"
              aria-hidden
            />
          </div>
          <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              Pensamento crítico
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-tight">
              analisar com profundidade
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Card>
      </div>
    </>
  ),

  hardSkills: (
    <>
      <h1 className="text-2xl font-bold">Hard skills</h1>
      <Separator className="mt-2 mb-5" />

      <div className="grid grid-cols-3 w-full h-80 gap-2">
        {/* Frontend */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="group flex flex-row h-full min-h-[7.5rem] overflow-hidden border-border/60 cursor-pointer">
              <div className="relative w-16 md:w-20 h-full bg-primary/10 flex items-center justify-center">
                <Monitor className="h-3/5 w-3/5 text-primary" aria-hidden />
                <span
                  className="absolute inset-y-0 right-0 w-px bg-primary/20"
                  aria-hidden
                />
              </div>
              <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  Frontend
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  UI moderna e acessível
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <h3 className="text-xl font-bold">Frontend</h3>
              <p className="text-sm text-muted-foreground">
                Tecnologias e práticas
              </p>
            </DialogHeader>
            <ul className="grid grid-cols-2 gap-2 pt-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Framer Motion",
                "Vite",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>

        {/* Backend */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60 cursor-pointer">
              <div className="relative w-16 md:w-20 h-full bg-primary/10 flex items-center justify-center">
                <Server className="h-3/5 w-3/5 text-primary" aria-hidden />
                <span
                  className="absolute inset-y-0 right-0 w-px bg-primary/20"
                  aria-hidden
                />
              </div>
              <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  Backend
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  APIs rápidas e seguras
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <h3 className="text-xl font-bold">Backend</h3>
              <p className="text-sm text-muted-foreground">
                Tecnologias e práticas
              </p>
            </DialogHeader>
            <ul className="grid grid-cols-2 gap-2 pt-2">
              {[
                "Go",
                "Node.js",
                "REST",
                "WebSockets",
                "Redis",
                "PostgreSQL",
                "Autenticação/JWT",
                "Testes automatizados",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>

        {/* Infraestrutura */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="group flex flex-row min-h-[7.5rem] overflow-hidden border-border/60 cursor-pointer">
              <div className="relative w-16 md:w-20 h-full bg-primary/10 flex items-center justify-center">
                <Cloud className="h-3/5 w-3/5 text-primary" aria-hidden />
                <span
                  className="absolute inset-y-0 right-0 w-px bg-primary/20"
                  aria-hidden
                />
              </div>
              <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  Infraestrutura
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  deploys estáveis e seguros
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <h3 className="text-xl font-bold">Infraestrutura</h3>
              <p className="text-sm text-muted-foreground">
                Tecnologias e práticas
              </p>
            </DialogHeader>
            <ul className="grid grid-cols-2 gap-2 pt-2">
              {[
                "Docker",
                "Kubernetes",
                "Nginx",
                "Traefik",
                "CI/CD (GitHub Actions)",
                "Linux/SSH",
                "Firewall",
                "Coolify",
                "Cloudflare DNS",
                "Monitoramento (Grafana)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </>
  ),
};
