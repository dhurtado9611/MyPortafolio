import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Fondo en movimiento */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,255,0.10)_10%,_rgba(0,0,0,1)_90%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          backgroundSize: ["200% 200%", "300% 300%", "200% 200%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Card centrada */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4"
      >
        {/* Foto de perfil */}
        <motion.img
          src="/src/assets/perfil.png"
          alt="Daniel Hurtado"
          className="w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-cover rounded-full border-4 border-blue-400 shadow-xl mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Nombre y título */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-2 text-center">
          Daniel Hurtado
        </h1>
        <p className="text-blue-400 text-base md:text-lg lg:text-xl font-semibold tracking-wide text-center">
          Full Stack Developer / WordPress Expert
        </p>

        {/* Descripción */}
        <p className="text-gray-400 text-sm md:text-base lg:text-lg text-center mt-4 max-w-md md:max-w-lg lg:max-w-xl leading-relaxed">
          I'm a passionate Full Stack Developer with experience in building
          high-performance web applications. I specialize in modern frameworks
          and love creating seamless user experiences.
        </p>

        {/* Botón con efecto neon */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(0, 0, 255, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-6 px-6 py-2 md:px-8 md:py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-medium rounded-full transition-all duration-300 text-sm md:text-base"
        >
          <Link to="/Contact" className="btn">
          Contact Me!
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
}