import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface CardProps {
  title: string;
  liveLink: string;
  codeLink: string;
  bgImgLink: string;
  desc: string;
}

const Card = ({ title, liveLink, codeLink, bgImgLink, desc }: CardProps) => {
  return (
    <div
      className="relative w-[20rem] h-[25rem] rounded-lg cursor-pointer"
      style={{
        backgroundImage: `url(${bgImgLink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/50 rounded-lg"></div>

      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-2xl font-semibold leading-tight">
          {title}
        </h3>
        <div className="flex items-end justify-between">
          <p className="text-white/80 text-sm mt-2 max-w-[80%]">{desc}</p>
          <div className="flex items-center gap-3">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-white/10"
              aria-label="View live demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>

            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-white/10"
              aria-label="View source code"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
