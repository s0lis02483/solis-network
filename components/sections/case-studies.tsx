"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Globe, Mic, Megaphone, Layers } from "lucide-react";

const cases = [
    {
        icon: Bot,
        tag: "AI Chatbot",
        company: "E-Commerce Store",
        industry: "Retail · Slovenia",
        problem: "The store was missing opportunities from visitors who browsed outside business hours. With no immediate responses to product questions, many potential customers left before completing a purchase.",
        solution: "We implemented an AI chatbot on their website to handle common product inquiries, provide basic recommendations, and capture contact details. The chatbot also helps guide visitors toward relevant products and the checkout process, even when the team is offline.",
        results: [
            { metric: "+18%", label: "increase in leads captured" },
            { metric: "~2×", label: "faster average response time" },
            { metric: "€3,500+", label: "additional revenue in the first month" },
        ],
    },
    {
        icon: Cpu,
        tag: "AI Automation",
        company: "Marketing Agency",
        industry: "Agency · Croatia",
        problem: "Their team was spending 25+ hours a week manually pulling reports, sending client updates, and managing repetitive admin tasks.",
        solution: "We built an end-to-end automation system that collects data from all platforms, generates client reports automatically, and sends updates — without anyone touching it.",
        results: [
            { metric: "25hrs", label: "saved every week" },
            { metric: "0", label: "manual reports needed" },
            { metric: "€3k", label: "saved in monthly labour" },
        ],
    },
    {
        icon: Globe,
        tag: "Web Development",
        company: "Local Service Business",
        industry: "Services · Austria",
        problem: "Their old website was slow, not mobile-friendly, and generating almost no enquiries — despite spending on Google Ads.",
        solution: "We rebuilt their site from scratch: fast, mobile-first, and conversion-focused. Every section was designed to move visitors toward booking a service.",
        results: [
            { metric: "220%", label: "increase in enquiries" },
            { metric: "1.2s", label: "average load time" },
            { metric: "4.8×", label: "improvement in ad ROAS" },
        ],
    },
    {
        icon: Mic,
        tag: "Voice Assistant",
        company: "Medical Clinic",
        industry: "Healthcare · Slovenia",
        problem: "The clinic was missing 30–40% of incoming calls during busy hours. Staff spent most of their day managing bookings over the phone instead of helping patients.",
        solution: "We built a voice AI that answers every call instantly, books appointments directly into their calendar, sends confirmation messages, and handles rescheduling — without any human involvement.",
        results: [
            { metric: "0", label: "missed calls since launch" },
            { metric: "6hrs", label: "of staff time freed daily" },
            { metric: "3×", label: "more bookings per week" },
        ],
    },
    {
        icon: Megaphone,
        tag: "Digital Marketing",
        company: "D2C Fashion Brand",
        industry: "E-Commerce · Germany",
        problem: "The brand was running ads with no clear strategy — burning budget on broad audiences with poor ROAS and almost no repeat customers.",
        solution: "We built a full-funnel marketing system: audience research, content strategy, email automation sequences, and paid search campaigns — all connected and optimised together.",
        results: [
            { metric: "3.7×", label: "average ROAS achieved" },
            { metric: "55%", label: "increase in repeat purchases" },
            { metric: "€28k", label: "extra monthly revenue" },
        ],
    },
    {
        icon: Layers,
        tag: "Team Systems",
        company: "Construction Company",
        industry: "Operations · Croatia",
        problem: "Project managers were tracking jobs across spreadsheets, WhatsApp groups, and email threads. Nothing was in one place — deadlines slipped, costs were hard to track, and reporting took hours each week.",
        solution: "We built a custom internal platform with project tracking, team task management, budget dashboards, and automated weekly reports — all connected to their existing tools.",
        results: [
            { metric: "12hrs", label: "saved on reporting weekly" },
            { metric: "100%", label: "of projects on time since launch" },
            { metric: "1 place", label: "for every project, task and update" },
        ],
    },
];

export function CaseStudiesSection() {
    return (
        <section id="case-studies" className="py-24 bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                        Case Studies
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Real businesses.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            Real results.
                        </span>
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-xl mx-auto">
                        Here&apos;s what happens when businesses stop doing things manually and let AI work for them.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {cases.map((c, i) => {
                        const Icon = c.icon;
                        return (
                            <motion.div
                                key={c.company}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    {/* Left — context */}
                                    <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-neutral-800">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="size-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                                                <Icon className="size-5 text-yellow-400" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-semibold text-yellow-400 tracking-widest uppercase">{c.tag}</span>
                                                <p className="text-xs text-neutral-500">{c.industry}</p>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-6">{c.company}</h3>

                                        <div className="flex flex-col gap-5">
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Problem</p>
                                                <p className="text-sm text-neutral-400 leading-relaxed">{c.problem}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Solution</p>
                                                <p className="text-sm text-neutral-400 leading-relaxed">{c.solution}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right — results */}
                                    <div className="p-8 md:p-10 flex flex-col justify-center">
                                        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-8">Results</p>
                                        <div className="flex flex-col gap-6">
                                            {c.results.map((r) => (
                                                <div key={r.label} className="flex items-center gap-5">
                                                    <span className="text-4xl font-black text-yellow-400 shrink-0 w-24">{r.metric}</span>
                                                    <span className="text-sm text-neutral-300 font-medium">{r.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
