import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                    Cyber Security Posture Assessment & Maturity Benchmarking
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        High Level Overall Assessment
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        High-level overall assessment based on general industry best practices to identify areas that need additional attention. Covers governance, infrastructure management, security management and general cybersecurity maturity in over key areas.
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Understand the state, maturity and critical gaps in the client’s cybersecurity program. Provide implementable recommendations to improve the client's cybersecurity program and reduce risks. This evaluation provides customer overall understanding of IT security from 20 different domains. It is based on SANS CSC 20, with local adjustments to meet market characteristics.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;