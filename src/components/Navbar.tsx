import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { navLinks } from "../constant";
import { useRef, useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { BsMoonStars } from "react-icons/bs";
// import profile_image from "../assets/profile_image.jpg";

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDark, toggleDarkMode }: NavbarProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        className="flex justify-end items-center fixed top-0 inset-x-0 mx-auto py-6 bg-white dark:bg-neutral-950 z-50"
      >
        {/* <img
          src={profile_image}
          alt="profile image"
          className="rounded-full"
          width={60}
          height={60}
        /> */}
        <div className="flex items-center gap-4 ">
          {/* Desktop nav */}
          <div className="lg:flex items-center hidden">
            {navLinks.map((navlink, idx) => (
              <Link
                to=""
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-4 py-1 text-lg"
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
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black dark:text-white text-2xl p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              ☰ {/* You can replace with an icon from react-icons */}
            </button>
          </div>

          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-full cursor-pointer text-xl"
          >
            <BsMoonStars />
          </button>
        </div>
      </motion.div>
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden flex flex-col gap-2 mt-2 bg-white dark:bg-neutral-950 rounded-md shadow-md p-4"
        >
          {navLinks.map((navlink, idx) => (
            <Link
              to=""
              key={idx}
              onClick={() => setIsMenuOpen(false)} // close after click
              className="px-4 py-2 text-lg text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
            >
              {navlink}
            </Link>
          ))}
        </motion.div>
      )}
    </Container>
  );
};

export default Navbar;
