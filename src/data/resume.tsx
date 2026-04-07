import { Icons } from "@/components/icons";
import {
  BriefcaseBusinessIcon,
  FolderIcon,
  HomeIcon,
  SquareUserRoundIcon,
  WrenchIcon,
  NotebookIcon,
} from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";

import me from "@/app/assets/me.jpeg";
import dayforce from "@/app/assets/dayforce.png";
import codveda from "@/app/assets/codveda.png";
import headstarter from "@/app/assets/headstarter.png";
import tmu from "@/app/assets/tmu.png";
import ibm from "@/app/assets/ibm.png";
import freecodecamp from "@/app/assets/freecodecamp.png";
import microsoft from "@/app/assets/microsoft.png";
import hackerrank from "@/app/assets/hackerrank.png";
import tfc from "@/app/assets/tfc.png";
import smartdeck from "@/app/assets/smartdeck.png";
import fashion from "@/app/assets/fashion.png";
import lune from "@/app/assets/lune.png";
import paperstack from "@/app/assets/paperstack.png";

import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Sql } from "@/components/ui/svgs/sql";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Firebase } from "@/components/ui/svgs/firebase";
import { Express } from "@/components/ui/svgs/express";
import { Dotnet } from "@/components/ui/svgs/dotnet";
import { SpringBoot } from "@/components/ui/svgs/springboot";
import { FastApi } from "@/components/ui/svgs/fastapi";
import { Azure } from "@/components/ui/svgs/azure";

