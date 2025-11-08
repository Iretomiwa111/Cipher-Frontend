import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactIcons from "../../../../../Components/ContactIcons";

const ContactSection = () => {
  return (
    <div className="w-full flex justify-center items-center px-6 py-20 bg-[rgb(17,40,41)]">
      <div className="w-full max-w-4xl rounded-2xl p-10 text-center bg-gradient-to-r from-[rgb(10,22,24)] to-[rgb(0,41,40)] shadow-lg shadow-[rgb(0,41,40)]">

        {/* Small label */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-sm rounded-full border border-gray-600">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            HAVE PROJECT IN MIND?
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Contact us now !
        </h2>

        {/* CTA button */}
        <Link to="/contact" className="block">
          <button
            className="mb-8 px-6 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 mx-auto 
              bg-gradient-to-r from-[rgb(0,41,40)] to-[rgb(10,22,24)] shadow-lg shadow-[rgb(0,41,40)] 
              hover:scale-105 transition cursor-pointer"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <ArrowRight className="w-4 h-4" />
            File a case
          </button>
        </Link>

        {/* Email */}
        <a
          href="mailto:Ciphervibeshadow@gmail.com"
          className="text-green-400 mb-2 flex items-center justify-center gap-2 cursor-pointer hover:text-white transition"
        >
          <Mail className="w-4 h-4" />
          Ciphervibeshadow@gmail.com
        </a>

        {/* Phone */}
        <a
          href="tel:+16593040172"
          className="text-green-400 font-bold text-lg mb-6 flex items-center justify-center gap-2 cursor-pointer hover:text-white transition"
        >
          <Phone className="w-4 h-4" />
          +1 (659) 304-0172
        </a>

        {/* Reusable Social Icons */}
        <ContactIcons />
      </div>
    </div>
  );
};

export default ContactSection;
