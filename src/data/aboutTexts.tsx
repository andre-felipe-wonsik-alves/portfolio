import { Separator } from "../components/ui/separator";
import { Card } from "../components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "../components/ui/dialog";
import infra from "../assets/images/infra.jpg";
const todayDate = new Date();
const initialDate = new Date("01/01/2024");

const monthsPassed = todayDate.getMonth() - initialDate.getMonth();
const yearsPassed = todayDate.getFullYear() - initialDate.getFullYear();

export const aboutTexts = {
  resumo: (
    <>
      <section>
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
          .
        </p>
        <p className="text-justify">
          Coincidentemente, me formei no ensino médio técnico da mesma
          instituição, podendo assim, me considerar um{" "}
          <span className="text-primary font-extrabold">
            técnico em informática
          </span>
          .
        </p>
        <p className="text-justify">
          Mesmo antes do ensino médio, tive vontade de seguir na área da
          computação e por isso escolhi a UTFPR. A curiosidade e interesse me
          direcionaram à computação; a ideia de uma área que se altera e expande
          a cada dia sempre me atraiu.
        </p>
      </section>
      <section className="w-50 h-full">
        <img src="" alt="" />
      </section>
    </>
  ),
  softSkills: (
    <>
      <h1 className="text-2xl font-bold">Soft skills</h1>
      <Separator className="mt-2 mb-5" />

      <div className="grid grid-cols-3 w-full h-80 gap-2">
        <Card className="flex justify-center items-center">Comunicação</Card>
        <Card className="flex justify-center items-center">
          Trabalho em equipe
        </Card>
        <Card className="flex justify-center items-center">Adaptabilidade</Card>
        <Card className="flex justify-center items-center">
          Responsabilidade
        </Card>
        <Card className="flex justify-center items-center text-center">
          Capacidade para gerenciar pessoas
        </Card>
        <Card className="flex justify-center items-center">Curiosidade</Card>
      </div>
    </>
  ),
  hardSkills: (
    <>
      <h1 className="text-2xl font-bold">Hard skills</h1>
      <Separator className="mt-2 mb-5" />

      <div className="grid grid-cols-3 w-full h-80 gap-2">
        <Dialog>
          <Card className="flex justify-center items-center">
            <DialogTrigger className="w-full h-full">Frontend</DialogTrigger>
            <DialogContent>
              <DialogHeader>Tecnologias</DialogHeader>
              teste
            </DialogContent>
          </Card>
        </Dialog>
        <Card className="flex justify-center items-center">Backend</Card>
        <Card className="flex justify-center items-center">Infraestrutura</Card>
      </div>
    </>
  ),
};
