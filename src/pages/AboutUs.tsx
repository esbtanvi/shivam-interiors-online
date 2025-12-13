import React from "react";
import AboutUsImage from "@/assets/aboutUs.jpeg"
const AboutUs = () => {
  return (
   <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E3F2FD]  to-[#0040FF] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 md:text-6xl">About us</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Get to know who we are and what drives our work.
          </p>
        </div>
      </section>
    

      {/* Image + Text Block */}
      <div className="grid grid-cols-1 ml-28 mt-16 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
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

        {/* Right Image */}
<div className="bg-none ">
  <img
    src={AboutUsImage}
    alt="About Shivam Engineers & Interior Designers"
    className="w-[400px] h-[400px] rounded-lg shadow-lg ml-20 object-cover object-top"
  />
</div>
      </div>
    </div>
  );
};

export default AboutUs;
