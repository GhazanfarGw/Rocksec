import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Red Teaming
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Red Team Assessment
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        A Red Team Assessment is similar to a penetration test in many ways but is more targeted. The goal of the Red Team Assessment is NOT to find as many vulnerabilities as possible. The goal is to test the organization’s detection and response capabilities. The red team will try to get in and access sensitive information in any way possible, as quietly as possible. The Red Team Assessment emulates a malicious actor targeting attacks and looking to avoid detection, similar to an Advanced Persistent Threat (APT).          
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        It uses adversary simulation i.e. using all possible means a malicious actor would utilize in a legitimate attack. Inclusion of customized scenarios unique to the sector in which the business is being operated. These scenarios could include scenarios such as using spear phishing to gain foothold within the network, malicious insider or compromised BYOD device.
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Provides an accurate view of risks, attack process that could be used to compromise critical business assets such as Domain Controllers, Intellectual property or credit card data. Effectiveness of your security monitoring capabilities as well as well as any gaps in incident response policy and procedures.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;