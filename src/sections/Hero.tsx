import {  motion } from "motion/react";
import { nameElements } from "../constant";
import ThreeDModal from "../components/ThreeDModal";
import AnimatingText from "../components/AnimatingText";
const Hero = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className="mt-30 px-4 grid grid-cols-1 md:grid-cols-2 h-[55%] items-center justify-center">
      <div className="z-2">
        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-xl font-semibold dark:text-white"
        >
          Hi, I'm
        </motion.h1>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="mt-2 text-5xl font-bold uppercase font-space-grotesk text-black dark:text-white"
        >
          {nameElements.map((nameEl, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-block mr-1"
            >
              {nameEl}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="font-fira-code mt-4 text-sm text-gray-600 dark:text-neutral-400 "
        >
          I'm a passionate <AnimatingText /> driven by the thrill of crafting
          scalable, high-performance, and user-centric web applications —
          blending clean code, thoughtful design, and robust architecture into
          every project.
        </motion.p>
      </div>
      <div className="relative w-full h-full cursor-grab">
        <ThreeDModal isDark={isDark} />
      </div>
    </section>
  );
};

export default Hero;
