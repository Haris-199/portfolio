import neoDriveImg from "../assets/projects/NeoDrive.png";
import stelaImg from "../assets/projects/Stela.png";
import bmesImg from "../assets/projects/BMES.png";
import libraryImg from "../assets/projects/Library.png";
import interpreterImg from "../assets/projects/Interpreter.png";
import plantMonitorImg from "../assets/projects/plantMonitor.png";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  videoUrl?: string;
  categories: string[];
  link?: string;
  repo?: string;
  images?: string[];
};

const _projects: Project[] = [
  {
    id: "neodrive",
    title: "NeoDrive",
    subtitle: "Cloud Storage Platform",
    description:
      "NeoDrive is a cloud storage platform similar to Google Drive that lets users upload and store files. It features user authentication, file management, and a responsive design.",
    longDescription:
      "NeoDrive is engineered to handle secure file uploads, robust user session management, and scalable storage routing. The responsive front-end integrates seamlessly with a PostgreSQL database to effectively manage file metadata, access permissions, and user logs.",
    categories: ["Node.js", "Express.js", "PostgreSQL", "Bootstrap"],
    link: "https://neodrive-production.up.railway.app/",
    repo: "https://github.com/Haris-199/file-uploader/",
    images: [neoDriveImg],
  },
  {
    id: "stela-chat",
    title: "Stela Chat",
    subtitle: "Real-Time Messaging Application",
    description:
      "A modern, full-stack JAMstack chat application featuring real-time communication, user authentication, and channels.",
    longDescription:
      "Developed a responsive messaging platform utilizing a React and Tailwind CSS frontend with React Query for efficient data caching. The backend is powered by an Express.js REST API and a PostgreSQL database managed via Prisma ORM, leveraging Socket.io to handle real-time, multi-user websocket connections and state synchronization.",
    categories: [
      "TypeScript",
      "React",
      "Express.js",
      "PostgreSQL",
      "Socket.io",
      "Prisma",
    ],
    link: "https://stela-chat.up.railway.app/",
    repo: "https://github.com/Hi-kue/stela-chat",
    images: [stelaImg],
  },
  {
    id: "bmes-platform",
    title: "BMES Web Platform",
    subtitle: "Biomedical Engineering Society Website",
    description:
      "A full-stack website developed from scratch for the student organization.",
    longDescription:
      "Collaborated with a six-person team to architect and launch the primary web platform for the Biomedical Engineering Society. Built utilizing a modern Next.js stack with Tailwind CSS, the site handles organizational data and event routing. It was initially deployed on Vercel, featuring architectural planning for scalable backend migrations to AWS and Supabase.",
    categories: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://bmes-tmu.vercel.app/",
    images: [bmesImg],
  },
  {
    id: "plant-monitor",
    title: "IoT Plant Monitor",
    subtitle: "Sensor Data Collection & Web Dashboard",
    description:
      "An embedded system that collects moisture and environmental data using sensors and displays it on a live web interface.",
    longDescription:
      "Bridged the gap between hardware and software by building a complete end-to-end plant monitoring system. The hardware utilizes sensors to collect real-time environmental telemetry, which is then transmitted and aggregated to a full-stack web dashboard, allowing for remote monitoring of plant health.",
    categories: ["Embedded Systems", "IoT", "Web Development", "ESP32", "IC2"],
    repo:
      "https://github.com/rafa-ashraf/IoT-Based-Smart-Agriculture-Monitoring-Project",
    images: [plantMonitorImg],
  },
  {
    id: "digital-library",
    title: "Digital Library System",
    subtitle: "Cloud-Native Library Management Platform",
    description:
      "A mobile library management platform featuring catalogue search, real-time inventory tracking, and an admin portal.",
    longDescription:
      "Engineered a three-tier cloud-native architecture using a React Native front end, a stateless Node.js/Express API, and Firebase. The platform resolves common library usability issues by offering unified catalogue search, digital media borrowing, and personalized recommendations based on rental history and tag similarity. It handles concurrent access, role-based security, and accurate real-time inventory tracking.",
    categories: [
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "TypeScript",
    ],
    images: [libraryImg],
  },
  {
    id: "vm-interpreter",
    title: "Bytecode Virtual Machine",
    subtitle: "Interpreter for a Custom Language",
    description:
      "A custom interpreter made from scratch in C utilizing a Pratt parser. The language features include loops, functions, closures (implemented with upvalues), and classes. There's also a mark and sweep garbage collector.",
    longDescription:
      "Explored deep programming language semantics by implementing a custom LL1 parser in C and designing a highly efficient bytecode virtual machine. The architecture leverages Rust and C to manage low-level memory allocation, bridging the gap between object-oriented parsing paradigms and bare-metal execution speed.",
    categories: ["C", "Systems Programming", "glibc"],
    images: [interpreterImg],
  },
  {
    id: "http-server",
    title: "Custom HTTP Server",
    subtitle: "From-Scratch Web Server Implementation",
    description:
      "A lightweight HTTP server built from the ground up to handle network requests, manage TCP connections, and serve web content.",
    longDescription:
      "Explored low-level network programming and the HTTP protocol by engineering a custom server from scratch. The system manages concurrent TCP connections, parses incoming HTTP requests, and reliably serves responses. This project deepened my understanding of socket programming and the underlying mechanics of the web.",
    categories: ["Systems Programming", "Networking", "TCP/IP"],
    repo: "https://github.com/Haris-199/...",
  },
];

export const projects: Project[] = JSON.parse(JSON.stringify(_projects));
