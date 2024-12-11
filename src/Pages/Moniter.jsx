import React from "react";
import CountUp from "react-countup";

const SecurityStatsSection = () => {
  return (
    <section className="monitoring text-white md:py-32 py-8">
      <div className="md:max-w-5xl md:mx-auto md:text-center px-5 md:px-10">
        {/* Header Section */}
        <h2 className="md:text-5xl text-3xl font-light py-5">
          Security monitoring and <br/> malware protection for <br/> businesses.
        </h2>
        <p className="text-[#C3CDD3] pb-5 md:text-base text-sm">
          At RockSec Group, we specialize in providing advanced security monitoring and malware protection tailored to meet the needs of modern businesses. Our cutting-edge solutions leverage real-time analytics and innovative technologies to detect and neutralize threats before they can impact your operations. With a commitment to safeguarding your digital assets, we ensure your business remains resilient against cyberattacks. Partner with RockSec Group to experience world-class protection and peace of mind, empowering you to focus on growth and innovation in today’s complex digital environment.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-5 py-8">
          {[
            { endValue: 27, label: "Project Done" },
            { endValue: 754, label: "Happy Clients" },
            { endValue: 5, label: "Company Support" },
            { endValue: 4.7, label: "Client Reviews", decimals: 1 },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-[#136690] md:text-4xl text-3xl font-light mb-2">
                <CountUp
                  start={0}
                  end={stat.endValue}
                  duration={2} // Animation duration in seconds
                  decimals={stat.decimals || 0} // Number of decimal places
                  separator="," // Adds commas to large numbers
                
                />+
              </p>
              <p className="text-[#C3CDD3] md:text-base text-sm">{stat.label}</p>
              {index < 3 && (
                <hr className="border-t border-[#136690] w-3/4 mx-auto mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityStatsSection;