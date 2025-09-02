import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryData = {
  "Full-Length": {
    categories: {
      Outdoor: ["/full1.jpeg", "/full2.jpeg", "/full3.jpeg", "/full4.jpeg", "/full5.jpeg", "/full6.jpeg"],
      Indoor: ["/full-in1.jpeg", "/full-in2.jpeg", "/full-in3.jpeg"],
    },
  },
  "Short-Length": {
    categories: {
      "Front Profile": [
        "/front1.jpeg", "/front2.jpeg", "/front3.jpeg", "/front4.jpeg", "/front5.jpeg", "/front6.jpeg",
        "/front7.jpeg", "/front8.jpeg", "/front9.jpeg", "/front10.jpeg", "/front11.jpeg", "/front13.jpeg",
        "/front15.jpeg", "/front16.jpeg", "/front17.jpeg"
      ],
      "Side Profile": [
        "/side1.jpeg", "/side2.jpeg", "/side3.jpeg", "/side4.jpeg", "/side5.jpeg", "/side6.jpeg",
        "/side7.jpeg", "/side8.jpeg", "/side9.jpeg", "/side10.jpeg", "/side11.jpeg", "/side12.jpeg"
      ],
    },
  },
  "Headshots": {
    categories: {
      "Close-Up": [
        "/close1.jpeg", "/close2.jpeg", "/close3.jpeg", "/close5.jpeg", "/close6.jpeg", "/close7.jpeg",
        "/close8.jpeg", "/close9.jpeg", "/close10.jpeg", "/close11.jpeg", "/close12.jpeg"
      ],
      Creative: [
        "/creative1.jpeg", "/creative2.jpeg", "/creative3.jpeg", "/creative4.jpeg", "/creative5.jpeg", "/creative6.jpeg", "/creative7.jpeg"
      ],
    },
  },
};

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = selectedCategory && selectedSubCategory
    ? galleryData[selectedCategory].categories[selectedSubCategory]
    : [];

  const handleBack = () => {
    if (selectedSubCategory) setSelectedSubCategory(null);
    else setSelectedCategory(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") showPrev(e);
        if (e.key === "ArrowRight") showNext(e);
        if (e.key === "Escape") setLightboxIndex(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, images.length]);

  return (
    <section id="gallery" className="relative p-12 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-gray-900 tracking-wide drop-shadow-md"
        >
        Gallery
        </motion.h2>
        
      </div>

      {(selectedCategory || selectedSubCategory) && (
        <motion.button
          onClick={handleBack}
          whileHover={{ scale: 1.05 }}
          className="mb-8 px-6 py-3 bg-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-700 transition mx-auto block"
        >
          ← Back
        </motion.button>
      )}

      {!selectedCategory && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap justify-center gap-8">
          {Object.keys(galleryData).map((category, idx) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="px-8 py-5 text-xl font-bold text-gray-800 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:bg-gray-100 transition-all"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      )}

      {selectedCategory && !selectedSubCategory && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap justify-center gap-8">
          {Object.keys(galleryData[selectedCategory].categories).map((sub, idx) => (
            <motion.button
              key={sub}
              onClick={() => setSelectedSubCategory(sub)}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="px-8 py-5 text-lg font-bold text-gray-800 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:bg-gray-100 transition-all"
            >
              {sub}
            </motion.button>
          ))}
        </motion.div>
      )}

      {selectedCategory && selectedSubCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4"
        >
          {images.map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={`${selectedSubCategory} ${idx}`}
              onClick={() => setLightboxIndex(idx)}
              whileHover={{ scale: 1.02 }}
              className="w-full rounded-xl shadow-md cursor-pointer hover:shadow-xl transition duration-300"
            />
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-white text-3xl">
              <X size={36} />
            </button>

            <button onClick={showPrev} className="absolute left-6 text-white bg-black/40 p-3 rounded-full hover:bg-black/60">
              <ChevronLeft size={36} />
            </button>

            <motion.img
              src={images[lightboxIndex]}
              alt="Lightbox"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />

            <button onClick={showNext} className="absolute right-6 text-white bg-black/40 p-3 rounded-full hover:bg-black/60">
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

