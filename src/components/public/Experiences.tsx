import { Card, CardContent } from "@/components/ui/card";
import atlaLogo from "../../assets/logos/atla.png";

export default function Experiences() {
  return (
    <main className="flex flex-col items-center h-[35vh] ">
      <h1 className="text-xl font-semibold p-4">Experiências</h1>

      <Card className="h-[20vh] w-[20vh]">
        <CardContent className="flex h-full items-center justify-center p-2">
          <img
            src={atlaLogo}
            alt="ATLA Ensino"
            className="h-fit w-fit object-contain"
          />
        </CardContent>
      </Card>
    </main>
  );
}
