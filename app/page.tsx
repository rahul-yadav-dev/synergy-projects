import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import FAQ from "@/components/sections/FAQ";
import BookAppointment from "@/components/sections/BookAppointment";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Projects />
        <Clients />
        <FAQ />
        <BookAppointment />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
