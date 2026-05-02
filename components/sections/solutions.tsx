"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Mic, Globe, Megaphone, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const icons = [Bot, Cpu, Mic, Globe, Megaphone, Layers];
const slugs = ["chatbots", "ai-automations", "voice-assistants", "web-development", "digital-marketing", "team-systems"];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function SolutionsSection() {
    const { t } = useLanguage();
    const s = t.solutions;

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
                        {s.tag}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        {s.title}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            {s.titleAccent}
                        </span>
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">{s.sub}</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {s.items.map((item, i) => {
                        const Icon = icons[i];
                        const slug = slugs[i];
                        return (
                            <motion.div key={slug} variants={cardVariants}>
                                <Link
                                    href={`/services/${slug}`}
                                    className="group flex flex-col h-full bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-yellow-400/40 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/5"
                                >
                                    <p className="text-xs text-neutral-500 font-medium mb-4 italic">{item.problem}</p>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="size-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                                            <Icon className="size-5 text-yellow-400" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral-400 leading-relaxed flex-1 mb-5">{item.outcome}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1.5 rounded-full">
                                            {item.result}
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
