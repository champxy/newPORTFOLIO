const project1 = "/assets/projects/project1.png";
const project2 = "/assets/projects/project2.png";
const project3 = "/assets/projects/project3.png";
const project4 = "/assets/projects/covaaproject.png";
const project5 = "/assets/projects/project4.png";
const project6 = "/assets/projects/project5.png";
const project7 = "/assets/projects/project6.png";
const project8 = "/assets/projects/project7.png";
const project9 = "/assets/projects/kingcamp.png";


export const HERO_CONTENT = `I'm not that good, but I never give up. I don't quit. I’m always hungry for more, always open to learning and improving. I try to get better every day and do everything for my mom. I'm incredibly patient if you don’t believe me, I’ve been a Manchester United fan for over 10 years.`;

export const ABOUT_TEXT = `I am a web developer with practical experience of 0 years. I graduated from KMUTNB I.T.I with First Class Honors. Currently, I’m continuing to learn web development and am looking for opportunities to apply my skills. I am a self-taught developer, and I’ve been honing my craft for the past 4 years.
I have experience with HTML, CSS, JavaScript, React, Node.js, PHP, NEXTjs, and Tailwind CSS. I’m also familiar with Git, GitHub, and Copilot.
I am passionate about web development and excited to keep learning and growing as a developer.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    id : "01",
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Vite","React", "Node.js", "Express", "Mysql", "Tailwind CSS"],
    livehref : "https://shop-react-qham.vercel.app",
    github : "https://github.com/champxy/shop-react"
  },
  {
    id : "02",
    title: "TheRedLine App",
    image: project2,
    description:
      "About The Redline Application, This project involves the development of The Redline application using the Flutter framework, Google Auth and Firebase(Realtime)",
    technologies: ["Flutter","Firebase","Google Auth","Longdoo Map"],
    github : "https://github.com/champxy/shop-react"
  },
  {
    id : "03",
    title: "Space Reservation",
    image: project3,
    description:
      "A space reservation system for booking space for events, with features like user authentication, booking management, and admin dashboard.",
    technologies: ["HTML", "PHP", "Daisy ui", "phpmyadmin"],
    github : "https://github.com/champxy/Space_Reservation.git"
  },
  {
    id : "04",
    title: "Authentication System",
    image: project4,
    description:
      "Centos7 sever sevice for DHCP authendication system and web application for user management.",
    technologies: ["Centos7", "Bootstrap", "PHP", "MariaDB"],
    github : "https://github.com/champxy/AuthwithCentos7"
  },
  {
    id : "05",
    title: "Registration system ",
    image: project5,
    description:
      "This project involves the development of an Employee Party Registration System using PHP OOP Classes and JavaScript, with styling powered by Tailwind CDN",
    technologies: ["HTML", "PHP", "Tailwind CSS", "phpmyadmin"],
    github : "https://github.com/champxy/Employee-party-registration-system"
  },
  {
    id : "06",
    title: "Weather site",
    image: project6,
    description:
      "A weather site that displays the weather of the city you entered using the OpenWeatherMap API and user per day limit.",
    technologies: ["Vite","React", "Nodejs", "Express", "OpenWeather API", "Tailwind CSS", "Longdoo Map","Mysql"],
    github : ""
  },
  {
    id : "07",
    title: "Prediction System",
    image: project7,
    description:
      "This workshop involves the development of a prediction system [in future i'll put web-socekt for real-time prediction] .",
    technologies: ["Vite","React", "Nodejs", "Express","Tailwind CSS", "Mysql"],
    github : ""
  },
  {
    id : "08",
    title: "PennyPincher",
    image: project8,
    description:
      "A budgeting app that helps you track your expenses and manage your finances.",
    technologies: ["Vite","React", "Nodejs", "Express","Tailwind CSS", "Mysql"],
    github : ""

  },
  {
    id : "09",
    title: "Kingcamp",
    image: project9,
    description:
      "Website for camping, user create Landmark to share their camping experience and location.",
    technologies: ["Next.js(v15)", "Clerk auth", "Supabase", "Tailwind CSS", "shadcn ui", ],
    github : "https://github.com/champxy/Kingcamp"
  }
];


const KMUTNB = "/assets/education/kmutnb.png";
const LTC = "/assets/education/loeitech.jpg";
const THALI = "/assets/education/tlw.png";
export const EDUCATION = [
  {
    year: "2022-2023",
    degree: "Information Technology and Industry",
    institution: "KMUTNB",
    description: "Graduated with First Class Honors. Completed coursework in web development, software engineering, and database management.",
    gpa : "3.60",
    image : KMUTNB
  },
  {
    year: "2020-2021",
    degree: "Information Technology",
    institution: "Loei Technical College",
    description: "Completed coursework in computer programming, networking, and information systems.",
    gpa : "3.96",
    image : LTC
  },
  {
    year: "2017-2019",
    degree: "High School Mathematics-Science Program",
    institution: "Thaliwittaya School",
    description: "Completed coursework in mathematics, physics, chemistry, and biology.",
    gpa : "3.36",
    image : THALI
  },
  {
    year: "2014-2016",
    degree: "Middle school",
    institution: "Thaliwittaya School",
    description: "Completed coursework in mathematics, science, social studies, and English.",
    gpa : "3.70",
    image : THALI
  },
];


export const CONTACT = {
  phoneNo: "0610613692",
  email: "champxyy@gmail.com",
};





import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGithub, FaGitAlt, FaPhp, FaPython, FaJava, FaCentos ,} from 'react-icons/fa';
import { CgCPlusPlus } from "react-icons/cg";
import { SiMongodb, SiPrisma ,SiVite,SiFlutter  } from "react-icons/si";
import {RiTailwindCssFill,RiNextjsFill} from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { RiSupabaseFill } from "react-icons/ri";

export const SKILLS = [
  {
    name: "html 5",
    icon: <FaHtml5 />,
    colorname : "text-red-500"
  },
  {
    name: "flutter",
    icon: <SiFlutter />,
    colorname : "text-blue-500"
  },
  {
    name: "javascript",
    icon: <FaJs />,
    colorname : "text-yellow-500"
  },
  {
    name: "react",
    icon: <FaReact />,
    colorname : "text-blue-500"
  },
  {
    name: "node.js",
    icon: <FaNode />,
    colorname : "text-green-500"
  },
  {
    name: "express",
    icon: "express",
    colorname : "text-green-500"
  },
  {
    name: "mongodb",
    icon: <SiMongodb />,
    colorname : "text-green-500"
  },
  {
    name: "git",
    icon: <FaGitAlt />,
    colorname : "text-red-500"
  },
  {
    name: "github",
    icon: <FaGithub />,
    colorname : "text-blue-500"
  },
  {
    name: "tailwind css",
    icon: <RiTailwindCssFill />,
    colorname : "text-blue-500"
  },
  {
    name: "next.js",
    icon: <RiNextjsFill />,
    colorname : "text-black"
  },
  {
    name: "php",
    icon: <FaPhp />,
    colorname : "text-purple-500"
  },
  {
    name: "python",
    icon: <FaPython />,
    colorname : "text-yellow-500"
  },
  {
    name: "java",
    icon: <FaJava />,
    colorname : "text-red-500"
  },
  {
    name: "c++",
    icon: <CgCPlusPlus />,
    colorname : "text-blue-500"
  },
  {
    name: "prisma",
    icon: <SiPrisma />,
    colorname : "text-green-500"
  },
  {
    name: "mysql",
    icon: <DiMysql />,
    colorname : "text-blue-500"
  },
  {
    name: "supabase",
    icon: <RiSupabaseFill />,
    colorname : "text-blue-500"
  },
  {
    name: "centos",
    icon: <FaCentos />,
    colorname : "text-red-500"
  },
  {
    name : "vite",
    icon : <SiVite />,
    colorname : "text-yellow-500"
  }
];