"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-900">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
                        Services built for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            results
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        We combine creativity and technology to deliver digital experiences that convert visitors into loyal customers.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div key={service.slug} variants={cardVariants}>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group flex flex-col h-full bg-white dark:bg-neutral-800/60 rounded-2xl p-7 border border-neutral-200/80 dark:border-neutral-700/50 hover:border-yellow-400/60 dark:hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="size-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center mb-5 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/30 transition-all duration-300">
                                        <Icon className="size-6 text-yellow-500 dark:text-yellow-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center gap-1.5 mt-5 text-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Learn more <ArrowRight className="size-4" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
