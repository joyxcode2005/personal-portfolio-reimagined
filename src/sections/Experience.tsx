import React from "react";
import { motion } from "framer-motion"; // Note: Changed from motion/react to framer-motion for standard use
import { timelineData } from "../constant";

const underlineVariants = {
  initial: { x: -20, opacity: 0 },
  hover: { x: 0, opacity: 1 },
};

// Mock timelineData for demonstration purposes

const Experience = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="mt-10 px-2 py-4 sm:px-4">
      <motion.h2
        initial="initial"
        whileHover="hover"
        className={`text-4xl font-bold uppercase font-space-grotesk relative cursor-pointer text-center w-full mb-12 ${
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
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[4rem] rounded-xl h-[5px] bg-green-500 dark:bg-green-400"
        />
      </motion.h2>
      <div className="relative mx-auto max-w-5xl pb-4">
        <div className="absolute left-4 top-0 h-full w-px bg-green-300 dark:left-1/2 dark:bg-green-700 md:left-1/2 md:-translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative mb-8 flex w-full items-start md:mb-12"
          >
            <div className="absolute left-4 top-7 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-green-500 shadow-[0_0_0_5px_rgba(34,197,94,0.18)] dark:border-neutral-950 dark:bg-green-400 md:left-1/2"></div>
            <div className={`w-full pl-10 md:w-1/2 md:px-8 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden rounded-2xl border-l-4 p-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/30 sm:p-6
                  ${
                    isDark
                      ? "border-green-400 bg-neutral-900/80"
                      : "border-green-600 bg-white/80"
                  }
                  backdrop-blur-lg`}
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <h3
                    className={`text-xl font-semibold ${
                      isDark ? "text-green-300" : "text-green-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.date}
                  </span>
                </div>
                <p className="max-w-prose text-sm leading-6 text-gray-800 dark:text-gray-200">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDark
                          ? "bg-green-500/20 text-green-300"
                          : "bg-green-200/50 text-green-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
