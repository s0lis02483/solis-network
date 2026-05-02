"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useLanguage } from "@/contexts/language-context";

export function ContactSection() {
    const { t } = useLanguage();
    const c = t.contact;

    return (
        <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                            {c.tag}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                            {c.title}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                {c.titleAccent}
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-10">{c.sub}</p>

                        <ul className="flex flex-col gap-5">
                            {[
                                { icon: Mail,   label: "info@solis-network.com" },
                                { icon: Phone,  label: "+386 69 976 180" },
                                { icon: MapPin, label: "Ljubljana, Slovenia" },
                            ].map(({ icon: Icon, label }) => (
                                <li key={label} className="flex items-center gap-4">
                                    <div className="size-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0">
                                        <Icon className="size-5 text-yellow-400" />
                                    </div>
                                    <span className="text-neutral-300 text-sm">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
                    >
                        <form className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{c.name}</label>
                                    <input type="text" placeholder={c.namePh} className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 transition-colors" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{c.email}</label>
                                    <input type="email" placeholder={c.emailPh} className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 transition-colors" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{c.company}</label>
                                <input type="text" placeholder={c.companyPh} className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{c.brief}</label>
                                <textarea rows={4} placeholder={c.briefPh} className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none" />
                            </div>
                            <div className="flex justify-center">
                                <HoverBorderGradient containerClassName="w-full rounded-xl" className="w-full justify-center px-6 py-3 text-base rounded-xl">
                                    {c.btn}
                                </HoverBorderGradient>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
