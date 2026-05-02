import { Navbar } from "@/components/navbar";
import { HeroConversion } from "@/components/sections/hero-conversion";
import { SocialProofSection } from "@/components/sections/social-proof";
import { SolutionsSection } from "@/components/sections/solutions";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { CTASection } from "@/components/sections/cta-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import { ContactSection } from "@/components/sections/contact";
import { FooterMinimal } from "@/components/footer-minimal";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroConversion />
                <SocialProofSection />
                <SolutionsSection />
                <HowItWorksSection />
                <CaseStudiesSection />
                <CTASection />
                <TestimonialsSection />
                <FAQSection />
                <FinalCTASection />
                <ContactSection />
            </main>
            <FooterMinimal />
        </>
    );
}
