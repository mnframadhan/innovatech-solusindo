import { coFounders } from "../../data/co-founders";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Teams = () => {
  const { ref: refTitle, inView: inViewTitle } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Menetapkan threshold untuk animasi
  });

  const { ref: refLeft, inView: inViewLeft } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: refCenter, inView: inViewCenter } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: refRight, inView: inViewRight } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      className="w-full bg-gradient-to-b from-primary-blue to-secondary-blue flex-col text-center"
      id="our-teams"
    >
      <div className="h-2 bg-queternary-blue" />
      <div className="h-2 bg-tertiary-blue" />

      <motion.h2
        ref={refTitle}
        initial={{ opacity: 0, y: -50 }} // Memulai dari transparan dan posisi lebih tinggi
        animate={{ opacity: inViewTitle ? 1 : 0, y: inViewTitle ? 0 : -50 }} // Fade in dari atas
        transition={{ duration: 0.3 }} // Durasi fade in
        className="text-secondary-white text-3xl tracking-wider font-extrabold px-40 py-10 flex flex-col"
      >
        Co Founders
      </motion.h2>

      <div className="px-40 py-10 flex gap-20 items-center justify-center ">
        {coFounders.map((cf, index) => {
          let animationProps = {
            initial: { opacity: 0 },
            animate: { opacity: inViewLeft ? 1 : 0 },
            transition: { duration: 0.3 },
            ref: refLeft,
          };

          if (index === 0) {
            animationProps = {
              ...animationProps,
              initial: { opacity: 0, x: -100 }, // Animasi dari kiri
              animate: {
                opacity: inViewLeft ? 1 : 0,
                x: inViewLeft ? 0 : -100,
              },
              ref: refLeft,
            };
          } else if (index === 1) {
            animationProps = {
              ...animationProps,
              initial: { opacity: 0, y: 50 }, // Animasi dari bawah
              animate: {
                opacity: inViewCenter ? 1 : 0,
                y: inViewCenter ? 0 : 50,
              },
              ref: refCenter,
            };
          } else if (index === 2) {
            animationProps = {
              ...animationProps,
              initial: { opacity: 0, x: 100 }, // Animasi dari kanan
              animate: {
                opacity: inViewRight ? 1 : 0,
                x: inViewRight ? 0 : 100,
              },
              ref: refRight,
            };
          }

          return (
            <motion.div {...animationProps} key={cf.name}>
              <div className="flex flex-col gap-2 text-secondary-white ">
                <div className="w-44 bg-secondary-white h-56">
                  <img src="" alt={cf.name} />
                </div>
                <div>
                  <h1 className="font-light text-md">{cf.name}</h1>
                  <p className="font-extralight text-[10px]">{cf.title}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="h-2 bg-tertiary-blue" />
      <div className="h-2 bg-queternary-blue" />
    </div>
  );
};
