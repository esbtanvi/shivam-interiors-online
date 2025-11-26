import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Paintbrush, 
  Hammer, 
  Home, 
  Wrench, 
  TreePine,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construction Management",
    description: "Comprehensive project management from initial planning through final completion.",
    features: [
      "Site preparation and planning",
      "Budget management and cost control",
      "Quality assurance and safety compliance",
      "Timeline management and scheduling",
      "Vendor and contractor coordination",
    ],
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Creative and functional interior design solutions for residential and commercial spaces.",
    features: [
      "Space planning and layout design",
      "Color consultation and material selection",
      "Furniture and decor selection",
      "Lighting design",
      "3D visualization and rendering",
    ],
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "Building dream homes with attention to detail and quality craftsmanship.",
    features: [
      "Custom home construction",
      "Villa and apartment projects",
      "Foundation and structural work",
      "Modern and traditional designs",
      "Energy-efficient building solutions",
    ],
  },
  {
    icon: Hammer,
    title: "Commercial Construction",
    description: "Professional construction services for offices, retail spaces, and commercial buildings.",
    features: [
      "Office building construction",
      "Retail and showroom development",
      "Restaurant and hospitality projects",
      "Industrial facilities",
      "Commercial renovations",
    ],
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with expert renovation and remodeling services.",
    features: [
      "Kitchen and bathroom remodeling",
      "Home extensions and additions",
      "Structural modifications",
      "Modernization of old buildings",
      "Restoration services",
    ],
  },
  {
    icon: TreePine,
    title: "Landscape Design",
    description: "Beautiful outdoor spaces that complement your property's architecture.",
    features: [
      "Garden design and planning",
      "Hardscape installation",
      "Outdoor living spaces",
      "Irrigation systems",
      "Sustainable landscaping",
    ],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">Our Services</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive construction and design solutions to bring your vision to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer customized services tailored to your specific needs. Contact us to discuss your project requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
