import bpcacv from "./assets/images/bpcacv.jpg";
import pkmacv from "./assets/images/pkmacv.jpg";
import garalita from "./assets/images/garalita.jpg";
import sc from "./assets/images/sc.jpg";
import fcup from "./assets/images/fcup.jpg";
import repopo from "./assets/images/repopo.jpg";
import figfig from "./assets/images/figfig.jpg";
import aiai from "./assets/images/aiai.jpg";
import ai from "./assets/images/ai.jpg";
import samsung from "./assets/images/samsung.jpg";
import palmora from "./assets/images/palmora.jpg";
import muharram from "./assets/images/muaharram.jpg";
import isgath from "./assets/images/isgath.jpg";
// ================================
// MOCK DATA - Nur Azhim Ramadhan
// ================================

export const profileData = {
  name: "Nur Azhim Ramadhan",
  title: "Information Systems Undergraduate",
  summary:
    "Information Systems undergraduate with a strong academic foundation in data analysis, database management, and Python programming. Experienced in academic projects, national-level competitions, and organizational roles, with a proven ability to work collaboratively and deliver structured, technology-driven solutions. Continuously developing analytical and technical skills to support data-informed decision making and digital innovation.",
  email: "nurazhimrr@gmail.com",
  phone: "+62 819 9121 9199",
  gpa: "3.93",
  profileImage: "/assets/profile.jpg"
};

// ================================
// FOCUS AREAS
// ================================
export const focusAreas = [
  "Data Analysis",
  "Database Management Systems",
  "Python Programming",
  "Digital Innovation",
  "Information Systems"
];

// ================================
// ACHIEVEMENTS
// ================================
export const achievements = [
  {
    id: 1,
    year: "2025",
    title: "1st Place – National Business Plan Competition",
    description:
      "Achieved first place in a national business plan competition by presenting an innovative business model supported by strong market analysis and financial projections.",
    image: bpcacv,
    folderLink:
      "https://drive.google.com/drive/folders/10fUMI9tRC0-Pr7oKLMEGUB4cALmyEC5z"
  },
  {
    id: 2,
    year: "2025",
    title: "1st Place – PKM-PM (Student Creativity Program)",
    description:
      "Won first place in the national PKM-PM program by developing a community empowerment project focused on digital transformation and social impact.",
    image: pkmacv,
    folderLink:
      "https://drive.google.com/drive/folders/1dzpauxeTDRrjcI0h8-IjcBoTcnDnhM8Y"
  },
  {
    id: 3,
    year: "2025",
    title: "Samsung Innovation Campus – Python Certification",
    description:
      "Completed an intensive Python training program organized by Samsung Innovation Campus, focusing on programming logic, data processing, and real-world applications.",
    image: samsung,
    folderLink:
      "https://drive.google.com/drive/folders/1ARj6qHiQg8FzjUP-Yujpg1mWfBgXGUJ4"
  },
  {
    id: 4,
    year: "2024",
    title: "Data Analyst Bootcamp (Offline)",
    description:
      "Completed an offline data analyst bootcamp covering data cleaning, exploratory data analysis, visualization, and business insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    folderLink:
      "https://drive.google.com/drive/folders/104Z4Cd-L7JUmYA-g9xXojWK8n8UXxb8j"
  },
  {
    id: 5,
    year: "2025",
    title: "AI Chatbot Development Workshop",
    description:
      "Participated in an AI chatbot development workshop focusing on natural language processing and conversational AI systems.",
    image:
      ai,
    folderLink:
      "https://drive.google.com/drive/folders/1rluVH7zQL7WBit03Zz6tDnuiPokNuJYV"
  },
  {
    id: 6,
    year: "2022",
    title: "Modernization of Islam – Short Movie Competition",
    description:
      "Award-winning short movie exploring the concept of Islam in the modern era through creative storytelling and visual narrative.",
    image:
      muharram,
    role: "Director & Editor",
    details:
      "Produced for a senior high school–level competition and achieved 2nd place. Responsible for directing the concept, storytelling flow, and full video editing process.",
    folderLink:
      "https://drive.google.com/drive/folders/1jAmlnz2EAKNr7gqqPKDZUEARxHzOX7UV"
  }
];

