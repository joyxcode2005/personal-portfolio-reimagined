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
    <div className="mt-10 p-4">
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
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-green-300 dark:bg-green-700 transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full mb-8 cursor-crosshair ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-1/2 px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-green-500/40 text-left
                  ${
                    isDark
                      ? "bg-green-900/20 border border-green-400/30"
                      : "bg-green-100/30 border border-green-200/50"
                  }
                  backdrop-blur-lg`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-xl font-semibold ${
                      isDark ? "text-green-300" : "text-green-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={`text-xs font-medium whitespace-nowrap ml-4 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.date}
                  </span>
                </div>
                <p className="mt-2 text-gray-800 dark:text-gray-200">
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
