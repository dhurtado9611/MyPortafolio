import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // ✅ Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    setIsLoading(true);
    setError(false);

    try {
      await emailjs.send(
        "danielhurtado.dev", // Reemplaza con tu Service ID
        "template_wp2oed9", // Reemplaza con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "lIQur3ae3W4oXuec5" // Reemplaza con tu Public Key
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending email:", err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-black overflow-hidden px-4">
      {/* Fondo dinámico */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,255,0.15)_10%,_rgba(0,0,0,1)_90%)]"
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

      {/* Card de formulario */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md md:max-w-lg bg-black/80 border border-blue-400 p-6 md:p-8 rounded-lg shadow-lg"
      >
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          Contact Me
        </h2>

        {/* Mensaje de éxito o error */}
        {success && (
          <p className="text-green-400 text-center mb-4">
            Your message has been sent!
          </p>
        )}
        {error && (
          <p className="text-red-400 text-center mb-4">
            ❌ Please fill out all fields.
          </p>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-4">
            <label className="block text-sm text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
              required
            />
          </div>

          {/* Correo */}
          <div className="mb-4">
            <label className="block text-sm text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
              required
            />
          </div>

          {/* Mensaje */}
          <div className="mb-4">
            <label className="block text-sm text-white mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
              required
            ></textarea>
          </div>

          {/* Botón de enviar */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(0, 0, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="w-full bg-blue-400 text-black font-bold py-3 rounded-md hover:bg-blue-500 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}