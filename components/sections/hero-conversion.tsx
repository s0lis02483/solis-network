"use client";

import { motion } from "framer-motion";
import { ShimmerText } from "@/components/ui/shimmer-text";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRight, Calendar } from "lucide-react";

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

const metrics = [
    { value: "20+", label: "Hours saved per week" },
    { value: "24/7", label: "AI working for you" },
    { value: "3×", label: "Faster response times" },
];

export function HeroConversion() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Ambient glow */}
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
                        AI-Powered Digital Agency
                    </motion.div>

                    {/* Main headline */}
                    <ShimmerText
                        className="text-[56px] sm:text-[72px] md:text-[88px] font-black tracking-tight leading-[0.9] text-white"
                        duration={2.5}
                        delay={0.5}
                    >
                        Automate Your
                    </ShimmerText>
                    <ShimmerText
                        className="text-[56px] sm:text-[72px] md:text-[88px] font-black tracking-tight leading-[0.9] text-white -mt-4"
                        duration={2.5}
                        delay={1}
                    >
                        Business with AI
                    </ShimmerText>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mt-2"
                    >
                        We build AI chatbots, automation systems, and high-converting websites for businesses ready to scale — without hiring more staff.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-3 mt-2"
                    >
                        <a href="#contact">
                            <HoverBorderGradient className="px-8 py-3.5 text-base font-semibold flex items-center gap-2">
                                <Calendar className="size-4" />
                                Book a Free Call
                            </HoverBorderGradient>
                        </a>
                        <a href="#how-it-works">
                            <HoverBorderGradient className="px-6 py-3.5 text-sm flex items-center gap-2">
                                See How It Works <ArrowRight className="size-4" />
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
                        {metrics.map((m) => (
                            <div key={m.label} className="text-center">
                                <p className="text-2xl font-black text-yellow-400">{m.value}</p>
                                <p className="text-xs text-neutral-500 mt-0.5">{m.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
