import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

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

     
       <Gallery /> 

      <section
        id="portfolio"
        className="h-screen bg-gray-400 flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold">Acting</h2>
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
