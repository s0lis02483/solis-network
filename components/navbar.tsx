"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <Image src="/logo.svg" alt="Solis Network logo" width={36} height={36} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-bold text-lg tracking-tight text-white">
                        Solis<span className="text-yellow-400">.</span>
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="#contact">
                        <HoverBorderGradient className="px-5 py-2 text-sm">
                            Get in touch
                        </HoverBorderGradient>
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-neutral-700 dark:text-neutral-300"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden"
                    >
                        <ul className="flex flex-col px-4 py-4 gap-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="block w-full text-center rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold py-2.5 text-sm"
                                >
                                    Get in touch
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
