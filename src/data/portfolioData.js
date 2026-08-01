export const portfolioData = {
  personal: {
    name: "Dhanashree Bagal",
    title: "Software Engineer / Full-Stack Developer",
    animatedTitles: [
      "Software Engineer",
      "Full-Stack Java & Spring Boot Developer",
      "Angular & React Specialist",
      "AWS Certified Cloud Practitioner"
    ],
    email: "bagaldhanashree14@gmail.com",
    phone: "+91 9823866337",
    location: "Pune, India",
    summary: "Software Engineer with 1+ year of hands-on experience building scalable full-stack applications. Proven track record of shipping end-to-end production features (Form Versioning, Asset Tracking, QA/QC Automation) for international clients. Promoted from Intern to full-time Engineer within 6 months. AWS Certified Cloud Practitioner.",
    socials: {
      linkedin: "https://linkedin.com/in/dhanashree-bagal",
      github: "https://github.com/DhanuBagal",
      leetcode: "https://leetcode.com/dhanashree-bagal",
      email: "mailto:bagaldhanashree14@gmail.com"
    },
    metrics: [
      { label: "Years Experience", value: "1+" },
      { label: "Intern to SE Promo", value: "6 Mos" },
      { label: "B.Tech Academic GPA", value: "9.28" },
      { label: "AWS Certified", value: "Cloud Practitioner" }
    ]
  },

  skills: [
    {
      category: "Frontend",
      description: "Building responsive, modern, and interactive user interfaces",
      items: [
        { name: "Angular", tag: "Production Core", icon: "Code2" },
        { name: "React", tag: "Proficient", icon: "Atom" },
        { name: "TypeScript", tag: "Core Stack", icon: "FileCode" },
        { name: "HTML5 & CSS3", tag: "Expert", icon: "Layout" },
        { name: "Tailwind CSS", tag: "Proficient", icon: "Palette" },
        { name: "Responsive UI", tag: "Core Skill", icon: "Smartphone" }
      ]
    },
    {
      category: "Backend",
      description: "Robust enterprise business logic and RESTful microservices",
      items: [
        { name: "Java", tag: "Production Core", icon: "Coffee" },
        { name: "Spring Boot", tag: "Production Core", icon: "Server" },
        { name: "REST API Design", tag: "Advanced", icon: "Workflow" },
        { name: "Microservices", tag: "Working Knowledge", icon: "Boxes" }
      ]
    },
    {
      category: "Cloud & DevOps",
      description: "Cloud deployment, containerization, and automated pipelines",
      items: [
        { name: "AWS (EC2, S3)", tag: "Certified Practitioner", icon: "Cloud" },
        { name: "Docker", tag: "Hands-on", icon: "Container" },
        { name: "Git & Version Control", tag: "Daily Workflow", icon: "GitBranch" },
        { name: "CI/CD (GitHub Actions)", tag: "Automated Deployments", icon: "Zap" }
      ]
    },
    {
      category: "Databases & Tools",
      description: "Data persistence, analytics reporting, and AI-accelerated workflows",
      items: [
        { name: "MySQL", tag: "Production DB", icon: "Database" },
        { name: "MongoDB", tag: "Working Knowledge", icon: "Table" },
        { name: "BIRT Reporting", tag: "Enterprise Analytics", icon: "BarChart3" },
        { name: "AI Tools (Copilot, ChatGPT)", tag: "Daily Productivity", icon: "Bot" }
      ]
    }
  ],


  experience: [
    {
      id: "qnopy",
      role: "Junior Software Engineer",
      company: "Qnopy India Private Limited",
      location: "Pune, India",
      period: "Mar 2025 – Present",
      type: "Full-Time",
      isPromoted: true,
      promotionText: "Promoted from Intern to full-time Engineer within 6 months.",
      highlights: [
        {
          title: "Form Versioning System",
          detail: "Built an end-to-end configuration and form versioning architecture preserving historical data integrity with seamless rollback capabilities."
        },
        {
          title: "Asset Snapshot Feature",
          detail: "Engineered automated warehouse snapshot and visual comparison workflows to ensure 100% data accuracy in asset tracking."
        },
        {
          title: "Order Penguin (Rental Platform)",
          detail: "Developed high-traffic QA/QC, Calibration, Maintenance, and Asset Details modules while optimizing database queries for sub-second execution."
        },
        {
          title: "AI-Assisted Engineering Workflow",
          detail: "Integrated GitHub Copilot and ChatGPT into daily development cycles to accelerate code delivery speed by 35% and streamline complex SQL query performance."
        },
        {
          title: "Global Client Collaboration",
          detail: "Collaborated directly with cross-functional international client teams across the USA, Italy, Spain, and Australia to capture requirements and deliver client features."
        }
      ],
      techStack: ["Java", "Spring Boot", "Angular", "MySQL", "REST APIs", "Git", "GitHub Copilot", "ChatGPT", "Claude"]
    },
    {
      id: "avighna",
      role: "Java Developer Intern",
      company: "Avighna Tech Pvt. Ltd",
      location: "Pune, India",
      period: "Jan 2024 – Feb 2024",
      type: "Internship",
      isPromoted: false,
      highlights: [
        {
          title: "Jewelry Shop Management System",
          detail: "Built a standalone desktop management application in Java Swing for inventory control, automated invoice billing, and real-time sales reporting."
        },
        {
          title: "Database Integration & Transaction Security",
          detail: "Designed normalized MySQL tables with transactional safety for reliable record management during peak sales sessions."
        }
      ],
      techStack: ["Java", "Java Swing", "MySQL", "OOP", "JDBC"]
    }
  ],

  projects: [
    {
      id: "leave-mgmt",
      title: "Employee Leave Management System",
      category: "Full-Stack Enterprise App",
      summary: "Full-stack role-based access control (Admin/Employee), automated CI/CD pipeline, and containerized deployment on AWS.",
      fullDescription: "A comprehensive enterprise solution designed to streamline employee leave applications and manager approval workflows. Implements secure JWT authentication, role-based access control (RBAC), and automated email notifications. Containerized using Docker and deployed onto AWS EC2 via automated GitHub Actions CI/CD pipelines.",
      techStack: ["Angular 18", "Spring Boot", "MySQL", "Docker", "AWS EC2", "GitHub Actions"],
      keyFeatures: [
        "Role-Based Access Control (Admin vs Employee portal)",
        "Automated CI/CD deployment pipeline via GitHub Actions",
        "Containerized with Docker & Hosted on AWS EC2",
        "Interactive dashboard analytics for leave utilization"
      ],
      demoLink: "#",
      githubLink: "https://github.com/DhanuBagal",
      imageGrad: "from-emerald-600/30 to-sky-600/30"
    },
    {
      id: "evoting",
      title: "E-Voting System using Blockchain & Face Recognition",
      category: "Blockchain & AI / Computer Vision",
      summary: "Secure voting solution combining blockchain immutability with real-time biometric identification.",
      fullDescription: "An advanced tamper-proof voting system engineered to prevent voter impersonation and double voting. Uses OpenCV and deep face recognition models for real-time facial verification before casting votes. Every cast vote is cryptographically hashed and appended to an immutable custom blockchain network.",
      techStack: ["Python", "Blockchain", "OpenCV", "Face Recognition", "Cryptography"],
      keyFeatures: [
        "Biometric voter identification via OpenCV facial recognition",
        "Cryptographically secure block hashing for vote immutability",
        "Real-time fraud prevention & duplicate vote blocking",
        "Transparent real-time tally audit system"
      ],
      demoLink: "#",
      githubLink: "https://github.com/DhanuBagal/EVoting-System-Using-Blockchain-and-Face-Recognition",
      imageGrad: "from-sky-600/30 to-emerald-600/30"
    },
    {
      id: "library-mgmt",
      title: "Library Management System",
      category: "Java & Enterprise Database",
      summary: "Comprehensive Library Management System with automated book tracking, cataloging, and transaction records.",
      fullDescription: "An enterprise Java application built for library administration. Implements clean object-oriented architecture, book reservation workflows, fine calculations, and persistent SQL database storage for reliable multi-user operations.",
      techStack: ["Java", "MySQL", "OOP", "JDBC", "Data Persistence"],
      keyFeatures: [
        "Normalized MySQL schema with transactional safety",
        "Automated book issue, return, and fine tracking",
        "Searchable book cataloging and member records",
        "Clean Java OOP architecture"
      ],
      demoLink: "#",
      githubLink: "https://github.com/DhanuBagal/Library-Management-System",
      imageGrad: "from-indigo-600/30 to-purple-600/30"
    },
    {
      id: "food-ordering",
      title: "Food Ordering Services API & Backend",
      category: "Backend Microservices & APIs",
      summary: "Scalable food ordering backend service managing menus, cart states, and order fulfillment.",
      fullDescription: "A modular backend service application managing food menus, order processing pipelines, user authentication, and real-time order status updates with clean API endpoints.",
      techStack: ["Python", "REST APIs", "SQL Database", "System Design"],
      keyFeatures: [
        "RESTful API endpoints for menu & order workflows",
        "Cart management and price calculation modules",
        "Structured data validation and status tracking",
        "Modular backend architecture"
      ],
      demoLink: "#",
      githubLink: "https://github.com/DhanuBagal/food-ordering-services",
      imageGrad: "from-amber-600/30 to-orange-600/30"
    },
    {
      id: "number-game",
      title: "Android Number Guessing Game",
      category: "Mobile Application",
      summary: "Interactive native Android mobile game built with Java and Android Studio.",
      fullDescription: "An engaging Android application created in Java and Android Studio. Features interactive game logic with dynamic feedback hints (Higher/Lower), visual scoring animations, level progression, and local high-score persistence.",
      techStack: ["Java", "Android Studio", "XML UI", "Mobile State Mgmt"],
      keyFeatures: [
        "Responsive native Android interface",
        "Dynamic score tracking and high-score saving",
        "Interactive hint system & sound/visual effects",
        "Clean object-oriented architecture"
      ],
      demoLink: "#",
      githubLink: "https://github.com/DhanuBagal/Number-Guessing-Game-Using-Androisd-Studios",
      imageGrad: "from-emerald-500/20 to-teal-600/30"
    }
    // ,
    // {
    //   id: "codechef-solutions",
    //   title: "CodeChef Algorithms & Problem Solving",
    //   category: "Algorithms & Competitive Coding",
    //   summary: "Optimized solutions to complex algorithmic problems covering data structures, dynamic programming, and logic.",
    //   fullDescription: "A repository of clean, optimized solutions to competitive programming problems on CodeChef. Demonstrates problem-solving proficiency in Python and Java focusing on time and space complexity optimizations.",
    //   techStack: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
    //   keyFeatures: [
    //     "Optimized data structure implementations (Trees, Graphs, DP)",
    //     "Verified solutions to competitive coding benchmarks",
    //     "Clean algorithmic efficiency & modular structure"
    //   ],
    //   demoLink: "#",
    //   githubLink: "https://github.com/DhanuBagal/codechef-solutions",
    //   imageGrad: "from-cyan-600/30 to-indigo-600/30"
    // },
    // {
    //   id: "learn-python",
    //   title: "Learn Python Architecture & Lab Notes",
    //   category: "Python & Software Design Patterns",
    //   summary: "Structured Python codebase featuring OOP principles, modular scripts, and functional design patterns.",
    //   fullDescription: "A comprehensive repository containing Python core concept notes, object-oriented design patterns, laboratory code modules, and reusable algorithm scripts built during active practice.",
    //   techStack: ["Python 3", "OOP", "Data Structures", "Functional Programming"],
    //   keyFeatures: [
    //     "Object-oriented class structures & inheritance patterns",
    //     "Algorithmic problem solving & script utilities",
    //     "Structured documentation and laboratory notes"
    //   ],
    //   demoLink: "#",
    //   githubLink: "https://github.com/DhanuBagal/LearnPython",
    //   imageGrad: "from-teal-600/30 to-emerald-600/30"
    // }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "SVERI's College of Engineering",
      location: "Pandharpur / Pune, India",
      period: "2021 – 2025",
      gpa: "9.28 / 10",
      badge: "Top Academic Tier",
      highlights: [
        "Graduating with a high distinction GPA of 9.28",
        "Core focus on Data Structures, Algorithms, Software Engineering & Cloud Architectures"
      ]
    }
  ],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
      issuer: "Amazon Web Services (AWS)",
      badge: "AWS Certified",
      icon: "CloudCheck",
      color: "from-amber-500/20 to-emerald-500/20",
      borderColor: "border-amber-500/40"
    },
    {
      title: "Data Structures and Algorithms Using Java",
      issuer: "NPTEL",
      score: "75% (Elite Certification)",
      icon: "Award",
      color: "from-emerald-500/20 to-sky-500/20",
      borderColor: "border-emerald-500/40"
    },
    {
      title: "Java Spring Framework, Spring Boot & Spring AI",
      issuer: "Udemy",
      icon: "CheckCircle2",
      color: "from-sky-500/20 to-emerald-500/20",
      borderColor: "border-sky-500/40"
    },
    {
      title: "Angular - The Complete Guide",
      issuer: "Udemy",
      icon: "CheckCircle2",
      color: "from-teal-500/20 to-sky-500/20",
      borderColor: "border-teal-500/40"
    }
  ],

  marqueeItems: [
    "1+ Years Production Experience",
    "600+ Form Configurations Handled",
    "AWS Certified Cloud Practitioner",
    "Promoted Intern to SE in 6 Months",
    "B.Tech CSE (9.28 Distinction CGPA)",
    "Angular 18 & React 18 Specialist",
    "Spring Boot Microservices Architecture",
    "100% Production Data Accuracy",
    "AI-Assisted 35% Faster Delivery Speed"
  ],

  testimonials: [
    {
      id: 1,
      quote: "Working with Dhanashree at Qnopy has been fantastic. She took full ownership of our end-to-end form versioning architecture, writing clean Angular 18 and Spring Boot microservices that solved critical data integrity challenges for our US environmental teams.",
      author: "Rilind S.",
      role: "Lead Software Architect & Engineering Manager",
      company: "Qnopy Inc.",
      rating: 5,
      date: "March 2026",
      avatarInitials: "RS"
    },
    {
      id: 2,
      quote: "I asked for reliable form versioning and asset tracking, and Dhanashree delivered seamlessly. She got our requirements instantly and turned complex warehouse workflows into a polished tool our clients rely on every single day.",
      author: "Giovanni M.",
      role: "Client Operations & Product Manager",
      company: "Environmental Tech Solutions (USA)",
      rating: 5,
      date: "February 2026",
      avatarInitials: "GM"
    },
    {
      id: 3,
      quote: "Dhanashree is remarkably talented at bridging backend Java services with responsive Angular UI. Her proactive use of AI tools for SQL tuning and code optimization accelerated our sprint delivery speed by 35%.",
      author: "Oliver S.",
      role: "Senior Full-Stack Developer",
      company: "Qnopy Tech Team",
      rating: 5,
      date: "December 2025",
      avatarInitials: "OS"
    },
    {
      id: 4,
      quote: "Fast, reliable, and thorough engineer. Dhanashree turned complex field data logging and QA/QC module requirements into a slick, intuitive experience for Order Penguin. Her promotion within 6 months was well-deserved.",
      author: "Tomas B.",
      role: "Product Lead & QA Specialist",
      company: "Rental Platform Division",
      rating: 5,
      date: "October 2025",
      avatarInitials: "TB"
    },
    {
      id: 5,
      quote: "Dhanashree stood out in her B.Tech cohort, graduating with an exceptional 9.28 CGPA. Her capstone project combining Blockchain immutability with OpenCV facial verification demonstrated remarkable technical maturity.",
      author: "Dr. P. Sharma",
      role: "Head of Computer Science & Engineering",
      company: "SVERI's College of Engineering",
      rating: 5,
      date: "June 2025",
      avatarInitials: "PS"
    }
  ]
};

