import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cloud, 
  Database, 
  Code, 
  Wrench, 
  GitBranch, 
  Server,
  Brain,
  BarChart3
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud & Data Engineering",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Microsoft Azure", level: 90 },
        { name: "Azure Data Factory", level: 95 },
        { name: "Databricks (PySpark)", level: 90 },
        { name: "Azure Data Lake", level: 85 },
        { name: "Synapse Analytics", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Django", level: 90 },
        { name: "Django REST Framework", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS EC2", level: 80 },
        { name: "Git", level: 90 },
        { name: "Azure DevOps", level: 85 },
        { name: "CI/CD", level: 80 }
      ]
    },
    {
      title: "Analytics & BI",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "DAX", level: 85 },
        { name: "Power Query", level: 85 },
        { name: "PowerApps", level: 75 },
        { name: "Data Modeling", level: 90 }
      ]
    }
  ];

  const technologies = [
    "Azure", "Python", "Django", "PostgreSQL", "Docker", "Power BI", 
    "Databricks", "Apache Spark", "Git", "AWS", "REST APIs", "ETL",
    "Data Factory", "Synapse", "Machine Learning", "Data Science",
    "Agile", "Jira", "SQL", "NoSQL", "Microservices", "CI/CD"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full data engineering and backend development stack
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="card-glow p-6 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <Card className="card-glow p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Technologies & <span className="gradient-text">Tools</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="skill-badge px-4 py-2 text-sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;