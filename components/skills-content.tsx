import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsContent() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "HTML/CSS",
        "Tailwind CSS",
        "Figma",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Python",
        "Node.js",
        "Java",
        "C#",
        "FastAPI",
        "Express.js",
        "Spring Boot",
        "REST APIs",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      category: "AI & Data",
      skills: [
        "LangChain",
        "GitHub Copilot",
        "OpenAI API",
        "RAG Systems",
        "LLM Integration",
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "Redis",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS (Lambda, EC2, SQS, SNS, RDS)",
        "Azure",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "GitHub Actions",
        "Terraform",
        "CloudWatch",
      ],
    },
    {
      category: "Tools & Practices",
      skills: [
        "Git",
        "Agile",
        "Scrum",
        "Testing (Jest, Mocha)",
        "Dynatrace",
        "Splunk",
        "System Design",
        "Automation",
        "Monitoring",
      ],
    },
  ]

  return (
    <div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills</h3>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
          A versatile toolkit spanning AI integration, cloud engineering, backend architecture, and full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <Card className="h-full border-t-4 border-t-primary shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
