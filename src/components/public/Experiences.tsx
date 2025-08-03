import { Card, CardContent } from "@/components/ui/card";

export default function Experiences() {
  return (
    <main className="flex flex-col items-center h-[25vh] bg-cyan-200">
      <h1 className="text-2xl font-semibold p-4">Experiências</h1>

      <Card className="h-[15vh]">
        <CardContent className="flex h-fit items-center justify-center p-2">
          <span className="text-3xl font-semibold">1</span>
        </CardContent>
      </Card>
    </main>
  );
}
