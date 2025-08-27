import React from "react";
import { motion as Motion } from "framer-motion";
import { Palette, User, Cpu } from "lucide-react";

const SecSection = () => {
  return (
    <section
      className="py-20 px-8 flex justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1721378466905-0375f1e7b879?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div
        className="max-w-5xl w-full"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {/* Text Content */}
        <Motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left text-white mb-12"
        >
          <Motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center border border-gray-400 rounded-lg px-3 py-2 shadow-md w-fit mb-4"
          >
            <img src="/logo2.svg" alt="Logo" className="w-6 h-6 mr-2" />
            <p className="text-lg">Welcome to CiphetVibeShadow</p>
          </Motion.div>

          <h1 className="text-4xl font-bold mb-4">Connect with us</h1>
          <p className="text-base">
            We are accredited by the Global Fraud Counsel and proudly affiliated with the International Chamber of Commerce (ICC) FraudNet, working alongside native-speaking lawyers in nearly every major country worldwide.
          </p>
        </Motion.div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6">
          {/* Card 1 */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.25)" }}
            className="bg-white text-black rounded-lg shadow-lg p-6 w-72"
          >
            <Palette className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="font-bold text-xl mb-2">Tailored Design</h3>
            <p>
              Your brand is unique — and your website should be too. We craft distinctive designs that reflect what makes you stand out.
            </p>
          </Motion.div>

          {/* Card 2 */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.25)" }}
            className="bg-white text-black rounded-lg shadow-lg p-6 w-72"
          >
            <User className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="font-bold text-xl mb-2">User-Centric Approach</h3>
            <p>
              Every website we build is designed with your users in mind, combining intuitive layouts with seamless navigation for an effortless experience.
            </p>
          </Motion.div>

          {/* Card 3 */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.25)" }}
            className="bg-white text-black rounded-lg shadow-lg p-6 w-72"
          >
            <Cpu className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="font-bold text-xl mb-2">Trending Technologies</h3>
            <p>
              We stay ahead of the curve in web design trends and emerging technologies, delivering innovative solutions that keep your brand future-ready.
            </p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecSection;
