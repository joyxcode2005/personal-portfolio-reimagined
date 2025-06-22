import { motion } from "motion/react";
import Card from "../components/Card";

const underlineVariants = {
  initial: { x: -20, opacity: 0 },
  hover: {
    x: 0,
    opacity: 1,
  },
};

const Projects = () => {
  return (
    <div className="mt-10 flex flex-col items-start justify-center text-black dark:text-white">
      <motion.h2
        initial="initial"
        whileHover="hover"
        className="text-4xl font-bold uppercase font-space-grotesk relative cursor-pointer text-center w-full"
      >
        <motion.span
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.3 }}
        >
          Projects
        </motion.span>
        <motion.span
          variants={underlineVariants}
          className="absolute -bottom-1 left-[45%] w-[4rem] rounded-xl h-[5px] bg-green-500 dark:bg-green-400"
        />
      </motion.h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          idx={4}
          desc="A personal portfolio website showcasing my projects and skills."
          title="Portfolio Website"
          liveLink="https://example.com/portfolio"
          codeLink="https://www.github.com"
          bgImgLink="project1.jpeg"
        />
      </div>
    </div>
  );
};

export default Projects;
