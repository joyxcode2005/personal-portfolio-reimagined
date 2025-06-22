import { motion } from "framer-motion"; // Ensure you are using `framer-motion`

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      duration: 12,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const techIcons = [
  "html_icon.jpg",
  "css_icon.jpg",
  "javascript_icon.jpg",
  "react_icon.jpg",
];

const AnimatedMarquee = () => {
  return (
    <div className="flex items-center justify-center mt-10 h-20 bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex whitespace-nowrap gap-10 min-w-full"
      >
        {[...techIcons, ...techIcons].map((icon, idx) => (
          <img
            key={idx}
            src={icon}
            alt={`${icon.split("_")[0]} icon`}
            className="h-12 w-12 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedMarquee;
