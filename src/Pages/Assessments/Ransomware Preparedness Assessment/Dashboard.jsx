import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Ransomware Preparedness Assessment
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Ransomware Preparedness Assessment in the light of NIST’s Cybersecurity Framework
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        An assessment to assess gaps in the light of NIST’s Cybersecurity Framework Profile for Ransomware Risk Management would be presented.                   
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        BlackStone’s ransomware preparedness assessment aims to identify where your defenses are strong and where vulnerabilities exist that ransomware actors can exploit. Our methodology focuses on the cyber kill chain, a comprehensive examination that includes remote access configuration, phishing prevention, email and web protections, access controls and endpoint monitoring and end user awareness. At the end of our assessment, we will provide you with a prioritized, customized set of recommendations to help your organization deflect, detect or respond to a ransomware attack.
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Increased confidence in client’s resistance to ransomware attacks. Reduced risk. Faster recovery of an attempted attack
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;