interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  name: string;
  intro: string;
  location: string;
  profileImage: {
    src: string;
    alt: string;
  };
  links: LinkItem[];
}

interface ProjectItem {
  title: string;
  summary: string;
  href: string;
}

interface SkillGroup {
  label: string;
  items: string[];
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
}

interface PortfolioData {
  hero: HeroContent;
  projects: ProjectItem[];
  experience: TimelineItem[];
  education: TimelineItem[];
  skills: SkillGroup[];
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Anmol Mathur",
    intro:
      "Software engineer and research assistant working on cloud systems and machine learning for wearable signals.",
    location: "Paderborn, Germany",
    profileImage: {
      src: "/profile.jpg",
      alt: "Portrait of Anmol Mathur"
    },
    links: [
      { label: "Email", href: "mailto:anmolmathur2024@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/anmolmathur1999", external: true }
    ]
  },
  projects: [
    {
      title: "mac-unplugged",
      summary: "macOS menu bar app that tracks battery drain and estimates energy use by process.",
      href: "https://github.com/anmolmathur15/mac-unplugged"
    },
    {
      title: "Hyperparameter generalization",
      summary: "Studied how resampling affects hyperparameter overtuning.",
      href: "https://github.com/anmolmathur15/automl-hyperparameter-generalization"
    },
    {
      title: "Stock AI Agent",
      summary: "Analyzes brokerage portfolios using Gemini.",
      href: "https://github.com/anmolmathur15/StockAIAgent"
    },
    {
      title: "Huffman coding",
      summary: "Implements lossless compression in C++.",
      href: "https://github.com/anmolmathur15/Huffman-Coding-Implementation-in-Cpp"
    }
  ],
  experience: [
    {
      title: "Research Assistant",
      organization: "Paderborn University",
      period: "2026–present"
    },
    {
      title: "Software Development Intern",
      organization: "Amazon AWS",
      period: "2025"
    },
    {
      title: "Software Engineer",
      organization: "Ciena",
      period: "2021–2024"
    }
  ],
  education: [
    {
      title: "M.Sc. Computer Engineering",
      organization: "Paderborn University",
      period: "2024–present"
    },
    {
      title: "B.E. Electronics and Communication Engineering",
      organization: "University of Delhi",
      period: "2017–2021"
    }
  ],
  skills: [
    { label: "Programming", items: ["Python", "Scala", "TypeScript", "C++"] },
    { label: "Backend", items: ["Akka", "Kafka", "Microservices"] },
    { label: "Cloud & systems", items: ["AWS CDK", "Kubernetes", "Linux"] },
    { label: "Machine learning", items: ["Signal processing", "Time-series ML", "Optuna"] }
  ]
};
