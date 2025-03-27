import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss, SiNestjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "bg-orange-500", percentage: 90 },
  { name: "CSS", icon: <FaCss3Alt />, color: "bg-blue-500", percentage: 85 },
  { name: "JavaScript", icon: <FaJsSquare />, color: "bg-yellow-400", percentage: 80 },
  { name: "SQL", icon: <FaDatabase />, color: "bg-purple-500", percentage: 75 },
  { name: "React", icon: <FaReact />, color: "bg-cyan-500", percentage: 70 },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "bg-violet-500", percentage: 80 },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "bg-teal-500", percentage: 85 },
  { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-500", percentage: 70 },
  { name: "Nest.js", icon: <SiNestjs />, color: "bg-red-500", percentage: 60 },
  { name: "Laravel", icon: <FaLaravel />, color: "bg-red-600", percentage: 65 },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-16 md:pl-24">
      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        My Skills
      </h2>

      {/* Grid para las cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-lg bg-gray-800 hover:shadow-xl transition duration-300"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Icono + Nombre */}
            <div className="flex items-center mb-4">
              <div
                className={`text-white text-4xl ${skill.color} p-3 rounded-lg`}
              >
                {skill.icon}
              </div>
              <h3 className="ml-4 text-xl font-semibold text-white">
                {skill.name}
              </h3>
            </div>

            {/* Barra de progreso */}
            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
              <motion.div
                className={`${skill.color} h-full`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Porcentaje */}
            <p className="mt-2 text-right text-gray-400">
              {skill.percentage}%
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
