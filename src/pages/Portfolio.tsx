import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";
import interiorImage from "@/assets/project-interior.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import villaInterior from "@/assets/villa-interior.jpg";
import officeExterior from "@/assets/office-exterior.jpg";
import officeInterior from "@/assets/office-interior.jpg";

const categories = ["All", "Residential", "Commercial", "Interior Design"];

const projects = [
  {
    image: residentialImage,
    title: "Modern Villa Project",
    category: "Residential",
    description: "A contemporary villa with sustainable design elements and luxury finishes.",
    location: "City Center",
    images: [villaExterior, villaInterior, residentialImage],
    fullDescription: "This stunning modern villa showcases contemporary architecture at its finest. Featuring sustainable design elements, energy-efficient systems, and luxury finishes throughout. The property includes spacious open-plan living areas, a gourmet kitchen, master suite with spa-like bathroom, and beautifully landscaped gardens.",
    features: ["4 Bedrooms", "5 Bathrooms", "3500 sq ft", "Smart Home System", "Solar Panels", "Infinity Pool"],
    completionDate: "March 2024",
  },
  {
    image: commercialImage,
    title: "Corporate Office Building",
    category: "Commercial",
    description: "State-of-the-art office space with modern amenities and efficient layout.",
    location: "Business District",
    images: [officeExterior, officeInterior, commercialImage],
    fullDescription: "A premium Grade-A office building designed for modern businesses. Features include high-speed elevators, central air conditioning, intelligent building management systems, and ample parking. The building offers flexible floor plates suitable for various business needs.",
    features: ["10 Floors", "50,000 sq ft", "200 Parking Spaces", "Conference Facilities", "Cafeteria", "24/7 Security"],
    completionDate: "January 2024",
  },
  {
    image: interiorImage,
    title: "Luxury Home Interior",
    category: "Interior Design",
    description: "Elegant interior design featuring premium materials and custom furniture.",
    location: "Premium Locality",
    images: [interiorImage, villaInterior],
    fullDescription: "An exquisite interior design project that blends luxury with comfort. Custom-designed furniture, premium imported materials, and attention to every detail create a sophisticated living space. Features include Italian marble flooring, designer lighting fixtures, and bespoke cabinetry.",
    features: ["Custom Furniture", "Italian Marble", "Designer Lighting", "Smart Controls", "Premium Fabrics", "Automated Curtains"],
    completionDate: "February 2024",
  },
  {
    image: residentialImage,
    title: "Family Home Construction",
    category: "Residential",
    description: "Traditional family home with modern conveniences and spacious layout.",
    location: "Suburban Area",
    images: [residentialImage, villaExterior],
    fullDescription: "A perfect family home combining traditional aesthetics with modern functionality. Designed with family living in mind, featuring spacious bedrooms, multiple living areas, a large kitchen, and outdoor entertainment spaces. Built with high-quality materials ensuring durability and low maintenance.",
    features: ["3 Bedrooms", "3 Bathrooms", "2500 sq ft", "Garden", "Covered Parking", "Terrace"],
    completionDate: "December 2023",
  },
  {
    image: commercialImage,
    title: "Retail Complex",
    category: "Commercial",
    description: "Multi-level retail space with contemporary architecture and parking facilities.",
    location: "Shopping District",
    images: [commercialImage, officeExterior],
    fullDescription: "A modern retail complex offering premium shopping experience. Features wide corridors, excellent natural lighting, modern escalators and elevators, and ample parking facilities. The building is designed to accommodate various retail formats from boutiques to large anchor stores.",
    features: ["3 Levels", "80 Retail Units", "Food Court", "300 Parking Spaces", "Entertainment Zone", "Central HVAC"],
    completionDate: "April 2024",
  },
  {
    image: interiorImage,
    title: "Restaurant Interior",
    category: "Interior Design",
    description: "Stylish restaurant interior with ambient lighting and comfortable seating.",
    location: "Downtown",
    images: [interiorImage],
    fullDescription: "A sophisticated restaurant interior designed to create the perfect dining ambiance. Features custom-designed seating, mood lighting systems, acoustic treatments, and an open kitchen concept. The design seamlessly blends aesthetics with functionality to enhance the dining experience.",
    features: ["120 Seating Capacity", "Open Kitchen", "Private Dining Area", "Bar Section", "Ambient Lighting", "Acoustic Design"],
    completionDate: "May 2024",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                className="border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
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
                  <Button variant="outline" className="w-full mt-4">
                    View Details
                  </Button>
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

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Image Gallery */}
                <div className="relative">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  {selectedProject.images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-primary w-8"
                              : "bg-muted-foreground/30"
                          }`}
                          aria-label={`View image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Category</p>
                    <p className="text-foreground">{selectedProject.category}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Location</p>
                    <p className="text-foreground">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Completion Date</p>
                    <p className="text-foreground">{selectedProject.completionDate}</p>
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Project Description</h3>
                  <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-secondary/30 p-3 rounded-lg">
                        <span className="text-accent">✓</span>
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90" asChild>
                    <a href="/contact">Discuss Your Project</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
