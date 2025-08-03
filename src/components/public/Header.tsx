import { Button } from "../ui/button";

export default function Header() {
  return (
    <nav className="flex flex-row  justify-center space-x-4 h-10 mt-4 ">
      <Button variant="ghost">habilidades</Button>
      <Button variant="ghost">títulos</Button>
      <Button variant="ghost">conhecimento</Button>
    </nav>
  );
}
