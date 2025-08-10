import Welcome from "./components/public/Welcome.tsx";
import AboutMe from "./components/public/About.tsx";
import Experiences from "./components/public/Experiences.tsx";
import Projects from "./components/public/Projects.tsx";
import Footer from "./components/public/Footer.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="h-screen overflow-y-scroll">
        <section className="snap-start">
          <Welcome />
        </section>
        <section className="snap-start">
          <AboutMe />
        </section>
        <section className="snap-start">
          <Experiences />
        </section>
        <section className="snap-start">
          <Projects />
        </section>
        <section className="snap-start">
          <Footer />
        </section>
      </div>
    </ThemeProvider>
  );
}
