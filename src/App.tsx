import clsx from "clsx";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Container from "./components/Container";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("mode");
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleDarkModeToggle = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <div
      className="transition-colors duration-300 ease-in-out min-h-screen flex items-start justify-start dark:bg-[#161717] h-auto"
      style={{
        backgroundImage: `${
          isDark
            ? "radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.3 ) 0.5px,transparent 0 )"
            : "radial-gradient(circle at 0.5px 0.5px, rgba(0,0,0,0.3 ) 0.5px,transparent 0 )"
        }`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <Container
        className={clsx(
          "min-h-screen bg-white dark:bg-neutral-950 p-6",
          "shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        )}
      >
        <Navbar isDark={isDark} toggleDarkMode={handleDarkModeToggle} />
        <Hero isDark={isDark} />
        <Projects />
        <Skills isDark={isDark} />
        <Experience isDark={isDark} />
        <Contact isDark={isDark} />
      </Container>
    </div>
  );
}

export default App;
