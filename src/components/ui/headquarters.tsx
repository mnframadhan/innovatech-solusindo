import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Headquarter = () => {
  const { ref: refContent, inView: inViewContent } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Threshold diatur ke 1
  });

  const { ref: refMap, inView: inViewMap } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Threshold diatur ke 1
  });

  return (
    <div className="w-full px-40 flex gap-20 py-20 bg-secondary-white">
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: inViewContent ? 1 : 0,
          x: inViewContent ? 0 : -100,
        }}
        transition={{ duration: 1 }} // Durasi diatur ke 1 detik
        className="w-1/2 flex flex-col gap-4"
      >
        <h2 className="text-3xl tracking-wider font-extrabold">Headquarters</h2>
        <div className="flex flex-col text-[15px] gap-2">
          <p className="font-light text-justify">
            We are headquartered in Surabaya, a vibrant business hub in
            Indonesia. As the country's second-largest city, Surabaya provides a
            strategic environment for operating and collaborating across various
            industries. Being based here enables us to serve clients more
            effectively and leverage the potential of both local and regional
            markets.
          </p>
          <p className="font-light text-justify">
            Our location in Surabaya allows us to deliver exceptional service
            while tapping into a dynamic and growing market.
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={refMap}
        initial={{ opacity: 0, x: 100 }} // Memulai dari kanan
        animate={{ opacity: inViewMap ? 1 : 0, x: inViewMap ? 0 : 100 }} // Bergerak dari kanan ke kiri
        transition={{ duration: 1 }} // Durasi diatur ke 1 detik
        className="w-fit shadow-2xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.75589416380453!2d112.69878326358653!3d-7.327931000342751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc96428ce221%3A0x2e5a0d5d290986da!2sSalon%20%26%20Toko%20Kecantikan%20Rosa!5e0!3m2!1sen!2sid!4v1725457729070!5m2!1sen!2sid"
          width="500"
          height="285"
          loading="lazy"
          className="border border-blue-800 rounded-lg"
        ></iframe>
      </motion.div>
    </div>
  );
};
