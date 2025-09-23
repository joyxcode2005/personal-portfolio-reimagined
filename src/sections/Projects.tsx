import { motion } from "motion/react";
import Card from "../components/Card";
import { projects } from "../constant";

const underlineVariants = {
  initial: { x: -20, opacity: 0 },
  hover: {
    x: 0,
    opacity: 1,
  },
};

const Projects = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center text-black dark:text-white">
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
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5 p-10">
        {projects.map((project) => (
          <Card
            idx={project.id}
            desc={project.desc}
            title={project.title}
            liveLink={project.liveLink || ""}
            codeLink={project.codeLink || ""}
            bgImgLink={project.bgImgLink || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
