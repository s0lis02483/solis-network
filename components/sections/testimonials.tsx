"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Sophia Reyes",
        role: "CEO, Lumina Shop",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
        quote:
            "Solis Network completely transformed our online presence. Revenue jumped 3× within six months. They're not just an agency — they're a genuine growth partner.",
        stars: 5,
    },
    {
        name: "Marcus Liu",
        role: "CTO, Nexara Finance",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        quote:
            "The team delivered our fintech dashboard on time, on budget, and at a quality level we didn't expect from any agency. Communication was flawless throughout.",
        stars: 5,
    },
    {
        name: "Anika Patel",
        role: "Marketing Director, Bloom Health",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        quote:
            "Our organic traffic exploded. The SEO strategy Solis built for us was methodical, transparent, and it just worked. I'd recommend them to any brand serious about growth.",
        stars: 5,
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
                        Clients who{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            vouch for us
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="bg-neutral-50 dark:bg-neutral-800/60 rounded-2xl p-7 border border-neutral-200/80 dark:border-neutral-700/50 flex flex-col gap-5"
                        >
                            <div className="flex gap-1">
                                {Array.from({ length: t.stars }).map((_, s) => (
                                    <Star
                                        key={s}
                                        className="size-4 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm flex-1">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-3 pt-2 border-t border-neutral-200/80 dark:border-neutral-700/50">
                                <div className="relative size-10 rounded-full overflow-hidden shrink-0">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                                        {t.name}
                                    </p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
