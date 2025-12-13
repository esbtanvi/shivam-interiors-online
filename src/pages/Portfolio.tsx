import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";
import interiorImage from "@/assets/project-interior.jpg";
import bankImage00 from "@/assets/BankImage00.png";
import bankImage01 from "@/assets/BankImage01.png";
import bankImage02 from "@/assets/BankImage02.png";
import bankImage03 from "@/assets/BankImage03.png";
import CopOffice00 from "@/assets/CopOffice00.png";
import CopOffice1 from "@/assets/Copoffice1.png";
import CopOffice2 from "@/assets/Copoffice2.png";
import CopOffice3 from "@/assets/Copoffice3.png";
import CopOffice4 from "@/assets/Copoffice4.png";
import HotelImage00 from "@/assets/Hotel00.png";
import HotelImage01 from "@/assets/Hotel01.png";
import HotelImage02 from "@/assets/Hotel02.png";
import HotelImage03 from "@/assets/Hotel03.png";
import HotelImage04 from "@/assets/Hotel04.png";
import HotelImage05 from "@/assets/Hotel05.png";
import HotelImage06 from "@/assets/Hotel06.png";
import HotelImage07 from "@/assets/Hotel07.png";
import HotelImage08 from "@/assets/Hotel08.png";
import School00 from "@/assets/School00.png";
import School03 from "@/assets/School03.png";
import School04 from "@/assets/School04.png";
import School05 from "@/assets/School05.png";
import Residential00 from "@/assets/Residential00.png";
import Residential01 from "@/assets/Residential01.png";
import Residential10 from "@/assets/Residential10.png";
import Residential11 from "@/assets/Residential11.png";
import Residential12 from "@/assets/Residential12.png";
import Residential13 from "@/assets/Residential13.png";
import Residential20 from "@/assets/Residential20.png";
import Residential21 from "@/assets/Residential21.png";
import Residential22 from "@/assets/Residential22.png";
import Residential23 from "@/assets/Residential23.png";
import Residential25 from "@/assets/Residential25.png";
import Residential30 from "@/assets/Residential30.png";
import Residential31 from "@/assets/Residential31.png";
const categories = ["All", "Residential", "Commercial"];

const projects = [
  { image: bankImage00, category: "Commercial", title: 'Bank Building', description: "A fully modernized banking facility designed with security, efficiency, and customer experience at its core.", location: "Delhi", images: [bankImage00, bankImage03, bankImage01, bankImage02], },
  { image: commercialImage, title: "Corporate Office Building", category: "Commercial", description: "State-of-the-art office space with modern amenities and efficient layout.", location: "Jaipur", images: [CopOffice00,CopOffice4,CopOffice1, CopOffice2, CopOffice3 ], },
  { image: interiorImage, title: "Luxury Hotel", category: "Commercial", description: "Elegant interior design featuring premium materials and custom furniture.", location: "Jaipur", images: [HotelImage00, HotelImage01,HotelImage02,HotelImage03,HotelImage04,HotelImage05,HotelImage06,HotelImage07,HotelImage08], },
  { image: residentialImage, title: "School Building", category: "Commerical", description: "Traditional family home with modern conveniences and spacious layout.", location: "Bandikui", images: [School00, School03, School04, School05], },
  { image: residentialImage, title: "Appartments", category: "Residential", description: "Multi-level retail space with contemporary architecture and parking facilities.", location: "Jaipur", images: [Residential00, Residential01], },

  { image: residentialImage, title: "Villa", category: "Residential", description: "Stylish restaurant interior with ambient lighting and comfortable seating.", location: "Jaipur", images: [Residential10,Residential12,Residential13,Residential11], },
    { image: residentialImage, title: "Township", category: "Residential", description: "Stylish restaurant interior with ambient lighting and comfortable seating.", location: "Ajmer", images: [Residential20,Residential21,Residential22,Residential23,Residential25], },
    { image: residentialImage, title: "Modern Home Elevation", category: "Residential", description: "Stylish restaurant interior with ambient lighting and comfortable seating.", location: "Jaipur", images: [Residential30,Residential31], },


]
;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);

  const handlePrevImage = (index: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [index]: prev[index] !== undefined ? (prev[index] - 1 + filteredProjects[index].images.length) % filteredProjects[index].images.length : filteredProjects[index].images.length - 1,
    }));
  };

  const handleNextImage = (index: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [index]: prev[index] !== undefined ? (prev[index] + 1) % filteredProjects[index].images.length : 1,
    }));
  };

  // Auto-carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const updated: { [key: number]: number } = {};
        filteredProjects.forEach((project, index) => {
          const current = prev[index] || 0;
          updated[index] = (current + 1) % project.images.length;
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredProjects]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E3F2FD]  to-[#0040FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Explore our successful projects and see the quality of our work</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary/30 sticky top-[73px] z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <Button key={category} variant={selectedCategory === category ? "default" : "outline"} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="relative overflow-hidden h-[800px]">
                  <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentImageIndex[index] * 100}%)` }}>
                    {project.images.map((img, imgIdx) => (
                      <img key={imgIdx} src={img} alt={`${project.title} - Image ${imgIdx + 1}`} className="w-full flex-shrink-0 object-cover h-[800px]" />
                    ))}
                  </div>

                  {project.images.length > 1 && (
                    <>
                      <button onClick={() => handlePrevImage(index)} className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full text-black text-2xl" aria-label="Previous image">‹</button>
                      <button onClick={() => handleNextImage(index)} className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full text-black text-2xl" aria-label="Next image">›</button>
                    </>
                  )}
                </div>

                <CardContent className="p-6">
                  <span className="text-sm text-accent font-semibold">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-foreground">{project.title}</h3>
                  {/* <p className="text-muted-foreground text-sm mb-3">{project.description}</p> */}
                  <p className="text-sm text-primary font-medium">📍 {project.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Let's Create Your Next Project</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Ready to start your construction or interior design project? Contact us for a consultation.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
            <a href="/contact">Get Started Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