export const DATA = {
  name: "Vineet Panchal",
  initials: "VP",
  url: "https://vineetpanchal.com",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Computer Science student and software developer focused on full-stack systems, scalable backends, and practical AI-powered products.",
  summary:
    "I build reliable web products end-to-end, from backend architecture and API design to responsive frontend experiences. I enjoy solving real business problems with clean engineering, whether that means optimizing data-heavy systems, integrating AI workflows, or shipping polished full-stack features with measurable impact.",
  avatarUrl: me.src,
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "SQL", icon: Sql },
    { name: "MongoDB", icon: Mongodb },
    { name: "Firebase", icon: Firebase },
    { name: "Express.js", icon: Express },
    { name: ".NET", icon: Dotnet },
    { name: "Spring Boot", icon: SpringBoot },
    { name: "FastAPI", icon: FastApi },
    { name: "Azure", icon: Azure },
    { name: "OpenAI", icon: Icons.openai },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
    { name: "C++", icon: Cpp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#about", icon: SquareUserRoundIcon, label: "About" },
    { href: "/#skills", icon: WrenchIcon, label: "Skills" },
    {
      href: "/#work",
      icon: BriefcaseBusinessIcon,
      label: "Work Experience",
    },
    { href: "/#projects", icon: FolderIcon, label: "Projects" },
    { href: "/#certifications", icon: NotebookIcon, label: "Certifications" },
  ],
  contact: {
    email: "vineetpanchal03@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vineet-panchal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vineetpanchal1/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vineetpanchal03@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Dayforce",
      href: "#",
      badges: [],
      location: "Toronto, ON",
      title: "Software Developer Intern",
      logoUrl: dayforce.src,
      start: "September 2025",
      end: "April 2026",
      description:
        "Enhanced performance analytics platforms by delivering full-stack features using C#, .NET, React, TypeScript, Azure, and SQL Server, transforming large-scale performance data into interactive dashboards that improved visibility into system reliability and regressions across performance engineering teams. Implemented end-to-end features across frontend, backend, and database layers, integrating REST APIs, Azure resources, and secure ASP.NET controllers to reduce manual performance analysis time. Led early AI and cloud initiatives by integrating Azure OpenAI with blob-backed indexing and retrieval workflows to generate automated summaries of performance data, helping engineers review release results faster.",
    },
    {
      company: "Codveda Technologies",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: codveda.src,
      start: "May 2025",
      end: "August 2025",
      description:
        "Built a full-stack MERN application with secure user authentication following OWASP Top 10 principles, implementing end-to-end functionality and seamless database integration in full-stack services. Implemented real-time communication features using Web Sockets and Socket.io, enabling live chat functionality, responsive user interactions, and dynamic updates in a multi-user environment to improve user interactivity. Developed a GraphQL-based backend to support flexible data access for frontend features, designing custom queries and updates with authentication, and improving data fetching efficiency by 35%.",
    },
    {
      company: "Headstarter AI",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Software Engineer Fellow",
      logoUrl: headstarter.src,
      start: "July 2024",
      end: "September 2024",
      description:
        "Developed AI-powered web applications using Next.js, React, and OpenAI, improving user engagement by leveraging dynamic UI components and intelligent state management, resulting in a more interactive user experience. Improved performance and reliability of applications by refining API interactions, minimizing unnecessary delays, and ensuring smoother user interactions, while supporting seamless database management across features. Engineered backend systems to support OpenAI model interactions, while implementing scalable application foundations with Firebase and Supabase to optimize real-time data handling and authentication.",
    },
  ],
  certifications: [
    {
      company: "IBM",
      href: "https://www.ibm.com/training",
      badges: [],
      location: "Online",
      title: "IBM Cloud and Computing Certication",
      logoUrl: ibm.src,
      start: "2024",
      end: "2025",
      description:
        "Completed cloud and data-focused certifications covering IBM Cloud fundamentals, application deployment concepts, and practical data workflows for modern software systems.",
    },
    {
      company: "freeCodeCamp",
      href: "https://www.freecodecamp.org/",
      badges: [],
      location: "Online",
      title: "Frontend Development Libraries Certification",
      logoUrl: freecodecamp.src,
      start: "2024",
      end: "2024",
      description:
        "Built responsive frontends with React-focused patterns, component-driven interfaces, and project-based exercises covering modern frontend development libraries.",
    },
    {
      company: "Microsoft",
      href: "https://learn.microsoft.com/",
      badges: [],
      location: "Online",
      title: "Foundational C# With Microsoft Certification",
      logoUrl: microsoft.src,
      start: "2024",
      end: "2024",
      description:
        "Strengthened core C# and .NET fundamentals through Microsoft learning content, including object-oriented programming, application structure, and introductory backend development.",
    },
    {
      company: "freeCodeCamp",
      href: "https://www.freecodecamp.org/",
      badges: [],
      location: "Online",
      title: "JavaScript Algorithms & Data Structures Certification",
      logoUrl: freecodecamp.src,
      start: "2023",
      end: "2024",
      description:
        "Validated JavaScript problem-solving skills with algorithmic exercises, data structure implementation, and practical coding challenges focused on interview readiness.",
    },
    
  ],
  education: [
    {
      school: "Toronto Metropolitan University",
      href: "https://www.torontomu.ca/",
      degree: "Bachelor's Degree of Computer Science (BCS)",  
      logoUrl: tmu.src,
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Paperstack",
      href: "https://github.com/vineet-panchal/PaperStack",
      dates: "Apr 2026 - Currently Building",
      active: true,
      description:
        "Built a paper trading platform that simulates real-time stock market conditions, allowing users to practice trading strategies without financial risk. Integrated real-time market data using the Finnhub API, implemented secure user authentication with JWT, and designed a responsive frontend with React and Tailwind CSS for an engaging user experience.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Recharts",
        "Go",
        "Gin",
        "PostgreSQL",
        "JWT",
        "Websockets",
        "Finnhub API",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/vineet-panchal/PaperStack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: paperstack.src,
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Lune",
      href: "https://github.com/vineet-panchal/lune",
      dates: "Mar 2026 - Currently Building",
      active: true,
      description:
        "Developed a web application that generates personalized travel itineraries based on user preferences and real-time data, enhancing trip planning with AI-driven recommendations using OpenAI's API. Integrated third-party APIs for flight, hotel, and activity data to provide comprehensive travel options, while implementing user authentication and database management with Firebase for a seamless user experience.",
      technologies: [
        "Next.js",
        "React",
        "Spring Boot",
        "Java",
        "TypeScript",
        "CelesTrak API",
        "TLE API",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/vineet-panchal/lune",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: lune.src,
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Teach For Cambodia",
      href: "https://github.com/vineet-panchal/tfc-courses",
      dates: "August 2024 - September 2024",
      active: true,
      description:
        "Developed a teaching platform for Teach For Cambodia, improving remote education accessibility and enabling seamless communication between students, instructors, and admins with Supabase and Google Authentication. Implemented a course management system with real-time updates, enabling educators to create, edit, and organize lessons for students seamlessly. Added dynamic search for easy course navigation.",
      technologies: [
        "Next.js",
        "React",
        "Supabase",
        "TypeScript",
        "Material UI",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/vineet-panchal/tfc-courses",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: tfc.src,
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "SmartDeck",
      href: "https://smartdeckai.vercel.app/",
      dates: "Mar 2025 - Apr 2025",
      active: true,
      description:
        "Created a web app that generates flashcards for educational use, enhancing learning experiences through personalized AI-driven content using OpenAI's API. Integrated Clerk for user authentication, Firebase for database storage, and Material UI for enhanced user interface.",
      technologies: [
        "Next.js",
        "React",
        "Firebase",
        "Material UI",
        "Clerk",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://smartdeckai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/vineet-panchal/smartdeck",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: smartdeck.src,
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Fashion Disaster Avoider",
      href: "https://fashion-diaster-avoider.vercel.app/",
      dates: "July 2024 - July 2024",
      active: true,
      description:
        "Developed an AI-powered chatbot that provides real-time fashion advice, helping users refine their style choices. Integrated OpenAI's API to analyze outfit combinations and trends, delivering personalized recommendations.",
      technologies: [
        "Next.js",
        "React",
        "Material UI",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://fashion-diaster-avoider.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/vineet-panchal/fashion-diaster-avoider",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: fashion.src,
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
