import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Gallery", to: "gallery" },
  { name: "Acting", to: "portfolio" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 shadow-lg border-b border-white/30"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/hero-1.jpeg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
          />
          <h1 className="text-2xl font-bold tracking-wide text-gray-900">
            MyPortfolio
          </h1>
        </motion.div>

        {/* Nav Links */}
        <ul className="flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-70}
                className="cursor-pointer text-gray-800 hover:text-black font-medium tracking-wide relative transition duration-300 
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black 
                after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
