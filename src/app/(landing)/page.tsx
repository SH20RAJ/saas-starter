import { Metadata } from "next";
import Header2 from "@/components/mvpblocks/header-2";
import AppHero from "@/components/mvpblocks/app-hero";
import Feature1 from "@/components/mvpblocks/feature-1";
// import AboutUs1 from "@/components/mvpblocks/about-us-1";
import TestimonialsMarquee from "@/components/mvpblocks/testimonials-marquee";
import SimplePricing from "@/components/mvpblocks/simple-pricing";
import Faq3 from "@/components/mvpblocks/faq-3";
import FooterNewsletter from "@/components/mvpblocks/footer-newsletter";
import { Features } from "@/components/accertinity/features";

export const metadata: Metadata = {
  title: "SaaS Starter Template - Build Your MVP Fast",
  description: "Complete SaaS starter template with authentication, components, and modern stack. Built with Next.js, TypeScript, Tailwind CSS, and Stack Auth.",
  keywords: ["SaaS", "starter template", "Next.js", "TypeScript", "authentication", "MVP", "React"],
  authors: [{ name: "SaaS Starter" }],
  openGraph: {
    title: "SaaS Starter Template - Build Your MVP Fast",
    description: "Complete SaaS starter template with authentication, components, and modern stack.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Starter Template - Build Your MVP Fast",
    description: "Complete SaaS starter template with authentication, components, and modern stack.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header2 />
      <AppHero />
      <Feature1 />
      {/* <AboutUs1 /> */}
      <Features />
      <TestimonialsMarquee />
      <SimplePricing />
      <Faq3 />
      <FooterNewsletter />
    </main>
  );
}
