import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ArrowDown } from "lucide-react";
import Header from "./Header";

function Welcome() {
  return (
    <main className="grid h-screen grid-cols-2 grid-rows-[auto_1fr_auto] gap-1 bg-slate-100">
      <header className="col-span-2 h-fit bg-blue-200">
        <Header></Header>
        <Separator />
      </header>

      <article className="flex flex-col justify-center bg-amber-200">
        <div className="ml-5 ">
          <h2 className="bg-text text-4xl">Olá, meu nome é</h2>
          <h1 className="text-6xl">André</h1>
        </div>
      </article>

      <section className="bg-purple-200 flex justify-end items-center">
        <div>
          <img src="" alt="teste" />
        </div>
      </section>

      <span className="col-span-2 flex justify-center bg-green-200">
        <Button variant="ghost" size="icon" className="size-8">
          <ArrowDown size={48} />
        </Button>
      </span>
    </main>
  );
}

export default Welcome;
