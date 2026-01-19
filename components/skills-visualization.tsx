"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

interface Skill {
  name: string
  level: SkillLevel
  percentage: number
  description: string
}

interface SkillCategory {
  category: string
  icon: React.ReactNode
  color: string
  skills: Skill[]
}

export default function SkillsVisualization() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M12 15V9" /><path d="m9 13 3 2 3-2" /></svg>,
      color: "bg-blue-500/10 text-blue-500",
      skills: [
        { name: "React.js", level: "Expert", percentage: 92, description: "Hooks, state management, and performance optimization." },
        { name: "TypeScript", level: "Advanced", percentage: 88, description: "Strong typing, generics, and scalable UI design patterns." },
        { name: "Next.js", level: "Advanced", percentage: 85, description: "SSR, API routes, and optimized rendering for performance." },
        { name: "Tailwind CSS", level: "Advanced", percentage: 85, description: "Responsive UI, component patterns, and clean design." },
        { name: "HTML/CSS", level: "Expert", percentage: 90, description: "Accessibility, animations, and semantic best practices." },
      ],
    },
    {
      category: "Backend",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6" y1="6" y2="6" /><line x1="6" x2="6" y1="18" y2="18" /></svg>,
      color: "bg-green-500/10 text-green-500",
      skills: [
        { name: "Python", level: "Expert", percentage: 90, description: "Backend development, FastAPI, and RESTful design." },
        { name: "Node.js", level: "Expert", percentage: 90, description: "Microservices, async programming, and API orchestration." },
        { name: "FastAPI", level: "Advanced", percentage: 85, description: "High-performance APIs with dependency injection and async support." },
        { name: "Spring Boot", level: "Intermediate", percentage: 75, description: "Building secure and scalable REST APIs in Java." },
        { name: "REST / GraphQL APIs", level: "Expert", percentage: 92, description: "Schema design, authentication, and data validation." },
      ],
    },
    {
      category: "AI & Data Engineering",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
      color: "bg-indigo-500/10 text-indigo-500",
      skills: [
        { name: "LangChain", level: "Advanced", percentage: 85, description: "LLM chaining, context retrieval, and pipeline optimization." },
        { name: "OpenAI API", level: "Advanced", percentage: 83, description: "Prompt design, embeddings, and real-time AI integration." },
        { name: "RAG Systems", level: "Advanced", percentage: 80, description: "Hybrid retrieval-augmented generation architectures." },
        { name: "SQL / PostgreSQL", level: "Expert", percentage: 90, description: "Query optimization, ETL pipelines, and schema design." },
        { name: "MongoDB / DynamoDB", level: "Advanced", percentage: 82, description: "NoSQL modeling and distributed query optimization." },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>,
      color: "bg-purple-500/10 text-purple-500",
      skills: [
        { name: "AWS", level: "Advanced", percentage: 85, description: "Lambda, SQS, SNS, EC2, RDS, and serverless cloud architecture." },
        { name: "Docker", level: "Advanced", percentage: 85, description: "Containerization, orchestration, and multi-stage builds." },
        { name: "Kubernetes", level: "Intermediate", percentage: 75, description: "Deployment scaling, load balancing, and monitoring." },
        { name: "CI/CD Pipelines", level: "Advanced", percentage: 88, description: "Automated builds, testing, and deployment workflows." },
        { name: "Cloud Monitoring", level: "Advanced", percentage: 82, description: "CloudWatch, Splunk, and Dynatrace for observability." },
      ],
    },
    {
      category: "Tools & Methodologies",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      color: "bg-rose-500/10 text-rose-500",
      skills: [
        { name: "Git", level: "Expert", percentage: 90, description: "Version control, branching, and collaboration workflows." },
        { name: "Agile / Scrum", level: "Advanced", percentage: 85, description: "Sprint planning, retrospectives, and team delivery cycles." },
        { name: "Testing (Jest, Mocha)", level: "Advanced", percentage: 83, description: "Unit, integration, and API test automation." },
        { name: "System Design", level: "Advanced", percentage: 80, description: "Scalable architectures, trade-offs, and performance tuning." },
        { name: "Automation", level: "Advanced", percentage: 82, description: "Scripted deployments, batch processes, and data operations." },
      ],
    },
  ]

  const handleCategoryClick = (category: string) =>
    setActiveCategory(activeCategory === category ? null : category)

  const getActiveCategorySkills = () =>
    skillCategories.find((cat) => cat.category === activeCategory)?.skills || []

  const getSkillLevelColor = (level: SkillLevel) => {
    switch (level) {
      case "Beginner": return "bg-blue-500"
      case "Intermediate": return "bg-green-500"
      case "Advanced": return "bg-amber-500"
      case "Expert": return "bg-rose-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skillCategories.map((category) => (
          <motion.div
            key={category.category}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleCategoryClick(category.category)}
            className={cn(
              "cursor-pointer rounded-lg p-4 transition-all",
              activeCategory === category.category
                ? `${category.color} border-2 border-current shadow-lg`
                : "bg-card hover:bg-card/80 border border-border",
            )}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <div className={cn("p-2 rounded-full", category.color)}>{category.icon}</div>
              <h4 className="font-medium">{category.category}</h4>
              <p className="text-xs text-muted-foreground">{category.skills.length} skills</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">
                    {activeCategory}{" "}
                    <span className="text-sm font-normal text-muted-foreground">Skills</span>
                  </h3>
                  <Badge variant="outline">
                    {getActiveCategorySkills().length}{" "}
                    {getActiveCategorySkills().length === 1 ? "skill" : "skills"}
                  </Badge>
                </div>

                <div className="space-y-6">
                  {getActiveCategorySkills().map((skill) => (
                    <div
                      key={skill.name}
                      className="space-y-2"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <h4 className="font-medium">{skill.name}</h4>
                          <Badge variant="secondary" className="ml-2 text-xs">
                            {skill.level}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                      </div>

                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={cn("h-full rounded-full", getSkillLevelColor(skill.level))}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>

                      <AnimatePresence>
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-sm text-muted-foreground mt-1"
                          >
                            {skill.description}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeCategory && (
        <div className="text-center text-muted-foreground p-4 border border-dashed rounded-lg">
          <p>Select a category above to view detailed skills</p>
        </div>
      )}
    </div>
  )
}
