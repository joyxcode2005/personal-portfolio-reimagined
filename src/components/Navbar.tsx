import { motion } from "motion/react";
import { navLinks } from "../constant";
import { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { BsMoonStars } from "react-icons/bs";

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Container>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="flex justify-between items-center fixed top-0 inset-x-0 max-w-[50rem] mx-auto py-2 dark:bg-neutral-950"
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
