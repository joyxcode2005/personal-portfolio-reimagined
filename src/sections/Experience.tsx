import React from "react";
import { motion } from "motion/react";


const underlineVariants = {
  initial: { x: -20, opacity: 0 },
  hover: { x: 0, opacity: 1 },
};

const Experience = ({isDark} : {isDark: boolean}) => {
  return (
    <div className="mt-10 mb-10">
      <motion.h2
        initial="initial"
        whileHover="hover"
        className={`text-4xl font-bold uppercase font-space-grotesk relative cursor-pointer text-center w-full ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Experience
        </motion.span>
        <motion.span
          variants={underlineVariants}
          className="absolute -bottom-1 left-[45%] w-[4rem] rounded-xl h-[5px] bg-green-500 dark:bg-green-400"
        />
      </motion.h2>
    </div>
  );
};

export default Experience;
