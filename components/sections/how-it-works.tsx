"use client";

import { motion } from "framer-motion";
import { Calendar, Search, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const icons = [Calendar, Search, Rocket];

export function HowItWorksSection() {
    const { t } = useLanguage();
    const h = t.hiw;

    return (
        <section id="how-it-works" className="py-24 bg-neutral-900">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                        {h.tag}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        {h.title}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            {h.titleAccent}
                        </span>
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-xl mx-auto">{h.sub}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {h.steps.map((step, i) => {
                        const Icon = icons[i];
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="flex flex-col items-center text-center bg-neutral-800/50 rounded-2xl border border-neutral-700/50 p-8"
                            >
                                <div className="size-14 rounded-full bg-yellow-400/10 border-2 border-yellow-400/30 flex items-center justify-center mb-6 bg-neutral-900">
                                    <Icon className="size-6 text-yellow-400" />
                                </div>
                                <span className="text-xs font-bold text-yellow-400/60 tracking-widest uppercase mb-2">
                                    {step.label} 0{i + 1}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed mb-5">{step.desc}</p>
                                <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1.5 rounded-full">
                                    {step.detail}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
