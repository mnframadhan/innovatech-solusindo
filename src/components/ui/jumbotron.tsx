import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Jumbotron = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary-blue to-secondary-blue h-[700px] flex flex-col items-center pt-44 px-24 text-center gap-4">
      <div className="absolute left-2 z-0 bottom-0 opacity-30">
        <img src="logo-background.png" width={600} alt="logo" />
      </div>

      <div className="flex flex-col gap-20 z-20">
        <div className="flex flex-col leading-normal">
          <motion.h1
            className="text-secondary-white text-9xl font-extrabold px-20 uppercase tracking-widest"
            initial={{ x: 100 }} // Start off the right
            animate={{ x: 0 }} // Animate to original position
            transition={{ duration: 1 }} // Animation duration
          >
            Innovatech
          </motion.h1>
          <motion.h2
            className="text-secondary-white uppercase text-5xl"
            initial={{ x: -100 }} // Start off the left
            animate={{ x: 0 }} // Animate to original position
            transition={{ duration: 1, delay: 0.5 }} // Animation duration with delay
          >
            Solusindo
          </motion.h2>
        </div>
        <div className="flex self-center bg-slate-600 px-3 py-2">
          <a
            className="text-white"
            href="https://wa.me/6285732398679/?text=Halo, admin. Saya ingin berkonsultasi terkait layanan Innovatech Solusindo."
            target="_blank"
            rel="noopener noreferrer" // Security best practice
          >
            Contact Us &nbsp;&nbsp;
          </a>
          <ExternalLink className="self-center" size={18} color="white" />
        </div>
        <motion.div
          className="text-slate-300 text-2xl px-24"
          initial={{ y: 100 }} // Start off the bottom
          animate={{ y: 0 }} // Animate to original position
          transition={{ duration: 1, delay: 1 }} // Animation duration with delay
        >
          <p>
            Advancing the Digital Growth of Businesses in FnB, Fitness,
            Healthcare, Retail, Industry, and More
          </p>
        </motion.div>
      </div>
      <div className="h-2 bg-queternary-blue z-50" />
      <div className="h-2 bg-tertiary-blue z-50" />
    </div>
  );
};
