import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Fondo con imagen minimalista */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/images/background-tech.jpg')",
        }}
      ></div>

      {/* Card centrada */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full"
      >
        {/* Foto de perfil */}
        <img
          src="/images/profile.jpg"
          alt="Daniel Hurado"
          className="w-32 h-32 object-cover rounded-full border-4 border-cyan-400 shadow-lg mb-6"
        />

        {/* Nombre y título */}
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Daniel Hurado
        </h1>
        <p className="text-cyan-400 text-lg font-medium">
          Full Stack Developer / WordPress Expert
        </p>

        {/* Descripción */}
        <p className="text-gray-400 text-center mt-4 px-8 max-w-xl leading-relaxed">
          I'm a passionate Full Stack Developer with experience in building
          high-performance web applications. I specialize in modern frameworks
          and love creating seamless user experiences.
        </p>

        {/* Botón de contacto */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 rounded-full"
        >
          Contact Me
        </motion.button>
      </motion.div>
    </div>
  );
}
