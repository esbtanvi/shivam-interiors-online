import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-32">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
        About Us
      </h1>

      {/* Image + Text Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
<div className="bg-none">
  <img
    src="/src/assets/AboutUs.jpeg"
    alt="About Shivam Engineers & Interior Designers"
    className="w-[400px] h-[400px] rounded-lg shadow-lg ml-20 object-cover object-top"
  />
</div>
      </div>
    </section>
  );
};

export default AboutUs;
