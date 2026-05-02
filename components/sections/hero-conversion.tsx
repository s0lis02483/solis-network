"use client";

import { motion } from "framer-motion";
import { ShimmerText } from "@/components/ui/shimmer-text";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full text-white/20" viewBox="0 0 696 316" fill="none">
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
                        transition={{ duration: 20 + Math.random() * 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function HeroConversion() {
    const { t } = useLanguage();
    const h = t.hero;

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto flex flex-col items-center gap-6"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-semibold tracking-widest uppercase"
                    >
                        <span className="size-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        {h.badge}
                    </motion.div>

                    {/* Main headline */}
                    <ShimmerText
                        className="text-[72px] sm:text-[96px] md:text-[110px] font-black tracking-tight leading-none text-white"
                        duration={2.5}
                        delay={0.5}
                    >
                        {h.title}
                    </ShimmerText>

                    {/* Subheadline */}
                    <motion.p
                        key={h.sub}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mt-2"
                    >
                        {h.sub}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-3 mt-2"
                    >
                        <a href="#contact">
                            <HoverBorderGradient yellow className="px-8 py-3.5 text-base font-semibold flex items-center gap-2">
                                <Calendar className="size-4" />
                                {h.cta}
                            </HoverBorderGradient>
                        </a>
                        <a href="#how-it-works">
                            <HoverBorderGradient className="px-6 py-3.5 text-sm flex items-center gap-2">
                                {h.secondary} <ArrowRight className="size-4" />
                            </HoverBorderGradient>
                        </a>
                    </motion.div>

                    {/* Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mt-6 pt-6 border-t border-neutral-800 w-full max-w-lg mx-auto"
                    >
                        {[
                            { v: h.m1v, l: h.m1l },
                            { v: h.m2v, l: h.m2l },
                            { v: h.m3v, l: h.m3l },
                        ].map((m) => (
                            <div key={m.l} className="text-center">
                                <p className="text-2xl font-black text-yellow-400">{m.v}</p>
                                <p className="text-xs text-neutral-500 mt-0.5">{m.l}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
