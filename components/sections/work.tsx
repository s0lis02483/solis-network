"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Lumina E-Commerce",
        category: "Web Development · Brand",
        description:
            "A full-stack shopping experience that boosted conversions by 340% in the first quarter.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        accent: "from-yellow-400 to-yellow-500",
    },
    {
        title: "Nexara Finance App",
        category: "Product Design · Development",
        description:
            "A clean, intuitive fintech dashboard serving 50k+ active users with real-time data.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        accent: "from-yellow-300 to-yellow-500",
    },
    {
        title: "Bloom Health Platform",
        category: "SEO · Marketing · Web",
        description:
            "Organic traffic grew 5× in six months through technical SEO and content strategy.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        accent: "from-yellow-400 to-yellow-600",
    },
    {
        title: "Forte Music Brand",
        category: "Brand Identity · Strategy",
        description:
            "Complete rebrand for an independent label that tripled streaming engagement.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
        accent: "from-yellow-300 to-yellow-500",
    },
];

export function WorkSection() {
    return (
        <section id="work" className="py-24 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4"
                >
                    <div>
                        <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                            Our Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
                            Projects we're{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                proud of
                            </span>
                        </h2>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-xs md:text-right text-sm">
                        A selection of work that defines our approach and delivers lasting impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="relative h-64 md:h-72 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span
                                    className={`inline-block text-xs font-semibold text-neutral-900 bg-gradient-to-r ${project.accent} rounded-full px-3 py-1 mb-2`}
                                >
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
