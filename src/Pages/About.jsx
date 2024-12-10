import React from "react";

const CyberSecuritySection = () => {
  return (
    <section id="about" className="bg-[#111316] text-white py-12 md:px-10 px-5 md:pt-56 pt-32">
      <div className="max-w-7xl mx-auto md:flex md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="./cybersecurity desk.jpg" // Replace with your image URL
            alt="Cybersecurity Analyst"
            className="rounded-lg border-4 border-[#136690]"
          />
        </div>
        {/* Text Section */}
        <div className="max-w-xl pt-10 md:pt-0 text-sm md:text-base">
          <h3 className="text-[#136690] font-semibold mb-2">
            Who We Are
          </h3>
          <h2 className="md:text-5xl text-3xl font-light mb-4">
            No matter where you go. <br/> Be security smart.
          </h2>
          <p className="text-[#C3CDD3] pb-5 md:text-base text-sm">
            In today’s digital age, staying secure is more important than ever.
            Cyber threats are evolving rapidly, targeting individuals and
            businesses alike. Our mission is to provide you with robust,
            cutting-edge cybersecurity solutions that protect your data,
            safeguard your assets, and give you peace of mind. By combining
            expertise, advanced technologies, and proactive monitoring, we
            ensure that you are always one step ahead of potential threats.
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-[#C3CDD3]">
            {[
              "Cybersecurity Solutions",
              "Cutting-Edge Technology",
              "Expert Team",
              "Customized Security Plans",
              "Proactive Threat Monitoring",
              "Proven Track Record",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-[#111316] md:p-4 p-2 border border-[#136690]"
              >
                <span className="text-[#136690] text-lg mr-2">✔</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          {/* Footer Section */}
          <div className="flex grid-cols-2 items-center gap-5 md:text-base text-xs">
            <button className="bg-[#136690] text-[#C3CDD3] md:px-6 px-3 py-3 md:py-3 hover:[#136690]">
              <a href="./contact">Vulnerability Assessment
              </a>
            </button>
            <div className="text-lg">
              <span className="font-light md:text-base text-sm">Call us:</span>{" "}
              <a
                href="tel:(+46) 73 894 68 97"
                className="text-[#136690] underline hover:text-[#136690] md:text-base text-sm"
              >
                +31 63 525 0709
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;
