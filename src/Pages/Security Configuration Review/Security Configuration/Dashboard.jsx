import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Security Configuration Review
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Examine configurations of network components
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        A Secure Configuration review is a detailed review and verification of configuration settings of IT infrastructure components including systems, network devices & applications to measure the security effectiveness of the IT environment.                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Examines configurations of network components such as Firewall, routers, switches etc for security vulnerabilities.                    
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Provides the client with security vulnerabilities and misconfiguration of network components.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;