import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
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
        <html lang="en" className={`${geist.variable} h-full antialiased dark`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
