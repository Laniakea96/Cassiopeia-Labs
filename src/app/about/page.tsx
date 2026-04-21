import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Cassiopeia Labs, an independent app development studio.",
};

export default function AboutPage() {
  return (
    <div className="py-24">
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              About{" "}
              <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
                Cassiopeia Labs
              </span>
            </h1>

            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                Cassiopeia Labs is an independent app development studio. I
                design and build applications from the ground up &mdash; from
                initial concept to final release on the App Store and Play
                Store.
              </p>

              <p>
                Every app I create is built with attention to detail, clean
                design, and a focus on solving real problems. I believe in
                quality over quantity &mdash; each project gets the time and care
                it deserves.
              </p>

              <h2 className="text-2xl font-bold text-foreground pt-6">
                Tech Stack
              </h2>
              <p>
                I primarily work with Flutter for cross-platform mobile
                development, combined with modern backend technologies. This
                allows me to ship polished apps on both iOS and Android from a
                single codebase.
              </p>

              <h2 className="text-2xl font-bold text-foreground pt-6">
                Philosophy
              </h2>
              <p>
                I believe the best apps are the ones that respect their
                users &mdash; with clean interfaces, honest business models, and
                genuine utility. No dark patterns, no bloat, just thoughtful
                software.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
