// src/pages/servicedetail.tsx
import { services } from "../data/servicedetail";
import { useEffect } from "react";
import "./servicedetail.css"; // Import the CSS file

const ServiceDetail = () => {
  useEffect(() => {
    const handleScroll = () => {
      const serviceElements = document.querySelectorAll(".service");
      serviceElements.forEach((element) => {
        const position = element.getBoundingClientRect();
        // Trigger the fade-in effect when the element is within the viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add("fade-in");
        } else {
          // Optional: Remove class if it goes out of view
          element.classList.remove("fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger scroll handler on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-5">Service Details</h1>
      <div className="flex flex-col gap-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src={`./services-images/${service.image}`} // Service image
                alt={service.title}
                className="w-full  object-cover rounded-lg" // Image styling
              />
            </div>
            <div className="md:ml-10 mt-5 md:mt-0 text-center md:text-left w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-2 mt-3 mx-5 md:mx-5">
                {service.title}
              </h2>
              <p className="mt-3 mx-5 md:mx-5 text-justify">
                {service.content.definition}
              </p>
              <p className="mt-3 mx-5 md:mx-5 text-justify">
                {service.content.benefit}
              </p>
              <p className="mt-3 mx-5 md:mx-5 text-justify">
                {service.content.description}
              </p>
              <p className="mt-3 mx-5 md:mx-5 text-justify">
                {service.content.workflow}
              </p>
              <p className="mt-3 mx-5 md:mx-5 text-justify">
                {service.content.real_world_example}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
