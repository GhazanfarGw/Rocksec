// import React from "react";

// const CyberSecuritySection = () => {
//   return (
//     <section className=" text-white py-20 px-5">
//       <div className="max-w-7xl mx-auto flex grid-cols-2 gap-10">
//         {/* Text Section */}
//         <div className="max-w-2xl">
//           <h3 className="text-[#136690] font-semibold mb-2">
//             Our Services
//           </h3>
//           <h2 className="text-3xl font-bold mb-4">
//             Damage statistics from cyberattacks.
//           </h2>
//           {/* Feature List */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-[#C3CDD3] text-sm">
//             {[
//               "The most known cyber attack in 2017 disabled 10% of USA computers",
//               "In our country, cyberattacks occur every 14 seconds",
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690]"
//               >
//                 <span className="text-[#136690] text-lg mr-2">✔</span>
//                 <span>{feature}</span>
//               </div>
//             ))}
//           </div>
//           <h2 className="text-3xl font-bold mb-4">
//             Your website needs protection
//           </h2>
//           <p className="text-[#C3CDD3]">no less, than a physical store or warehouse</p>
//           <p className="text-[#C3CDD3]">To protect your website is like to set an alarm and to lock a physical store or to hire a security guard to protect your business from intruders</p>
//           {/* Footer Section */}
//         </div>
//         {/* Image Section */}
//         <div className="">
//           <img
//             src="./giphy-2.gif" // Replace with your image URL
//             alt="Cybersecurity Analyst"
//             className="rounded-lg border-4 border-[#136690]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CyberSecuritySection;


import React from 'react'

function Ourservices() {
  return (
    <>
    <div className='pb-20'>
      <div className='max-w-screen-xl mx-auto justify-center md:px-10 px-5'>
        <h1 className='text-sm md:text-base font-light text-[#136690]'>
          Our Services
        </h1>
        <div className=''>
          <div className='py-5'>
            <h1 className='text-white text-xl'>
              Assessments
            </h1>
            <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-x-2'>
              <a href="./posture-assessment-maturity">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Posture & Maturity Benchmarking
                </p>
              </a>
              <a href="./threat-risk-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Threat Risk Assessment
                </p>
              </a>
              <a href="./gap-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Security Gap Assessment
                </p>
              </a>
              <a href="./valnerabiliy-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Vulnerability Assessment
                </p>
              </a>
              <a href="./privacy-risk-impacty">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Privacy Risk/Impact Assessment
                </p>
              </a>
              <a href="./architecture-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Cybersecurity Architecture Assessment
                </p>
              </a>
              <a href="./ransomware-preparedness-assessment">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Ransomware Preparedness
                </p>
              </a>
            </div>
          </div>

          <div className='py-5'>
            <h1 className='text-white text-xl'>
              Security Reviews
            </h1>
            <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-x-2'>
              <a href="./security-configuration-review">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Security Configuration Review
                </p>
              </a>
              <a href="./secure-code-review">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Secure Code Review
                </p>
              </a>
            </div>
          </div>

          <div className='py-5'>
            <h1 className='text-white text-xl'>
              More Services
            </h1>
            <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-x-2'>
              <a href="./penetration-testing">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Penetration Testing
                </p>
              </a>
              <a href="./red-teaming">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Red Teaming
                </p>
              </a>
              <a href="./cloud-security-testing">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Cloud Security Testing
                </p>
              </a>
              <a href="./incident-response">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Incident Response Management
                </p>
              </a>
              <a href="./phishing-simulation">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Phishing Simulation
                </p>
              </a>
              <a href="./application-threat-modelling">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Application Threat Modeling
                </p>
              </a>
              <a href="./technical-tra">
                <p className='items-center bg-[#1A1E24] md:p-4 p-2 border border-[#136690] text-[#C3CDD3] mt-3 hover:scale-105 duration-200 md:text-base text-sm'>
                  <span className="text-[#136690] text-lg mr-2">✔</span>
                  Technical Threat and Risk
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ourservices