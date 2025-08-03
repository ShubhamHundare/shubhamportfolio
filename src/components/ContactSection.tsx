import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "shubhamhundare04@gmail.com",
      link: "mailto:shubhamhundare04@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone", 
      value: "+91-9987437765",
      link: "tel:+919987437765"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Dhayari, Pune, Maharashtra, India - 411041",
      link: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/shubham-hundare-b853281a3/"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                or just having a chat about data engineering and technology. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  className="card-glow p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{contact.title}</h4>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary hover:text-accent transition-colors duration-300"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{contact.value}</span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a 
                  href="https://www.linkedin.com/in/shubham-hundare-b853281a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a href="mailto:shubhamhundare04@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-glow p-8 animate-fade-in-up animate-delay-300">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;