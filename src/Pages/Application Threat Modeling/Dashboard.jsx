import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Application Threat Modelling
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Application Threat Modelling
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Modern hackers often use advanced techniques such as endpoint security evasion, bypassing intrusion detection systems (IDS) and web application firewalls (WAF) to break into companies’ networks and steal or compromise sensitive data. Also, it may not be necessary to gain full administrative / root privileges on an application server for an attacker to accomplish these goals. As a result, it’s critical to secure applications and other necessary data they use. A variety of techniques inform the secure software development lifecycle (SDLC), with one of the most important being application threat modeling (which is implemented during the design process). Application threat modeling visualizes an application's attack surface to identify threats and vulnerabilities that pose a risk to functionality or data. By decomposing the application architecture into its security-relevant components, teams can better understand the various threats and risks the application might face.          
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        It is an assessment to understand the threats to an application, its vulnerability to those threats, safeguards already undertaken and any residual gaps that pose risks. Implementable recommendations are provided.         
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        It Identifies security controls needed to mitigate threats, increases resistance to attack and lowers risk to the client. Threat model can be re-used by development teams to focus on critical aspect of other solutions.          
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;