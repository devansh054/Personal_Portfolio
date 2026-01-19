import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
  title: "Full Stack Software Developer",
  company: "Ruhil Holdings",
  period: "Sept 2023 - Dec 2025",
  location: "Toronto, ON",
  achievements: [
    "Developed and optimized backend microservices using Python, Node.js, and SQL, improving data processing speed by 30%.",
    "Integrated AI-driven automation with GitHub Copilot and LangChain, reducing development cycles and enhancing API reliability.",
    "Deployed containerized applications on AWS with Docker and CI/CD pipelines, increasing system uptime and scalability.",
  ],
},

    {
      title: "Summer Student",
      company: "University of Guelph",
      period: "May 2023 - July 2023",
      location: "Guelph, ON",
      achievements: [
        "Delivered IT support for campus systems, resolving tickets 30% faster and improving uptime by 15%",
        "Collaborated with faculty/students to resolve hardware and software issues",
        "Developed skills in IT support, troubleshooting, communication, and teamwork",
      ],
    },
    {
      title: "IT Support Analyst",
      company: "Sanskriti School",
      period: "June 2020 - March 2022",
      location: "Rohtak, IN",
      achievements: [
        "Built REST API using FastAPI and PostgreSQL, improving data access speed by 40%",
        "Developed full-stack app (Flask, React, Docker) for GitHub analytics, boosting team visibility by 30%",
        "Gained expertise in Python, FastAPI, PostgreSQL, Docker, Flask, and REST APIs",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
