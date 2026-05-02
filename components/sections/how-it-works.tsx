"use client";

import { motion } from "framer-motion";
import { Calendar, Search, Rocket } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const steps = [
    {
        number: "01",
        icon: Calendar,
        title: "Book a Free Call",
        description:
            "Schedule a 30-minute strategy call. No sales pitch — we listen to your business, understand your goals, and identify where AI can have the biggest impact.",
        detail: "Free. No commitment.",
    },
    {
        number: "02",
        icon: Search,
        title: "We Analyse Your Business",
        description:
            "We map your current workflows, identify bottlenecks, and design a custom solution. You get a clear plan with expected outcomes before we build anything.",
        detail: "Delivered within 5 business days.",
    },
    {
        number: "03",
        icon: Rocket,
        title: "We Build & Deploy",
        description:
            "Our team builds, tests, and launches your AI system. We handle every technical detail and train your team — so you're up and running fast.",
        detail: "Most projects go live in 2–4 weeks.",
    },
];

export function HowItWorksSection() {
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
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        From call to live in{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            3 simple steps
                        </span>
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-xl mx-auto">
                        No complexity. No jargon. Just a clear process that gets your AI system live fast.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative flex flex-col items-center text-center bg-neutral-800/50 rounded-2xl border border-neutral-700/50 p-8"
                            >
                                {/* Icon circle */}
                                <div className="size-14 rounded-full bg-yellow-400/10 border-2 border-yellow-400/30 flex items-center justify-center mb-6 relative z-10 bg-neutral-900">
                                    <Icon className="size-6 text-yellow-400" />
                                </div>

                                <span className="text-xs font-bold text-yellow-400/60 tracking-widest uppercase mb-2">
                                    Step {step.number}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                                    {step.description}
                                </p>
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
