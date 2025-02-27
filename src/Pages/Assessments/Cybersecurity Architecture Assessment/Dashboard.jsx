import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Cybersecurity Architecture Assessment
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Comprehensive Security Assessment
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Comprehensive security assessment of system architecture and configuration for all aspects of operating systems and platform security. A Security Architecture Assessment can help you start with a secure architecture and provide guidance on how to implement that architecture in a secure manner.
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        An assessment to determine the extent whether sound security-by-design principles have been applied, identifies gaps, provides recommendations.                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Increased defence in depth architectural improvements identified and recommendations provided. Minimizes attack surfaces and risk exposure. Maximizes environment resilience.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;