import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Welcome from "./components/public/Welcome.tsx";
import AboutMe from "./components/public/About.tsx";
import Experiences from "./components/public/Experiences.tsx";
import Projects from "./components/public/Projects.tsx";
import Footer from "./components/public/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Welcome />
    <AboutMe />
    <Experiences />
    <Projects />
    <Footer />
  </StrictMode>
);
