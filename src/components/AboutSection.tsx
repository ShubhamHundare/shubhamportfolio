import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Code, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Azure Data Factory, Databricks, Synapse Analytics"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Platforms", 
      description: "Microsoft Azure, AWS EC2, Docker deployments"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Development",
      description: "Django, DRF, PostgreSQL, RESTful APIs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "ETL optimization, scalable architectures"
    }
  ];

  const interests = [
    "Trekking", "Bike Riding", "Cricket", "Traveling"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning complex data challenges into elegant solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <Card className="card-glow p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Azure Data Engineer and Python Backend Developer with 3+ years of experience in building 
                scalable data and web applications. I specialize in designing ETL pipelines using Azure Data Factory, 
                Databricks (PySpark), and managing data with Azure Data Lake and Synapse Analytics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise extends to backend API development using Django and DRF, with deployments on 
                Docker and AWS EC2. I've worked on complex scheduling, control tower, and insurance platforms, 
                always focusing on performance optimization and agile development practices.
              </p>
            </Card>

            {/* Personal Interests */}
            <Card className="card-glow p-6">
              <h4 className="text-lg font-semibold mb-4 text-primary">Personal Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="skill-badge px-3 py-1"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="card-glow p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;