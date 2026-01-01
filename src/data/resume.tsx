import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Paarth Batra",
  initials: "PB",
  url: "https://paarthb.dev",
  location: "Phoenix, AZ",
  locationLink: "https://www.google.com/maps/place/phoenix+az",
  description:
    "machine learning researcher+engineer. Building bioML models at Mayo Clinic, advisory role at ASU Biodesign.",
  summary:
    "Recent [Barrett Honors graduate](https://barretthonors.asu.edu/) working on moonshot protein interaction research at Mayo Clinic and developing machine learning models for bioinformatics. My research focuses on protein language models, remote homology detection, and 3D mesh segmentation. I'm a key contributor to the [scikit-bio](https://scikit.bio/) library, published in Nature Methods, and have worked on ML applications at Wells Fargo and the U.S. Department of State.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Rust",
    "C++",
    "Java",
    "Swift",
    "PyTorch",
    "JAX",
    "TensorFlow",
    "Lightning",
    "LangChain",
    "Docker",
    "Kubernetes",
    "Ray",
    "Spark",
    "Slurm",
    "Pandas",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "batrapaarth@gmail.com",
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
        url: "mailto:batrapaarth@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mayo Clinic",
      href: "https://www.mayoclinic.org/",
      badges: [],
      location: "Remote",
      title: "ML Researcher",
      logoUrl: "/mayo.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "Full-time ML researcher working on moonshot protein interaction research. Developing novel approaches for understanding protein-protein interactions and their applications in therapeutic development.",
    },
    {
      company: "ASU Biodesign",
      href: "https://biodesign.asu.edu/",
      badges: ["pLMs", "TM-Vec", "Bioinformatics"],
      location: "Hybrid",
      title: "ML Engineer",
      logoUrl: "/biodesign.png",
      start: "May 2024",
      end: "Present",
      description:
        "Advisory researcher working on protein language models. Key contributor to Scikit-Bio library, adding embedding and similarity search via pLMs for bioinformatics. Re-training pLM architecture TM-Vec for 50x speedup in remote homology detection. Developed scikit-benchmark repository and tutorial repository for ISMB conference workshop.",
        },
    {
      company: "Qualcomm Inc.",
      href: "https://www.qualcomm.com/",
      badges: ["SAM", "SAM2", "3D Vision", "Edge AI"],
      location: "Tempe, AZ",
      title: "ML Researcher",
      logoUrl: "/qualcomm.png",
      start: "Jan 2025",
      end: "Dec 2025",
      description:
        "Led team in developing 3D Mesh Segmentation models for object detection in local area digital twins. Adapted 2D models (SAM, SAM2) for 3D object detection use cases. Developed for Qualcomm X Elite processors to integrate models for local area detection.",
    },
    {
      company: "Wells Fargo",
      href: "https://www.wellsfargo.com/",
      badges: ["GenAI", "Testing", "Automation"],
      location: "Phoenix, AZ",
      title: "ML Development Intern",
      logoUrl: "/wellsfargo.png",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Technology Intern under Wells Fargo TIP as part of Digital Technology and Innovation Team. Applied GenAI tooling to ICMP codebase to improve automated test coverage by 20%.",
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
      school: "Arizona State University, Barrett Honors College",
      href: "https://asu.edu",
      degree: "BS in Computer Science, 3.90 GPA, Summa Cum Laude",
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
      title: "TM-Vec: Protein Language Model Optimization",
      href: "https://github.com/paarth-b",
      dates: "2024 - 2025",
      active: true,
      description:
        "Re-trained protein language model (pLM) architecture TM-Vec for remote homology detection, achieving 50x speedup in inference time. Integrated model into scikit-bio for bioinformatics workflows and structural similarity analysis.",
      technologies: [
        "Python",
        "PyTorch",
        "JAX",
        "Protein ML",
        "Bioinformatics",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/paarth-b",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GoodNews",
      href: "https://github.com/paarth-b",
      dates: "2024",
      active: true,
      description:
        "Trained dual neural network utilizing classification and sentiment analysis to predict 'positivity' of news articles. Developing for mobile deployment using Swift with article aggregation and user-based recommendations.",
      technologies: [
        "Python",
        "PyTorch",
        "Swift",
        "Sentiment Analysis",
        "NLP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/paarth-b",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "transformer-v1 (microGPT)",
      href: "https://github.com/paaarthb/transformer-v1",
      dates: "May 2024 - June 2024",
      active: false,
      description:
        "Built transformer architecture from scratch for text generation. Implemented multi-head attention, positional encoding, and training loop to understand foundational deep learning concepts.",
        technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "Deep Learning",
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
      title: "Multi-PDF RAG Chatbot",
      href: "https://github.com/paarth-b/multi-pdf-chatbot",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "Built retrieval-augmented generation (RAG) system using LangChain agent workflows and FAISS vector database for multi-document question answering with semantic search.",
      technologies: [
        "Python",
        "LangChain",
        "FAISS",
        "RAG",
        "Vector DB",
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
  ],
  research: [
    {
      type: "publication",
      title: "Scikit-bio: a fundamental Python library for biological omic data analysis",
      venue: "Nature Methods",
      authors: "Aton M, McDonald D, Cañardo Alastuey J, Azom R, Batra P, et al.",
      description: undefined,
      year: "2025",
      status: "published",
      href: "https://www.nature.com/articles/s41592-025-02981-z",
      badges: ["Nature Methods", "Bioinformatics", "Published"],
    },
    {
      type: "publication",
      title: "TM-Vec 2: Accelerated Remote Homology Detection for Structural Similarity",
      venue: "RECOMB 2026",
      authors: "Batra P, Keluskar A, Bezshapkin V, Morton JT, Zhu Q",
      description: undefined,
      year: "2026",
      status: "under review",
      href: "",
      badges: ["RECOMB", "Protein ML", "Under Review"],
    },
    {
      type: "grant",
      title: "NAIRR Research Grant",
      venue: "National AI Research Resource",
      authors: undefined,
      description: "20,000 GPU hours on Grace Hopper nodes for TMVec 2 research",
      year: "2025",
      status: "active",
      href: "",
      badges: ["20K GPU Hours", "Grace Hopper"],
    },
    {
      type: "conference",
      title: "Model/LLM Integration into Scikit-Bio",
      venue: "ISMB 2024 Workshop",
      authors: undefined,
      description: "Virtual Presentation",
      year: "2024",
      status: "completed",
      href: "",
      badges: ["ISMB", "Workshop"],
    },
  ],
} as const;
