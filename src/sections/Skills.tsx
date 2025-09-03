import { color, motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDocker,
  FaPython,
  FaGitSquare,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma, SiTypescript, SiLangchain, SiRedux } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";

const underlineVariants = {
  initial: { x: -20, opacity: 0 },
  hover: { x: 0, opacity: 1 },
};

const skills = [
  { name: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-500" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", Icon: FaPython, color: "text-yellow-400" },
  { name: "React", Icon: FaReact, color: "text-blue-400" },
  { name: "Tailwind CSS", Icon: RiTailwindCssFill, color: "text-blue-400" },
  { name: "MongoDB", Icon: DiMongodb, color: "text-green-600" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-600" },
  { name: "PostgreSQL", Icon: BiLogoPostgresql, color: "text-[#336791]" },
  { name: "MySQL", Icon: DiMysql, color: "text-[#4479A1]" },
  { name: "Prisma", Icon: SiPrisma, color: "text-[#123A50]" },
  { name: "Next.js", Icon: RiNextjsFill, color: "text-black dark:text-white" },
  { name: "Docker", Icon: FaDocker, color: "text-blue-500" },
  { name: "LangChain", Icon: SiLangchain, color: "text-[#1D3C3E]" },
  { name: "Git", Icon: FaGitSquare, color: "text-orange-600" },
  { name: "Redux", Icon: SiRedux, color: "text-purple-600" },
  { name: "AWS", Icon: FaAws, color: "text-slate-900 dark:text-white" },
  { name: "Framer Motion", Icon: TbBrandFramerMotion, color: "text-slate-800, dark:text-white" },
  { name: "Three Js", Icon: TbBrandThreejs, color: "text-slate-500 dark:text-slate-50"}
];

const Skills = ({ isDark }: { isDark: boolean }) => {
  return (
    <div>
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
          Skills
        </motion.span>
        <motion.span
          variants={underlineVariants}
          className="absolute -bottom-1 left-[45%] w-[4rem] rounded-xl h-[5px] bg-green-500 dark:bg-green-400"
        />
      </motion.h2>

      <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">
        {skills.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="group cursor-pointer transition hover:rotate-3"
          >
            <Icon
              className={`text-6xl ${color} transition filter group-hover:drop-shadow-[0_0_20px_rgba(16,185,30,1.0)]`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
