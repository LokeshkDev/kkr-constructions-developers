export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  details: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Structural Works' | 'Concrete Works' | 'Mivan Construction' | 'Commercial Projects' | 'Residential' | 'Finishing Works';
  imageUrl: string;
  description: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export const COMPANY_INFO = {
  name: "KKR Construction & Developers",
  shortName: "KKR Construction",
  tagline: "ENGINEERING | CONSTRUCTION | CONCRETE SOLUTIONS",
  headline: "Engineering Excellence. Construction You Can Trust.",
  subheading: "Delivering quality residential and commercial development with professional engineering, structural strength, and client-focused execution.",
  roots: "Founded around 2024 by Mr. Mohan Ram alongside civil engineering professionals Mr. Thangavel and Mr. Pradeep.",
  email: "kkrconstructiondevelopers@gmail.com",
  address: "Plot No:37, Sai Garden, Thiruvallur, Tamil Nadu 631203",
  officeLocation: "Plot No:37, Sai Garden, Thiruvallur, Tamil Nadu 631203",
  phones: [
    "+91 80721 83386",
    "+91 75503 31045",
    "+91 98948 68457",
    "+91 80989 87756",
  ],
  story: `KKR Construction & Developers is a real-estate development and construction company that focuses on residential and commercial building projects. Established with the aim of delivering quality construction and satisfying customers through professional engineering and design services, the firm's roots trace back to around 2024, founded by Mr. Mohan Ram who has over 8 years of experience in the construction industry. He and his partners Mr. Thangavel (13 years experience) and Mr. Pradeep (8 years experience) are civil engineering professionals who manage the firm with technical expertise and a client-focused approach.`,
  vision: "To be a trusted and professional construction and real-estate developer, delivering structurally strong buildings, technical excellence and long-term value.",
  visionPoints: [
    "Deliver high-quality, structurally strong buildings.",
    "Be a trusted partner in residential and commercial development.",
    "Maintain transparent processes and strong client relationships.",
    "Create projects with technical excellence and long-term value."
  ],
  mission: "Our mission is to deliver high-quality, durable, and innovative construction solutions that exceed client expectations.",
  missionPoints: [
    "Build quality structures that meet client expectations.",
    "Ensure timely project completion with professional standards.",
    "Maintain transparency and integrity for customer satisfaction.",
    "Deliver technically strong and visually appealing projects.",
    "Create sustainable, functional spaces for homes and businesses."
  ]
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mr. Mohan Ram",
    role: "Founder",
    experience: "8+ Years Experience",
    description: "Founded KKR Construction & Developers around 2024, bringing over 8 years of hands-on technical and management experience in the construction industry."
  },
  {
    name: "Mr. Thangavel",
    role: "Managing Partner - Civil Engineering Professional",
    experience: "13 Years Experience",
    description: "Brings 13 years of civil engineering professional expertise to manage complex structural projects and ensure precision engineering standards."
  },
  {
    name: "Mr. Pradeep",
    role: "Managing Partner - Civil Engineering Professional",
    experience: "8 Years Experience",
    description: "Civil engineering professional with 8 years of experience overseeing site operations, project execution, and client satisfaction."
  },
  {
    name: "Mr. Karthick",
    role: "Business Executive Management",
    experience: "8 Years Experience",
    description: "Business executive with 8 years of experience in managing client relations, project coordination, and operational efficiency for construction projects."
  }
]

export const SERVICES: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Construction",
    category: "Building & Living",
    shortDesc: "Individual houses, apartments, and modern homes engineered for long-term structural integrity and living comfort.",
    details: [
      "Custom individual residential houses",
      "Apartment developments & multi-unit homes",
      "End-to-end planning to handover execution"
    ],
    iconName: "Home"
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    category: "Enterprise & Infrastructure",
    shortDesc: "Office spaces, commercial buildings, and infrastructure projects built with high structural standards and functional design.",
    details: [
      "Commercial office buildings & retail spaces",
      "Infrastructure & civil structural work",
      "Strict engineering & code compliance"
    ],
    iconName: "Building2"
  },
  {
    id: "interior",
    title: "Interior Design & Engineering",
    category: "Space Optimization",
    shortDesc: "Comprehensive interior planning and execution managed directly by qualified civil engineering professionals.",
    details: [
      "Functional space planning & layout optimization",
      "High-durability material selection & execution",
      "Seamless integration with structural engineering"
    ],
    iconName: "Compass"
  },
  {
    id: "concrete",
    title: "Concrete & Structural Works",
    category: "Core Engineering",
    shortDesc: "Precision concrete foundation, raft mats, slab reinforcement, beam shuttering, and high-strength RCC structural execution.",
    details: [
      "Raft bottom mat & wall reinforcement",
      "First floor beam & slab shuttering work",
      "PCC, RCC compound walls & culvert bridge works"
    ],
    iconName: "Hammer"
  }
];

