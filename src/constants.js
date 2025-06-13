// Skills Section Logo's

// frontend
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import tailwindcssLogo from "./assets/tech_logo/Tailwind.png";

// language
import javaLogo from "./assets/tech_logo/java.png";
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

// tools
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel1.png";
import eclipseLogo from "./assets/tech_logo/eclipse1.png";

// Database
import mongoDBLogo from "./assets/tech_logo/mongodb.png";
import mySQLLogo from "./assets/tech_logo/mysql.png";
import SQLLogo from "./assets/tech_logo/sql1.png";

// Education Section Logo's

import collegelogo from "./assets/education_logo/college1.png";


// Project Section Logo's

import E_commerceVideo from "./assets/work_logo/e-commerce.png";
import portfoliologo from "./assets/work_logo/portfolio.png";
import exam_systemlogo from "./assets/work_logo/examsystem.png";
import ailogo from "./assets/work_logo/ai.jpg";
import e_shop from "./assets/work_logo/e-shop.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "React JS", logo: reactjsLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Eclipse", logo: eclipseLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
  {
    title: "DataBase",
    skills: [
      { name: "MongoDB", logo: mongoDBLogo },
      { name: "MySQL", logo: mySQLLogo },
      { name: "SQL", logo: SQLLogo },
    ],
  },
];

export const education = [
  {
    id: 1,
    img: collegelogo,
    school: "Sou. Shobhakaki Babar BCA College, Vita",
    date: "2022 - 2025",
    CGPA: 7.5/10,
    grade: "First Class with Distinction",
    desc: "I am Completed my Bachelor of Computer Application (BCA) degree from Sou. Shobhakaki Babar BCA College, Vita, under Shivaji University, Kolhapur.",
    degree: "Bachelor of Computer Application (BCA)",
  },
  {
    id: 2,

    school: "Balwant College, Vita",
    date: "2022",
    grade: "49.17",
    desc: "I completed my HSC education from Balwant College, Vita, under the kolhapur board, where I studied Science with Mathematics and Computer Science.",
    degree: "Kolhapur board(XII) ",
  },
  {
    id: 3,

    school: "Sheth Ch.G.Shaha Viedyamandir ,Lengare",
    date: "2020",
    grade: "82.60%",
    desc: "I completed my SSC education from Sheth Ch.G.Shaha Viedyamandir, Lengare, under the Kolhapur board.",
    degree: "Kolhapur board(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "E-commerce application",
    description:
      "Full Stack web application using React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Flowbite",
    image: E_commerceVideo,

    tags: ["HTML", "CSS", "Tailwind Css", "JavaScript", "React JS", "Node JS", "Express JS", "MongoDB"],
    github: "https://github.com/nikhil5050/E-Commerce-Application",
    webapp: "https://e-commerce-application-vxn8.vercel.app/",
  },
  {
    id: 1,
    title: "Online Exam Management System",
    description:
      "Online Exam Management System is a web-based application designed to simplify and automate the process of conducting exams online. It allows administrators to create and manage exams, add questions, and evaluate results.Students can register, log in, take exams, and view their results in real-time.",

    image: exam_systemlogo,
    tags: ["Php", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "SQL"],
    github: "https://github.com/nikhil5050/Online-Exam-Managment-System",
    webapp: "#",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built with React to showcase my projects, skills, and professional experience in a modern, responsive design.",

    image: portfoliologo,
    tags: ["HTML", "CSS", "JavaScript", "bootstrap"],
    github: "https://github.com/nikhil5050/nikhilportfolio.github.io",
    webapp: "https://nikhil5050.github.io/nikhilportfolio.github.io/",
  },
  {
    id: 3,
    title: "Ai Virtual Assistant",
    description:
      "An AI Virtual Assistant is a web application that utilizes OpenAI's GPT-3.5 Turbo model to provide users with a conversational interface for various tasks, such as answering questions, providing information, and assisting with daily activities.",

    image: ailogo,
    tags: ["HTML", "CSS", "JavaScript", "bootstrap"],
    github: "https://github.com/nikhil5050/AIVirtualAssistant.github.io",
    webapp: "#",
  },
  {
    id: 4,
    title: "E-commerce-Shop",
    description:
      "E-commerce-Shop is a web application that allows users to browse. It features a user-friendly interface",

    image: e_shop,
    tags: ["HTML", "CSS", "JavaScript", "bootstrap"],
    github: "https://github.com/nikhil5050/E-commerce-Shop",
    webapp: "https://nikhil5050.github.io/E-commerce-Shop/",
  },
];
