import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import Pages from "../components/Pages";
import "./globals.css";



export default function Home() {
  return (
    <main>
      <Pages />
      <Skills />
      <Contact />
    </main>
  );
}