export const WHY_CHOOSE_KKR: WhyChooseItem[] = [
  {
    title: "Quality Construction",
    description: "Uncompromising focus on material standards, concrete mix density, and structural integrity across every build phase.",
    iconName: "ShieldCheck"
  },
  {
    title: "Technical Expertise",
    description: "Led by civil engineering professionals with up to 13 years of specialized experience in structural and Mivan technology.",
    iconName: "HardHat"
  },
  {
    title: "Client-Centric Approach",
    description: "Transparent communications, regular progress updates, and personalized solutions tailored to individual project visions.",
    iconName: "Users"
  },
  {
    title: "Professional Execution",
    description: "Methodical site management, strict adherence to engineering drawings, and disciplined safety standards.",
    iconName: "CheckCircle2"
  },
  {
    title: "Timely Completion",
    description: "Optimized construction cycles—utilizing advanced Mivan formwork systems to achieve rapid project turnaround.",
    iconName: "Clock"
  },
  {
    title: "Long-Term Value",
    description: "Durable, low-maintenance structures engineered to retain visual appeal and high asset value over decades.",
    iconName: "TrendingUp"
  }
];

export const MIVAN_HIGHLIGHTS = {
  headline: "Mivan Construction Technology",
  subheadline: "Faster. Stronger. More Efficient.",
  description: "Mivan construction offers superior quality, high structural strength, and significantly faster completion times compared to traditional brickwork methods by utilizing lightweight, durable aluminum formwork.",
  claimsNotice: "Cycle speeds and efficiency statistics reflect company-profile claims for aluminum formwork construction compared with traditional brickwork.",
  stats: [
    {
      value: "7–10 Days",
      label: "Floor Cycle",
      subtext: "Often one floor completion cycle time"
    },
    {
      value: "30–40% Faster",
      label: "Project Speed",
      subtext: "Company-profile claim vs. traditional brickwork"
    },
    {
      value: "100%",
      label: "Aluminum Formwork",
      subtext: "Reusable, lightweight formwork system"
    }
  ],
  benefits: [
    {
      title: "Lightweight Aluminum Formwork",
      desc: "Durable, high-precision formwork that allows rapid assembly and dismantling."
    },
    {
      title: "Smooth Concrete Finishes",
      desc: "Monolithic concrete casting eliminates thick plastering coats and surface defects."
    },
    {
      title: "Reduced Labor Dependency",
      desc: "Systemized assembly minimizes manual labor reliance and site delay risks."
    },
    {
      title: "Minimized Material Wastage",
      desc: "Precision engineering ensures exact concrete pouring with virtually zero timber/masonry waste."
    },
    {
      title: "High Structural Strength",
      desc: "Monolithic load-bearing structure enhances overall building stability and durability."
    },
    {
      title: "High Seismic Resistance",
      desc: "Integrated concrete walls provide superior structural resilience against seismic forces."
    }
  ]
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "p1",
    title: "Mivan Aluminum Formwork Modular Staging",
    category: "Mivan Construction",
    imageUrl: "/images/mivan/mivan-technology-beam-build-kkr-constructions-and-developers.png",
    description: "Laser-aligned 6061-T6 aluminum modular panels erected for rapid monolithic wall and deck casting."
  },
  {
    id: "p2",
    title: "High-Density Monolithic Concrete Pour",
    category: "Mivan Construction",
    imageUrl: "/images/mivan/mivan-technology-beam-concreate-kkr-constructions-and-developers.png",
    description: "Continuous pour of M25/M30 grade concrete with mechanical needle compaction eliminating voids and honeycombs."
  },
  {
    id: "p3",
    title: "Heavy Rebar Grilling & Steel Binding",
    category: "Structural Works",
    imageUrl: "/images/mivan/mivan-technology-grilling-beam-construction-kkr-constructions-and-developers.png",
    description: "Certified Fe550 TMT rebar binding with precise cover blocks and integrated conduit piping."
  },
  {
    id: "p4",
    title: "Monolithic Deck & Floor Slab Staging",
    category: "Mivan Construction",
    imageUrl: "/images/mivan/mivan-technology-slab-construction-kkr-constructions-and-developers.png",
    description: "Aluminum deck panels laid with prop-head support systems for single-pour floor slabs."
  },
  {
    id: "p5",
    title: "Integrated Column & Pillar Vertical Alignment",
    category: "Structural Works",
    imageUrl: "/images/mivan/mivan-technology-beam-pillar-kkr-constructions-and-developers.png",
    description: "Laser-aligned vertical column shuttering reinforced with heavy-duty tie rods and wallers."
  },
  {
    id: "p6",
    title: "Joint Sealing & Damp-Proof Barrier",
    category: "Finishing Works",
    imageUrl: "/images/mivan/mivan-technology-sealing-construction-kkr-constructions-and-developers.png",
    description: "De-shuttered concrete revealing ultra-smooth, moisture-impermeable monolithic shell with zero joints."
  },
  {
    id: "p7",
    title: "Before & After Structural Monolith Finish",
    category: "Mivan Construction",
    imageUrl: "/images/mivan/mivan-technology-before-after-kkr-constructions-and-developers.png",
    description: "Mirror-smooth monolithic concrete walls compared against conventional brickwork, requiring zero plastering."
  },
  {
    id: "p8",
    title: "Residential G+3 Building Turnkey Execution",
    category: "Residential",
    imageUrl: "/images/services/residential-construction-service-detail-kkr-constrcutions-developer.png",
    description: "Full turnkey residential construction with structural RCC framework and custom architectural finishes."
  },
  {
    id: "p9",
    title: "Duplex Villa Architectural Concrete Frame",
    category: "Residential",
    imageUrl: "/images/services/residential-construction-service1-detail-kkr-constrcutions-developer.png",
    description: "High-spec residential villa construction with engineered spans and cantilevered balcony slabs."
  },
  {
    id: "p10",
    title: "Modern Multi-Story Residential Elevation",
    category: "Residential",
    imageUrl: "/images/services/residential-construction-service2-detail-kkr-constrcutions-developer.png",
    description: "Contemporary residential facade execution with durable weather-proof finishes and balcony glass railings."
  },
  {
    id: "p11",
    title: "Commercial Multi-Story Complex",
    category: "Commercial Projects",
    imageUrl: "/images/services/commercial-construction1-kkr-constrcutions-developer.png",
    description: "Multi-floor commercial infrastructure engineered for high footfall, retail spaces, and heavy floor loading."
  },
  {
    id: "p12",
    title: "Commercial Plaza Structural Framework",
    category: "Commercial Projects",
    imageUrl: "/images/services/commercial-construction2-kkr-constrcutions-developer.png",
    description: "Heavy structural column grids and clear-span floor plates for flexible commercial leasing."
  },
  {
    id: "p13",
    title: "Commercial Office & Institutional Fit-Out",
    category: "Commercial Projects",
    imageUrl: "/images/services/commercial-construction3-kkr-constrcutions-developer.png",
    description: "High-utility commercial space execution with complete electrical, fire safety, and plumbing shafts."
  },
  {
    id: "p14",
    title: "PCC Work & Sub-Base Preparation",
    category: "Concrete Works",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80",
    description: "Plain Cement Concrete sub-base preparation for uniform foundation load distribution."
  },
  {
    id: "p15",
    title: "Raft Bottom Mat Work",
    category: "Concrete Works",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    description: "Heavy rebar mesh layout for raft foundation base reinforcement."
  },
  {
    id: "p16",
    title: "External Scaffolding & Safety Staging",
    category: "Structural Works",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    description: "Heavy-duty steel pipe scaffolding for exterior wall work, plastering, and elevation treatments."
  },
  {
    id: "p17",
    title: "Canara Bank Branch (Strongroom & Vault)",
    category: "Commercial Projects",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    description: "High-security reinforced RCC strongroom and vault concrete structure for banking operations."
  },
  {
    id: "p18",
    title: "RCC Compound Wall & Perimeter Security",
    category: "Structural Works",
    imageUrl: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
    description: "Reinforced cement concrete boundary perimeter wall engineered for structural longevity and security."
  }
];

export const PROJECT_CATEGORIES = [
  "All",
  "Structural Works",
  "Concrete Works",
  "Mivan Construction",
  "Commercial Projects",
  "Residential",
  "Finishing Works"
] as const;

