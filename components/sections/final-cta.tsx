"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useLanguage } from "@/contexts/language-context";

export function FinalCTASection() {
    const { t } = useLanguage();
    const f = t.finalCta;

    return (
        <section className="py-24 bg-neutral-900 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-400/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">{f.title}</h2>
                    <p className="text-lg text-neutral-400 mb-10">{f.sub}</p>
                    <a href="#contact">
                        <HoverBorderGradient yellow className="px-9 py-4 text-base font-black flex items-center gap-3">
                            {f.btn} <ArrowRight className="size-5" />
                        </HoverBorderGradient>
                    </a>
                    <p className="text-xs text-neutral-600 mt-5">{f.fine}</p>
                </motion.div>
            </div>
        </section>
    );
}
