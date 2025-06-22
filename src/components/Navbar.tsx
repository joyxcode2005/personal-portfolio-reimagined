import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { navLinks } from "../constant";
import { useRef, useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { BsMoonStars } from "react-icons/bs";

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDark, toggleDarkMode }: NavbarProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (ref.current) {
      if (latest > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  });

  return (
    <Container>
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          y: 10,
          maxWidth: "50rem",
          boxShadow: "none",
          borderRadius: "0",
          padding: "1rem 2rem",
        }}
        animate={{
          opacity: 1,
          y: 0,
          maxWidth: isScrolled ? "35rem" : "50rem",
          boxShadow: isScrolled
            ? isDark
              ? "0 3px 10px rgb(84,84,84,0.2)"
              : "0 3px 10px rgba(0, 0, 0, 0.2)"
            : "none",
          borderRadius: isScrolled ? "5rem" : "0",
          padding: isScrolled ? "0.5rem 1rem" : "1rem 2rem",
          top: isScrolled ? "1rem" : "0rem",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex justify-between items-center fixed top-0 inset-x-0 mx-auto py-2 bg-white dark:bg-neutral-950 glasmo z-50"
      >
        <img
          src="profile_image.jpg"
          alt="profile image"
          className="rounded-full"
          width={60}
          height={60}
        />

        <div className="flex items-center">
          {navLinks.map((navlink, idx) => (
            <Link
              to="https://www.google.com"
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-1 text-lg first-letter"
            >
              {hovered === idx && (
                <motion.span
                  layoutId="position"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-20 dark:text-white">{navlink}</span>
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-full cursor-pointer text-xl"
          >
            <BsMoonStars />
          </button>
        </div>
      </motion.div>
    </Container>
  );
};

export default Navbar;
