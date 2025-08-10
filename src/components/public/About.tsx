import { useState } from "react";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { aboutTexts } from "../../data/aboutTexts";

export default function AboutMe() {
  const [selected, setSelected] = useState<
    "resumo" | "softSkills" | "hardSkills"
  >("resumo");

  return (
    <main className="grid grid-cols-[300px_1fr] h-[65vh]">
      {/* Sidebar */}
      <div className="p-4 flex flex-col gap-4 bg-sidebar rounded-es-2xl">
        <h2 className="text-2xl font-bold">Sobre mim</h2>
        <Separator />
        <Button
          className="cursor-pointer"
          variant="link"
          onClick={() => setSelected("resumo")}
        >
          Resumo
        </Button>
        <Button
          className="cursor-pointer"
          variant="link"
          onClick={() => setSelected("softSkills")}
        >
          Soft skills
        </Button>
        <Button
          className="cursor-pointer"
          variant="link"
          onClick={() => setSelected("hardSkills")}
        >
          Hard skills
        </Button>
      </div>

      <div className="bg-sidebar rounded-br-2xl">
        <ScrollArea className="p-4 space-y-4">
          {aboutTexts[selected]}
        </ScrollArea>
      </div>
    </main>
  );
}
