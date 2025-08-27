// HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo2.svg"
const overlayImage = "https://i.pinimg.com/736x/3c/0c/ef/3c0cefa541c2ce81b1dd33a32e7ed48c.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('${overlayImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay decorative image */}
      <img
        src={overlayImage}
        alt="Overlay visual"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-[70%] max-h-[70%] opacity-30 pointer-events-none"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 max-w-3xl">
        {/* Logo + Name */}
        <div className="flex items-center gap-2 justify-center">
          <img src={logo} alt="CipherVibeShadow Logo" className="h-12 w-auto" />
          <span
            className="text-white font-bold text-2xl md:text-4xl"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            CipherVibeShadow
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "'JetBrains Mono', monospace", lineHeight: '1' }}>
          Retrive. Secure. Dominate the Cyber World.
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl" style={{ fontFamily: "'JetBrains Mono', monospace", lineHeight: '1' }}>
          We provide top-level encryption, total clarity, no hidden surprises, 100% money-back assurance and 24/7 dedicated support.
        </p>

        {/* CTA Button */}
       <Link
  to="/services"
  className={`
    relative overflow-hidden border border-black px-6 py-2 rounded-md font-medium cursor-pointer transition-colors duration-300
    flex items-center justify-center
    after:content-[''] after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-black after:z-0 after:transition-all after:duration-500
    hover:after:left-0 hover:text-white
  `}
>
  <span className="relative z-10 text-white">Get Started</span>
</Link>

      </div>
    </section>
  );
}