import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import OpenSource from "./open-source"

export default function Projects() {
  const projects = [
    {
      title: "Premier League Predictor",
      description:
        "A full-stack machine learning platform that predicts Premier League match outcomes with 81.4% accuracy. Built with Next.js/React frontend and FastAPI backend, leveraging Random Forest ML models, Hugging Face Transformers (NLP), and interactive 3D visualizations. Deployed on scalable microservices architecture using Docker, Kubernetes, PostgreSQL, Redis, and CI/CD pipelines.",
      tags: ["Next.js", "FastAPI", "Machine Learning", "AI", "Docker", "Kubernetes", "PostgreSQL"],
      codeLink: "https://github.com/devansh054/PL2025_ML_Predictor",
      liveLink: "https://pl2025predictor.netlify.app/",
    },
    
      {
       title: "MeetingMind – AI Meeting Assistant",
       description:
          "An AI-powered meeting platform delivering real-time transcription, intelligent action item extraction, and automated follow-ups. Built with React/Redux frontend, Node.js + FastAPI backend, leveraging Whisper STT, GPT-based NLP, and WebRTC/WebSocket for live collaboration. Features include virtual whiteboard, screen annotations, breakout rooms, meeting cost analytics, and integrations with Slack, Google Calendar, and Notion. Deployed using Docker, PostgreSQL, Redis, and AWS infrastructure.",
       tags: ["React", "Redux", "Node.js", "FastAPI", "AI", "WebRTC", "PostgreSQL", "Redis", "Docker", "AWS"],
       codeLink: "https://github.com/devansh054/MeetingMind",
       liveLink: "https://meeting-mind.netlify.app/",
    },

    {
      title: "Equities Trading Platform",
      description:
        "Engineered a high-touch equity trading platform using Java and Spring Boot, enabling real-time market data processing and sub-second order execution. Designed 15+ RESTful API endpoints with Spring Security for secure trade execution.",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "XML"],
      codeLink: "https://github.com/devansh054/Trading-Platform",
      liveLink: "https://whimsical-cranachan-86f8ca.netlify.app/",
    },
    {
      title: "Market Mayhem Trading Game",
      description:
        "Developed a real-time multiplayer equities simulation supporting 50+ concurrent users with sub-250ms update latency using WebSockets. Built a trading risk engine with configurable order limits and symbol-level restrictions.",
      tags: ["Java", "Spring Boot", "WebSocket", "JavaScript", "H2", "Docker"],
      codeLink: "https://github.com/devansh054/market-mayhem-trading-game",
      liveLink: "https://dazzling-vacherin-33f191.netlify.app/",
    },
    {
      title: "REST API with FastAPI",
      description:
        "Built REST API using FastAPI and PostgreSQL, improving data access speed by 40%. Developed full-stack app with Flask, React, and Docker for GitHub analytics, boosting team visibility by 30%.",
      tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Flask", "React"],
      codeLink: "https://github.com/devansh054/equi-match-maker",
      liveLink: null,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4 flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live App
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Include Open Source section directly under Projects */}
          <div className="mt-20">
            <OpenSource />
          </div>
        </div>
      </div>
    </section>
  )
}
