import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Separator } from "../ui/separator";

export default function Projects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col justify-between items-center mx-auto h-screen w-full">
      <main className="w-full h-[85vh] relative">
        <Carousel setApi={setApi} className="w-full h-full">
          <CarouselContent className="h-full bg-amber-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <Card className="w-full h-full rounded-none border-none">
                  <CardContent
                    className="w-full h-full p-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://source.unsplash.com/random/1600x900?sig=${index})`,
                    }}
                  >
                    <div className="absolute bottom-5 left-5 text-white text-4xl font-bold drop-shadow-lg">
                      Projeto {index + 1}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Setas de navegação sobrepostas */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70" />
        </Carousel>

        {/* Indicador de slides */}
        <div className="absolute bottom-2 w-full text-center text-sm text-white drop-shadow">
          Slide {current} de {count}
        </div>
      </main>

      <footer className="flex flex-col items-center w-full">
        <Separator />
        <h1 className="w-full h-[15vh] text-center text-5xl font-bold tracking-tight text-balance">
          Meus projetos
        </h1>
      </footer>
    </div>
  );
}
