import { services } from "../../data/services";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "@tanstack/react-router";

export const Services = () => {

  const navigate = useNavigate();
  const handleServiceClick = () => {
    navigate({ to: "/detailservice" });
  };
  const { ref: refService, inView: inViewService } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Threshold diatur ke 1
  })

  return (
    <div
      className="bg-secondary-white flex flex-col items-center py-14 gap-10"
      id="our-services"
    >
      <div>
        <h1 className="text-3xl font-extrabold tracking-wider">Our Services</h1>
      </div>
      <div className="grid grid-cols-3 px-40 py-10 gap-10">
        {services.map((service, index) => {

          return (
            <motion.div
              ref={refService} // Menghubungkan ref ke motion.div
              key={service.title}
              className="flex flex-col gap-2 py-4 text-center w-72 px-2 items-center shadow-2xl cursor-pointer" // Tambahkan cursor pointer
              initial={{ opacity: 0, x: 100 }} // Memulai dari transparan dan di kanan
              animate={{
                opacity: inViewService ? 1 : 0,
                x: inViewService ? 0 : 100,
              }} // Fade in dari kanan
              transition={{ duration: 0.3, delay: index * 0.1 }} // Durasi dengan penundaan
              onClick={() => handleServiceClick()} // Panggil handler saat diklik
            >
              <div className="overflow-hidden">
                <img
                  src={`./services-images/${service.image}`}
                  alt={`${service.title}`}
                  className="w-72 h-40 hover:scale-110 duration-200"
                />
              </div>
              <div>
                <h2 className="font-semibold text-lg">{service.title}</h2>
                <p className="font-light text-sm">{service.sub_title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
