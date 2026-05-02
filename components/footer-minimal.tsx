import { Mail, Phone, MapPin } from "lucide-react";

export function FooterMinimal() {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <img src="/logo.svg" alt="Solis Network logo" width={30} height={30} />
                            <span className="font-bold text-base tracking-tight text-white">
                                Solis<span className="text-yellow-400">.</span>
                            </span>
                        </div>
                        <p className="text-xs text-neutral-500 leading-relaxed max-w-[220px]">
                            AI-powered solutions that automate your business and drive real growth.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Services</p>
                        <ul className="flex flex-col gap-2">
                            {["AI Chatbots", "AI Automations", "Voice Assistants", "Web Development", "Digital Marketing", "Team Systems"].map((s) => (
                                <li key={s}>
                                    <a href="#services" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200">
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Contact</p>
                        <ul className="flex flex-col gap-3">
                            {[
                                { icon: Mail, label: "info@solis-network.com" },
                                { icon: Phone, label: "+386 69 976 180" },
                                { icon: MapPin, label: "Ljubljana, Slovenia" },
                            ].map(({ icon: Icon, label }) => (
                                <li key={label} className="flex items-center gap-2">
                                    <Icon className="size-3.5 text-yellow-400 shrink-0" />
                                    <span className="text-xs text-neutral-500">{label}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            className="inline-block mt-5 px-5 py-2.5 rounded-full bg-yellow-400 text-neutral-900 font-bold text-xs hover:bg-yellow-300 transition-colors duration-200"
                        >
                            Book a Free Call →
                        </a>
                    </div>
                </div>

                <div className="h-px bg-neutral-800 mb-6" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-neutral-600">
                        © {new Date().getFullYear()} Solis Network Agency. All rights reserved.
                    </p>
                    <div className="flex gap-5 text-xs text-neutral-600">
                        <a href="#" className="hover:text-neutral-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-neutral-400 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
