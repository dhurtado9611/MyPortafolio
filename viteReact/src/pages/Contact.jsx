import { useState } from "react";
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

  // ✅ Manejar el cambio de datos en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Manejar el envío del formulario
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
    <div className="flex justify-center items-center h-screen bg-black text-white px-4">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">
          Contact Me
        </h2>

        {success && (
          <p className="text-green-400 text-center mb-4">
            ✅ Your message has been sent!
          </p>
        )}
        {error && (
          <p className="text-red-400 text-center mb-4">
            ❌ Please fill out all fields.
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>

          {/* Correo */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>

          {/* Mensaje */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
              required
            ></textarea>
          </div>

          {/* Botón de enviar */}
          <div>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-bold py-2 rounded-md hover:bg-cyan-500 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
