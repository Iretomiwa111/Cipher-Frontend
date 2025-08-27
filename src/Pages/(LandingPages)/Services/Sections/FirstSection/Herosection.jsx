import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";


import { FiMail, FiSmartphone, FiShield, FiTrendingUp, FiMapPin, FiDatabase } from "react-icons/fi";

const ServiceSectionPage = () => {
  const cards = [
  {
  title: "Email Access Recovery",
  text: "Retrieve and review all emails — including sent, received, and even deleted messages.",
  icon: <FiMail className="text-4xl text-blue-400 mb-4" />,
},
{
  title: "Mobile Monitoring",
  text: "Locate lost or stolen phones and enable parents to responsibly monitor their child’s device activity.",
  icon: <FiSmartphone className="text-4xl text-purple-400 mb-4" />,
},
{
  title: "Device Security",
  text: "Comprehensive protection with encryption, backup, recovery, and synchronization for all your devices.",
  icon: <FiShield className="text-4xl text-green-400 mb-4" />,
},
{
  title: "Digital Asset Recovery",
  text: "Proven expertise in restoring access to over 300 cryptocurrency wallets for our clients.",
  icon: <FiTrendingUp className="text-4xl text-yellow-400 mb-4" />,
},
{
  title: "Global Location Tracking",
  text: "Pinpoint real-time locations worldwide with accurate GPS tracking technology.",
  icon: <FiMapPin className="text-4xl text-red-400 mb-4" />,
},
{
  title: "File & Data Restoration",
  text: "Recover lost files with a guaranteed success rate, even after deletion or device failure.",
  icon: <FiDatabase className="text-4xl text-indigo-400 mb-4" />,
},

  ];

  return (
    <section
      className="py-20 px-8"
      style={{
        background: "linear-gradient(to bottom, rgb(10,22,24), rgb(0,41,40))",
      }}
    >
      <div className="max-w-6xl mx-auto text-white mt-20">
        {/* Heading */}
        <div className="text-left mb-12" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <h1 className="text-4xl font-bold mb-4">Hacking & Recovery Services</h1>
          <p className="text-base opacity-90">
            We are certified by the Global fraud counsel and a member of the International Chamber of Commerce (ICC) FraudNet, with local, native-speaking lawyers in practically every major country across the world.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  bg-white/90 text-black rounded-3xl shadow-xl p-6 h-80
                  flex flex-col justify-between relative
                  transition-transform duration-300 transform hover:-translate-y-2 hover:rotate-1
                  border border-transparent hover:border-teal-400/60
                  hover:shadow-[0_8px_30px_rgb(0,41,40,0.5)]
                  animate-fadeIn
                "  style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <div>
                  {card.icon}
                  <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(0,255,200,0.7)]">
                    {card.title}
                  </h3>
                  <p className="text-gray-700">{card.text}</p>
                </div>

                {/* Button bottom-right */}
                <div className="flex justify-end">
                 <Link
    to="/contact"
    className="
      mt-4 bg-gradient-to-r from-[rgb(10,22,24)] to-[rgb(0,41,40)]
      text-white px-4 py-1.5 rounded-lg text-sm font-medium
      shadow-lg shadow-[rgb(0,41,40,0.7)]
      transition-transform transform hover:scale-110
      hover:shadow-[0_0_20px_rgb(0,255,200,0.6)]
    "
  >
    File a case
  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center mt-8"></div>
      </div>
    </section>
  );
};

export default ServiceSectionPage;
