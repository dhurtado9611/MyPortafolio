import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {/* Fondo con animación */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_10%,_rgba(0,0,0,1)_90%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          backgroundSize: ["200% 200%", "300% 300%", "200% 200%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Número 404 animado */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-8xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]"
        >
          404
        </motion.h1>

        {/* Mensaje de error */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-gray-400 text-xl mt-4"
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        {/* Botón para volver al home */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(255, 255, 0, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="px-8 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium rounded-full transition-all duration-300"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}