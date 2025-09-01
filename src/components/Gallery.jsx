import { useState } from "react";
import { motion } from "framer-motion";

// Sample images (replace with your own)
const galleryData = {
  "Full-Length": {
    categories: {
      "Outdoor": ["/bg6.jpeg", "/bg6.jpeg"],
      "Studio": ["/bg.jpeg", "/b.jpeg"],
    },
  },
  "Short-Length": {
    categories: {
      "Front Profile": ["/bg10.jpeg", "/logo.jpeg"],
      "Side Profile": ["/bg10.jpeg", "/bg.jpeg"],
    },
  },
  "Headshots": {
    categories: {
      "Close-Up": ["/bg10.jpeg", "/b.jpeg"],
      "Creative": ["/hero-1.jpeg", "/hero-1.jpeg"],
    },
  },
};

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleBack = () => {
    if (selectedSubCategory) {
      setSelectedSubCategory(null);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <section id="gallery" className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>

      {/* Back Button */}
      {(selectedCategory || selectedSubCategory) && (
        <button
          onClick={handleBack}
          className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          ← Back
        </button>
      )}

      {/* MAIN CATEGORIES */}
      {!selectedCategory && (
        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(galleryData).map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 text-lg font-semibold bg-white shadow rounded-xl hover:bg-gray-200 transition"
            >
              {category}
            </motion.button>
          ))}
        </div>
      )}

      {/* SUBCATEGORIES */}
      {selectedCategory && !selectedSubCategory && (
        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(galleryData[selectedCategory].categories).map((sub) => (
            <motion.button
              key={sub}
              onClick={() => setSelectedSubCategory(sub)}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 text-lg font-semibold bg-white shadow rounded-xl hover:bg-gray-200 transition"
            >
              {sub}
            </motion.button>
          ))}
        </div>
      )}

      {/* IMAGE GRID */}
      {selectedCategory && selectedSubCategory && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {galleryData[selectedCategory].categories[selectedSubCategory].map(
            (src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`${selectedSubCategory} ${idx}`}
                whileHover={{ scale: 1.05 }}
                className="w-full h-auto rounded-xl shadow transition-transform"
              />
            )
          )}
        </div>
      )}
    </section>
  );
}
