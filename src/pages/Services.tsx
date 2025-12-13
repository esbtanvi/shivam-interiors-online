// Updated Services component with larger icons
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
  ArrowRight,
} from "lucide-react";
import MaterialIcon from "@/components/Materialicon";

const ICON_SIZE = "text-[65px]";

const services = [
{
  icon: () => (
    <MaterialIcon name="home_work" className={"material-symbols-rounded " + ICON_SIZE + " text-accent"} />
  ),
  title: "Consultation",
  description:
    "Expert guidance to help you make informed decisions from the very start of your project.",
  features: [
    "Expert project evaluation",
    "Clear budgeting guidance",
    "Guidance tailored to your needs",
  ],
},
  {
    icon: () => (
      <MaterialIcon name="developer_board" className={"material-symbols-rounded " + ICON_SIZE + " text-accent"} />
    ),
    title: "Planning",
    description:
      "Clear, detailed planning that transforms your vision into a practical project roadmap.",
    features: [
      "Space planning and layout design",
            "3D visualization and rendering",
"Mechanical, electrical, and plumbing (MEP) planning"
    ],
  },
  {
    icon: () => (
      <MaterialIcon name="engineering" className={"material-symbols-rounded " + ICON_SIZE + " text-accent"} />
    ),
    title: "Construction",
    description:
      "Reliable, high-quality construction built with precision and long-lasting craftsmanship.",
    features: [
      "Custom residential and commercial contruction",
      "Foundation and structural work",
      // "Modern and traditional designs",
      "Energy-efficient building solutions",
    ],
  },
  {
    icon: () => (
      <MaterialIcon name="imagesearch_roller" className={"material-symbols-rounded " + ICON_SIZE + " text-accent"} />
    ),
    title: "Renovation",
    description:
      "Thoughtful renovations that refresh, upgrade, and add new life to existing spaces.",
    features: [
      "Comprehensive Space Upgrades",
      "Functional Enhancements",
      "Quality & Style",
      // "Industrial facilities",
      // "Commercial renovations",
    ],
  },
  {
    icon: () => (
      <MaterialIcon name="chair_fireplace" className={"material-symbols-rounded " + ICON_SIZE + " text-accent"} />
    ),
    title: "Interior Design",
    description:
      "Customized interior designs that blend style, comfort, and functionality perfectly tailored to your taste.",
    features: [
      "Tailored Design Concepts",
      "Smart Space Planning",
      "Harmonized Decor & Finishes",
    ],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E3F2FD]  to-[#0040FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 md:text-6xl">Our Services</h1>
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
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <service.icon />
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-foreground flex items-start gap-2"
                      >
                        <span className="text-accent mt-2">•</span>
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
    </div>
  );
}
