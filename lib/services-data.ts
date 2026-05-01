import { Zap, Globe, BarChart3, Megaphone, Palette, Shield, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: Globe,
    tagline: "Built to perform. Designed to convert.",
    description:
      "High-performance websites and web apps built with modern technology stacks. From landing pages to complex platforms.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    tagline: "Reach the right people, every time.",
    description:
      "Data-driven campaigns that reach your target audience across every channel — social, search, email, and beyond.",
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    icon: Palette,
    tagline: "Your story, told visually.",
    description:
      "Compelling visual identities that tell your story. Logos, design systems, and brand guidelines that stand out.",
  },
  {
    slug: "seo-analytics",
    title: "SEO & Analytics",
    icon: BarChart3,
    tagline: "Rank higher. Understand more.",
    description:
      "Rank higher and understand your users. We build strategies backed by real data and measurable outcomes.",
  },
  {
    slug: "growth-strategy",
    title: "Growth Strategy",
    icon: Zap,
    tagline: "From zero to scale.",
    description:
      "From zero to scale. We map out your growth trajectory and execute the tactics that actually move the needle.",
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    icon: Shield,
    tagline: "Protect what you've built.",
    description:
      "Protect your digital assets and stay compliant. Audits, hardening, and ongoing monitoring built into every project.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
