import { motion, type Variants } from "framer-motion";
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

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.header
      className="w-full pb-2 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-border/50 sticky top-0 z-50"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        className="flex justify-start self-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        @andre
      </motion.span>

      <motion.div variants={itemVariants}>
        <NavigationMenu className="w-full">
          <NavigationMenuList className="cursor-pointer">
            {headerItems.map((item, index) => (
              <NavigationMenuItem key={item.label} className="cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <NavigationMenuTrigger className="hover:bg-accent/50 transition-all duration-200">
                    {item.label}
                  </NavigationMenuTrigger>
                </motion.div>
                <NavigationMenuContent className="cursor-pointer">
                  <motion.ul
                    className="grid w-[280px] gap-2 p-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {item.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: linkIndex * 0.05,
                          ease: "easeOut",
                        }}
                        whileHover={{ x: 4 }}
                      >
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            onClick={(e) => handleInternalLink(e, link.href)}
                            className="block rounded-lg px-4 py-3 hover:bg-accent/70 transition-all duration-200 group"
                          >
                            <div className="text-sm font-medium group-hover:text-primary transition-colors duration-200">
                              {link.title}
                            </div>
                            <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">
                              {link.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </motion.div>

      <motion.div
        className="flex align-middle justify-end"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ModeToggle />
      </motion.div>
    </motion.header>
  );
}
