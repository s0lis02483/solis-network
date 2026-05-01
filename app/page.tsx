import { Navbar } from "@/components/navbar";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ServicesSection } from "@/components/sections/services";
import { WorkSection } from "@/components/sections/work";
import { AboutSection } from "@/components/sections/about";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <BackgroundPaths
                    title="Solis Network"
                    subtitle="We build digital experiences that grow businesses. Strategy, design, and technology — all under one roof."
                    ctaLabel="Start a project"
                />
                <ServicesSection />
                <WorkSection />
                <AboutSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
