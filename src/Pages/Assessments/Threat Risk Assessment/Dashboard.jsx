import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Threat Risk Assessment
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Detailed Logical Evaluation
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        More detailed logical evaluation of a clients residual risk exposure compared to their identified risk threshold.
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        A Threat and Risk Assessment analyzes a software system for vulnerabilities, examines potential threats associated with those vulnerabilities, and evaluates the resulting security risks. A vulnerability is any “flaw or weakness in system security procedures, design, implementation, or internal controls that could be exercised and result in a security breach or a violation of the system's security policy” . The level of threat is determined from the potential for any natural, human or environmental source to trigger or exploit any identified vulnerability. The risk assessment looks at both the probability of that threat occurring, and the impact on both system and organization should it occur. An appropriate strategy can then be formulated for each risk depending on severity.                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Provide a methodical assessment of asset sensitivity vs threat, probability and residual risk exposure.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;