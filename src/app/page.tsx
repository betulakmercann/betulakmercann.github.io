
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Articles from "@/components/articles";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08070d] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Contact />
    </main>
  );
}
