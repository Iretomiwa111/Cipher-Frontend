import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import LightRays from "../../../../../Components/LightRays";

const AboutSection = () => {
  return (
    <section
      className="relative py-20 px-8 overflow-hidden"
      style={{ backgroundColor: "rgb(6,31,32)" }}
    >
      {/* Background Light Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays
          className="w-full h-full opacity-70"
          color="rgb(0,57,55)"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side - Image */}
        <Motion.div
          className="flex-1 relative flex justify-center items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/hero.png"
            alt="About Section"
            className="w-2/3 h-auto rounded-lg shadow-2xl z-10 translate-x-6"
          />
        </Motion.div>

        {/* Right Side - Text + Social Icons */}
        <Motion.div
          className="flex-1 text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center border border-gray-400 rounded-lg px-3 py-2 shadow-sm w-fit mb-6">
            <img
              src="/logo2.svg"
              alt="Logo"
              className="w-6 h-6 mr-2"
            />
            <p className="text-lg">About Me</p>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Present Everywhere, Hidden Anywhere
          </h1>
          <p className="text-base mb-6">
            Cipher Vibe Shadow is accredited by the Global Fraud Counsel and affiliated with the International Chamber of Commerce (ICC) FraudNet, supported by native-speaking legal experts in nearly every major country worldwide.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <Motion.a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebook size={24} />
            </Motion.a>
            <Motion.a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter size={24} />
            </Motion.a>
            <Motion.a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-600"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin size={24} />
            </Motion.a>
            <Motion.a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram size={24} />
            </Motion.a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
