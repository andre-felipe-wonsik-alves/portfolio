import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import atlaLogo from "../../assets/logos/atla.png";
import utfprLogo from "../../assets/logos/utfpr.png";

export default function Experiences() {
  return (
    <main className="flex flex-col items-center h-[35vh] ">
      <h1 className="text-xl font-semibold p-4">Experiências profissionais</h1>

      <section className="flex gap-5">
        <Dialog>
          <Card className="h-[20vh] w-[20vh]">
            <DialogTrigger className="w-full h-full">
              <CardContent className="flex h-full items-center justify-center p-2">
                <img
                  src={atlaLogo}
                  alt="ATLA Ensino"
                  className="h-fit w-fit object-contain"
                />
              </CardContent>
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>ATLA Ensino</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                Meu primeiro contato direto com o mercado de trabalho
              </DialogDescription>
            </DialogContent>
          </Card>
        </Dialog>

        <Card className="h-[20vh] w-[20vh]">
          <CardContent className="flex h-full items-center justify-center p-2">
            <img
              src={utfprLogo}
              alt="UTFPR"
              className="h-fit w-fit object-contain"
            />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
