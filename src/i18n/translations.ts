import type { ImageMetadata } from "astro";

export type Locale = "es" | "en";

export type Project = {
  title: string;
  description: string;
  links: Array<
    | { label: string; href: string; icon: string; private?: false }
    | { label: string; local: string; private: true }
  >;
  meta: string;
  stack: Array<{ title: string; icon: string }>;
  image: ImageMetadata;
  imageAlt: string;
};

export const locales = {
  es: {
    code: "es",
    path: "/",
    label: "ES",
    languageName: "Español",
  },
  en: {
    code: "en",
    path: "/en/",
    label: "EN",
    languageName: "English",
  },
} as const;

export const translations = {
  es: {
    meta: {
      title: "Luis Dyogho Cipriano Silva | Desarrollador Frontend",
      description:
        "Desarrollador Frontend/Web especializado en React, TypeScript, Angular, Astro, SEO, accesibilidad y experiencias web responsivas de alto rendimiento.",
    },
    header: {
      home: "Inicio",
      primaryNav: "Navegación principal",
      languageLabel: "Cambiar idioma",
      nav: [
        { href: "#projects", label: "Proyectos" },
        { href: "#experience", label: "Experiencia" },
        { href: "#about", label: "Sobre mí" },
      ],
    },
    hero: {
      sidebarItems: ["Desarrollador Frontend", "2026"],
      metricsLabel: "Métricas del portafolio",
      metrics: [
        { value: "2+", label: "Años de experiencia" },
        { value: "4", label: "Proyectos" },
      ],
      title: "Hola",
      subtitle: "— Rendimiento excepcional para ideas sin límites",
      scroll: "Ver proyectos ↓",
      portraitLabel: "Retrato de Dego",
      portraitAlt: "Dego",
    },
    projects: {
      title: "Proyectos",
      socialLinksLabel: "Enlaces sociales",
      listLabel: "Proyectos seleccionados",
      technologiesLabel: "Tecnologías",
      privateCodeAria: "Repositorio de código privado",
      linksAriaPrefix: "Enlaces de",
      items: [
        {
          title: "Colegio Academia Winner",
          description:
            "Landing institucional y plataforma creada para centralizar información y apoyar la digitalización de procesos internos. Proyecto privado con presencia pública disponible.",
          links: [
            { label: "Sitio web", href: "https://www.colegiosacademiaswinner.edu.pe/", icon: "arrow" },
            { label: "Código privado", local: "/icons/github.svg", private: true },
          ],
          meta: "Plataforma institucional",
          stack: [
            { title: "React", icon: "/icons/react.svg" },
            { title: "Next.js", icon: "/icons/nextjs.svg" },
            { title: "Seguridad", icon: "/icons/accessibility.svg" },
          ],
          imageAlt: "Vista previa de Colegio Academia Winner",
        },
        {
          title: "Bantiax Frontend Platform",
          description:
            "Desarrollo de componentes frontend con React, TypeScript y Astro, priorizando diseño responsivo, estructura SEO y consistencia visual.",
          links: [
            { label: "Sitio web", href: "https://bantiax.com/", icon: "arrow" },
            { label: "Código privado", local: "/icons/github.svg", private: true },
          ],
          meta: "Ingeniería frontend",
          stack: [
            { title: "React", icon: "/icons/react.svg" },
            { title: "TypeScript", icon: "/icons/typescript.svg" },
            { title: "Astro", icon: "/icons/astro.svg" },
          ],
          imageAlt: "Vista previa de Bantiax Frontend Platform",
        },
        {
          title: "Puertas Automáticas Magic",
          description:
            "Landing comercial desarrollada en Astro puro, enfocada en SEO on-page, rendimiento y experiencia responsiva para una empresa de automatización.",
          links: [
            { label: "Sitio web", href: "https://puertasmagic.com/", icon: "arrow" },
            { label: "Código privado", local: "/icons/github.svg", private: true },
          ],
          meta: "Landing comercial",
          stack: [
            { title: "Astro", icon: "/icons/astro.svg" },
            { title: "CSS", icon: "/icons/css.svg" },
            { title: "SEO", icon: "/icons/seo.svg" },
          ],
          imageAlt: "Vista previa de Puertas Automáticas Magic",
        },
      ],
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          period: "May 2026 — Jul 2026",
          company: "Colegio Academia Winner",
          role: "Desarrollador Web",
          description:
            "Refactoricé el módulo de gestión de concursos con criterios de arquitectura y escalabilidad; mejoré significativamente la UX/UI, optimicé procesos clave, reduje tiempos operativos y reforcé la seguridad de los datos.",
        },
        {
          period: "Abr 2026 — Jun 2026",
          company: "Bantiax",
          role: "Desarrollador Frontend",
          description:
            "Construí la página en Astro y componentes reutilizables en React con TypeScript, siguiendo lineamientos de Figma y requerimientos para implementar interfaces pixel-perfect enfocadas en SEO y diseño responsivo.",
        },
        {
          period: "Ene 2026 — Mar 2026",
          company: "Puertas Automáticas Magic",
          role: "Desarrollador Frontend",
          description:
            "Diseñé y desarrollé una landing comercial en Astro puro, priorizando SEO on-page, velocidad de carga, estructura semántica y una experiencia responsiva consistente.",
        },
        {
          period: "Sep 2025 — Nov 2025",
          company: "Colegio Academia Winner",
          role: "Desarrollador Web",
          description:
            "Desarrollé el módulo de gestión de concursos para agilizar el registro de participantes, el procesamiento de resultados y la publicación final, reduciendo tareas manuales del flujo administrativo.",
        },
        {
          period: "Sep 2023 — May 2024",
          company: "Universidad Nacional del Centro del Perú",
          role: "Desarrollador Frontend / Analista Scrum",
          description:
            "Contribuí al desarrollo frontend del módulo de seguimiento de tesis de posgrado creando mockups, programando páginas e integrando servicios backend; también apoyé en refinamiento de backlog, historias de usuario, sprints y validación de requerimientos.",
        },
      ],
    },
    about: {
      title: "Sobre mí",
      stackLabel: "Tecnologías y habilidades",
      paragraphs: [
        "Soy desarrollador frontend/web especializado en construir interfaces rápidas, accesibles y responsivas con tecnologías modernas de JavaScript y TypeScript.",
        "Me enfoco en convertir necesidades de producto en experiencias web claras, cuidando SEO, rendimiento, estructura semántica y mantenibilidad del código.",
      ],
    },
    footer: {
      copyright: "Portafolio Dev",
    },
  },
  en: {
    meta: {
      title: "Luis Dyogho Cipriano Silva | Frontend Developer",
      description:
        "Frontend/Web Developer specialized in React, TypeScript, Angular, Astro, SEO, accessibility, and high-performance responsive web experiences.",
    },
    header: {
      home: "Home",
      primaryNav: "Primary navigation",
      languageLabel: "Change language",
      nav: [
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#about", label: "About me" }
      ],
    },
    hero: {
      sidebarItems: ["Frontend Developer", "2026"],
      metricsLabel: "Portfolio metrics",
      metrics: [
        { value: "2+", label: "Years of experience" },
        { value: "4", label: "Projects" },
      ],
      title: "Hello",
      subtitle: "— Exceptional performance for limitless ideas",
      scroll: "Scroll down ↓",
      portraitLabel: "Portrait of Dego",
      portraitAlt: "Dego",
    },
    projects: {
      title: "Projects",
      socialLinksLabel: "Social links",
      listLabel: "Selected projects",
      technologiesLabel: "Technologies",
      privateCodeAria: "Private code repository",
      linksAriaPrefix: "Links for",
      items: [
        {
          title: "Colegio Academia Winner",
          description:
            "Institutional landing page and platform built to centralize information and support the digitalization of internal processes. Private project with a public-facing presence available.",
          links: [
            { label: "Live site", href: "https://www.colegiosacademiaswinner.edu.pe/", icon: "arrow" },
            { label: "Private code", local: "/icons/github.svg", private: true },
          ],
          meta: "Institutional platform",
          stack: [
            { title: "React", icon: "/icons/react.svg" },
            { title: "Next.js", icon: "/icons/nextjs.svg" },
            { title: "Security", icon: "/icons/accessibility.svg" },
          ],
          imageAlt: "Colegio Academia Winner preview",
        },
        {
          title: "Bantiax Frontend Platform",
          description:
            "Frontend component development with React, TypeScript, and Astro, prioritizing responsive design, SEO structure, and visual consistency.",
          links: [
            { label: "Live site", href: "https://bantiax.com/", icon: "arrow" },
            { label: "Private code", local: "/icons/github.svg", private: true },
          ],
          meta: "Frontend engineering",
          stack: [
            { title: "React", icon: "/icons/react.svg" },
            { title: "TypeScript", icon: "/icons/typescript.svg" },
            { title: "Astro", icon: "/icons/astro.svg" },
          ],
          imageAlt: "Bantiax Frontend Platform preview",
        },
        {
          title: "Puertas Automáticas Magic",
          description:
            "Commercial landing page built in pure Astro, focused on on-page SEO, performance, and responsive experience for an automation company.",
          links: [
            { label: "Live site", href: "https://puertasmagic.com/", icon: "arrow" },
            { label: "Private code", local: "/icons/github.svg", private: true },
          ],
          meta: "Commercial landing",
          stack: [
            { title: "Astro", icon: "/icons/astro.svg" },
            { title: "CSS", icon: "/icons/css.svg" },
            { title: "SEO", icon: "/icons/seo.svg" },
          ],
          imageAlt: "Puertas Automáticas Magic preview",
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          period: "May 2026 — Jul 2026",
          company: "Colegio Academia Winner",
          role: "Web Developer",
          description:
            "Refactored the contest management module with architecture and scalability criteria; significantly improved UX/UI, optimized key processes, reduced operational time, and strengthened data security.",
        },
        {
          period: "Apr 2026 — Jun 2026",
          company: "Bantiax",
          role: "Frontend Developer",
          description:
            "Built the page in Astro and reusable React components with TypeScript, following Figma guidelines and requirements to implement pixel-perfect interfaces focused on SEO and responsive design.",
        },
        {
          period: "Jan 2026 — Mar 2026",
          company: "Puertas Automáticas Magic",
          role: "Frontend Developer",
          description:
            "Designed and developed a commercial landing page in pure Astro, prioritizing on-page SEO, loading speed, semantic structure, and a consistent responsive experience.",
        },
        {
          period: "Sep 2025 — Nov 2025",
          company: "Colegio Academia Winner",
          role: "Web Developer",
          description:
            "Developed the contest management module to streamline participant registration, results processing, and final publication, reducing manual tasks in the administrative workflow.",
        },
        {
          period: "Sep 2023 — May 2024",
          company: "Universidad Nacional del Centro del Perú",
          role: "Frontend Developer / Scrum Analyst",
          description:
            "Contributed to the frontend development of the postgraduate thesis tracking module by creating mockups, coding pages, and integrating backend services; also supported backlog refinement, user stories, sprints, and requirements validation.",
        },
      ],
    },
    about: {
      title: "About me",
      stackLabel: "Technologies and skills",
      paragraphs: [
        "I’m a frontend/web developer specialized in building fast, accessible, and responsive interfaces with modern JavaScript and TypeScript technologies.",
        "I focus on turning product needs into clear web experiences, taking care of SEO, performance, semantic structure, and code maintainability.",
      ],
    },
    footer: {
      copyright: "Dev Portfolio",
    },
  },
} as const;
