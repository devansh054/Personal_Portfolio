import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devansh Khatri | Software Engineer",
  description:
    "Portfolio of Devansh Khatri, a Software Engineer specializing in Java, Spring Boot, React, PostgreSQL, Docker, and real-time trading systems.",
}

export default function Home() {
  return (
    <div className="w-full">
      <div className="minimal-background" />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}
