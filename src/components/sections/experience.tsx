import { EXPERIENCES, EDUCATION } from '@/lib/data';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export function Experience() {
  return (
    <section id="experience" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">
            My Journey
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            A timeline of my professional experience and academic background.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="experience">
                <Briefcase className="mr-2" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education">
                <GraduationCap className="mr-2" />
                Education
              </TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="mt-6">
              <div className="space-y-8">
                {EXPERIENCES.map((exp) => (
                  <Card key={exp.company} className="border-l-4 border-primary">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{exp.role}</CardTitle>
                          <CardDescription className="font-medium">{exp.company}</CardDescription>
                        </div>
                        <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.startDate} - {exp.endDate}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((point, i) => (
                           <li key={i} className="flex items-start gap-2">
                             <CheckCircle className="mt-1 h-4 w-4 text-accent shrink-0" />
                             <span className="text-muted-foreground">{point}</span>
                           </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <div className="space-y-8">
                {EDUCATION.map((edu) => (
                   <Card key={edu.institution} className="border-l-4 border-accent">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{edu.degree}</CardTitle>
                          <CardDescription className="font-medium">{edu.institution}</CardDescription>
                        </div>
                        <p className="text-sm text-muted-foreground whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
