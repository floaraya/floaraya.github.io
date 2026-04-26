import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Stack } from "@/components/site/Stack";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
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