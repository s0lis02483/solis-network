"use client";

import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-white/20"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Solis Network",
    subtitle,
    ctaLabel = "Discover Excellence",
    onCtaClick,
}: {
    title?: string;
    subtitle?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
}) {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    {/* Vapour text hero title */}
                    <div className="w-full mb-8" style={{ height: "140px" }}>
                        <VaporizeTextCycle
                            texts={["Solis Network"]}
                            font={{
                                fontFamily: "Roboto, sans-serif",
                                fontSize: "110px",
                                fontWeight: 700,
                            }}
                            color="rgb(255, 255, 255)"
                            spread={5}
                            density={6}
                            animation={{
                                vaporizeDuration: 3,
                                fadeInDuration: 1.5,
                                waitDuration: 2.5,
                            }}
                            direction="left-to-right"
                            alignment="center"
                            tag={Tag.H1}
                        />
                    </div>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <HoverBorderGradient
                            onClick={onCtaClick}
                            className="px-8 py-3 text-base"
                        >
                            {ctaLabel} →
                        </HoverBorderGradient>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
