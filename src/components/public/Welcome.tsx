import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Header from "./Header";

function Welcome() {
  return (
    <div className="relative h-screen bg-background">
      <main className="relative z-10 grid h-full grid-cols-2 grid-rows-[auto_1fr_auto] gap-1">
        <header className="col-span-2 h-fitflex justify-center p-2">
          <Header></Header>
          {/* <Separator /> */}
        </header>

        <article className="flex flex-col justify-center ">
          <div className="ml-5">
            <p className="text-4xl font-bold tracking-tight text-balance">
              Olá, meu nome é
            </p>
            <h1 className="text-6xl font-extrabold tracking-tight text-balance">
              André
            </h1>
          </div>
          <p className="ml-5 pt-4 italic text">
            Sou um entusiasta da{" "}
            <mark className="p-0.5 rounded-xs bg-primary text-background">
              computação
            </mark>
            .
          </p>
        </article>

        <section className="flex items-center justify-end">
          <div>
            <img src="" alt="teste" />
          </div>
        </section>

        <span className="col-span-2 flex justify-center ">
          <Button variant="ghost" className="p-2 size-10">
            <ArrowDown className="animate-bounce text-muted-foreground" />
          </Button>
        </span>
      </main>
    </div>
  );
}

export default Welcome;
