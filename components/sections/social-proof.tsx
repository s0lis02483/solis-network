"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const logos = ["TechFlow", "NovaCorp", "SwiftBuild", "PeakRetail", "UrbanScale", "DataDrive"];

export function SocialProofSection() {
    const { t } = useLanguage();
    const p = t.proof;

    return (
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-xs font-semibold text-neutral-500 tracking-widest uppercase mb-8">
                        {p.trusted}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                        {logos.map((logo) => (
                            <span key={logo} className="text-lg font-bold text-neutral-600 tracking-tight hover:text-neutral-400 transition-colors duration-200">
                                {logo}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <div className="h-px bg-neutral-800 mb-14" />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {p.metrics.map((m, i) => (
                        <motion.div
                            key={m.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center bg-neutral-800/50 rounded-2xl border border-neutral-700/50 p-6"
                        >
                            <p className="text-4xl font-black text-yellow-400 mb-1">{m.value}</p>
                            <p className="text-sm font-semibold text-white mb-1">{m.label}</p>
                            <p className="text-xs text-neutral-500">{m.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
