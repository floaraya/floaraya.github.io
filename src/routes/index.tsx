import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Stack } from "@/components/site/Stack";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flora Araya · Marketing B2B & Research Estratégico" },
      {
        name: "description",
        content:
          "Especialista en Marketing B2B y Research. Investigación de mercados, contenidos B2B, Google Ads y automatización con Zoho CRM.",
      },
      { property: "og:title", content: "Flora Araya · Marketing B2B & Research" },
      {
        property: "og:description",
        content:
          "Transformo datos en estrategias y soluciones técnicas en mensajes que venden.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Flora Araya · Marketing B2B" },
      {
        name: "twitter:description",
        content:
          "Transformo datos en estrategias y soluciones técnicas en mensajes que venden.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
