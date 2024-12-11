import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Incident Response
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Incident Response Preparedness Evaluation
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Assess preparedness of an organization against relevant incident scenarios. Breach Coaching – Provide expert guidance and advice in coordinating and responding to breach.          
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Incident Response Table-Top Exercises
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Taking participants through simulated incident scenarios and providing hands of training to highlight flaws in incident response plans.          
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Incident Response & Forensic Analysis
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Provide executive coordination, command and control during incidents. Threat Hunting to determine if an attacker has pivoted to adjacent IT resources and/or left behind malicious elements. Post breach recommendations reporting to reduce the likelihood of repeat events.         
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        A communication plan is developed to ensure rapid and appropriate responses. Helps organization provide both strategic and technical response to cyber attacks. Helps validate an organizations Incident response plan. Reduction of time lag between compromise and discovery. Identifies scope of attack and affected data and systems. Identifies vectors and attack paths involved and provides recommendation to address those vulnerabilities. Helps ensure that no latent malicious elements have been left behind by an attacker that could re-initiate another attack. Facilitates accurate recovery and helps prevent future attacks.          
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;