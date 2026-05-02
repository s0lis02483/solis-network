"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const faqs = [
    {
        q: "How much does it cost?",
        a: "Every project is scoped individually based on what you need. AI chatbots typically start from €800, automation systems from €1,200, and full web builds from €1,500. We always give you a clear, fixed price before any work begins — no surprises.",
    },
    {
        q: "How long does it take to go live?",
        a: "Most AI chatbot and automation projects are live within 2–3 weeks. Websites and more complex systems take 3–5 weeks. After our strategy call, we'll give you a precise timeline for your specific project.",
    },
    {
        q: "Do I need any technical knowledge?",
        a: "None at all. We handle every technical aspect — from building and connecting systems to training your team. You just tell us what problem you want solved, and we handle the rest.",
    },
    {
        q: "What industries do you work with?",
        a: "We work with businesses across all industries — e-commerce, agencies, professional services, hospitality, healthcare, and more. If your business has repetitive processes or customer communication, we can help.",
    },
    {
        q: "What results can I realistically expect?",
        a: "Our clients typically save 15–30 hours per week in manual tasks, see 30–50% more leads captured through chatbots, and experience significantly faster customer response times. Results vary by business — we'll give you realistic expectations during your strategy call.",
    },
    {
        q: "What happens after the project goes live?",
        a: "We don't disappear. Every project includes a post-launch support period, and we offer ongoing maintenance and improvement plans. As your business grows, your AI systems grow with you.",
    },
    {
        q: "Can you integrate with our existing tools?",
        a: "Yes. We integrate with CRMs (HubSpot, Pipedrive, Salesforce), helpdesk tools, WhatsApp Business, Google Calendar, e-commerce platforms, and most major business tools. If you're using something, we can almost certainly connect to it.",
    },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-neutral-800 last:border-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            >
                <span className="text-base font-semibold text-white group-hover:text-yellow-400 transition-colors duration-200">
                    {q}
                </span>
                <span className="shrink-0 size-7 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-yellow-400/50 transition-colors duration-200">
                    {isOpen
                        ? <Minus className="size-3.5 text-yellow-400" />
                        : <Plus className="size-3.5 text-neutral-400 group-hover:text-yellow-400 transition-colors" />
                    }
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm text-neutral-400 leading-relaxed pb-5 pr-10">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-sm font-semibold text-yellow-400 tracking-widest uppercase mb-3">
                            FAQ
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                            Questions we{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                get asked
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                            Still not sure? Here are the most common questions businesses ask before working with us.
                        </p>
                        <a href="#contact">
                            <HoverBorderGradient yellow className="px-6 py-3 text-sm">
                                Ask us directly →
                            </HoverBorderGradient>
                        </a>
                    </motion.div>

                    {/* Right — accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-neutral-900 rounded-2xl border border-neutral-800 px-7"
                    >
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={faq.q}
                                q={faq.q}
                                a={faq.a}
                                isOpen={openIndex === i}
                                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
