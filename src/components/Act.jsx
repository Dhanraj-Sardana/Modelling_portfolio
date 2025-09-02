import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sections = [
  {
    id: "theatre",
    title: "Theatre",
    shortDescription:
      "I started theatre in [Year], exploring stage presence, dialogue delivery, and live audience interaction.",
    longDescription:
      "My journey in theatre has been filled with dynamic performances, ranging from classical dramas to experimental plays. Over the years, I’ve had the opportunity to work with talented directors, hone my dialogue delivery, and connect deeply with live audiences. Theatre has helped me build stage confidence and storytelling skills.",
    photos: [
      { src: "/b.jpeg", caption: "Performing in my first play." },
      { src: "/theatre2.jpg", caption: "A dramatic stage moment." },
      { src: "/theatre3.jpg", caption: "Classic theatre production scene." },
    ],
    videos: [
      { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Stage Performance 1" },
      { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Stage Performance 2" },
    ],
  },
  {
    id: "camera",
    title: "Camera Acting",
    shortDescription:
      "My journey in front of the camera began in [Year], working on expression nuances and acting for film/TV.",
    longDescription:
      "Acting for the camera taught me subtleties in performance that differ greatly from theatre. I’ve worked on multiple short films, honing expressions and gestures to resonate through the lens. The technicalities of framing, lighting, and timing shaped my craft further.",
    photos: [
      { src: "/bg.jpeg", caption: "On set during a shoot." },
      { src: "/camera2.jpg", caption: "Behind the scenes of a short film." },
      { src: "/camera3.jpg", caption: "Character study for a role." },
    ],
    videos: [
      { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Short Film Scene 1" },
    ],
  },
  {
    id: "ramlila",
    title: "Ramlila",
    shortDescription:
      "Being part of Ramlila has been an incredible experience, portraying mythological characters and culture.",
    longDescription:
      "Performing in Ramlila connected me with deep cultural traditions and spiritual narratives. Bringing mythological characters to life taught me discipline and dedication to historical authenticity. It’s a blend of spirituality, performance, and devotion.",
    photos: [
      { src: "/bgg.jpeg", caption: "Portraying Lord Rama." },
      { src: "/ramlila2.jpg", caption: "Traditional scene setup." },
      { src: "/ramlila3.jpg", caption: "Ramlila live performance." },
    ],
    videos: [
      { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Ramlila Highlight" },
    ],
  },
];

export default function Act() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid gap-8 ${expanded ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"}`}>
          {sections.map((section) => {
            const isExpanded = expanded === section.id;

            if (isExpanded) {
              return (
                <motion.div
                  key={section.id}
                  layout
                  className="w-full bg-white rounded-2xl shadow-lg overflow-hidden p-6"
                >
                  <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                  <p className="text-gray-700 mb-6">{section.longDescription}</p>

                  {/* Images */}
                  <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {section.photos.map((photo, idx) => (
                      <div
                        key={idx}
                        className="relative group rounded-xl overflow-hidden shadow-lg"
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="w-full h-64 object-cover transition group-hover:blur-sm"
                        />
                        <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium bg-black/50 opacity-0 group-hover:opacity-100 transition">
                          {photo.caption}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Performances */}
                  {section.videos.length > 0 && (
                    <>
                      <h3 className="text-2xl font-semibold mt-8 mb-4">Performances</h3>
                      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                        {section.videos.map((video, idx) => (
                          <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
                            <iframe
                              width="100%"
                              height="300"
                              src={video.url}
                              title={video.title}
                              frameBorder="0"
                              allowFullScreen
                              className="rounded-lg"
                            ></iframe>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={() => setExpanded(null)}
                      className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    >
                      Show Less
                    </button>
                  </div>
                </motion.div>
              );
            }

            // Card Mode
            return (
              <motion.div
                key={section.id}
                layout
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative group">
                  <img
                    src={section.photos[0].src}
                    alt={section.title}
                    className="w-full h-64 object-cover transition group-hover:blur-sm"
                  />
                  <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                    {section.title}
                  </h2>
                  <button
                    onClick={() => setExpanded(section.id)}
                    className="absolute inset-0 m-auto w-28 h-10 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition"
                  >
                    More
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-gray-700">{section.shortDescription}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
