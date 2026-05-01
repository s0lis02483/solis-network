export function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800 py-10">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="Solis Network logo" width={30} height={30} />
                    <span className="font-bold text-base tracking-tight text-white">
                        Solis<span className="text-yellow-400">.</span>
                    </span>
                </div>
                <p className="text-xs text-neutral-500">
                    © {new Date().getFullYear()} Solis Network Agency. All rights reserved.
                </p>
                <div className="flex gap-5 text-xs text-neutral-500">
                    <a href="#" className="hover:text-neutral-300 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-neutral-300 transition-colors">Terms</a>
                    <a href="#" className="hover:text-neutral-300 transition-colors">Cookies</a>
                </div>
            </div>
        </footer>
    );
}
