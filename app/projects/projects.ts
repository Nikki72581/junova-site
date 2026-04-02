export type ProjectStatus = "Active" | "Shipped" | "Open Source";

export type Project = {
  name: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  githubUrl: string | null;
  liveUrl: string | null;
};

export const projects: Project[] = [
  {
    name: "CommissionFlow",
    description:
      "SaaS platform for managing VAR sales commissions, including residual commission tracking for recurring revenue. Built to solve a problem Nicole saw firsthand in the Acumatica channel — commission management that's either done in spreadsheets or buried in ERP modules that don't fit the VAR workflow. CommissionFlow gives channel teams a purpose-built tool that actually maps to how they sell.",
    tech: ["Next.js", "Clerk", "Prisma", "Neon Postgres", "Vercel"],
    status: "Active",
    githubUrl: null, // TODO: add URL
    liveUrl: null, // TODO: add URL
  },
  {
    name: "ARFlow",
    description:
      "B2B accounts receivable portal built on CommissionFlow's architecture. Integrates with Acumatica's Contract-Based REST API to give end customers a self-service view of their invoices and payment history, with Authorize.Net and Stripe payment processing. Reduces AR follow-up overhead and gives customers visibility without requiring ERP access.",
    tech: ["Next.js", "Acumatica API", "Authorize.Net", "Stripe", "Vercel"],
    status: "Active",
    githubUrl: null, // TODO: add URL
    liveUrl: null, // TODO: add URL
  },
  {
    name: "BPM Drop",
    description:
      "A music BPM-guessing game. Plays a clip, you guess the tempo. Built as a fun side project exploring the Web Audio API and real-time state management. Sometimes the best way to learn a new API is to build something that makes you actually want to use it.",
    tech: ["Next.js", "Web Audio API", "Vercel KV", "Vercel"],
    status: "Shipped",
    githubUrl: null, // TODO: add URL
    liveUrl: null, // TODO: add URL
  },
  {
    name: "Acumatica ERP Skill",
    description:
      "An AI skill file and reference architecture for Acumatica ERP consulting. Multi-version support (25R1/25R2/26R1) with DAC source files, BQL patterns, SQL view templates, and Generic Inquiry design guidance. Built to augment AI-assisted ERP development workflows — the kind of context-loading that makes an AI actually useful when you're deep in Acumatica customization.",
    tech: ["Markdown", "SQL", "Claude Skills"],
    status: "Open Source",
    githubUrl: "https://github.com/Nikki72581/acumatica-erp-skill",
    liveUrl: null,
  },
];
