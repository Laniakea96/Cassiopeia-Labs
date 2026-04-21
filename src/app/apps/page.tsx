import type { Metadata } from "next";
import { getAllApps } from "@/data/apps";
import AppCard from "@/components/apps/AppCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Apps",
  description: "Browse all apps built by Cassiopeia Labs.",
};

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <div className="py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Our Apps"
            subtitle="Applications crafted with care"
          />
        </AnimatedSection>

        {apps.length === 0 ? (
          <AnimatedSection>
            <p className="text-center text-muted text-lg">
              No apps published yet. Stay tuned!
            </p>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, i) => (
              <AnimatedSection key={app.slug} delay={i * 0.1}>
                <AppCard app={app} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
