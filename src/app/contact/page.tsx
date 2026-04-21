import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Cassiopeia Labs.",
};

export default function ContactPage() {
  return (
    <div className="py-24">
      <Container>
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-muted text-lg mb-12">
              Have a question, feedback, or just want to say hello? I&apos;d
              love to hear from you.
            </p>

            <div className="bg-surface-raised border border-border rounded-2xl p-8 text-left space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-400 hover:text-brand-300 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              {siteConfig.social.twitter && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Twitter / X
                  </h3>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    @cassiopeialabs
                  </a>
                </div>
              )}

              {siteConfig.social.github && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    GitHub
                  </h3>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    cassiopeialabs
                  </a>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
