import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Paarth Batra",
  initials: "PB",
  url: "https://paarthb.dev",
  location: "Phoenix, AZ",
  locationLink: "https://www.google.com/maps/place/phoenix+az",
  description:
    "software developer. undergrad researcher @ zhu lab.",
  summary:
    "I'm a [full time student](https://barretthonors.asu.edu/) and software developer working on developing machine learning models and creating consumer products in the ML/CV space. My current research involves fine-tuning models for sequence and structural alignment as part of the [scikit-bio](https://scikit.bio/) library.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "C++",
    "Java",
    "Swift",
    "Postgres",
    "Go",
    "Docker",
    "Typescript",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/paarth-b",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/paarth-batra",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_paarthb",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ASU Biodesign Institute",
      href: "https://biodesign.asu.edu/",
      badges: [],
      location: "Hybrid",
      title: "LLM Developer",
      logoUrl: "/biodesign.png",
      start: "May 2024",
      end: "Present",
      description:
        "Working on fine-tuning pLMs for sequence and structural alignment as part of the scikit-bio library. Previously built tutorials to be displayed at the ISMB bioinformatics conference.",
        },
    {
      company: "U.S Department of State",
      href: "https://state.gov",
      badges: [],
      location: "In-Person",
      title: "Development Intern",
      logoUrl: "/usdos.png",
      start: "Jan 2024",
      end: "Apr 2024",
      description:
        "Worked closely with Diplomatic Security Service teams to develop full-stack applications using React, Java Spring, and Postgres for use cases in OSINT and field intelligence/data analytics."
      },
    {
      company: "ASU Barrett Honors College",
      badges: [],
      href: "https://students.barretthonors.asu.edu/academics/barrett-writing-center",
      location: "In-Person",
      title: "Honors Tutor",
      logoUrl: "/asu.png",
      start: "January 2023",
      end: "Present",
      description:
        "Acted as one of 10 tutors to 4000+ Barrett Undergraduates, assisting with writing theses and research papers.",
      },
    {
      company: "Mathnasium",
      href: "https://www.mathnasium.com/math-centers/anthemaz",
      badges: [],
      location: "Anthem, AZ",
      title: "Center Director",
      logoUrl: "/mathnasium.png",
      start: "December 2022",
      end: "August 2023",
      description:
        "Managed and grew a team from 70 to 100+ students. Increased student retention by 20%. Also acted as a social media manager",
      },
  ],
  education: [
    {
      school: "Arizona State University",
      href: "https://asu.edu",
      degree: "BSE in Computer Systems Engineering",
      logoUrl: "/asu.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Mountain Ridge High School",
      href: "https://www.dvusd.org/mrhs",
      degree: "Summa Cum Laude, Advanced Studies Diploma",
      logoUrl: "/mrhs.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Thomas Jefferson High School for Science and Technology",
      href: "https://tjhsst.fcps.edu/",
      degree: "Advanced Studies Diploma",
      logoUrl: "/tjhsst.png",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [

    {
      title: "transformer-v1 (microGPT)",
      href: "https://github.com/paaarthb/transformer-v1",
      dates: "May 2024 - June 2024",
      active: false,
      description:
        "Developed a transformer model from scratch to generate shakespearan text. Inspired by and built with the help of Andrej Karpathy's microGPT.",
        technologies: [
        "Python",
        "Pytorch",
        "Pandas",
        "Model Generation",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/paarthb/transformer-v1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/transformer-demo.mp4",
    },
    {
      title: "Multi-PDF Chatbot",
      href: "https://github.com/paarth-b/multi-pdf-chatbot",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "With the initial release of LangChain, I decided to build a simple PDF chatbot using Agent workflows and a vector Database for RAG search.",
      technologies: [
        "Python",
        "Streamlit",
        "LangChain",
        "FAISS",
        "Git",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/paarth-b/multi-pdf-chatbot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatbot-demo.jpg",
      video: "",
    },
    {
      title: "Djisktra's Algorithm Simulation",
      href: "https://github.com/paarth-b/Djikstras-Simulator",
      dates: "Oct 2023-Nov 2023",
      active: true,
      description:
        "Built a simple Djisktra simulation as a class project. Flexing some C++ skills ;)",
      technologies: [
        "C++",
        "Git",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/paarth-b/Djikstras-Simulator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
} as const;
