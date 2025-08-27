import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Server, TrendingUp } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Expertise in Java, Spring Boot, REST APIs, and microservices architecture",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Real-Time Systems",
      description: "Built trading platforms handling 10,000+ concurrent transactions with WebSocket integration",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Fintech Solutions",
      description: "Developed equities trading platforms with risk management and real-time market data processing",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Skills",
      description: "Proficient with Docker, PostgreSQL, React, and modern development practices",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hi, I'm Devansh Khatri 👋 — a Software Engineering student at the University of Guelph with a passion
                for building systems that perform under pressure.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I've engineered a real-time equities trading platform capable of handling 10,000+ concurrent
                transactions, designed REST APIs with Spring Security handling 1,000+ requests per minute, and built a
                multiplayer trading simulation with live WebSocket updates and risk management controls. My projects
                blend backend scalability with frontend usability, often powered by Java, Spring Boot, Docker,
                PostgreSQL, and React.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
                Beyond projects, I've worked in IT support roles at Walmart, the University of Guelph, and Sanskriti
                School — sharpening my skills in problem-solving, troubleshooting, and communication. I'm especially
                excited about opportunities in backend development, fintech, and real-time systems — the kind of work
                where every millisecond and every transaction matters.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
                💡 Fun fact: When my code compiles on the first try, I don't trust it… but I still celebrate. 🎉
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
