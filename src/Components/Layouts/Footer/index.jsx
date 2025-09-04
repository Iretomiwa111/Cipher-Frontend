import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[rgb(10,22,24)] text-gray-300 py-10 px-6 " style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">CipherVibeShadow</h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            “Empowering brands through digital innovation — we design and build experiences that drive growth and lasting impact for your business.”
          </p>
        </div>

        {/* Quick Links */}
       <div>
  <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
  <ul className="space-y-2 text-sm">
    <li>
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-green-400"
      >
        Home
      </Link>
    </li>
    <li>
      <Link 
        to="/services" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-green-400"
      >
        Services
      </Link>
    </li>
    <li>
      <Link 
        to="/contact" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-green-400"
      >
        Contact
      </Link>
    </li>
  </ul>
</div>

       {/* Contact & Social */}
<div>
  <h2 className="text-lg font-semibold text-white mb-4">Get in Touch</h2>
  
  <div className="flex flex-col items-start space-y-3">
    {/* Email */}
    <a
      href="mailto:Ciphervibeshadow@gmail.com"
      className="text-green-400 flex items-center gap-2 cursor-pointer hover:text-white transition"
    >
      <Mail className="w-4 h-4" />
      <span>Ciphervibeshadow@gmail.com</span>
    </a>

    {/* Phone */}
    <a
      href="tel:+18352241629"
      className="text-green-400 font-bold text-lg flex items-center gap-2 cursor-pointer hover:text-white transition"
    >
      <Phone className="w-4 h-4" />
      <span>+1(835) 224-1629</span>
    </a>
  </div>

  {/* Social Icons */}
  <div className="flex gap-4 mt-6">
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-gray-700 hover:bg-green-500 transition"
    >
      <Instagram className="w-5 h-5 text-white" />
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-gray-700 hover:bg-green-500 transition"
    >
      <Linkedin className="w-5 h-5 text-white" />
    </a>
    <a
      href="mailto:Ciphervibeshadow@gmail.com"
      className="p-2 rounded-full bg-gray-700 hover:bg-green-500 transition"
    >
      <Mail className="w-5 h-5 text-white" />
    </a>
  </div>
</div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CipherVibe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
