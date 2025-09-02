import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Act from "./components/Act";
function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section
        id="about"
        className="h-screen bg-gray-200 flex items-center justify-center"
      >
        <About></About>
      </section>

     <section
        id="gallery"
        className="min-h-screen bg-gray-100 "
      >
        <Gallery />
      </section>
       

      <section
        id="portfolio"
        className="min-h-screen bg-gray-400 "
      >
        <Act/>
      </section>

      <section
        id="contact"
        className="h-screen bg-gray-500 flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold">Contact Section</h2>
      </section>
    </>
  );
}

export default App;
