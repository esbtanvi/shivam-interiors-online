import { useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const categories = ['All', 'Residential', 'Commercial'];

const projects = [
  {
    category: 'Commercial',
    title: 'Bank Building',
    location: 'Delhi',
    images: [
      '/images/BankImage00.webp',
      '/images/BankImage01.webp',
      '/images/BankImage02.webp',
      '/images/BankImage03.webp',
    ],
  },
  {
    category: 'Commercial',
    title: 'Corporate Office Building',
    location: 'Jaipur',
    images: [
      '/images/CopOffice00.webp',
      '/images/Copoffice1.webp',
      '/images/Copoffice2.webp',
      '/images/Copoffice3.webp',
      '/images/Copoffice4.webp',
    ],
  },
  {
    category: 'Commercial',
    title: 'Luxury Hotel',
    location: 'Jaipur',
    images: [
      '/images/Hotel00.webp',
      '/images/Hotel01.webp',
      '/images/Hotel02.webp',
      '/images/Hotel03.webp',
      '/images/Hotel04.webp',
      '/images/Hotel05.webp',
      '/images/Hotel06.webp',
      '/images/Hotel07.webp',
      '/images/Hotel08.webp',
    ],
  },
  {
    category: 'Commercial',
    title: 'School Building',
    location: 'Bandikui',
    images: [
      '/images/School00.webp',
      '/images/School03.webp',
      '/images/School04.webp',
      '/images/School05.webp',
    ],
  },
  {
    category: 'Residential',
    title: 'Apartments',
    location: 'Jaipur',
    images: ['/images/Residential00.webp', '/images/Residential01.webp'],
  },
  {
    category: 'Residential',
    title: 'Villa',
    location: 'Jaipur',
    images: [
      '/images/Residential10.webp',
      '/images/Residential11.webp',
      '/images/Residential12.webp',
      '/images/Residential13.webp',
    ],
  },
  {
    category: 'Residential',
    title: 'Township',
    location: 'Ajmer',
    images: [
      '/images/Residential20.webp',
      '/images/Residential21.webp',
      '/images/Residential22.webp',
      '/images/Residential23.webp',
      '/images/Residential25.webp',
    ],
  },
  {
    category: 'Residential',
    title: 'Modern Home Elevation',
    location: 'Jaipur',
    images: ['/images/Residential30.webp', '/images/Residential31.webp'],
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className='min-h-screen'>
      {/* FILTER */}
      <section className='sticky top-[72px] z-40 bg-background border-b py-6'>
        <div className='container mx-auto px-4 flex justify-center gap-3'>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className='py-16'>
        <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10'>
          {filteredProjects.map((project, i) => (
            <Card key={i} className='overflow-hidden hover:shadow-xl'>
<Carousel
  opts={{ loop: true }}
  plugins={[
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  ]}
  className="relative w-full"
>
  <CarouselContent>
    {project.images.map((image, index) => (
      <CarouselItem key={index}>
        <div className="relative aspect-[8/9] bg-black">
          <img
            src={image}
            alt={`${project.title} ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain"
          />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  {project.images.length > 1 && (
    <>
      <CarouselPrevious
        className="absolute left-3 top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white hover:text-black shadow-md"
      />
      <CarouselNext
        className="absolute right-3 top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white hover:text-black shadow-md"
      />
    </>
  )}
</Carousel>

              {/* CONTENT */}
              <CardContent className='p-4'>
                <span className='text-sm font-semibold text-accent'>
                  {project.category}
                </span>
                <h3 className='text-xl font-semibold mt-1'>{project.title}</h3>
                <p className='text-sm text-primary mt-1'>
                  📍 {project.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
