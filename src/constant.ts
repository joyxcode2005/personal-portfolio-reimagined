import tutorAI from "./assets/projects/tutor_ai.png";
import dripduo from "./assets/projects/dripduo.jpeg";
import technoworldbooks from "./assets/projects/technoworldbooks.png";
import kdic from "./assets/projects/kdic.png";

export const navLinks = ["About", "Snippets", "Blogs"];

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
    title: "Quill",
    desc: "A real-time collaborative whiteboard platform where users can work together, discuss topics, and interact through role-based rooms with editors and spectators. Currently in development with real-time synchronization, AI assistance, activity tracking, voice-session summaries, and live references planned.",
    liveLink: "",
    codeLink: "https://github.com/joyxcode2005/Quill.git",
    bgImgLink: "",
  },
  {
    id: 2,
    title: "Tutor.AI",
    desc: "An AI-powered personalized learning platform where students can learn, chat, and take quizzes based on their syllabus. Built with a full-stack architecture integrating AI orchestration, vector search, and personalized learning workflows.",
    liveLink: "",
    codeLink: "https://github.com/joyxcode2005/TUTOR-AI.git",
    bgImgLink: tutorAI,
  },
  {
    id: 3,
    title: "Dripduo",
    desc: "A full-stack e-commerce platform for a clothing business with an admin panel, order management, payment integration, Google authentication, and map-based functionality. I handled the backend, database, deployment, and contributed to frontend responsiveness and design.",
    liveLink: "https://dripduo.vercel.app/",
    codeLink: "https://github.com/joyxcode2005/DRIPDUO.git",
    bgImgLink: dripduo,
  },
  {
    id: 4,
    title: "Techno World Books",
    desc: "A custom full-stack e-commerce platform with integrated order processing, payments, delivery workflows, and an admin panel. Includes Razorpay, India Post, WhatsApp, SMS, email, image processing, and cloud infrastructure integrations.",
    liveLink: "https://technoworldbooks.in/",
    codeLink: "https://github.com/mxsourav/techno-world-books.git",
    bgImgLink: technoworldbooks,
  },
  {
    id: 5,
    title: "KDIC",
    desc: "A modern institutional website for the Kathakali Debnath Innovation Centre, showcasing innovations, research, centre information, and announcements from the college.",
    liveLink: "https://www.kdic.org.in/",
    codeLink: "",
    bgImgLink: kdic,
  },
];

export const timelineData = [
  {
    title: "Full Stack Developer at Techno World Books",
    date: "Aug 2026 - Present",
    description:
      "Building a custom full-stack e-commerce platform with end-to-end ownership across frontend, backend, DevOps, and business integrations. Implementing custom order, payment, processing, and delivery workflows, along with an admin panel, Razorpay payments, India Post integration, WhatsApp and SMS notifications, transactional emails, and cloud infrastructure.",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "AWS",
      "Razorpay",
      "Cloudinary",
    ],
  },
  {
    title: "Full Stack Developer at Dripduo",
    date: "Mar 2026 - Present",
    description:
      "Co-developed a full-stack e-commerce platform for a clothing business, taking primary ownership of the backend, database architecture, and deployment. Contributed to frontend responsiveness and design while implementing order management, payment integration, Google authentication, maps, and the supporting commerce infrastructure.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Supabase",
      "Razorpay",
      "Google APIs",
    ],
  },
  {
    title: "Full Stack Developer at MeghInfoTech",
    date: "Sep 2025 - May 2026",
    description:
      "Worked as a part-time full-stack developer, leading development of the company's landing page from design through implementation alongside another frontend developer. Played an integral role in building Tutor.AI with independent ownership of frontend, backend, databases, schemas, DevOps, and feature implementation while contributing to technical direction and product decisions.",
    tags: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "LangChain",
      "Pinecone",
      "Tailwind CSS",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Frontend Developer at KDIC",
    date: "Aug 2025 - Dec 2025",
    description:
      "Contributed to the frontend development of the Kathakali Debnath Innovation Centre website, a platform showcasing college innovations, research, centre information, and announcements. Built responsive interfaces and helped deliver the project using a modern React-based stack.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Pages",
    ],
  },
];