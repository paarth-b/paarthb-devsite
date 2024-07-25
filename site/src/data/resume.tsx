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
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
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
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Mathnasium",
      href: "https://www.mathnasium.com/math-centers/anthemaz",
      badges: [],
      location: "Anthem, AZ",
      title: "Center Director",
      logoUrl: "/mathnasium.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
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
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
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
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: false,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
} as const;
