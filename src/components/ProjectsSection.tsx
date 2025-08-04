import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, User } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Intelligent Scheduling & Control Tower Platform",
      duration: "Jan 2024 - Jul 2025",
      teamSize: 6,
      mentor: "Prash Pokla",
      description: "Built full-stack Scheduling and Control Tower applications for the chemical industry to enable real-time planning and visibility.",
      highlights: [
        "Developed ETL pipelines using Azure Data Factory and Databricks with data stored in Data Lake",
        "Built backend APIs with Django REST Framework for complex business logic",
        "Created React.js frontend applications for scheduling and analytics",
        "Deployed services using Docker on AWS EC2 for scalable infrastructure",
        "Integrated PowerApps for capturing user inputs and workflow automation"
      ],
      skills: ["ADF", "Databricks (PySpark)", "Data Lake", "Power BI", "PowerApps", "Python", "Django", "PostgreSQL", "Docker", "AWS"],
      featured: true
    },
    {
      title: "Pricing & Inventory Management System", 
      duration: "Jun 2023 - Nov 2024",
      teamSize: 6,
      mentor: "Prash Pokla",
      description: "Automated reporting and enhanced decision-making through interactive dashboards and efficient data management.",
      highlights: [
        "Developed interactive dashboards using Power BI for real-time insights",
        "Performed ETL, data modeling, and manipulation using Python and DAX",
        "Integrated PowerApps for efficient user input capture and management",
        "Automated reporting workflows to reduce manual effort by 80%",
        "Enhanced decision-making capabilities through advanced analytics"
      ],
      skills: ["Power BI", "Python", "Microsoft Excel", "PowerApps", "DAX", "ETL", "Data Manipulation", "Data Modeling"],
      featured: true
    },
    {
      title: "FarmTrack - Smart Farming Solution",
      duration: "Nov 2021 - May 2022", 
      teamSize: 3,
      mentor: "Prof. Sachin Kolekar",
      description: "Web application designed to help farmers manage farm activities and predict suitable crops based on soil and atmospheric conditions.",
      highlights: [
        "Implemented crop recommendation system using ML algorithms",
        "Developed farm management features for tracking employees and expenses",
        "Built predictive models based on soil parameters (NPK, pH, temperature, rainfall)",
        "Created intuitive web interface for easy farmer interaction",
        "Integrated weather data APIs for accurate crop predictions"
      ],
      skills: ["Python", "MySQL", "Django", "HTML", "CSS", "Machine Learning", "Data Analysis"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-1 sm:px-6 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that showcase expertise in data engineering and full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`card-glow p-8 animate-fade-in-up ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {project.title}
                        {project.featured && (
                          <Badge variant="secondary" className="ml-3 bg-primary/10 text-primary">
                            Featured
                          </Badge>
                        )}
                      </h3>
                      
                      {/* Project Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>Team of {project.teamSize}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>Mentor: {project.mentor}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Key Features & Achievements:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills & Actions */}
                <div className="space-y-6">
                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-primary/20 text-primary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in collaborating or learning more about my work?
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50"
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;