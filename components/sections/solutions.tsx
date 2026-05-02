"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Mic, Globe, Megaphone, Layers } from "lucide-react";

const solutions = [
    {
        icon: Bot,
        slug: "chatbots",
        problem: "Losing leads outside business hours?",
        title: "AI Chatbots",
        outcome: "Convert website visitors into qualified leads — 24 hours a day, 7 days a week. No missed opportunities.",
        result: "40% more leads converted on average",
    },
    {
        icon: Cpu,
        slug: "ai-automations",
        problem: "Drowning in repetitive manual tasks?",
        title: "AI Automations",
        outcome: "Eliminate copy-pasting, manual data entry, and repetitive workflows. Your team does the work that actually matters.",
        result: "Save 20+ hours per week",
    },
    {
        icon: Mic,
        slug: "voice-assistants",
        problem: "Missing calls and losing bookings?",
        title: "Voice Assistants",
        outcome: "An AI that answers your phone, handles bookings, and responds to enquiries — without a receptionist.",
        result: "90% fewer missed calls",
    },
    {
        icon: Globe,
        slug: "web-development",
        problem: "Website not generating business?",
        title: "Web Development",
        outcome: "High-converting websites built to turn visitors into customers — fast, professional, and designed for growth.",
        result: "Built to convert, not just look good",
    },
    {
        icon: Megaphone,
        slug: "digital-marketing",
        problem: "Struggling to reach the right audience?",
        title: "Digital Marketing",
        outcome: "Full-funnel campaigns that put your brand in front of the people most likely to buy — and keep them coming back.",
        result: "Campaigns optimised for ROI",
    },
    {
        icon: Layers,
        slug: "team-systems",
        problem: "Your team working around broken tools?",
        title: "Team Systems",
        outcome: "Custom internal platforms, dashboards, and workflows built exactly for how your team operates.",
        result: "Built for your process — not a template",
    },
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function SolutionsSection() {
    return (
        <section id="services" className="py-24 bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Solutions built for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            real results
                        </span>
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        We don&apos;t sell technology — we solve business problems. Here&apos;s what each solution actually does for you.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {solutions.map((s) => {
                        const Icon = s.icon;
                        return (
                            <motion.div key={s.slug} variants={cardVariants}>
                                <Link
                                    href={`/services/${s.slug}`}
                                    className="group flex flex-col h-full bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-yellow-400/40 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/5"
                                >
                                    {/* Problem tag */}
                                    <p className="text-xs text-neutral-500 font-medium mb-4 italic">{s.problem}</p>

                                    {/* Icon + Title */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="size-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                                            <Icon className="size-5 text-yellow-400" />
                                        </div>
                                        <h3 className="text-base font-bold text-white">{s.title}</h3>
                                    </div>

                                    {/* Outcome */}
                                    <p className="text-sm text-neutral-400 leading-relaxed flex-1 mb-5">
                                        {s.outcome}
                                    </p>

                                    {/* Result pill */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1.5 rounded-full">
                                            {s.result}
                                        </span>
                                        <ArrowRight className="size-4 text-neutral-600 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
