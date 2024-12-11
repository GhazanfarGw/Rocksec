import React from 'react';

const Mission = () => {
    return (
        <div className='bg-[#111316] lg:py-32 md:py-20 md:pt-20 lg:pt-20  pt-16 text-white justify-center mx-auto md:text-center md:px-10 px-5'>
            <div className='mx-auto md:justify-center max-w-screen-xl border-b pb-10 md:pb-20 border-[#136690] border-opacity-30'>
                <div className='max-w-screen-md justify-center mx-auto'>
                    <h1 className='text-sm md:text-base font-light text-[#136690]'>
                        What we offer
                    </h1>
                    <h1 className='text-white lg:text-5xl text-3xl justify-center md:pt-5 pt-3 font-light'>
                        Comprehensive <br/> Cybersecurity Solutions
                    </h1>
                    <p className='text-[#C3CDD3] py-5 md:text-base text-sm'>
                        At RockSec Groups, our mission is to provide advanced and reliable cybersecurity services tailored to businesses across industries. We understand that in today’s digital world, the threat landscape is constantly evolving, with challenges like ransomware, data breaches, phishing, and DDoS attacks posing significant risks to businesses of all sizes.
                    </p>
                    <p className='text-[#C3CDD3] md:text-base text-sm'>
                        This project focuses on delivering end-to-end protection for our clients' digital assets by offering cutting-edge tools and services, including:
                    </p>
                </div>
                <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 mx-auto justify-center lg:gap-5 md:gap-5 md:pt-10 pt-3 md:max-w-5xl'>
                    <div className='lg:py-10 md:py-10 py-3 px-3 md:px-6 bg-[#1A1E24] lg:p-4 md:p-4 border border-[#136690] md:mt-5 lg:mt-0 mt-5'>
                        <img className='md:w-16 w-10 md:justify-center md:mx-auto' src='./icons8-last-24-hours-100.png' alt='logo'/>
                        <h1 className='text-sm md:text-lg font-light justify-center py-2'>
                            Real-Time Threat Monitoring:
                        </h1>
                        <p className='md:text-sm text-xs text-[#C3CDD3]'>
                            We employ state-of-the-art monitoring systems to detect and mitigate threats 24/7. Our proactive approach ensures vulnerabilities are addressed before they can cause harm.
                        </p>
                    </div>
                    <div className='lg:py-10 md:py-10 py-3 px-3 md:px-6 bg-[#1A1E24] lg:p-4 md:p-4 border border-[#136690] md:mt-5 lg:mt-0 mt-5'>
                        <img className='md:w-16 w-10 md:justify-center md:mx-auto' src='./icons8-analyze-100.png' alt='logo'/>
                        <h1 className='text-sm md:text-lg font-light justify-center py-2'>
                            Smart Contract Security:
                        </h1>
                        <p className='md:text-sm text-xs text-[#C3CDD3]'>
                            With the growing adoption of blockchain technology, we specialize in auditing smart contracts to ensure they are tamper-proof and free from vulnerabilities, safeguarding your blockchain projects.
                        </p>
                    </div>
                    <div className='lg:py-10 md:py-10 py-3 px-3 md:px-6 bg-[#1A1E24] lg:p-4 md:p-4 border border-[#136690] md:mt-5 lg:mt-0 mt-5'>
                        <img className='md:w-16 w-10 md:justify-center md:mx-auto' src='./icons8-jsfiddle-100.png' alt='logo'/>
                        <h1 className='text-sm md:text-lg font-light justify-center py-2'>
                            Penetration Testing:
                        </h1>
                        <p className='md:text-sm text-xs text-[#C3CDD3]'>
                            Simulating real-world attack scenarios allows us to identify weak points in your infrastructure and provide actionable insights to strengthen your defenses.
                        </p>
                    </div>
                    <div className='lg:py-10 md:py-10 py-3 px-3 md:px-6 bg-[#1A1E24] lg:p-4 md:p-4 border border-[#136690] md:mt-5 lg:mt-0 mt-5'>
                        <img className='md:w-16 w-10 md:justify-center md:mx-auto' src='./icons8-recovery-100.png' alt='logo'/>
                        <h1 className='text-sm md:text-lg font-light justify-center py-2'>
                            Treatment & Recovery Services:
                        </h1>
                        <p className='md:text-sm text-xs text-[#C3CDD3]'>
                            In the event of a cyberattack or breach, our team provides immediate response services to eliminate threats, recover lost data, and restore normal operations with minimal disruption.
                        </p>
                    </div>
                    <div className='lg:py-10 md:py-10 py-3 px-3 md:px-6 bg-[#1A1E24] lg:p-4 md:p-4 border border-[#136690] md:mt-5 lg:mt-0 mt-5'>
                        <img className='md:w-16 w-10 md:justify-center md:mx-auto' src='./icons8-security-code-100.png' alt='logo'/>
                        <h1 className='text-sm md:text-lg font-light justify-center py-2'>
                            Comprehensive Vulnerability Management:
                        </h1>
                        <p className='md:text-sm text-xs text-[#C3CDD3]'>
                            By adhering to industry standards like NIST, we ensure that every aspect of your system is secured through continuous assessments and timely patch management.
                        </p>
                    </div>
                    <div className='lg:py-10 md:py-10 py-3 px-3 md:px-6 bg-[#1A1E24] lg:p-4 md:p-4 border border-[#136690] md:mt-5 lg:mt-0 mt-5'>
                        <img className='md:w-16 w-10 md:justify-center md:mx-auto' src='./icons8-reverse-engineering-100.png' alt='logo'/>
                        <h1 className='text-sm md:text-lg font-light justify-center py-2'>
                            Reverse Engineering:
                        </h1>
                        <p className='md:text-sm text-xs text-[#C3CDD3]'>
                            We perform in-depth analyses of applications and systems to uncover hidden threats, malware, or errors that could lead to potential breaches.
                        </p>
                    </div>
                </div>
                <div className='max-w-xl justify-center mx-auto'>
                    <p className='pt-10 text-xs text-[#C3CDD3]'>
                        Our solutions are designed for a wide array of industries, including finance, healthcare, IT outsourcing, manufacturing, e-commerce, and more. Clients trust us to protect their most valuable assets—ensuring data integrity, privacy, and compliance with global cybersecurity standards.
                    </p>
                    <p className='pt-5 text-xs text-[#C3CDD3]'>
                        By partnering with RockSec Groups, businesses gain more than just a service provider; they gain a dedicated team of experts committed to their long-term success and security. Let us help you secure your future with confidence!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Mission;
