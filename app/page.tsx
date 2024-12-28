import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import Pages from "../components/Pages";
import AboutMe from "../components/AboutMe";
import "./globals.css";



export default function Home() {
  return (
    <main>
      <Pages />
      <AboutMe />
      <Skills />
      <Contact />
    </main>
  );
}