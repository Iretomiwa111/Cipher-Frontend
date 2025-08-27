import React from "react";

export default function StatsSection() {
  return (
    <section className="bg-[rgb(0,21,19)] py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {/* Years of Experience */}
        <div>
          <h2 className="text-6xl font-bold text-gray-400">08+</h2>
          <div className="border-b border-white w-4/5 mx-auto my-4"></div>
          <h3 className="text-xl font-semibold text-gray-400">Years of Expertise</h3>
          <p className="text-gray-400 mt-2">Delivering outstanding results</p>
        </div>

        {/* Asset Recovered */}
        <div>
          <h2 className="text-6xl font-bold text-gray-400">500+</h2>
          <div className="border-b border-white w-4/5 mx-auto my-4"></div>
          <h3 className="text-xl font-semibold text-gray-400">Asset Recovered</h3>
          <p className="text-gray-400 mt-2">With full access successfully restored</p>
        </div>

        {/* Client Satisfaction */}
        <div>
          <h2 className="text-6xl font-bold text-gray-400">98%</h2>
          <div className="border-b border-white w-3/4 mx-auto my-4"></div>
          <h3 className="text-xl font-semibold text-gray-400">Client Satisfaction</h3>
          <p className="text-gray-400 mt-2">
            Building long-term partnerships through trust and proven success
          </p>
        </div>

      </div>
    </section>
  );
}
