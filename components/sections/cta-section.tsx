"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 bg-neutral-900 relative overflow-hidden">
            {/* Glow */}
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
                        Get Started
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Ready to automate your business?
                    </h2>
                    <p className="text-lg text-neutral-400 mb-3">
                        Book a free 30-minute strategy call. We&apos;ll analyse your business and show you exactly where AI can save you time and money.
                    </p>
                    <p className="text-sm text-yellow-400 font-semibold mb-10 flex items-center justify-center gap-2">
                        <Clock className="size-4" />
                        Limited spots available this month — don&apos;t miss yours.
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-yellow-400 text-neutral-900 font-black text-lg hover:bg-yellow-300 transition-colors duration-200 shadow-xl shadow-yellow-400/20"
                    >
                        <Calendar className="size-5" />
                        Book Your Free Strategy Call
                    </a>

                    <p className="text-xs text-neutral-600 mt-5">No commitment. No credit card. Just a conversation.</p>
                </motion.div>
            </div>
        </section>
    );
}
