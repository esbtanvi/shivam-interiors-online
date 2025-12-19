import React from "react";
import AboutUsImage from "@/assets/aboutUs.jpeg"
const AboutUs = () => {
  return (
   <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E3F2FD]  to-[#0040FF] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About us</h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto">
            Get to know who we are and what drives our work.
          </p>
        </div>
      </section>
    

      {/* Image + Text Block */}
      <div className="container mx-auto px-4 mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center mb-12">
        {/* Right Image (First on Mobile) */}
        <div className="flex justify-center md:justify-end md:order-2">
          <img
            src="/images/aboutUs.webp"
            alt="About Shivam Engineers & Interior Designers"
            className="w-full max-w-[400px] h-auto aspect-square rounded-lg shadow-lg object-cover object-top"
          />
        </div>

        {/* Left Text Section (Second on Mobile) */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg text-left md:order-1">
          <p>
            Established in 2003 by Mr. Shailesh Mathur, Shivam Engineers & Interior Designers has evolved into a professionally managed organization recognized for its excellence in engineering and interior design services.
          </p>

          <p>
            With a team of qualified engineers, designers, project coordinators, and skilled professionals, we provide end-to-end solutions in the design and execution of commercial, institutional, and residential projects. Our expertise encompasses both civil construction and interior development, ensuring seamless integration between structure and design.
          </p>

          <p>
            Over the past two decades, we have successfully executed a diverse portfolio of large and complex projects. Our consistent focus on quality, precision, and timely delivery has positioned us as a reliable partner in the industry.
          </p>

          <p>
            Equipped with advanced tools, technology, and a highly competent workforce, Shivam Engineers & Interior Designers remains committed to delivering projects that reflect excellence, efficiency, and aesthetic sophistication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
