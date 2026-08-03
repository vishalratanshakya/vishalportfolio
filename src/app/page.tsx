import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070b] text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
