"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useLanguage } from "@/contexts/language-context";

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-neutral-800 last:border-0">
            <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 py-5 text-left group">
                <span className="text-base font-semibold text-white group-hover:text-yellow-400 transition-colors duration-200">{q}</span>
                <span className="shrink-0 size-7 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-yellow-400/50 transition-colors duration-200">
                    {isOpen
                        ? <Minus className="size-3.5 text-yellow-400" />
                        : <Plus className="size-3.5 text-neutral-400 group-hover:text-yellow-400 transition-colors" />
                    }
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm text-neutral-400 leading-relaxed pb-5 pr-10">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { t } = useLanguage();
    const f = t.faq;

    return (
        <section id="faq" className="py-24 bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                            {f.tag}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                            {f.title}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                {f.titleAccent}
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8">{f.sub}</p>
                        <a href="#contact">
                            <HoverBorderGradient yellow className="px-6 py-3 text-sm">
                                {f.askBtn}
                            </HoverBorderGradient>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-neutral-900 rounded-2xl border border-neutral-800 px-7"
                    >
                        {f.items.map((faq, i) => (
                            <FAQItem
                                key={faq.q}
                                q={faq.q}
                                a={faq.a}
                                isOpen={openIndex === i}
                                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
