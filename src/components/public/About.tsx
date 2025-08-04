import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";

export default function AboutMe() {
  return (
    <main className="grid grid-cols-[300px_1fr] h-[65vh] ">
      <div className="p-4 flex flex-col gap-4 bg-sidebar rounded-es-2xl">
        <h2 className="text-2xl font-bold">Sobre mim</h2>
        <Separator />
        <Button variant="link" className="">
          Resumo
        </Button>
        <Button variant="link">Soft skills</Button>
        <Button variant="link">Hard skills</Button>
      </div>
      <div className="bg-sidebar rounded-br-2xl">
        <ScrollArea className="p-4">
          <p>Conteúdo principal aqui.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nesciunt ducimus id deleniti voluptatibus nostrum
            perspiciatis harum architecto tenetur, debitis facere, vel quis a
            beatae expedita libero, repellendus atque possimus cupiditate! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate,
            soluta velit minus dicta minima accusantium fuga architecto eaque
            quidem placeat temporibus impedit eius rem enim nobis. Pariatur, a
            nobis.
          </p>
        </ScrollArea>
      </div>
    </main>
  );
}
