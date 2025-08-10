import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Separator } from "../ui/separator";
import photoTech from "../../assets/images/tech-code.jpg";
import infraPhoto from "../../assets/images/infra.jpg";

export default function Projects() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto h-screen w-full ">
      <main className="w-full h-[85vh] ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full  h-max-[85vh] "
        >
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="w-fit">
                <div className="w-full max-h-full ">
                  {/* <Card>
                    <CardContent className="flex aspect-square items-center justify-center w-fit max-h-full">
                      <span className="text-3xl font-semibold">
                        {index + 1} Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Libero temporibus esse quo rem
                        corrupti quis nemo quibusdam ipsum minima nostrum nobis
                        veritatis quam harum, incidunt molestias ad expedita
                        dolore possimus.
                      </span>
                    </CardContent>
                  </Card> */}
                  <img
                    src={photoTech}
                    alt=""
                    className="object-cover w-full max-h-[85vh] blur-xs"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-3 top-[43vh]" />
          <CarouselNext className="absolute right-3 top-[43vh]" />
        </Carousel>
      </main>

      <footer className="flex flex-col items-center w-full ">
        <Separator />
        <h1 className="h-[15vh] text-center p-10 text-5xl font-bold tracking-tight text-balance">
          Meus projetos
        </h1>
      </footer>
    </div>
  );
}
