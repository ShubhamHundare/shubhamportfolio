import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.E. - Computer Engineering",
      institution: "Zeal College of Engineering and Research",
      duration: "2018 - 2022",
      grade: "CGPA: 9.39 / 10",
      type: "Bachelor's Degree",
      achievement: "First Class with Distinction"
    },
    {
      degree: "12th Standard",
      institution: "Ramniranjan Jhunjhunwala College Of Science, Ghatkopar, Mumbai", 
      duration: "2018",
      grade: "Percentage: 81.85 / 100",
      type: "Higher Secondary",
      board: "MSBSHSE"
    },
    {
      degree: "10th Standard", 
      institution: "Lal Bahadur Shastri Vidyalaya Amondi, Pune",
      duration: "2016",
      grade: "Percentage: 92 / 100",
      type: "Secondary",
      board: "MSBSHSE"
    }
  ];

  const certifications = [
    {
      name: "Microsoft Azure Fundamentals AZ-900",
      issuer: "Microsoft",
      date: "Aug 2024",
      skills: ["Azure Cloud", "Data Cloud", "Networking", "Cloud Security", "Cloud Storage", "Virtualization"]
    },
    {
      name: "Power BI Data Analyst Associate PL-300",
      issuer: "Microsoft", 
      date: "Aug 2024",
      skills: ["Prepare the data", "Model the data", "Visualize and analyze the data", "Deploy and maintain assets"]
    },
    {
      name: "Azure Data Engineer",
      issuer: "Orbus Institute",
      date: "Dec 2024 - Jan 2025",
      skills: ["Microsoft Azure", "Apache Spark", "Azure Data Factory", "Azure Data Lake Storage", "Databricks", "Git", "Docker", "Azure Key Vault", "Logic Apps"]
    }
  ];

  const trainings = [
    {
      name: "Machine Learning And Data Science With Python",
      institute: "Goeduhub Technology",
      duration: "Jun 2021 - Aug 2021",
      skills: ["Python", "Data Science", "Machine Learning"]
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="card-glow p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <Badge variant="secondary">{edu.type}</Badge>
                      </div>
                      
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        {edu.board && (
                          <span className="font-medium">{edu.board}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {edu.grade}
                        </Badge>
                        {edu.achievement && (
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            {edu.achievement}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications & Training Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Certifications & Training
            </h3>
            
            <div className="space-y-6">
              {/* Certifications */}
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="card-glow p-6 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-2">{cert.name}</h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-primary">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}

              {/* Training Programs */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-lg">Professional Training</h4>
                {trainings.map((training, index) => (
                  <Card 
                    key={index}
                    className="card-glow p-6 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                  >
                    <h5 className="font-semibold mb-2">{training.name}</h5>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-primary">{training.institute}</span>
                      <span>{training.duration}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {training.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-accent/20 text-accent"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;