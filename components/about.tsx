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
  Hi, I'm Devansh Khatri 👋 — a Software Engineering Recent Graduate from the University of Guelph passionate about building 
  scalable, intelligent, and cloud-native systems that perform under real-world pressure.
</p>
</div>

<div className="mx-auto max-w-3xl text-center">
  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
    I’ve built distributed systems and AI-powered applications that merge backend reliability with smart automation — 
    from a real-time <strong>Equities Trading Platform</strong> handling 10,000+ transactions per second, to 
    <strong>AI-driven dashboards</strong> that automate workflows and diagnostics using <strong>LangChain</strong> 
    and <strong>GitHub Copilot</strong>. My work spans microservices, data pipelines, and user-facing tools powered 
    by <strong>Node.js</strong>, <strong>Python</strong>, <strong>React</strong>, <strong>PostgreSQL</strong>, and 
    <strong>Docker</strong>.
  </p>
  
  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
    Across roles at <strong>Ruhil Holdings</strong> and the <strong>University of Guelph</strong>, I’ve developed 
    and deployed <strong>cloud microservices on AWS</strong>, built <strong>REST and GraphQL APIs</strong>, and 
    implemented <strong>CI/CD automation</strong> for reliability and scale. I enjoy crafting backend architectures 
    that balance performance, maintainability, and clean design — and I’m deeply interested in how 
    <strong>AI</strong>, <strong>DevOps</strong>, and <strong>fintech</strong> intersect to shape modern software systems.
  </p>

  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
    When I’m not building or optimizing systems, you’ll find me experimenting with <strong>LLM integrations</strong>, 
    improving <strong>DevOps pipelines</strong>, or diving into topics like <strong>distributed systems</strong>, 
    <strong>data engineering</strong>, and <strong>scalable backend design</strong>. I’m driven by impact — solving 
    complex problems that make technology faster, smarter, and more human.
  </p>

  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mt-4">
    💡 Fun fact: When my code compiles on the first try, I assume I missed something… but still celebrate. 🎉
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
