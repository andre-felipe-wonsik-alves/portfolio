import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { headerItems } from "@/data/headerText";

import ModeToggle from "../ui/mode-toggle";

export default function Header() {
  const handleInternalLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full flex justify-evenl">
      <span className="w-full flex justify-start self-center text-xs text-muted-foreground">
        @andre
      </span>
      <NavigationMenu className="w-full">
        <NavigationMenuList>
          {headerItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[250px] gap-2 p-2">
                  {item.links.map((link) => (
                    <li key={link.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={link.href}
                          onClick={(e) => handleInternalLink(e, link.href)}
                          className="block rounded-md px-3 py-2 hover:bg-accent"
                        >
                          <div className="text-sm font-medium">
                            {link.title}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {link.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-full flex align-middle justify-end">
        <ModeToggle></ModeToggle>
      </div>
    </header>
  );
}
