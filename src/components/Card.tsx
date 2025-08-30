import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { motion } from "motion/react";

interface CardProps {
  title: string;
  liveLink: string;
  codeLink: string;
  bgImgLink: string;
  desc: string;
  idx: number;
}

const Card = ({
  title,
  liveLink,
  codeLink,
  bgImgLink,
  desc,
  idx,
}: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative w-[20rem] h-[25rem] rounded-lg cursor-pointer"
      style={{
        backgroundImage: `url(${bgImgLink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1.5, delay: 0.2 }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/50 rounded-lg"></div>

      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 p-2">
        <h3 className="text-white text-2xl font-semibold uppercase font-space-grotesk">
          {title}
        </h3>
        <div className="flex items-end justify-between">
          <p className="text-white/80 text-sm mt-2">{desc}</p>
          <div className="flex items-center gap-3">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-green-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-white/10 rotate-y-3"
              aria-label="View live demo"
            >
              <CiLink className="-rotate-45" />
            </a>

            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-green-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-white/10"
              aria-label="View source code"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
