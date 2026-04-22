import type { Locale } from "@/lib/i18n";

export type PortfolioContent = {
  metadata: {
    title: string;
    description: string;
    ogLocale: string;
  };
  navigation: Array<{ label: string; href: string }>;
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    headline: string;
    techStack: Array<{
      label: string;
      shortLabel: string;
      accentClass: string;
    }>;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    links: Array<{ label: string; href: string }>;
    facts: Array<{ label: string; value: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    summary: string;
    highlights: Array<{ title: string; body: string }>;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      location: string;
      context: string;
      responsibilities: string[];
      stack: string[];
    }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Array<{ title: string; items: string[] }>;
  };
  education: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{
      title: string;
      items: Array<{
        title: string;
        institution: string;
        period?: string;
        detail: string;
      }>;
    }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      label: string;
      title: string;
      description: string;
      stack: string[];
    }>;
  };
  ai: {
    eyebrow: string;
    title: string;
    description: string;
    cardTitle: string;
    cardBody: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    links: Array<{
      label: string;
      value: string;
      href: string;
      external?: boolean;
    }>;
  };
  footer: {
    copy: string;
    note: string;
  };
};

const sharedContactLinks = {
  email: "mailto:giovanni.londei.94@gmail.com",
  linkedin: "https://www.linkedin.com/in/giovanni-londei94/",
  github: "https://github.com/giovannilondei94",
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  it: {
    metadata: {
      title: "Giovanni Londei | Portfolio Interattivo",
      description:
        "Portfolio professionale di Giovanni Londei, Full Stack Developer con esperienza in applicazioni enterprise per sanità e pubblica amministrazione.",
      ogLocale: "it_IT",
    },
    navigation: [
      { label: "Profilo", href: "#about" },
      { label: "Esperienza", href: "#experience" },
      { label: "Competenze", href: "#skills" },
      { label: "Formazione", href: "#education" },
      { label: "Contatti", href: "#contact" },
    ],
    hero: {
      eyebrow: "Interactive Web Portfolio",
      name: "Giovanni Londei",
      role: "Full Stack Developer",
      headline:
        "Full Stack Developer con oltre 8 anni di esperienza nella costruzione di applicazioni web scalabili e performanti.\nSpecializzato nella modernizzazione di sistemi legacy e nella creazione di architetture backend e frontend robuste e future-proof.",
      techStack: [
        { label: "Java", shortLabel: "J", accentClass: "bg-[#e76f51]/14 text-[#d4573b]" },
        {
          label: "Spring Boot",
          shortLabel: "S",
          accentClass: "bg-[#6db33f]/16 text-[#4f9425]",
        },
        { label: "Angular", shortLabel: "A", accentClass: "bg-[#dd0031]/14 text-[#c1002a]" },
        { label: "Next.js", shortLabel: "N", accentClass: "bg-slate-900/10 text-slate-800" },
        {
          label: "AI Integration",
          shortLabel: "AI",
          accentClass: "bg-[#7c3aed]/12 text-[#6d28d9]",
        },
      ],
      primaryCta: {
        label: "Scarica CV",
        href: "mailto:giovanni.londei.94@gmail.com?subject=CV%20Request%20-%20Giovanni%20Londei",
      },
      secondaryCta: {
        label: "Contattami",
        href: "#contact",
      },
      links: [
        { label: "GitHub", href: sharedContactLinks.github },
        { label: "LinkedIn", href: sharedContactLinks.linkedin },
        { label: "Email", href: sharedContactLinks.email },
      ],
      facts: [
        { label: "Based in", value: "Italy" },
        { label: "Modalità", value: "Remote Friendly" },
      ],
    },
    about: {
      eyebrow: "ABOUT",
      title: "Sviluppo e Modernizzazione del Software",
      summary:
        "Full Stack Developer con 8+ anni di esperienza su sistemi enterprise in ambito PA e sanità.\nSpecializzato nella gestione di applicazioni complesse, dalla traduzione dei requisiti di business in soluzioni tecniche alla modernizzazione di software legacy e allo sviluppo di sistemi robusti e mantenibili.",
      highlights: [
        {
          title: "Delivery End-to-End",
          body:
            "Gestisco l’intero ciclo di sviluppo software, dalla progettazione backend alla realizzazione frontend su applicazioni enterprise.\n\nProgetto e sviluppo REST API, definendo modelli dati e integrazioni tra sistemi complessi.\n\nGarantisco coerenza architetturale, qualità del codice e affidabilità lungo tutte le fasi di delivery.",
        },
        {
          title: "Modernizzazione Applicativa",
          body:
            "Modernizzo applicazioni legacy attraverso refactoring e migrazioni verso stack moderni, migliorando manutenibilità e performance.\n\nGestisco evoluzioni incrementali mantenendo stabilità operativa e continuità dei servizi in produzione.\n\nIntroduco soluzioni tecnologiche più sostenibili nel lungo termine.",
        },
        {
          title: "Collaborazione Tecnica",
          body:
            "Supporto il team con code review, mentoring e guida tecnica su progetti complessi.\n\nContribuisco alla diffusione di best practice e al miglioramento continuo della qualità del codice.\n\nFavorisco chiarezza architetturale e collaborazione efficace in contesti Agile.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Esperienze su Sistemi Reali",
      description:
        "Esperienze su sistemi enterprise in produzione, dall’analisi dei requisiti allo sviluppo, modernizzazione ed evoluzione di applicazioni complesse, tra legacy, nuove funzionalità e continuità operativa.",
      items: [
        {
          company: "Alten Italia",
          role: "Full Stack Developer",
          period: "01/2024 – Presente",
          location: "Milano (Remote)",
          context: "Public Administration",
          responsibilities: [
            "Modernizzazione e manutenzione di applicazioni enterprise per la PA, garantendo continuità operativa e supporto all’introduzione di nuove funzionalità.",
            "Migrazione frontend da AngularJS ad Angular 17, migliorando manutenibilità, performance e qualità dell’esperienza utente.",
            "Progettazione e sviluppo di API REST con Spring Boot per nuove funzionalità e integrazioni tra sistemi.",
            "Supporto tecnico al team con code review, mentoring e affiancamento di 2 junior developer, contribuendo alla qualità del codice e alla crescita del team.",
          ],
          stack: ["Java 8-17", "Spring Boot", "AngularJS", "Angular 17", "PostgreSQL"],
        },
        {
          company: "Alten Italia",
          role: "Java Back-End Developer · Freelance",
          period: "11/2023 – 12/2023",
          location: "Milano (Remote)",
          context: "Distributed Audit",
          responsibilities: [
            "Sviluppo di un sistema di audit distribuito basato su architettura a microservizi, progettato per garantire tracciabilità e auditabilità degli eventi.",
            "Implementazione di event tracking con Kafka per la gestione scalabile degli eventi e il monitoraggio dei flussi applicativi.",
            "Utilizzo di Spring AOP per logging strutturato e osservabilità dei servizi REST.",
            "Contributo al design di servizi backend pronti per ambienti di produzione.",
          ],
          stack: ["Java 17", "Spring Boot", "Kafka", "MongoDB"],
        },
        {
          company: "Wezen Technologies",
          role: "Full Stack Developer · Freelance",
          period: "06/2021 – 10/2023",
          location: "Bologna",
          context: "Healthcare Software",
          responsibilities: [
            "Sviluppo e manutenzione di applicazioni healthcare per la gestione di workflow medici multidisciplinari.",
            "Collaborazione diretta con stakeholder per raccolta requisiti e definizione di soluzioni tecniche aderenti al contesto.",
            "Implementazione full stack con Spring Boot e Angular in ambienti regolati, con elevati requisiti di affidabilità e continuità operativa.",
          ],
          stack: ["Java 8", "Spring Boot", "AngularJS", "Angular 7", "PostgreSQL"],
        },
        {
          company: "GPI S.p.a.",
          role: "Full Stack Developer · Freelance",
          period: "10/2017 – 05/2021",
          location: "Bologna",
          context: "Hospital Information System",
          responsibilities: [
            "Sviluppo e manutenzione di moduli core di un Hospital Information System utilizzato in produzione.",
            "Contributo all’evoluzione di piattaforme healthcare con focus su stabilità, affidabilità e continuità operativa.",
          ],
          stack: ["Java EE", "AngularJS", "PostgreSQL", "MongoDB"],
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tech Stack",
      description:
        "Tecnologie utilizzate nello sviluppo di applicazioni enterprise e sistemi complessi.",
      categories: [
        {
          title: "Backend e API",
          items: ["Java 8–17", "Spring Boot", "REST API", "Microservices", "JUnit", "Java EE"],
        },
        {
          title: "Frontend e Modernizzazione",
          items: ["AngularJS", "Angular (7→17)", "TypeScript", "JavaScript", "HTML5", "Next.js"],
        },
        {
          title: "Data Layer",
          items: ["PostgreSQL", "Oracle", "MongoDB", "MySQL"],
        },
        {
          title: "DevOps e Delivery",
          items: ["Docker", "Kubernetes", "Git", "Maven", "Jenkins", "Postman"],
        },
        {
          title: "Pratiche di Ingegneria",
          items: ["Code Review", "Mentoring", "Agile / Scrum", "AI Integration"],
        },
        {
          title: "Architettura e Integrazione",
          items: ["API Design", "System Integration", "Legacy Modernization", "Enterprise Applications"],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Formazione & Lingue",
      description:
        "Percorso formativo e competenze linguistiche a supporto di un profilo tecnico orientato a contesti professionali e internazionali.",
      cards: [
        {
          title: "Formazione",
          items: [
            {
              title: "Laurea in Informatica per il Management",
              institution: "Università di Bologna",
              period: "2013 – 2017",
              detail: "Voto finale: 98/110",
            },
            {
              title: "Diploma di Perito Informatico",
              institution: "I.T.I.S. “Enrico Mattei”",
              period: "2008 – 2013",
              detail: "Voto finale: 87/100",
            },
          ],
        },
        {
          title: "Lingue",
          items: [
            {
              title: "Italiano",
              institution: "",
              detail: "Madrelingua",
            },
            {
              title: "Inglese",
              institution: "",
              detail: "B2 – utilizzo professionale in contesti tecnici",
            },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Sezione pronta per casi reali e portfolio esteso",
      description:
        "Questi blocchi rappresentano aree progettuali coerenti con il CV. Sono pronti per essere evoluti in case study completi appena disponibili maggiori dettagli pubblicabili.",
      items: [
        {
          label: "Enterprise",
          title: "Enterprise PA Applications",
          description:
            "Applicazioni per la pubblica amministrazione con focus su modernizzazione di moduli esistenti, evoluzione frontend e sviluppo di API per integrazioni tra sistemi.",
          stack: ["Spring Boot", "AngularJS", "Angular 17", "PostgreSQL"],
        },
        {
          label: "Healthcare",
          title: "Healthcare Workflow Platforms",
          description:
            "Piattaforme software per workflow clinici e multidisciplinari, sviluppate in contesti regolati con attenzione a affidabilità, leggibilità e collaborazione con stakeholder.",
          stack: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
        },
        {
          label: "Audit",
          title: "Distributed Audit System",
          description:
            "Sistema distribuito orientato a tracciabilità eventi e monitoraggio backend, basato su microservizi e su un approccio strutturato alla raccolta degli audit trail.",
          stack: ["Java 17", "Kafka", "Spring AOP", "MongoDB"],
        },
      ],
    },
    ai: {
      eyebrow: "Future Layer",
      title: "AI Assistant integration planned for the next iteration",
      description:
        "La codebase è stata organizzata per poter introdurre una sezione AI Assistant in una fase successiva, mantenendo separazione tra contenuti, componenti e logica applicativa.",
      cardTitle: "Coming soon",
      cardBody:
        "Lo step successivo potrà aggiungere un assistente basato su OpenAI per Q&A sul profilo, percorsi professionali, tecnologie e progetti selezionati.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Collaboriamo",
      description:
        "Disponibile per ruoli full stack e collaborazioni su applicazioni enterprise, modernizzazione software e sistemi complessi. Aperto a opportunità remote con aziende internazionali.",
      links: [
        {
          label: "Email",
          value: "giovanni.londei.94@gmail.com",
          href: sharedContactLinks.email,
        },
        {
          label: "Telefono",
          value: "+39 3288936036",
          href: "tel:+393288936036",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/giovanni-londei94",
          href: sharedContactLinks.linkedin,
          external: true,
        },
        {
          label: "GitHub",
          value: "github.com/giovannilondei94",
          href: sharedContactLinks.github,
          external: true,
        },
      ],
    },
    footer: {
      copy: "© 2026 Giovanni Londei. Portfolio professionale interattivo.",
      note: "Built with Next.js, TypeScript and Tailwind CSS.",
    },
  },
  en: {
    metadata: {
      title: "Giovanni Londei | Interactive Portfolio",
      description:
        "Professional portfolio of Giovanni Londei, Full Stack Developer with experience in enterprise web applications for healthcare and public administration.",
      ogLocale: "en_US",
    },
    navigation: [
      { label: "Profile", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Interactive Web Portfolio",
      name: "Giovanni Londei",
      role: "Full Stack Developer",
      headline:
        "Full Stack Developer with over 8 years of experience building scalable, high-performance web applications.\nSpecialized in legacy system modernization and in creating robust, future-proof backend and frontend architectures.",
      techStack: [
        { label: "Java", shortLabel: "J", accentClass: "bg-[#e76f51]/14 text-[#d4573b]" },
        {
          label: "Spring Boot",
          shortLabel: "S",
          accentClass: "bg-[#6db33f]/16 text-[#4f9425]",
        },
        { label: "Angular", shortLabel: "A", accentClass: "bg-[#dd0031]/14 text-[#c1002a]" },
        { label: "Next.js", shortLabel: "N", accentClass: "bg-slate-900/10 text-slate-800" },
        {
          label: "AI Integration",
          shortLabel: "AI",
          accentClass: "bg-[#7c3aed]/12 text-[#6d28d9]",
        },
      ],
      primaryCta: {
        label: "Download CV",
        href: "mailto:giovanni.londei.94@gmail.com?subject=CV%20Request%20-%20Giovanni%20Londei",
      },
      secondaryCta: {
        label: "Let’s Talk",
        href: "#contact",
      },
      links: [
        { label: "GitHub", href: sharedContactLinks.github },
        { label: "LinkedIn", href: sharedContactLinks.linkedin },
        { label: "Email", href: sharedContactLinks.email },
      ],
      facts: [
        { label: "Based in", value: "Italy" },
        { label: "Work model", value: "Remote Friendly" },
      ],
    },
    about: {
      eyebrow: "ABOUT",
      title: "Software Development and Modernization",
      summary:
        "Full Stack Developer with 8+ years of experience working on enterprise systems in public administration and healthcare.\nSpecialized in managing complex applications, from translating business requirements into technical solutions to modernizing legacy software and building robust, maintainable systems.",
      highlights: [
        {
          title: "End-to-End Delivery",
          body:
            "I manage the full software delivery lifecycle, from backend design to frontend implementation across enterprise applications.\n\nI design and build REST APIs, defining data models and integrations across complex systems.\n\nI ensure architectural consistency, code quality, and reliability throughout every stage of delivery.",
        },
        {
          title: "Application Modernization",
          body:
            "I modernize legacy applications through refactoring and migrations toward modern stacks, improving maintainability and performance.\n\nI manage incremental evolution while preserving operational stability and service continuity in production.\n\nI introduce technology choices that are more sustainable over the long term.",
        },
        {
          title: "Technical Collaboration",
          body:
            "I support the team through code reviews, mentoring, and technical guidance on complex projects.\n\nI contribute to spreading best practices and continuously improving code quality.\n\nI promote architectural clarity and effective collaboration in Agile environments.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience on Real-World Systems",
      description:
        "Experience on enterprise systems in production, from requirements analysis to development, modernization, and evolution of complex applications across legacy systems, new features, and operational continuity.",
      items: [
        {
          company: "Alten Italia",
          role: "Full Stack Developer",
          period: "01/2024 – Present",
          location: "Milan (Remote)",
          context: "Public Administration",
          responsibilities: [
            "Modernization and maintenance of enterprise applications for public administration, ensuring operational continuity and supporting the introduction of new features.",
            "Frontend migration from AngularJS to Angular 17, improving maintainability, performance, and user experience.",
            "Design and development of REST APIs using Spring Boot for new features and system integrations.",
            "Technical support to the team through code reviews, mentoring, and guidance of 2 junior developers.",
          ],
          stack: ["Java 8-17", "Spring Boot", "AngularJS", "Angular 17", "PostgreSQL"],
        },
        {
          company: "Alten Italia",
          role: "Java Back-End Developer · Freelance",
          period: "11/2023 – 12/2023",
          location: "Milan (Remote)",
          context: "Distributed Audit",
          responsibilities: [
            "Development of a distributed audit system based on microservices architecture, ensuring traceability and auditability of events.",
            "Implementation of event tracking using Kafka for scalable event management and monitoring.",
            "Use of Spring AOP for structured logging and observability of REST services.",
            "Contribution to the design of production-ready backend services.",
          ],
          stack: ["Java 17", "Spring Boot", "Kafka", "MongoDB"],
        },
        {
          company: "Wezen Technologies",
          role: "Full Stack Developer · Freelance",
          period: "06/2021 – 10/2023",
          location: "Bologna",
          context: "Healthcare Software",
          responsibilities: [
            "Development and maintenance of healthcare applications supporting multidisciplinary medical workflows.",
            "Direct collaboration with stakeholders to gather requirements and define context-driven technical solutions.",
            "Full stack implementation using Spring Boot and Angular in regulated environments with high reliability requirements.",
          ],
          stack: ["Java 8", "Spring Boot", "AngularJS", "Angular 7", "PostgreSQL"],
        },
        {
          company: "GPI S.p.a.",
          role: "Full Stack Developer · Freelance",
          period: "10/2017 – 05/2021",
          location: "Bologna",
          context: "Hospital Information System",
          responsibilities: [
            "Development and maintenance of core modules of a Hospital Information System in production.",
            "Contribution to the evolution of healthcare platforms with a focus on stability, reliability, and operational continuity.",
          ],
          stack: ["Java EE", "AngularJS", "PostgreSQL", "MongoDB"],
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tech Stack",
      description:
        "Technologies used to build enterprise applications and complex systems.",
      categories: [
        {
          title: "Backend & API",
          items: ["Java 8–17", "Spring Boot", "REST API", "Microservices", "JUnit", "Java EE"],
        },
        {
          title: "Frontend & Modernization",
          items: ["AngularJS", "Angular (7→17)", "TypeScript", "JavaScript", "HTML5", "Next.js"],
        },
        {
          title: "Data Layer",
          items: ["PostgreSQL", "Oracle", "MongoDB", "MySQL"],
        },
        {
          title: "DevOps & Delivery",
          items: ["Docker", "Kubernetes", "Git", "Maven", "Jenkins", "Postman"],
        },
        {
          title: "Engineering Practices",
          items: ["Code Review", "Mentoring", "Agile / Scrum", "AI Integration"],
        },
        {
          title: "Architecture & Integration",
          items: ["API Design", "System Integration", "Legacy Modernization", "Enterprise Applications"],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Education & Languages",
      description:
        "Educational background and language skills supporting a technical profile suited for professional and international environments.",
      cards: [
        {
          title: "Education",
          items: [
            {
              title: "Bachelor’s Degree in Computer Science for Management",
              institution: "University of Bologna",
              period: "2013 – 2017",
              detail: "Final grade: 98/110",
            },
            {
              title: "High School Diploma in Computer Science",
              institution: "I.T.I.S. “Enrico Mattei”",
              period: "2008 – 2013",
              detail: "Final grade: 87/100",
            },
          ],
        },
        {
          title: "Languages",
          items: [
            {
              title: "Italian",
              institution: "",
              detail: "Native",
            },
            {
              title: "English",
              institution: "",
              detail: "B2 – professional use in technical environments",
            },
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Prepared for real case studies and future portfolio expansion",
      description:
        "These cards represent project areas grounded in the CV. They are intentionally cautious placeholders, ready to evolve into full public case studies once more shareable detail is available.",
      items: [
        {
          label: "Enterprise",
          title: "Enterprise PA Applications",
          description:
            "Public administration applications focused on modernizing existing modules, evolving frontend architecture, and developing integration-oriented APIs.",
          stack: ["Spring Boot", "AngularJS", "Angular 17", "PostgreSQL"],
        },
        {
          label: "Healthcare",
          title: "Healthcare Workflow Platforms",
          description:
            "Software platforms supporting clinical and multidisciplinary workflows, built with attention to reliability, clarity, and close collaboration with stakeholders.",
          stack: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
        },
        {
          label: "Audit",
          title: "Distributed Audit System",
          description:
            "A distributed system centered on event traceability and backend monitoring, using microservices and a structured approach to audit trail collection.",
          stack: ["Java 17", "Kafka", "Spring AOP", "MongoDB"],
        },
      ],
    },
    ai: {
      eyebrow: "Future Layer",
      title: "AI Assistant integration is planned for a future release",
      description:
        "The codebase has been structured to support an AI Assistant section later, keeping content, presentation, and application logic clearly separated.",
      cardTitle: "Coming soon",
      cardBody:
        "A next iteration can introduce an OpenAI-powered assistant for profile Q&A, experience exploration, technical stack guidance, and project context.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s work together",
      description:
        "Available for full stack roles and collaborations on enterprise applications, software modernization, and complex systems. Open to remote opportunities with international companies.",
      links: [
        {
          label: "Email",
          value: "giovanni.londei.94@gmail.com",
          href: sharedContactLinks.email,
        },
        {
          label: "Phone",
          value: "+39 3288936036",
          href: "tel:+393288936036",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/giovanni-londei94",
          href: sharedContactLinks.linkedin,
          external: true,
        },
        {
          label: "GitHub",
          value: "github.com/giovannilondei94",
          href: sharedContactLinks.github,
          external: true,
        },
      ],
    },
    footer: {
      copy: "© 2026 Giovanni Londei. Interactive professional portfolio.",
      note: "Built with Next.js, TypeScript and Tailwind CSS.",
    },
  },
};

export function getPortfolioContent(locale: Locale) {
  return portfolioContent[locale];
}
