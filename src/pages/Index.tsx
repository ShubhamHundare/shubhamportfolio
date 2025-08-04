import Navigation from "@/components/Navigation";
import PortfolioHero from "@/components/PortfolioHero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-card/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Shubham Hundare. Built with passion and cutting-edge technologies.
          </p>
        </div>
      </footer>
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
