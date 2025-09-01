
// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background with 3 images */}
      <div className="absolute inset-0 flex">
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.jpeg')" }}
        ></div>
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg6.jpeg')" }
        }
        ></div>
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: "url('/b.jpeg')" }}
        ></div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Dhanraj Sardana
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
        Actor | Fashion Model | Engineer
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6 px-8 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          View Acting Performances
        </motion.a>
      </motion.div>

      {/* Floating arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-white text-2xl">↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;
