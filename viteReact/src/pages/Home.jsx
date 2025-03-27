import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    {
      name: "HTML",
      color: "from-orange-500 to-red-500",
      icon: <FaHtml5 className="text-6xl text-white" />,
    },
    {
      name: "JavaScript",
      color: "from-yellow-400 to-yellow-600",
      icon: <FaJsSquare className="text-6xl text-white" />,
    },
    {
      name: "CSS",
      color: "from-blue-400 to-blue-600",
      icon: <FaCss3Alt className="text-6xl text-white" />,
    },
    {
      name: "SQL",
      color: "from-purple-400 to-purple-600",
      icon: <FaDatabase className="text-6xl text-white" />,
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Título animado */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ¡Hola, soy Daniel!
        </motion.h1>

        {/* Subtítulo animado */}
        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Desarrollador Full Stack 🚀
        </motion.p>

        {/* Botón Call to Action */}
        <motion.button
          onClick={scrollToAbout}
          className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 hover:shadow-blue-500/50 transition duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/about" className="btn">
            ¡Conóceme!
          </Link>
        </motion.button>

        {/* Skills Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-gradient-to-br ${skill.color} text-white font-bold text-lg cursor-pointer`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.4)",
              }}
            >
              {skill.icon}
              <span className="mt-4">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
