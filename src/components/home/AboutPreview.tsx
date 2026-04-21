import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-surface-raised">
      <Container>
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built by a solo developer
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Cassiopeia Labs is a one-person studio dedicated to creating
              thoughtful, well-crafted applications. Every app is designed with
              care, from concept to release.
            </p>
            <Link
              href="/about"
              className="text-brand-400 hover:text-brand-300 font-medium transition-colors"
            >
              Learn more &rarr;
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
