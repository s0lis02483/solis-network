import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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

        {/* Placeholder content */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-neutral-900 rounded-2xl border border-neutral-800 p-8 flex flex-col gap-4"
              >
                <div className="h-5 w-3/4 bg-neutral-800 rounded-full animate-pulse" />
                <div className="h-4 w-full bg-neutral-800/60 rounded-full animate-pulse" />
                <div className="h-4 w-5/6 bg-neutral-800/60 rounded-full animate-pulse" />
                <div className="h-4 w-4/6 bg-neutral-800/60 rounded-full animate-pulse" />
              </div>
            ))}
          </div>

          <div className="mt-16 bg-neutral-900 border border-yellow-400/20 rounded-2xl p-10 text-center">
            <div className="size-12 rounded-full bg-yellow-400/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="size-6 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Content coming soon
            </h2>
            <p className="text-neutral-400 max-w-md mx-auto text-sm">
              Detailed information about {service.title} will be added shortly.
              In the meantime, reach out and we'll walk you through everything.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-yellow-400 text-neutral-900 font-semibold text-sm hover:bg-yellow-300 transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
