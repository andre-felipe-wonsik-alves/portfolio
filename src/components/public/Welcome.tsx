import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Header from "./Header";
import { useEffect, useState } from "react";
import {
  containerVariants,
  floatingVariants,
  itemVariants,
} from "./types/Variants";
import { getRandomInt } from "../../lib/utils";

function Welcome() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "André";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <main className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-2 grid-rows-[auto_1fr_auto] gap-4 p-4">
        <header className="col-span-full">
          <Header />
        </header>

        <motion.article
          className="flex flex-col justify-center px-8 lg:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Olá, meu nome é
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {displayedText}
              <motion.span
                className="inline-block w-1 h-16 bg-primary ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground italic leading-relaxed"
            variants={itemVariants}
          >
            Sou um entusiasta da{" "}
            <motion.mark
              className="px-2 py-1 rounded-md bg-primary font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              computação
            </motion.mark>
            .
          </motion.p>
        </motion.article>

        <motion.section
          className="flex items-center justify-center lg:justify-end px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* NOVO: animação no fundo da tela */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                top: `${getRandomInt(i, 10) * getRandomInt(i, 8) + 10}%`,
                left: `${getRandomInt(i, 10) * getRandomInt(i, 5)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}

         
        </motion.section>

        <motion.span
          className="col-span-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="ghost"
              className="p-3 size-12 rounded-full hover:bg-accent/50 transition-all duration-200"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="text-muted-foreground" size={20} />
              </motion.div>
            </Button>
          </motion.div>
        </motion.span>
      </main>
    </div>
  );
}

export default Welcome;
