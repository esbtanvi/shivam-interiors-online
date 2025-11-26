import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const serviceOptions = [
  { id: "planning", label: "Planning" },
  { id: "construction", label: "Construction" },
  { id: "renovation", label: "Renovation" },
  { id: "interior", label: "Interior Design" },
  { id: "other", label: "Other" },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }));
    // Clear error when user selects a service
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // If validation passes, show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      services: [],
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">Contact Us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with us for your construction and interior design needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3 text-foreground">
                    Required Service *
                  </label>
                  <div className="space-y-3">
                    {serviceOptions.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={service.id}
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <label
                          htmlFor={service.id}
                          className="text-sm text-foreground cursor-pointer"
                        >
                          {service.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="text-sm text-destructive mt-1">{errors.services}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help with all your construction and interior design needs. 
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <Phone className="h-6 w-6 text-accent" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <Mail className="h-6 w-6 text-accent" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">info@shivamengineers.com</p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <MapPin className="h-6 w-6 text-accent" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Your Street Address<br />
                      Your City, Your State - PIN Code<br />
                      India
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <Clock className="h-6 w-6 text-accent" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
