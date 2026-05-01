"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    {/* Left — pitch */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block text-sm font-semibold text-orange-500 tracking-widest uppercase mb-3">
                            Contact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                            Ready to{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                                grow?
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                            Tell us about your project. We'll respond within 24 hours with a tailored strategy outline — no strings attached.
                        </p>

                        <ul className="flex flex-col gap-5">
                            {[
                                { icon: Mail, label: "hello@solis.network" },
                                { icon: Phone, label: "+1 (555) 012-3456" },
                                { icon: MapPin, label: "New York · London · Tokyo" },
                            ].map(({ icon: Icon, label }) => (
                                <li key={label} className="flex items-center gap-4">
                                    <div className="size-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                                        <Icon className="size-5 text-orange-400" />
                                    </div>
                                    <span className="text-neutral-300 text-sm">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right — form */}
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
                                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Jane Smith"
                                        className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="jane@company.com"
                                        className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    placeholder="Acme Inc."
                                    className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                                    Project brief
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us what you're building and what you need help with..."
                                    className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                                />
                            </div>
                            <Button className="w-full rounded-xl py-6 text-base font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-none transition-all duration-200">
                                Send message
                                <ArrowRight className="size-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
