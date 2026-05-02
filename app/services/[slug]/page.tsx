import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { FooterMinimal } from "@/components/footer-minimal";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { getService, services } from "@/lib/services-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950 pt-24 pb-16">
        {/* Back link */}
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-yellow-400 transition-colors duration-200"
          >
            <ArrowLeft className="size-4" />
            Back to services
          </Link>
        </div>

        {/* Hero */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="size-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-8">
              <Icon className="size-8 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-yellow-400 font-semibold mb-6">
              {service.tagline}
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="container mx-auto px-4 md:px-6 my-16">
          <div className="h-px bg-neutral-800" />
        </div>

        {/* Overview */}
        <div className="container mx-auto px-4 md:px-6 mb-20">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold text-yellow-400 tracking-widest uppercase mb-4">
              Overview
            </span>
            <p className="text-lg text-neutral-300 leading-relaxed">
              {service.content.overview}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="container mx-auto px-4 md:px-6 mb-20">
          <span className="inline-block text-xs font-semibold text-yellow-400 tracking-widest uppercase mb-8">
            What&apos;s included
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.content.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
              <div
                key={feature.title}
                className="bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-yellow-400/30 p-7 flex flex-col gap-4 transition-colors duration-300"
              >
                <div className="size-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <FeatureIcon className="size-5 text-yellow-400" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );})}
          </div>
        </div>

        {/* Divider */}
        <div className="container mx-auto px-4 md:px-6 mb-20">
          <div className="h-px bg-neutral-800" />
        </div>

        {/* Process */}
        <div className="container mx-auto px-4 md:px-6 mb-20">
          <span className="inline-block text-xs font-semibold text-yellow-400 tracking-widest uppercase mb-4">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Our process
          </h2>
          <div className="flex flex-col gap-0">
            {service.content.process.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-6 md:gap-10 pb-10 last:pb-0"
              >
                {/* Connector line */}
                {index < service.content.process.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-neutral-800" />
                )}
                {/* Step number circle */}
                <div className="shrink-0 size-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-yellow-400">
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <div className="pt-1.5 pb-2">
                  <h3 className="text-base font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-neutral-900 border border-yellow-400/20 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="flex-1">
              <div className="size-12 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6">
                <Icon className="size-6 text-yellow-400" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                {service.content.closingStatement}
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-3">
              <Link href="/#contact">
                <HoverBorderGradient yellow className="px-7 py-3.5 text-sm flex items-center gap-2">
                  Get in touch <ArrowRight className="size-4" />
                </HoverBorderGradient>
              </Link>
              <Link href="/#services">
                <HoverBorderGradient className="px-7 py-3.5 text-sm">
                  View all services
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterMinimal />
    </>
  );
}
