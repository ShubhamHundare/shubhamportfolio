import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "InsightsHigh",
      role: "Business Intelligence & Python Developer",
      duration: "May 2023 - Present",
      location: "IT / Computers - Software",
      type: "Full-time",
      description: "Working on data-driven solutions for Scheduling and Control Tower applications in the chemical industry, with a focus on Azure Data Engineering and backend API development.",
      highlights: [
        "Built scalable ETL pipelines using Azure Data Factory (ADF) and processed data with Azure Databricks (PySpark)",
        "Managed storage and analytics using Azure Data Lake and Synapse Analytics",
        "Created interactive dashboards and KPIs in Power BI using DAX and Power Query",
        "Developed RESTful APIs for scheduling and pricing using Django REST Framework",
        "Containerized backend services with Docker and deployed to AWS EC2"
      ],
      skills: ["Azure Data Factory", "Apache Spark", "Databricks", "Python", "Django", "PostgreSQL", "Docker", "AWS", "Power BI"]
    },
    {
      company: "Hexaware Technologies",
      role: "Associate Software Engineer",
      duration: "Mar 2022 - May 2023",
      location: "IT / Computers - Software", 
      type: "Full-time",
      description: "Received formal training in Python and Django, followed by practical implementation on a large-scale insurance platform covering Policy, Claims, and Billing modules.",
      highlights: [
        "Completed in-depth training in Python, Django, Django REST Framework, and SQL",
        "Contributed to the design and development of RESTful APIs for insurance workflows",
        "Developed and maintained backend services using Django with relational databases",
        "Implemented user authentication, role-based access, and input validation",
        "Participated in Agile development with sprint planning and code reviews"
      ],
      skills: ["Python", "Django", "Docker", "Git", "GitHub", "SQL", "REST APIs"]
    },
    {
      company: "The Spark Foundation",
      role: "Data Science & Business Analytics Intern",
      duration: "Jun 2021 - Jul 2021",
      location: "Remote",
      type: "Internship",
      description: "Applied various machine learning algorithms to solve real-world problems, enhancing predictive accuracy and model efficiency.",
      highlights: [
        "Applied various machine learning algorithms to solve real-world problems",
        "Designed impactful data visualizations using Matplotlib and Seaborn",
        "Presented key findings to stakeholders for data-informed decisions",
        "Enhanced predictive accuracy and model efficiency through optimization"
      ],
      skills: ["Python", "Machine Learning", "Data Science", "Matplotlib", "Seaborn"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-1 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and driving innovation across diverse industries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-px"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform md:-translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <Card 
                  className="card-glow p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Company & Role */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                      <Badge variant="secondary" className="ml-auto">
                        {exp.type}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-3">{exp.role}</h4>
                    
                    {/* Duration & Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2 text-sm">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;