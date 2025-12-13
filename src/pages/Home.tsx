import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Building2, Users, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import interiorImage from "@/assets/interior-luxury.jpg";
import teamImage from "@/assets/team-planning.jpg";
import residentialProject1 from "@/assets/residentialProject1.jpeg";
import commercialProject01 from "@/assets/commercialProject01.jpeg"
import interiorDesign from "@/assets/interiorDesign.jpeg"
import AboutUs from "./AboutUs";
import logo from "@/assets/SHIVAM-ENGINEERS-LOGO-1-copy.png"
import Hero1 from "@/assets/Hero1.jpeg"
import Hero2 from "@/assets/hero2.jpg"
import Hero3 from "@/assets/hero3.jpg"
const services = [
  {
    title: "Consultation",
    description: "Expert guidance to help you make informed decisions from the very start of your project.",
    icon: Building2,
  },
  {
    title: "Quality Construction",
    description: "Reliable, high-quality construction built with precision and long-lasting craftsmanship.",
    icon: Award,
  },
  {
    title: "Interior Design",
    description: "Customized interior designs that blend style, comfort, and functionality perfectly tailored to your taste.",
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
  { image: residentialProject1, title: "Appartments", category: "Residential" },
  { image: commercialProject01, title: "Commercial Buildings", category: "Commercial" },
  { image: interiorDesign, title: "Soothing Spaces", category: "Interior Design" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
<section className="relative h-[600px] flex items-center justify-center overflow-hidden">
  
  {/* --- IMAGE STRIP --- */}
  <div className="absolute inset-0 flex justify-center gap-4 px-4">
    <img 
      src={Hero1}
      alt="Hero Image 1"
      className="h-full object-cover rounded-lg"
    />
    <img 
      src={Hero2}
      alt="Hero Image 2"
      className="h-full object-cover rounded-lg"
    />
    <img 
      src={Hero3} 
      alt="Hero Image 3"
      className="h-full object-cover rounded-lg"
    />
  </div>

<div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20" />

  <div className="relative z-10 text-center text-white pr-4 pl-2 -mt-5 ml-12">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
Where Your DREAM Space,  
  </h1>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
 Takes SHAPE  
  </h2>


    <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 mb-8">
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
        <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
          View Our Work
        </Button>
      </Link>
    </div>
  </div>
</section>
<AboutUs />

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
<section className="py-16 bg-gradient-to-r from-[#E3F2FD]  to-[#0040FF]">
  <div className="container mx-auto px-4 text-center">

    <img 
      src={logo} 
      alt="Our professional team"
      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
    />

    <h2 className="text-6xl font-bold mb-4 text-white">
      Ready to Start Your Project?
    </h2>

    <p className="text-white/90 mb-8 max-w-2xl text-2xl mx-auto">
      Contact Shivam Engineers and Interior Designers today for your first 
{' '}      <span className="font-bold text-2xl">
        FREE
        </span> consultation!
    </p>

    <Link to="/contact">
      <Button size="lg" className="bg-accent hover:bg-accent/80 text-white shadow-lg hover:scale-105 transition-all duration-300">
        Contact Us Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Link>

  </div>
</section>

    </div>
  );
}
