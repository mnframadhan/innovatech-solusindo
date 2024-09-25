import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const MainAdvantages = () => {
  const { ref: refText, inView: inViewText } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: refImage, inView: inViewImage } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="w-full px-40 flex gap-20 py-20 bg-secondary-white">
      <motion.div
        ref={refText}
        initial={{ opacity: 0, x: -100 }} // Memulai dari transparan dan di kiri
        animate={{ opacity: inViewText ? 1 : 0, x: inViewText ? 0 : -100 }} // Fade in dari kiri
        transition={{ duration: 0.3 }} // Durasi fade in
        className="flex gap-4 w-3/4 px-20 flex-col"
      >
        <h2 className="text-3xl tracking-wider font-extrabold">Our Values</h2>
        <div className="flex flex-col text-[15px] gap-2 pr-20">
          <p className="font-light text-justify">
            At Innovatech Solusindo, we are dedicated to upholding core values
            that guide our mission and shape our services. We understand the
            importance of speed and strive to deliver high-quality results
            quickly, ensuring our clients stay ahead in the digital landscape.
            Our belief in affordability means that top-notch digital solutions
            should be accessible to businesses of all sizes, and our competitive
            pricing reflects this commitment.
          </p>
          <p className="font-light text-justify">
            We prioritize excellent service through comprehensive maintenance
            and exceptional after-sales support, always ready to assist our
            clients whenever needed. Recognizing that every business is unique,
            we offer customized solutions that align with specific requirements,
            allowing our clients to maximize the benefits of our services.
            Transparency is essential to our relationships, which is why we
            provide regular reporting and monitoring to keep our clients
            informed about their project's progress and performance.
            Furthermore, our dedicated support team is available 24/7, ensuring
            that we are here for our clients around the clock.
          </p>
          <p className="font-light text-justify">
            These values reflect our commitment to empowering the digital growth
            of businesses across all industries, positioning us not just as a
            service provider but as a trusted partner in your digital journey.
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={refImage}
        initial={{ opacity: 0, x: 100 }} // Memulai dari transparan dan di kanan
        animate={{ opacity: inViewImage ? 1 : 0, x: inViewImage ? 0 : 100 }} // Fade in dari kanan
        transition={{ duration: 0.3 }} // Durasi fade in
        className="max-w-90 "
      >
        <img src="/mirrored-logo.png" alt="Modern Application" />
      </motion.div>
    </div>
  );
};
