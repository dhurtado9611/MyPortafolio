import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <>
      {/* Menú para escritorio */}
      <motion.nav
        initial={{ width: 70 }}
        animate={{ width: isExpanded ? 220 : 70 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="hidden md:block fixed top-0 left-0 h-full bg-black/30 backdrop-blur-md border-r border-gray-800 p-4 z-50"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col items-start gap-8 mt-10">
          {/* Home */}
          <Link to="/" className="flex items-center gap-4 cursor-pointer group">
            <FaHome className="text-cyan-400 text-3xl group-hover:scale-110 transition-transform duration-300" />
            {isExpanded && (
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-white text-lg font-medium opacity-80 group-hover:opacity-100 transition duration-300"
              >
                Home
              </motion.span>
            )}
          </Link>

          {/* About */}
          <Link to="/about" className="flex items-center gap-4 cursor-pointer group">
            <FaUser className="text-cyan-400 text-3xl group-hover:scale-110 transition-transform duration-300" />
            {isExpanded && (
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-white text-lg font-medium opacity-80 group-hover:opacity-100 transition duration-300"
              >
                About
              </motion.span>
            )}
          </Link>

          {/* Skills */}
          <Link to="/skills" className="flex items-center gap-4 cursor-pointer group">
            <FaTools className="text-cyan-400 text-3xl group-hover:scale-110 transition-transform duration-300" />
            {isExpanded && (
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-white text-lg font-medium opacity-80 group-hover:opacity-100 transition duration-300"
              >
                Skills
              </motion.span>
            )}
          </Link>

          {/* Projects */}
          <Link to="/projects" className="flex items-center gap-4 cursor-pointer group">
            <FaProjectDiagram className="text-cyan-400 text-3xl group-hover:scale-110 transition-transform duration-300" />
            {isExpanded && (
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-white text-lg font-medium opacity-80 group-hover:opacity-100 transition duration-300"
              >
                Projects
              </motion.span>
            )}
          </Link>

          {/* Contact */}
          <Link to="/contact" className="flex items-center gap-4 cursor-pointer group">
            <FaEnvelope className="text-cyan-400 text-3xl group-hover:scale-110 transition-transform duration-300" />
            {isExpanded && (
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="text-white text-lg font-medium opacity-80 group-hover:opacity-100 transition duration-300"
              >
                Contact
              </motion.span>
            )}
          </Link>
        </div>
      </motion.nav>

      {/* Menú para móviles */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-3xl bg-black/40 p-3 rounded-md"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isMobileOpen && (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed top-0 left-0 h-full w-56 bg-black/30 backdrop-blur-md border-r border-gray-800 p-4"
          >
            <div className="flex flex-col gap-8 mt-10">
              {/* ✅ Cierra el menú al hacer click */}
              <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-4 cursor-pointer">
                <FaHome className="text-cyan-400 text-3xl" />
                <span className="text-white text-lg font-medium">Home</span>
              </Link>
              <Link to="/about" onClick={closeMobileMenu} className="flex items-center gap-4 cursor-pointer">
                <FaUser className="text-cyan-400 text-3xl" />
                <span className="text-white text-lg font-medium">About</span>
              </Link>
              <Link to="/skills" onClick={closeMobileMenu} className="flex items-center gap-4 cursor-pointer">
                <FaTools className="text-cyan-400 text-3xl" />
                <span className="text-white text-lg font-medium">Skills</span>
              </Link>
              <Link to="/projects" onClick={closeMobileMenu} className="flex items-center gap-4 cursor-pointer">
                <FaProjectDiagram className="text-cyan-400 text-3xl" />
                <span className="text-white text-lg font-medium">Projects</span>
              </Link>
              <Link to="/contact" onClick={closeMobileMenu} className="flex items-center gap-4 cursor-pointer">
                <FaEnvelope className="text-cyan-400 text-3xl" />
                <span className="text-white text-lg font-medium">Contact</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}