import project1 from "./assets/projects/project1.jpeg";
import project2 from "./assets/projects/project2.png";
import project3 from "./assets/projects/project3.png";
import project4 from "./assets/projects/project4.png";
import project5 from "./assets/projects/project5.png";
import project6 from "./assets/projects/project6.png";

export const navLinks = ["About", "Snippets", "Contact", "Blogs"];

export const nameElements = [
  "J",
  "o",
  "y",
  "S",
  "e",
  "n",
  "g",
  "u",
  "p",
  "t",
  "a",
  ",",
];

export const titles = [
  "Fullstack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Creative Thinker",
];

export const projects = [
  {
    id: 1,
    title: "Algo Judge",
    desc: "AI powered coding contest platform where users can solve problems and they are scored based on time, space complexity and readibility.",
    liveLink: "", 
    codeLink: "",
    bgImgLink: project2,
  },
  {
    id: 2,
    title: "Blogging Website",
    desc: "This is a blogging website where the backend is based on serverless architecture using hono and primsa + postgress.",
    liveLink: "",
    codeLink: "",
    bgImgLink: project5,
  },
  {
    id: 3,
    title: "Tutor AI",
    desc: "This is a AI tutor platform where students can come and learn, quiz and chat personalized according to their syllabus.",
    liveLink: "",
    codeLink: "",
    bgImgLink: project6,
  },
  {
    id: 4,
    title: "Course Selling Website",
    desc: "This is a course selling website similar to coursera and udemy. Build using react + express + mongodb.",
    liveLink: "",
    codeLink: "",
    bgImgLink: project4,
  },
  {
    id: 5,
    title: "Excalidraw clone",
    desc: "This is a excalidraw clone where uses get an experience similar to that of excalidraw.com, to draw and create diagrams with realtime communication.",
    liveLink: "",
    codeLink: "",
    bgImgLink: project3,
  },
  {
    id: 6,
    title: "Snippet Sharing Platform",
    desc: "Snippet Share is a platfrom where users can share code snippets with each other. Users can copy, share, view, search code snippets.",
    liveLink: "",
    codeLink: "",
    bgImgLink: project1,
  },
];

export const timelineData = [
  {
    title: "Software Engineer at TechCorp",
    date: "Jan 2022 - Present",
    description:
      "Developed and maintained web applications using React, Node.js, and TypeScript. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Frontend Developer at Innovate LLC",
    date: "May 2020 - Dec 2021",
    description:
      "Specialized in creating responsive and interactive user interfaces with modern frontend frameworks. Optimized application performance and improved user experience.",
    tags: ["Vue.js", "Next.js", "GraphQL", "Tailwind CSS"],
  },
  {
    title: "Junior Developer at StartUpX",
    date: "Jun 2019 - Apr 2020",
    description:
      "Gained foundational experience in full-stack development, working on both client-side and server-side features. Contributed to a fast-paced, agile environment.",
    tags: ["JavaScript", "HTML5", "CSS3", "Firebase"],
  },
];
