"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function AboutSection() {
    const { t } = useLanguage();
    const a = t.about;

    return (
        <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden h-[520px]">
                            <Image
                                src="/about-photo.jpg"
                                alt="Solis Network — operating at the forefront"
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 to-transparent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                            {a.tag}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6">
                            {a.title}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                {a.titleAccent}
                            </span>
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-5">{a.p1}</p>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">{a.p2}</p>

                        <ul className="flex flex-col gap-3 mb-10">
                            {a.values.map((v) => (
                                <li key={v} className="flex items-start gap-3">
                                    <CheckCircle className="size-5 text-yellow-400 shrink-0 mt-0.5" />
                                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">{v}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed italic border-l-2 border-yellow-400/50 pl-4">
                            {a.closing}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
