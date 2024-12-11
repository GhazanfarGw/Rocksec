import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Phishing Simulation
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Phishing Simulation
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Phishing is the act of sending malicious emails to a target. Usually, attackers accomplish this under the guise of a credible individual or organization. The attacker may go to great lengths to establish some degree of credibility and then prompt the target to surrender personal information such as passwords or PIN numbers. Despite being an older technique, phishing attacks continue to be very effective and remain a consistent threat digital security. A phishing assessment attempts to gain sensitive information or access from a target user through coercive emails. This method of engagement is particularly effective, as attackers can often leverage public information to craft compelling emails while impersonating someone trustworthy—perhaps even individuals within the target organization. The primary concern with a well-organized phishing campaign is that attackers often use this as a stepping-stone for larger attacks. Similarly, RedSecLabs expertly tailors each phishing assessment to your organization’s personnel and explores the full potential of a successful compromise with unparalleled depth, ending with a detailed social engineering report.     
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Helps organization assess awareness level of employees against phishing attacks. Educate workforce on spear phishing threats to prevent likelihood of such attacks.          
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;