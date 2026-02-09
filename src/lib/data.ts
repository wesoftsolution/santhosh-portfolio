
export const bio = {
  name: "Santhosh Sugumar",
  title: "Senior Python Developer | Django | ETL Testing | SQL & Snowflake",
  avatar: "/profile.jpg",
  email: "santhoshsugumar_84@yahoo.com",
  phone: "+91 86670 25228",
  location: "Chidambaram, India",
  summary: "Results-driven Senior Software Engineer with over 12 years of enterprise experience specializing in Python, Django, and high-scale ETL/Data Testing. Proven expertise in building robust backend systems, designing RESTful APIs, and implementing comprehensive data validation frameworks for global clients including HPE and major financial institutions. Passionate about delivering high-performance, scalable solutions through clean code and Agile methodologies.",
  linkedin: "https://linkedin.com/in/santhosh-sugumar", // Placeholder
  github: "https://github.com/santhosh-sugumar",     // Placeholder
  twitter: "https://twitter.com/santhosh-sugumar",   // Placeholder
  facebook: "https://facebook.com/santhosh-sugumar", // Placeholder
};

export const skills = {
  programming: ["Python (Primary)", "Django", "Flask", "FastAPI", "PHP", "JavaScript"],
  databases: ["PostgreSQL", "MySQL", "Oracle 10g/11g", "SQL Server", "Snowflake"],
  etlTesting: ["ETL Lifecycle", "SQL Validation", "Manual Testing", "Test Case Design", "Data Quality Assurance"],
  devOps: ["Git", "UNIX/Linux (sed, awk, grep)", "JIRA", "Agile (SCRUM)", "Docker basics"],
  frontend: ["HTML5", "CSS3", "Bootstrap", "React basics", "Responsive Design"]
};

export const experiences = [
  {
    company: "Bhilwara Infotechnology Ltd",
    client: "HPE (Hewlett Packard Enterprise)",
    role: "Senior Software Engineer",
    duration: "Sep 2023 - June 2025",
    description: "Architected and maintained high-performance backend systems for HPE's enterprise applications.",
    responsibilities: [
      "Lead developer for Python/Django backend services, ensuring scalability and security.",
      "Engineered robust RESTful APIs for seamless integration with frontend and mobile ecosystems.",
      "Optimized PostgreSQL database performance through advanced query tuning and caching strategies.",
      "Collaborated in an Agile environment to deliver mission-critical software features for enterprise IT operations.",
      "Implemented models, views, and complex middleware to manage large-scale data flows."
    ],
    tech: ["Python", "Django", "PostgreSQL", "REST APIs", "Agile"]
  },
  {
    company: "Recordium Apps",
    role: "ETL & Manual Testing Engineer",
    duration: "July 2020 – Aug 2023",
    description: "Specialized in data integrity and ETL validation for complex banking systems.",
    projects: [
      {
        name: "Investment Banking System",
        client: "Riyadh Capital",
        tasks: [
          "Developed automated ETL test scripts to validate huge data volumes across sources and targets.",
          "Performed source-to-target mapping verification and complex SQL-based data validation.",
          "Managed end-to-end testing cycles using JIRA for bug tracking and progress reporting."
        ]
      },
      {
        name: "Capital Banking System",
        client: "Swicorp",
        tasks: [
          "Documented high-priority data issues, ensuring 99%+ data accuracy in production.",
          "Collaborated with dev teams to refine SSRS/SSIS packages and SQL procedures.",
          "Applied Agile SCRUM methodologies for rapid testing cycles and fix validation."
        ]
      }
    ],
    tech: ["Oracle", "SQL", "SSIS", "UNIX", "JIRA"]
  },
  {
    company: "RSoft Technologies Pvt Ltd",
    role: "Software Testing & CRM Officer",
    duration: "Feb 2018 – May 2020",
    description: "Focus on CRM software quality assurance and client-facing technical support.",
    responsibilities: [
      "Conducted thorough testing of CRM modules from development to final production.",
      "Provided expert technical support and training to end-users and clients.",
      "Identified critical software defects, significantly improving product reliability."
    ],
    tech: ["CRM Software", "Manual Testing", "User Support"]
  },
  {
    company: "We Soft Solution Technology India Pvt Ltd",
    role: "Junior Software Developer",
    duration: "Mar 2016 - Dec 2017",
    description: "Full-stack development for healthcare institutions and medical web applications.",
    responsibilities: [
      "Developed web-based healthcare products using PHP, JavaScript, and HTML/CSS.",
      "Designed and maintained clinical data management systems.",
      "Created user-friendly, responsive websites using HTML5 and CSS3 modern standards."
    ],
    tech: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"]
  }
];

export const secondaryExperience = [
  {
    company: "Soft Logic System / Mphasis",
    role: "Customer Technical Support (US Client)",
    duration: "2012 - 2015",
    description: "Technical query resolution and customer service for international clients."
  },
  {
    company: "Promosys Technology (Malaysia)",
    role: "Junior QC Hardware Testing Engineer",
    duration: "2008 – 2013",
    description: "Quality control and hardware testing for electronics automation and GSM controllers."
  }
];

export const education = [
  {
    degree: "B.E. (Electrical & Electronics Engineering)",
    institution: "Annamalai University",
    score: "74.5% (First Class)",
    year: "May 2007"
  },
  {
    degree: "HSC",
    institution: "R.C.T. Hr. Sec School, Chidambaram",
    score: "67.33%",
    year: "2003"
  },
  {
    degree: "SSLC",
    institution: "R.C.T. Hr. Sec School, Chidambaram",
    score: "80.88%",
    year: "2001"
  }
];

export const projects = [
  {
    title: "HPE Enterprise Backend",
    domain: "Information Technology",
    tech: ["Python", "Django", "PostgreSQL", "REST APIs"],
    impact: "Improved system scalability and data processing reliability for enterprise-scale IT operations.",
    description: "Developed and managed critical server-side logic and API endpoints for HPE's internal tools."
  },
  {
    title: "Investment Banking ETL Hub",
    domain: "Finance / Banking",
    tech: ["Oracle", "SQL", "UNIX", "SSIS"],
    impact: "Ensured high data integrity for large-scale financial migrations and daily operations at Riyadh Capital.",
    description: "End-to-end data validation and ETL script development for capital management systems."
  },
  {
    title: "Healthcare Clinical Data Manager",
    domain: "Healthcare",
    tech: ["PHP", "JavaScript", "MySQL", "HTML5"],
    impact: "Digitalized clinical data workflows for healthcare institutions, improving data retrieval speeds.",
    description: "Built a suite of web applications for managing patient records and clinical trails data."
  }
];
