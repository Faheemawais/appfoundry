import Navbar   from "@/app/components/Navbar";
import Hero     from "@/app/sections/Hero";
import Projects from "@/app/sections/Projects";
import Services from "@/app/sections/Services";
import Contact  from "@/app/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar   />
      <Hero     />
      <Projects />
      <Services />
      <Contact  />
    </main>
  );
}
