import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="p-10 bg-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        I’m a passionate model with experience in fashion, editorial, and runway.
        I bring creativity, confidence, and energy to every project I take on.
      </p>
    </motion.section>
  );
}
