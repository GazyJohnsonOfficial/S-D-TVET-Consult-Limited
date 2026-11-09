export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface School {
  name: string;
  loc: string;
  gtvp?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "accreditation" | "training" | "team";
  image: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

export const SITE_CONFIG = {
  name: "S&D TVET Consult Limited",
  shortName: "S&D TVET Consult",
  tagline: "TVET Accreditation & Institutional Excellence in Ghana",
  description: "Elevating Ghana's TVET standards through 8+ years of dedicated expertise, full CTVET accreditation support, competency-based training (CBT), and institutional management.",
  establishedYear: 2024,
  experienceYears: "8+",
  contact: {
    address: "Lapaz, Behind Ecobank, Greater Accra Region, Ghana",
    phones: ["0503347934", "0549647768"],
    phoneFormatted: ["+233 50 334 7934", "+233 54 964 7768"],
    email: "info@sdtvetconsult.com",
    whatsapp: "233503347934",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  metrics: [
    { label: "Accredited Institutions", value: "22+", description: "Achieved full CTVET accreditation" },
    { label: "Trained Facilitators", value: "500+", description: "Empowered across Ghana" },
    { label: "Years of Sector Experience", value: "8+", description: "Dedicated technical leadership" },
    { label: "GTVP Flagship Projects", value: "6", description: "Successfully managed nationwide" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: "ctvet-accreditation",
    title: "CTVET Accreditation",
    description: "Step-by-step guidance towards full Commission for TVET accreditation with proven audit preparation, documentation reviews, and compliance strategies.",
    icon: "Award",
    featured: true
  },
  {
    id: "policy-development",
    title: "Policy Development",
    description: "Formulation of custom strategic plans, governance regulations, student codes, and occupational health & safety policies tailored to your TVET institute.",
    icon: "FileText"
  },
  {
    id: "cbt-training",
    title: "CBT Training & Alignment",
    description: "Competency-Based Training workshops, unit standard alignment, and continuous professional development for TVET instructors nationwide.",
    icon: "GraduationCap",
    featured: true
  },
  {
    id: "facilitator-recruitment",
    title: "Facilitator Recruitment",
    description: "Rigorous vetting, headhunting, and placement of qualified instructors and assessors for private technical and vocational schools.",
    icon: "Users"
  },
  {
    id: "institutional-setup",
    title: "Institutional Setup & Audit",
    description: "Turnkey guidance to satisfy CTVET physical facility, safety standards, workshop tooling, and administrative infrastructure requirements.",
    icon: "Building"
  },
  {
    id: "interview-prep",
    title: "Interview Coaching & Mock Panels",
    description: "Comprehensive facilitator and principal interview preparation, simulation sessions, and Q&A mastery before CTVET accreditation panels.",
    icon: "UserCheck"
  },
  {
    id: "tvet-research",
    title: "TVET Research & Feasibility",
    description: "In-depth market assessments, TVET policy analysis, skills demand surveys, and educational feasibility studies.",
    icon: "BarChart"
  },
  {
    id: "institutional-management",
    title: "Institutional Management",
    description: "Hands-on operational management, student admission systems, quality control frameworks, and performance metrics for sustained growth.",
    icon: "Briefcase"
  },
  {
    id: "project-management",
    title: "National Project Management",
    description: "Specialized implementation and voucher program administration for national initiatives such as GTVP and GJS-P.",
    icon: "Layers"
  }
];

export const LEADERSHIP: Leader[] = [
  {
    name: "Derrick Darko",
    role: "Co-Founder & Director",
    bio: "Brings extensive operational experience in TVET system development, national project execution, and institutional capacity building across Ghana.",
    image: "/pics/00.jpeg"
  },
  {
    name: "Stanley Kwame Adu",
    role: "Co-Founder & Director",
    bio: "TVET policy and accreditation specialist with an established track record in CTVET regulatory compliance, quality audits, and institutional excellence.",
    image: "/pics/001.jpeg"
  }
];

export const SCHOOLS: School[] = [
  { name: "MECATI", loc: "Mamfe Akuapem, Kumasi & Amanfrom", gtvp: true },
  { name: "Geagle Training Institute", loc: "Nungua, Greater Accra", gtvp: true },
  { name: "CareerCraft Vocational Institute", loc: "Amasaman" },
  { name: "Glory Divine Skills Training Center", loc: "Gomoa Afransi, Central Region", gtvp: true },
  { name: "Perphet Plus Beauty College", loc: "Michelle Camp, Accra" },
  { name: "Adonai Technical Institute", loc: "Ashanti Bekwai" },
  { name: "ROPA Fashion Institute", loc: "Techiman, Bono East Region" },
  { name: "Big Agyiri Fashion Institute", loc: "Techiman, Bono East Region" },
  { name: "Electronic Security Training Institute", loc: "Awudome, Accra" },
  { name: "New World Grooming Center", loc: "Dzorwulu, Accra" },
  { name: "Jajil Fashion", loc: "Kotei, Kumasi" },
  { name: "2nd Image", loc: "Accra & Kumasi" },
  { name: "Hadhakai Charitable & Contractors Foundation", loc: "Daboya, Savannah Region" },
  { name: "Academic City University", loc: "Haatso-Bohy3, Accra" },
  { name: "LordBoam Skills Training Center", loc: "Yeji, Bono East Region" },
  { name: "Touch Skills Training Center", loc: "Kumasi" },
  { name: "Pentecost Skills Development Center", loc: "Baatsona, Spintex" },
  { name: "NADAA Training Institute", loc: "Takoradi" },
  { name: "New Century Training Institute", loc: "Dansoman" },
  { name: "MBA Mode Institute", loc: "Adenta, Accra", gtvp: true },
  { name: "St. Theresa's Training Institute", loc: "Ayinase, Western Region" },
  { name: "Salve Regina School", loc: "Abuakwa-Canaan, Kumasi" }
];

export const GTVP_PROJECTS = [
  "MBA Mode Institute, Adenta",
  "MECATI (Mamfe & Kumasi)",
  "Geagle Training Institute, Nungua",
  "Glory Divine Skills Training Center",
  "Stunning Looks Technical Institute, Lashibi",
  "Wenchiman TVET Academy, Wenchi"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "S&D TVET Consult guided us through every stage of CTVET accreditation with clarity and professionalism. Their process made a complex task manageable for our team.",
    name: "Madam Agyeman",
    role: "Administrator, Private TVET Institute",
    initials: "MA",
    rating: 5
  },
  {
    quote: "Their facilitator training and policy support significantly improved our internal quality systems. We now operate with stronger structure and confidence.",
    name: "Kofi Owusu",
    role: "Director, Skills Development Center",
    initials: "KO",
    rating: 5
  },
  {
    quote: "The S&D team combined deep regulatory knowledge with practical implementation. Their responsiveness and attention to detail stood out throughout the project.",
    name: "Esther Nkrumah",
    role: "Operations Lead, Training Academy",
    initials: "EN",
    rating: 5
  },
  {
    quote: "From documentation readiness to mock interviews, the consultancy was thorough and professional. Our staff felt prepared and supported at every milestone.",
    name: "Yaw Mensah",
    role: "Proprietor, Private TVET College",
    initials: "YM",
    rating: 5
  },
  {
    quote: "We engaged S&D for CBT curriculum alignment and quality assurance. The recommendations were practical, and implementation support made the difference for our trainers.",
    name: "Patricia Osei",
    role: "Head of Training, Technical Institute",
    initials: "PO",
    rating: 5
  },
  {
    quote: "Reliable, knowledgeable and easy to work with. They helped us tighten governance and safety policies while keeping our accreditation timeline on track.",
    name: "Samuel Boateng",
    role: "Quality Assurance Lead, Skills Institute",
    initials: "SB",
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Quality Verification Audit",
    category: "accreditation",
    image: "/pics/WhatsApp Image 2026-04-29 at 10.46.40 PM.jpeg"
  },
  {
    id: "g2",
    title: "Corporate TVET Forum",
    category: "team",
    image: "/pics/WhatsApp Image 2026-04-29 at 10.46.41 PM (1).jpeg"
  },
  {
    id: "g3",
    title: "Facilitator CBT Refresher Course",
    category: "training",
    image: "/pics/WhatsApp Image 2026-04-29 at 10.46.41 PM.jpeg"
  },
  {
    id: "g4",
    title: "Strategic Policy Session",
    category: "team",
    image: "/pics/WhatsApp Image 2026-04-29 at 10.46.42 PM.jpeg"
  },
  {
    id: "g5",
    title: "CBT Implementation Workshop",
    category: "training",
    image: "/pics/WhatsApp Image 2026-04-29 at 10.46.43 PM.jpeg"
  },
  {
    id: "g6",
    title: "Standards Compliance Verification",
    category: "accreditation",
    image: "/pics/WhatsApp Image 2026-04-29 at 10.46.44 PM (1).jpeg"
  },
  {
    id: "g7",
    title: "Institutional Accreditation Visit",
    category: "accreditation",
    image: "/pics/7.jpeg"
  },
  {
    id: "g8",
    title: "Technical Workshop Training",
    category: "training",
    image: "/pics/44.jpeg"
  },
  {
    id: "g9",
    title: "Director Consultation & Planning",
    category: "team",
    image: "/pics/4.jpeg"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Preparing Your Institution for CTVET Accreditation",
    category: "Accreditation",
    date: "April 30, 2026",
    excerpt: "A practical guide to the essential documentation, quality systems, and physical facility checks required for a successful accreditation review.",
    image: "/pics/WhatsApp Image 2026-04-29 at 10.46.39 PM (1).jpeg"
  },
  {
    title: "Unlocking Competency-Based Training (CBT) Success",
    category: "Training",
    date: "April 18, 2026",
    excerpt: "Explore the modern pedagogical frameworks and practical assessment steps that make TVET programs significantly more impactful for industry learners.",
    image: "/pics/WhatsApp Image 2026-04-29 at 10.46.41 PM.jpeg"
  },
  {
    title: "Policy Essentials for TVET School Governance",
    category: "Governance",
    date: "March 25, 2026",
    excerpt: "How clear institutional policies in health, safety, and academic governance protect your establishment and raise your accreditation rating.",
    image: "/pics/WhatsApp Image 2026-04-29 at 10.46.42 PM.jpeg"
  }
];

