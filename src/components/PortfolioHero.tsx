import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const PortfolioHero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 floating animate-delay-100" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-accent/20 floating animate-delay-300" />
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-secondary/20 floating animate-delay-500" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name and Title */}
          <div className="hero-glow mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
              <span className="gradient-text">Shubham</span>
              <br />
              <span className="text-foreground">Hundare</span>
            </h1>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
              Azure Data Engineer & Python Backend Developer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              3+ years of experience building scalable data and web applications. 
              Specialized in Azure Data Factory, Databricks, and Django development. 
              Passionate about transforming data into insights and creating robust backend solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 animate-fade-in-up animate-delay-300">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91-9987437765</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>shubhamhundare04@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animate-delay-400">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => scrollToSection('experience')}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 animate-fade-in-up animate-delay-500">
            <a 
              href="https://www.linkedin.com/in/shubham-hundare-b853281a3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:shubhamhundare04@gmail.com"
              className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up animate-delay-500">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ArrowDown className="w-6 h-6 text-primary hover:text-accent transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;