import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiUser, FiGrid, FiBook, FiHome, FiMail } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      {/* ✅ Menú hamburguesa para móviles */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={toggleMenu}
          className="text-cyan-400 focus:outline-none"
        >
          {isOpen ? (
            <FiX size={32} className="hover:text-white transition duration-300" />
          ) : (
            <FiMenu size={32} className="hover:text-white transition duration-300" />
          )}
        </button>
      </div>

      {/* ✅ Menú móvil (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-64 bg-black border-r border-gray-800 text-white z-40 md:hidden"
          >
            <div className="flex flex-col items-center mt-10">
              {/* Logo */}
              <div className="text-3xl font-bold text-center text-white mb-10">
                <span className="text-cyan-400">D</span>aniel
              </div>

              {/* Links */}
              <ul className="space-y-6 text-gray-400">
                {[
                  { name: "About", path: "/", icon: <FiUser /> },
                  { name: "My Skills", path: "/skills", icon: <FiGrid /> },
                  { name: "Projects", path: "/projects", icon: <FiBook /> },
                  { name: "Blog", path: "/blog", icon: <FiHome /> },
                  { name: "Contact", path: "/contact", icon: <FiMail /> },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-cyan-400 transition duration-300 flex items-center space-x-2"
                      onClick={() => setIsOpen(false)} // Cierra al hacer clic
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ✅ Menú lateral para escritorio (solo al hacer clic en el icono) */}
      <motion.nav
        initial={{ width: 72 }}
        animate={{ width: isExpanded ? 240 : 72 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden md:flex fixed left-0 top-0 h-full bg-black border-r border-gray-800 text-white"
      >
        <div className="flex flex-col items-center mt-10 w-full">
          {/* ✅ Icono para expandir/cerrar el menú */}
          <button
            onClick={toggleExpand}
            className="text-cyan-400 focus:outline-none mb-8"
          >
            {isExpanded ? (
              <FiX size={32} className="hover:text-white transition duration-300" />
            ) : (
              <FiMenu size={32} className="hover:text-white transition duration-300" />
            )}
          </button>

          {/* Links */}
          <ul className="space-y-6 text-gray-400 w-full">
            {[
              { name: "About", path: "/", icon: <FiUser /> },
              { name: "My Skills", path: "/skills", icon: <FiGrid /> },
              { name: "Projects", path: "/projects", icon: <FiBook /> },
              { name: "Blog", path: "/blog", icon: <FiHome /> },
              { name: "Contact", path: "/contact", icon: <FiMail /> },
            ].map((link) => (
              <li key={link.name} className="w-full">
                <Link
                  to={link.path}
                  className={`flex items-center space-x-4 hover:text-cyan-400 transition duration-300 py-3 px-4 ${
                    isExpanded ? "justify-start" : "justify-center"
                  }`}
                >
                  {link.icon}
                  {isExpanded && <span>{link.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
}
