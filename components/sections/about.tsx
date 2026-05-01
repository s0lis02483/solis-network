"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const values = [
    "Transparent communication, every step of the way",
    "Results that outlast the engagement",
    "Senior talent on every project — no juniors unsupervised",
    "Agile delivery with weekly progress checkpoints",
];

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden h-[480px]">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                                alt="Solis Network team collaborating"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6">
                            A network agency built on{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                trust
                            </span>
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                            Solis Network is a full-service digital agency headquartered in the heart of innovation. We partner with startups, scale-ups, and established brands to craft digital strategies that actually work.
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                            Our team of strategists, designers, and engineers bring diverse expertise to every project — ensuring every decision is intentional, every pixel purposeful, and every campaign measurable.
                        </p>

                        <ul className="flex flex-col gap-3 mb-10">
                            {values.map((v) => (
                                <li key={v} className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-yellow-400 shrink-0 mt-0.5" />
                                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">{v}</span>
                                </li>
                            ))}
                        </ul>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
