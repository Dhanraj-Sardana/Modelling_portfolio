import React from "react";

export default function Performance() {
  return (
    <section id="performances" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Acting Performances
        </h2>

        {/* Theatre Performances */}
        <div id="performance-theatre" className="mb-16">
          <h3 className="text-3xl font-semibold mb-6">Theatre Performances</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <video controls className="w-full rounded-lg">
              <source src="/videos/theatre1.mp4" type="video/mp4" />
            </video>
            <video controls className="w-full rounded-lg">
              <source src="/videos/theatre2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Camera Acting Performances */}
        <div id="performance-camera" className="mb-16">
          <h3 className="text-3xl font-semibold mb-6">
            Camera Acting Performances
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <video controls className="w-full rounded-lg">
              <source src="/videos/camera1.mp4" type="video/mp4" />
            </video>
            <video controls className="w-full rounded-lg">
              <source src="/videos/camera2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Ramlila Performances */}
        <div id="performance-ramlila">
          <h3 className="text-3xl font-semibold mb-6">Ramlila Performances</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <video controls className="w-full rounded-lg">
              <source src="/videos/ramlila1.mp4" type="video/mp4" />
            </video>
            <video controls className="w-full rounded-lg">
              <source src="/videos/ramlila2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
