import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { titles } from "../constant";

const AnimatingText = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span className="inline-flex min-w-[250px] justify-center items-center font-bold uppercase text-lg text-green-500">
      <AnimatePresence mode="wait">
      <motion.span
        key={titles[titleIndex]}
        className="text-center font-mono overflow-y-hidden"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {titles[titleIndex]}
      </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

export default AnimatingText;
