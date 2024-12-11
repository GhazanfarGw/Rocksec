import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Security Gap Assessment
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Gap Assessment against Security Standard or Framework
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Information security gap analysis, also called IT security gap analysis, refers to an in-depth review that helps organizations determine the difference between the current state of their information security to specific industry requirements.                   
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Gap Assessment against a defined security standard or framework (e.g. ISO-27001, CIS Critical Controls, HIPPA PCI, CORBIT, IIA, ISACA, GDPR, TRA, NCEMA, COBIT, etc.)         
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Identifies areas of non-compliance and potential risk exposure. Provides remedial recommendations.                    
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;