import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-gray-700 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl">Contacto</h1>
    </motion.div>
  );
}