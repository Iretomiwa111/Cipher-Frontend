import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully 🎉"); //
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message ");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending message ");
    }
  };

  return (
    <div
      className="bg-[rgb(17,40,41)] min-h-screen flex justify-center items-center py-20 px-6"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <Motion.div
        className="w-full max-w-3xl bg-[rgb(10,22,24)] rounded-2xl shadow-lg p-12 border border-[rgb(0,41,40)] mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <Motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Contact us now!
        </Motion.h1>

        {/* Form */}
        <Motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-green-400 outline-none text-white placeholder-gray-400 py-3 text-lg"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-green-400 outline-none text-white placeholder-gray-400 py-3 text-lg"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-green-400 outline-none text-white placeholder-gray-400 py-3 text-lg resize-none"
            ></textarea>
          </div>

          {/* Submit button */}
          <Motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-[rgb(10,22,24)] to-[rgb(0,41,40)] text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition cursor-pointer"
            >
              File a Case
            </button>
          </Motion.div>
        </Motion.form>

        {/* Contact info */}
        <Motion.div
          className="mt-12 space-y-4 text-gray-300 text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="mailto:Ciphervibeshadow@gmail.com"
            className="flex items-center gap-3 cursor-pointer hover:text-green-400 transition"
          >
            <FaEnvelope className="text-green-400" />
            <span className="text-white">Ciphervibeshadow@gmail.com</span>
          </a>

          <a
            href="tel:+13105549805"
            className="flex items-center gap-3 cursor-pointer hover:text-green-400 transition"
          >
            <FaPhoneAlt className="text-green-400" />
            <span className="text-white">+1 310-554-9805</span>
          </a>
        </Motion.div>

        {/* Social icons */}
        <Motion.div
          className="mt-10 flex justify-center gap-8 text-green-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a href="mailto:Ciphervibeshadow@gmail.com" className="hover:text-white transition">
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://wa.me/13105549805"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaWhatsapp size={24} />
          </a>
          <a href="tel:+13105549805" className="hover:text-white transition">
            <FaPhoneAlt size={24} />
          </a>
          <a
            href="https://t.me/Cipervibeshadow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTelegramPlane size={24} />
          </a>
        </Motion.div>
      </Motion.div>
    </div>
  );
};

export default ContactPage;
