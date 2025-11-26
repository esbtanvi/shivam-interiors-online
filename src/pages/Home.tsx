import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Building2, Users, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import interiorImage from "@/assets/interior-luxury.jpg";
import teamImage from "@/assets/team-planning.jpg";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";
import interiorProjectImage from "@/assets/project-interior.jpg";

const services = [
  {
    title: "Construction Management",
    description: "Complete project oversight from planning to completion with quality assurance.",
    icon: Building2,
  },
  {
    title: "Interior Design",
    description: "Transform your spaces with creative and functional interior design solutions.",
    icon: Award,
  },
  {
    title: "Architectural Planning",
    description: "Innovative architectural designs that blend aesthetics with functionality.",
    icon: Users,
  },
];

const features = [
  "Experienced team of engineers and designers",
  "Quality materials and workmanship",
  "On-time project delivery",
  "Competitive pricing",
  "Customer satisfaction guaranteed",
  "Sustainable building practices",
];

const projects = [
  { image: residentialImage, title: "Modern Villa", category: "Residential" },
  { image: commercialImage, title: "Corporate Office", category: "Commercial" },
  { image: interiorProjectImage, title: "Luxury Home", category: "Interior Design" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Building Your Dreams Into Reality
          </h1>
          <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Expert construction and interior design services for residential and commercial projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and design solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={interiorImage} 
                alt="Luxury interior design" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Why Choose Shivam Engineers?</h2>
              <p className="text-muted-foreground mb-6">
                With years of experience in construction and interior design, we bring expertise, 
                creativity, and dedication to every project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-block mt-8">
                <Button className="bg-primary hover:bg-primary/90">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent successful projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <span className="text-sm text-accent font-semibold">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 text-foreground">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <img 
            src={teamImage} 
            alt="Our professional team"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
          />
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
