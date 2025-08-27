import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Computing, Software Engineering</h3>
                    <p className="text-muted-foreground">University of Guelph • Minor in Business</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Coursework</h4>
                    <p className="text-muted-foreground">
                      Data Structures & Algorithms, Software Design, Database Systems, Operating Systems,
                      Object-Oriented Programming, Web Development
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Activities</h4>
                    <p className="text-muted-foreground">
                      Active member of the Guelph Coding Community, participated in coding challenges, peer reviews, and
                      technical workshops
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Focus Areas</h4>
                    <p className="text-muted-foreground">
                      Full Stack development, Real-time systems, Backend development, Cloud Computing, Software Design, and Emerging Technologies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
