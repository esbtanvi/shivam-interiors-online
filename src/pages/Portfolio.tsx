import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";
import interiorImage from "@/assets/project-interior.jpg";

const categories = ["All", "Residential", "Commercial", "Interior Design"];

const projects = [
  {
    image: residentialImage,
    title: "Modern Villa Project",
    category: "Residential",
    description: "A contemporary villa with sustainable design elements and luxury finishes.",
    location: "City Center",
  },
  {
    image: commercialImage,
    title: "Corporate Office Building",
    category: "Commercial",
    description: "State-of-the-art office space with modern amenities and efficient layout.",
    location: "Business District",
  },
  {
    image: interiorImage,
    title: "Luxury Home Interior",
    category: "Interior Design",
    description: "Elegant interior design featuring premium materials and custom furniture.",
    location: "Premium Locality",
  },
  {
    image: residentialImage,
    title: "Family Home Construction",
    category: "Residential",
    description: "Traditional family home with modern conveniences and spacious layout.",
    location: "Suburban Area",
  },
  {
    image: commercialImage,
    title: "Retail Complex",
    category: "Commercial",
    description: "Multi-level retail space with contemporary architecture and parking facilities.",
    location: "Shopping District",
  },
  {
    image: interiorImage,
    title: "Restaurant Interior",
    category: "Interior Design",
    description: "Stylish restaurant interior with ambient lighting and comfortable seating.",
    location: "Downtown",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Explore our successful projects and see the quality of our work
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary/30 sticky top-[73px] z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <span className="text-sm text-accent font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    📍 {project.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Let's Create Your Next Project
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to start your construction or interior design project? Contact us for a consultation.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
            <a href="/contact">Get Started Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
