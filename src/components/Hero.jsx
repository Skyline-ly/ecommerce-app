import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroSlides from "../data/heroSlides";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[index];

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">

      {/* IMAGE */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.id}
          src={slide.image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">

        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            {slide.title}
          </h1>

          <p className="mt-4 text-gray-200">
            {slide.subtitle}
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
            {slide.button}
          </button>
        </motion.div>

      </div>

    </div>
  );
}