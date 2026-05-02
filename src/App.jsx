import { useState, useEffect } from "react";
import { profile } from "./data/profile";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Nav active={activeSection} links={profile.links} />
      <main>
        <Hero profile={profile} />
        <Journey journey={profile.journey} />
        <Projects personalProjects={profile.personalProjects} workProjects={profile.workProjects} />
        <Contact links={profile.links} />
      </main>
      <Footer name={profile.name} />
    </div>
  );
}