// ================================
// PROJECTS & ORGANIZATIONAL ROLES
// ================================
export const projects = [
  {
    id: 1,
    title: "Academic Data Analysis Project",
    category: "Academic",
    description:
      "Academic data analysis project focusing on student performance and learning outcomes.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    role: "Data Analyst",
    technologies: "Python, Pandas, Matplotlib",
    folderLink:
      "https://drive.google.com/drive/folders/1oyc3wcmD4lGvXbAotj-H-M4pfV2t3b73"
  },
  {
    id: 2,
    title: "Database Design & Management Project",
    category: "Academic",
    description:
      "Designed and implemented a relational database system with structured schema and optimized queries.",
    image:
    figfig,
    role: "Database Designer",
    technologies: "MySQL, SQL, ERD",
    folderLink:
      "https://drive.google.com/drive/folders/1RWJoaOVTMfs01qsk0MIV0xXvzcYDW_9J"
  },
  {
    id: 3,
    title: "PALMORA – Blockchain-Based Palm Oil Supply Chain Platform",
    category: "Competition",
    description:
      "Blockchain-based platform designed to enhance transparency in the palm oil supply chain.",
    image:
      palmora,
    role: "System Developer",
    technologies: "Blockchain, Web3, React",
    folderLink:
      "https://drive.google.com/drive/folders/1l9FfnlXcxUAlZLBh9qFt3I-gcO_hFRmy"
  },
  {
    id: 4,
    title: "GARALITA – Digital Literacy & Management Platform",
    category: "Competition",
    description:
      "Digital platform aimed at improving digital literacy and management systems in educational institutions.",
    image: garalita,
    role: "Product Team Member",
    technologies: "UI/UX, System Design",
    folderLink:
      "https://drive.google.com/drive/folders/1EZ2nZU-U6lur-LYtV-GTMAb1cob4FkqE"
  },
  {
    id: 5,
    title: "Data Analysis Case Study (Bootcamp)",
    category: "Training",
    description:
      "Case study project analyzing business and customer data during data analyst bootcamp.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    role: "Data Analyst",
    technologies: "Python, Excel",
    folderLink:
      "https://drive.google.com/drive/folders/1d-16HMgaG0_cccaOxlT1TLPaSw8bw_sl"
  },
  {
    id: 6,
    title: "AI Chatbot Development",
    category: "Training",
    description:
      "Development of an AI chatbot system using conversational AI techniques.",
    image: aiai,
    role: "AI Developer",
    technologies: "Python, NLP",
    folderLink:
      "https://drive.google.com/drive/folders/1j_zVa_Nejc5gCqiZ6RmOliyNJsHv6j2L"
  },
  {
    id: 7,
    title: "Sponsorship Strategy – Revoist 5.0",
    category: "Organization",
    description:
      "Developed sponsorship strategy for a large-scale campus event.",
    image: repopo,
    role: "Sponsorship Team",
    technologies: "Proposal Writing, Communication",
    folderLink:
      "https://drive.google.com/drive/folders/1mY2JhEVIN6cYmLbRksEVyT-_70StF7xw"
  },
  {
    id: 8,
    title: "Public Relations Management – ISGATH 2025",
    category: "Organization",
    description:
      "Handled public relations and communication for an inter-campus academic event.",
    image:
      isgath,
    role: "Public Relations Team",
    technologies: "Media Relations, Content Management",
    folderLink:
      "https://drive.google.com/drive/folders/1muH_gLogUmIf-_U1fy-R5x-ZDVsgNSGF"
  },
  {
    id: 9,
    title: "Consumption Coordinator – Fasilkom Cup",
    category: "Organization",
    description:
      "Responsible for planning, managing, and distributing meals for committee members and participants.",
    image: fcup,
    role: "Consumption Coordinator",
    technologies: "Logistics Coordination, Team Management",
    folderLink:
      "https://drive.google.com/drive/folders/1KYfBQg6sZpb0FuPIt-oVJwbik8Frcb2j"
  },
  {
    id: 10,
    title: "Study Club 2025 - Data Analyst",
    category: "Academic",
    description:
      "A competency development program in the field of data analysis covering data preprocessing, data exploration, visualization, and case study-based analysis. This activity encourages participants to think analytically, work collaboratively, and apply data concepts in real-world contexts.",
    image:
    sc,
    role: "Python Developer",
    technologies: "Data Analyst (Data Processing & Visualization)",
    folderLink:
      "https://drive.google.com/drive/folders/1NP8oww0Hwkx8bBnuwmkiCp1tkrkNcAZZ"
  }
];

// ================================
// SOCIAL LINKS & CV
// ================================
export const socialLinks = {
  email: "mailto:nurazhimrr@gmail.com",
  linkedin: "https://linkedin.com/in/nurazhimramadhan",
  instagram: "https://instagram.com/ramzzhim",
  whatsapp: "https://wa.me/6281991219199"
};

export const cvLink =
  "https://drive.google.com/drive/folders/1WKsnGBrm0WtbIIuTGeIfFBSPjB2rAwnm";
