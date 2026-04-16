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
      eyebrow: "About",
      title: "Costruisco software solido, mantenibile e pronto ad evolvere",
      summary:
        "Esperienza concreta nello sviluppo di applicazioni web enterprise con attenzione a qualità del codice, continuità evolutiva e collaborazione tecnica.",
      highlights: [
        {
          title: "Delivery end-to-end",
          body:
            "Seguo l’intero ciclo di delivery, dal backend Java e Spring Boot fino al frontend Angular, mantenendo coerenza tecnica tra API, interfacce e integrazioni.",
        },
        {
          title: "Modernizzazione applicativa",
          body:
            "Lavoro su sistemi enterprise che richiedono evoluzione progressiva: refactoring, migrazione da stack legacy e introduzione di soluzioni più moderne senza perdere stabilità.",
        },
        {
          title: "Collaborazione tecnica",
          body:
            "Contribuisco con code review, mentoring e supporto operativo quotidiano, aiutando piccoli team a mantenere qualità, chiarezza e continuità di delivery.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Esperienze costruite su modernizzazione, ownership e continuità operativa",
      description:
        "Esperienze full stack e backend in cui ho contribuito con sviluppo diretto, evoluzione applicativa e supporto tecnico al team.",
      items: [
        {
          company: "Alten Italia",
          role: "Full Stack Developer",
          period: "01/2024 – Presente",
          location: "Milano (Remote)",
          context: "Public Administration",
          responsibilities: [
            "Modernizzazione e manutenzione di applicazioni enterprise per la PA tra moduli legacy e nuove funzionalità.",
            "Migrazione frontend da AngularJS ad Angular 17 con attenzione a continuità evolutiva e manutenibilità.",
            "Progettazione di REST API Spring Boot per funzionalità nuove e integrazioni di sistema.",
            "Supporto tecnico al team con code review, mentoring e affiancamento a 2 junior developer.",
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
            "Sviluppo di un sistema audit distribuito basato su architettura a microservizi.",
            "Implementazione di event tracking con Kafka per auditabilità e tracciabilità.",
            "Uso di Spring AOP per logging strutturato e monitoraggio degli eventi REST.",
            "Contributo al disegno di servizi backend pronti per ambienti di produzione.",
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
            "Sviluppo e manutenzione di applicazioni healthcare dedicate a workflow medici multidisciplinari.",
            "Collaborazione diretta con stakeholder per raccogliere requisiti e definire soluzioni aderenti al contesto.",
            "Implementazione full stack con Spring Boot e Angular in ambienti regolati con forti esigenze di affidabilità.",
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
            "Sviluppo e manutenzione di moduli core di un Hospital Information System in produzione.",
            "Contributo all’evoluzione di piattaforme healthcare con focus su stabilità e continuità operativa.",
          ],
          stack: ["Java EE", "AngularJS", "PostgreSQL", "MongoDB"],
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Competenze tecniche organizzate per aree operative",
      description:
        "Stack principale focalizzato su sviluppo enterprise, integrazione applicativa e modernizzazione di piattaforme web.",
      categories: [
        {
          title: "Backend",
          items: ["Java 8-17", "Spring Boot", "Java EE", "REST APIs", "JUnit", "Microservices"],
        },
        {
          title: "Frontend",
          items: ["AngularJS", "Angular 7-17", "TypeScript", "JavaScript", "HTML5", "Next.js"],
        },
        {
          title: "Databases",
          items: ["PostgreSQL", "Oracle", "MongoDB", "MySQL"],
        },
        {
          title: "DevOps / Tools",
          items: ["Docker", "Kubernetes", "Git", "Maven", "Jenkins", "Postman"],
        },
        {
          title: "Other",
          items: ["Python", "Agile / Scrum", "Mentoring", "Code Review", "AI-Integration"],
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
      title: "Disponibile per opportunità full stack, consulenza e progetti ad alto impatto",
      description:
        "Contatto diretto per ruoli tecnici, collaborazioni su prodotti digitali e iniziative che richiedono ownership applicativa e attenzione alla qualità.",
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
      eyebrow: "About",
      title: "I build solid, maintainable software designed to evolve",
      summary:
        "Hands-on experience delivering enterprise web applications with a strong focus on code quality, long-term evolution, and technical collaboration.",
      highlights: [
        {
          title: "End-to-end delivery",
          body:
            "I work across the full stack, from Java and Spring Boot services to Angular frontends, keeping APIs, UI, and integration work aligned.",
        },
        {
          title: "Application modernization",
          body:
            "I contribute to enterprise systems that need progressive evolution, including legacy modernization, framework migration, and maintainable technical direction.",
        },
        {
          title: "Technical collaboration",
          body:
            "I support delivery through code reviews, mentoring, and day-to-day technical guidance, helping small teams move with clarity and consistency.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Roles shaped by modernization, ownership, and delivery continuity",
      description:
        "Full stack and backend roles where I contributed through implementation, system evolution, and technical support for the team.",
      items: [
        {
          company: "Alten Italia",
          role: "Full Stack Developer",
          period: "01/2024 – Present",
          location: "Milan (Remote)",
          context: "Public Administration",
          responsibilities: [
            "Modernized and maintained enterprise-grade public administration applications across legacy and new modules.",
            "Led frontend migration from AngularJS to Angular 17 with focus on continuity and maintainability.",
            "Designed Spring Boot REST APIs for new features and system integrations.",
            "Supported the team through code reviews, mentoring, and day-to-day guidance for two junior developers.",
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
            "Developed a distributed audit system built on a microservices architecture.",
            "Implemented Kafka-based event tracking for auditability and traceability.",
            "Used Spring AOP for structured logging and REST event monitoring.",
            "Contributed to backend service design with a production-ready approach.",
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
            "Developed and maintained healthcare applications supporting multidisciplinary medical workflows.",
            "Worked directly with stakeholders to gather requirements and shape domain-specific solutions.",
            "Implemented full stack features with Spring Boot and Angular in regulated environments with strong reliability needs.",
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
            "Developed and maintained core modules of a production hospital information system.",
            "Contributed to the long-term evolution of healthcare platforms with focus on stability and operational continuity.",
          ],
          stack: ["Java EE", "AngularJS", "PostgreSQL", "MongoDB"],
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Technical capabilities organized by delivery area",
      description:
        "Core stack centered on enterprise development, integration work, and modernization of business-critical web platforms.",
      categories: [
        {
          title: "Backend",
          items: ["Java 8-17", "Spring Boot", "Java EE", "REST APIs", "JUnit", "Microservices"],
        },
        {
          title: "Frontend",
          items: ["AngularJS", "Angular 7-17", "TypeScript", "JavaScript", "HTML5", "Next.js"],
        },
        {
          title: "Databases",
          items: ["PostgreSQL", "Oracle", "MongoDB", "MySQL"],
        },
        {
          title: "DevOps / Tools",
          items: ["Docker", "Kubernetes", "Git", "Maven", "Jenkins", "Postman"],
        },
        {
          title: "Other",
          items: ["Python", "Agile / Scrum", "Mentoring", "Code Review", "AI-Integration"],
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
      title: "Available for full stack roles, consulting, and high-impact product work",
      description:
        "Direct contact channel for technical roles, digital product collaborations, and projects that need hands-on ownership with attention to code quality.",
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
