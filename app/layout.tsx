import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "Solis Network Agency — Digital Growth Partners",
    description:
        "Solis Network is a full-service digital agency delivering web development, branding, SEO, and marketing that drives measurable growth.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${roboto.variable} h-full antialiased dark`}>
            <body className="min-h-full flex flex-col font-[family-name:var(--font-roboto)]">
                {children}
            </body>
        </html>
    );
}
