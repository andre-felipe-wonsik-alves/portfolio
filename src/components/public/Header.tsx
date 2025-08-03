import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <nav className="flex flex-row  justify-center space-x-4 h-10 mt-4 ">
      <Button variant="ghost">habilidades</Button>
      <Separator orientation="vertical" />
      <Button variant="ghost">títulos</Button>
      <Separator orientation="vertical" />

      <Button variant="ghost">conhecimento</Button>
    </nav>
  );
}
