import React from "react";
import SpotlightCard from "../../../../../Components/SpotlightCard"; 
const SixthSection = () => {
    return (
        <div
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 pt-32 pb-10 px-4 sm:px-6 bg-[rgb(17,40,41)]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
            {/* Card 1 - Intro */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[rgb(10,22,24)] to-[rgb(0,41,40)] w-full sm:w-[90%] md:w-[350px]">
                <SpotlightCard className="w-full h-[500px] p-6 rounded-2xl bg-transparent text-white">
                    <div className="flex flex-col justify-between h-full">
                        <h2 className="text-xl sm:text-2xl font-bold">
                            Cipher Vibe Shadow <br /> Success Stories
                        </h2>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            I’m proud to have partnered with a wide range of clients — from rising startups to established enterprises — delivering results that truly make an impact.
                        </p>
                    </div>
                </SpotlightCard>
            </div>

            {/* Card 2 - Testimonial */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[rgb(10,22,24)] to-[rgb(0,41,40)] w-full sm:w-[90%] md:w-[350px]">
                <SpotlightCard className="w-full h-[500px] p-6 rounded-2xl bg-transparent text-white flex flex-col justify-between">
                    <div>
                        <div className="flex gap-1 mb-4">
                            {Array(5).fill(0).map((_, i) => (
                                <span key={i} className="text-green-400 text-lg">★</span>
                            ))}
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed">
                            "My company’s website was attacked, leading to a breach of sensitive documents. The team not only recovered our lost files but also secured the vulnerability the hackers exploited."
                        </p>
                    </div>
                    <div>
                        <hr className="border-gray-700 mb-4" />
                        <div className="flex items-center gap-3">
                            <img
                                src="https://i.pinimg.com/1200x/a0/c3/8d/a0c38d70e3422ff7b02889a41dc75e51.jpg"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-medium">Anonymous</p>
                                <p className="text-xs text-gray-400">(Canada)</p>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
            </div>

            {/* Card 3 - Testimonial */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[rgb(10,22,24)] to-[rgb(0,41,40)] w-full sm:w-[90%] md:w-[350px]">
                <SpotlightCard className="w-full h-[500px] p-6 rounded-2xl bg-transparent text-white flex flex-col justify-between">
                    <div>
                        <div className="flex gap-1 mb-4">
                            {Array(5).fill(0).map((_, i) => (
                                <span key={i} className="text-green-500 text-lg">★</span>
                            ))}
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed">
                            “I lost my crypto wallet to an online scammer containing a significant amount of coins. This team successfully recovered it within just two days. I’m truly grateful that reliable recovery experts like this exist.”
                        </p>
                    </div>
                    <div>
                        <hr className="border-gray-300 mb-4" />
                        <div className="flex items-center gap-3">
                            <img
                                src="https://i.pinimg.com/736x/7b/ad/76/7bad76a6d4de25ed22f7b6dd0415a366.jpg"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-medium">Anonymous</p>
                                <p className="text-xs text-gray-500">(Sweden)</p>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
            </div>
        </div>
    );
};

export default SixthSection;
