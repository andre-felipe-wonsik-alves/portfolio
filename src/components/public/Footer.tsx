import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Send,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:andre@example.com",
      color: "hover:text-red-600",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-background via-background to-accent/5 border-t border-border/50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decoration */}
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

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Section - Info & Social */}
        <motion.section
          className="flex flex-col justify-center p-8 lg:p-16 space-y-8"
          variants={itemVariants}
        >
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ©andré
            </h2>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Desenvolvedor de sistemas e infraestruturas adequadas.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold">Conecte-se comigo</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`p-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 ${social.color}`}
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              {["Sobre", "Projetos", "Experiências", "Contato"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Credits */}
          <motion.div
            className="text-xs text-muted-foreground space-y-2 pt-8 border-t border-border/50"
            variants={itemVariants}
          >
            <p>
              Fotos por{" "}
              <a
                href="https://unsplash.com/@lucabravo"
                className="hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Luca Bravo
              </a>{" "}
              e{" "}
              <a
                href="https://unsplash.com/@nate_dumlao"
                className="hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nathan Dumlao
              </a>{" "}
              no Unsplash
            </p>
          </motion.div>
        </motion.section>

        {/* Right Section - Contact Form */}
        <motion.section
          className="flex flex-col justify-center p-8 lg:p-16 bg-card/30 backdrop-blur-sm border-l border-border/50"
          variants={itemVariants}
        >
          <motion.div
            className="max-w-md mx-auto w-full space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Vamos conversar?</h2>
              <p className="text-muted-foreground">
                Tem algum projeto em mente? Adoraria ouvir suas ideias!
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="space-y-2"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="name" className="text-sm font-medium">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background/50 border-border/50 focus:border-primary transition-all duration-200"
                  required
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background/50 border-border/50 focus:border-primary transition-all duration-200"
                  required
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-me sobre seu projeto..."
                  value={formData.message}
                  onChange={(e: any) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background/50 border-border/50 focus:border-primary transition-all duration-200 min-h-[120px] resize-none"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Enviando...
                    </motion.div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={18} />
                      Enviar Mensagem
                    </div>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.section>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between p-6 text-sm text-muted-foreground">
          <motion.p
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Feito por André
          </motion.p>
          <p>Caso queira usar esse modelo, me refencie, por favor!</p>
        </div>
      </motion.div>
    </motion.footer>
  );
}
