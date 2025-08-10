import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { aboutTexts } from "../../data/aboutTexts";
import { User, Brain, Code } from "lucide-react";
import {
  sidebarVariants,
  contentVariants,
  itemVariants,
  buttonVariants,
} from "./types/Variants";
export default function AboutMe() {
  const [selected, setSelected] = useState<
    "resumo" | "softSkills" | "hardSkills"
  >("resumo");

  const menuItems = [
    {
      key: "resumo" as const,
      label: "Resumo",
      icon: User,
      description: "Visão geral sobre mim",
    },
    {
      key: "softSkills" as const,
      label: "Soft Skills",
      icon: Brain,
      description: "Habilidades interpessoais",
    },
    {
      key: "hardSkills" as const,
      label: "Hard Skills",
      icon: Code,
      description: "Competências técnicas",
    },
  ];

  return (
    <motion.main
      className="grid grid-cols-1 lg:grid-cols-[350px_1fr] h-[70vh] gap-6 p-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Sidebar */}
      <motion.div
        className="p-6 flex flex-col gap-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg"
        variants={sidebarVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sobre mim
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Conheça mais sobre minha trajetória
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Separator className="bg-gradient-to-r from-primary/20 to-accent/20" />
        </motion.div>

        <motion.div className="flex flex-col gap-3" variants={itemVariants}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = selected === item.key;

            return (
              <motion.div
                key={item.key}
                variants={buttonVariants}
                initial="inactive"
                animate={isActive ? "active" : "inactive"}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 p-4 h-auto transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-accent/50"
                  }`}
                  onClick={() => setSelected(item.key)}
                >
                  <Icon size={18} />
                  <div className="text-left">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs opacity-70">{item.description}</div>
                  </div>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Progress indicator */}
        <motion.div className="mt-auto pt-4" variants={itemVariants}>
          <div className="flex gap-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.key}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  selected === item.key ? "bg-primary" : "bg-muted"
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg overflow-hidden"
        variants={contentVariants}
      >
        <ScrollArea className="h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              className="p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="prose prose-neutral dark:prose-invert max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {aboutTexts[selected]}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </ScrollArea>

        {/* Floating decoration */}
        <motion.div
          className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.main>
  );
}
