export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  name: string;
  headline: string;
  location: string;
  intro: string;
  currentFocus: string;
  profileImage: {
    src: string;
    alt: string;
  };
  links: LinkItem[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  type: "Research" | "Industry" | "Personal";
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  notes: string[];
}

export interface PortfolioData {
  hero: HeroContent;
  about: string;
  inProgress: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Anmol Mathur",
    headline: "Software Engineer | Research Assistant | Master's Student in Computer Engineering",
    location: "Paderborn, Germany",
    intro:
      "Software engineer with 3 years of industry experience across distributed systems, cloud infrastructure, and telecom software, currently working as a research assistant on physiological time-series analysis.",
    currentFocus:
      "Building robust machine learning and signal processing pipelines for wearable-based seizure prediction and practical deployment-oriented research.",
    profileImage: {
      src: "/profile.jpg",
      alt: "Profile photo of Anmol Mathur"
    },
    links: [
      { label: "Email", href: "mailto:anmolmathur2024@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/anmolmathur1999", external: true }
    ]
  },
  about:
    "I am a Computer Engineering master's student at Paderborn University and a research assistant working on physiological time-series learning. My background spans software engineering in networking and cloud-native systems, along with applied machine learning and signal processing research.",
  inProgress:
    "Building seizure-prediction pipelines using wearable ANS signals, improving reproducibility in physiological ML workflows, and preparing for research and software engineering roles.",
  education: [
    {
      degree: "Master of Science in Computer Engineering",
      institution: "Universitat Paderborn, Germany",
      period: "Oct 2024 - Present",
      notes: [
        "Coursework: Statistical Signal Processing, Machine Learning 1, Machine Learning in Biometrics, Advanced Computer Architecture.",
        "Additional focus: Data Driven Engineering, Digital Image Processing, and Human Factors in Security and Privacy."
      ]
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "Netaji Subhas Institute of Technology, University of Delhi, India",
      period: "Aug 2017 - Jul 2021",
      notes: [
        "Coursework: Signals and Systems, Probability Theory and Communication, Digital Signal Processing.",
        "Advanced topics: Digital Communication, Satellite Communication, Advanced DSP."
      ]
    }
  ],
  experience: [
    {
      title: "Research Assistant (Jan 2026 - Present)",
      organization: "University of Paderborn, Germany",
      summary:
        "Developing data-driven and classical signal processing pipelines for physiological time-series tasks, including filtering, feature extraction, detection, and estimation.",
      highlights: [
        "Working on wearable-based epileptic seizure prediction using ANS signals such as heart rate, blood volume pulse, and electrodermal activity.",
        "Focusing on practical alternatives and complements to long-term EEG monitoring.",
        "Designing reproducible workflows for model evaluation and deployment feasibility."
      ],
      technologies: ["Python", "Signal Processing", "Time-Series ML", "Wearables", "Feature Engineering"]
    },
    {
      title: "Software Dev Intern (Embedded) (Sept 2025 - Dec 2025)",
      organization: "Amazon Web Services (AWS), Berlin, Germany",
      summary:
        "Built cloud and embedded validation workflows for GPU-based canary testing in Kubernetes environments.",
      highlights: [
        "Built a canary testing system with Infrastructure-as-Code EKS deployment using AWS CDK (TypeScript).",
        "Implemented Kubernetes DaemonSets and CronJobs for GPU validation, driver checks, and license health monitoring.",
        "Developed across-account CDK pipelines with secure role assumptions, staged promotions, and self-mutation."
      ],
      technologies: [
        "AWS CDK",
        "TypeScript",
        "EKS",
        "EC2",
        "Kubernetes",
        "Docker",
        "CI/CD",
        "GPU Validation"
      ]
    },
    {
      title: "Software Engineer (Oct 2021 - Sept 2024)",
      organization: "Ciena India Pvt. Ltd., Gurgaon, India",
      summary:
        "Built and maintained telecom network-management applications in distributed microservice architectures, while owning feature delivery, debugging, and customer-facing issue resolution.",
      highlights: [
        "Developed production features using Scala, Akka, Apache Kafka, and Docker in MCP network-management software.",
        "Independently handled development for a complete microservice and supported on-call issue resolution.",
        "Worked directly with enterprise customers including Vodafone UK and AT&T USA."
      ],
      technologies: ["Scala", "Akka", "Kafka", "Docker", "Microservices", "Networking", "Automation Testing"]
    },
    {
      title: "Research Intern (June 2019 - July 2019)",
      organization: "Ministry of Defence, Delhi, India",
      summary:
        "Worked on embedded sensing and compensation logic for aerospace-oriented MEMS sensor behavior.",
      highlights: [
        "Implemented voltage compensation for MEMS accelerometer sensors used in fighter-jet contexts.",
        "Used Arduino microcontroller programming in Embedded C for experimental validation."
      ],
      technologies: ["Embedded C", "Arduino", "MEMS Sensors", "Embedded Systems"]
    }
  ],
  projects: [
    {
      title: "Heart-Rate Stress Classifier",
      type: "Research",
      summary:
        "Built a Python and scikit-learn pipeline to classify 60-second heart-rate windows into stressed and relaxed states.",
      highlights: [
        "Applied LDA to RBF-SVM modeling workflow for physiological classification.",
        "Achieved 81% stress-detection accuracy on held-out subjects."
      ],
      technologies: ["Python", "scikit-learn", "LDA", "SVM", "Physiological Signals"]
    },
    {
      title: "Drowsiness Detection using Deep Learning and Computer Vision",
      type: "Research",
      summary:
        "Developed a CNN-based drowsiness detection model for live in-car video prediction.",
      highlights: [
        "Trained and evaluated a deep learning model for real-time drowsiness inference.",
        "Achieved 94% model accuracy in driver drowsiness prediction."
      ],
      technologies: ["Python", "CNN", "Computer Vision", "Deep Learning"]
    }
  ],
  skills: [
    {
      category: "Programming",
      description: "Languages and frameworks used in production software and ML workflows.",
      items: ["Python", "Scala", "C/C++", "TypeScript", "Bash", "SQL", "TensorFlow"]
    },
    {
      category: "Cloud / DevOps / Platforms",
      description: "Cloud-native infrastructure and deployment tooling.",
      items: [
        "AWS (EKS, EC2, IAM, VPC, ECR)",
        "Kubernetes",
        "Docker",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "AWS CDK"
      ]
    },
    {
      category: "Software / Systems",
      description: "Distributed systems and core software engineering stack.",
      items: [
        "Akka Framework",
        "Kafka",
        "Actor Model",
        "OOP",
        "SDLC",
        "Networking Fundamentals",
        "Operating Systems",
        "DBMS",
        "LLD",
        "Version Control"
      ]
    },
    {
      category: "Tools",
      description: "Daily development and collaboration tools.",
      items: ["Linux", "Git", "VS Code", "IntelliJ IDEA", "Bitbucket", "TeamCity", "MySQL", "LaTeX"]
    },
    {
      category: "Soft Skills",
      description: "Team and communication capabilities.",
      items: ["Leadership", "Time Management", "Teamwork", "Problem Solving", "Critical Thinking"]
    },
    {
      category: "Languages",
      description: "Communication proficiency.",
      items: ["English (C1)", "Deutsch (A1)"]
    }
  ]
};
