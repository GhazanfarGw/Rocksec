import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Penetration Testing
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Penetration Testing
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        A penetration test, colloquially known as a pen test, pentest or ethical hacking, is an authorized simulated cyberattack on a computer system, performed to evaluate the security of the system. Penetration testing goes one step further and attempts to exploit security vulnerabilities found to understand full magnitude of impact and likelihood.          
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Provides an accurate view of risks, based on security testing. Enable identification and prioritization of remediation actions.          
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;