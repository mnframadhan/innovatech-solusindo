import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutUs = () => {
  const { ref: refContent, inView: inViewContent } = useInView({
    triggerOnce: false, // Re-trigger when scrolling back
    threshold: 0.01,
  });

  return (
    <div
      className="w-full bg-gradient-to-b from-gray-800 to-gray-900 flex-col"
      id="about-us"
    >
      <div className="h-2 bg-blue-600" />
      <div className="h-2 bg-blue-700" />

      <div className="flex flex-col items-center px-60 gap-16">
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: 100 }} // Start from transparent and from the right
          animate={inViewContent ? { opacity: 1, x: 0 } : {}} // Fade in from the right
          transition={{ duration: 0.3 }} // Duration of fade in
          className="w-full max-w-[800px] text-center my-10" // Added vertical margin
        >
          <h3 className="text-white text-5xl font-extrabold">Who We Are</h3>
          <br />
          <p className="text-gray-300 font-light text-sm text-justify">
            Innovatech Solusindo is a technology agency committed to delivering
            top-tier digital solutions through website development and custom
            SaaS applications tailored to your business needs. We prioritize
            speed in execution, competitive pricing, and exceptional after-sales
            support, including 24-hour maintenance and customer service. With a
            flexible, customer-focused approach, we ensure every project
            receives meticulous attention through continuous monthly reporting
            and monitoring. We serve various sectors, including Food and
            Beverages (FnB), Fitness, Sport, and Health, Pharmacies, Industries,
            and Rental services that require GPS tracking. Our products and
            services include the creation of company profile websites and the
            development of applications such as warehouse management systems,
            Point of Sales (POS), order management systems, QR/Barcode
            integration, and integrated payment systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start from transparent and from the right
          animate={inViewContent ? { opacity: 1, x: 0 } : {}} // Fade in from the right
          transition={{ duration: 0.3, delay: 0.2 }} // Duration of fade in with staggered delay
          className="w-full max-w-[800px] text-center " // Added vertical margin
        >
          <h3 className="text-white text-5xl font-extrabold">Our Vision</h3>
          <br />
          <p className="text-gray-300 font-light text-sm text-justify">
            To be the leading technology agency known for its speed,
            cost-efficiency, and superior customer service, driving digital
            transformation across various industries with innovative and
            customized solutions. We are committed to being a reliable business
            partner, providing technology services that not only meet but exceed
            customer expectations.
          </p>
        </motion.div>
      </div>

      <div className="h-2 bg-blue-700 mt-10" />
      <div className="h-2 bg-blue-600" />
    </div>
  );
};
