import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

interface CardProps {
  title: string;
  liveLink: string;
  codeLink: string;
  bgImgLink: string;
  desc: string;
  idx: number;
  status?: string;
}

const Card = ({
  title,
  liveLink,
  codeLink,
  bgImgLink,
  desc,
  idx,
  status,
}: CardProps) => {
  return (
    <motion.div
      className="group relative w-[20rem] h-[26rem] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 cursor-pointer"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: idx * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
    >
      {/* Background image */}
      <motion.img
        src={bgImgLink}
        alt={`${title} project preview`}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.07 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Overall subtle darkening */}
      <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/5" />

      {/* Bottom gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-95" />

      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Project number */}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
          Project {String(idx).padStart(2, "0")}
        </span>

        {status && (
          <span className="rounded-full border border-amber-300/30 bg-amber-950/60 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-amber-100 backdrop-blur-md">
            In development
          </span>
        )}
      </div>

      {/* External links */}
      <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live`}
            onClick={(e) => e.stopPropagation()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white hover:text-black"
          >
            <CiLink className="-rotate-45 text-xl" />
          </a>
        )}

        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code`}
            onClick={(e) => e.stopPropagation()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white hover:text-black"
          >
            <FaGithub className="text-[17px]" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <motion.div
          initial={{ y: 8 }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Title */}
          <h3 className="font-space-grotesk text-2xl font-semibold uppercase tracking-tight text-white">
            {title}
          </h3>

          {/* Description */}
          <div className="mt-3 rounded-xl border border-white/10 bg-black/25 p-3 backdrop-blur-md">
            <p className="line-clamp-5 text-sm leading-6 text-white/75">
              {desc}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hover border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/0 transition-all duration-500 group-hover:border-white/20" />

      {/* Bottom accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-white"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default Card;