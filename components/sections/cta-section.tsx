"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useLanguage } from "@/contexts/language-context";

export function CTASection() {
    const { t } = useLanguage();
    const c = t.cta;

    return (
        <section className="py-24 bg-neutral-900 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-yellow-400/8 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-4">
                        {c.tag}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        {c.title}
                    </h2>
                    <p className="text-lg text-neutral-400 mb-3">{c.sub}</p>
                    <p className="text-sm text-yellow-400 font-semibold mb-10 flex items-center justify-center gap-2">
                        <Clock className="size-4" />
                        {c.urgency}
                    </p>
                    <a href="#contact">
                        <HoverBorderGradient yellow className="px-10 py-4 text-lg font-black flex items-center gap-3">
                            <Calendar className="size-5" />
                            {c.btn}
                        </HoverBorderGradient>
                    </a>
                    <p className="text-xs text-neutral-600 mt-5">{c.fine}</p>
                </motion.div>
            </div>
        </section>
    );
}
