import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Cloud Security Testing
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Cloud Security Testing
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Traditional security infrastructure and AWS clouds differ in various ways. From setup and configuration to identity and user permissions, the technology stacks could not be more distinct. The AWS architecture is comprised of a set of powerful APIs. Deeply integrated into the AWS ecosystem, our security engineers test for a range of AWS-specific misconfigurations.          
                    </p>
                    <br/>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Assessment of Security gaps and misconfiguration in AWS, Azure and GCP environments to ensure the confidentiality and integrity of the client and its data.          
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Provides an accurate view of the security posture of the client’s Cloud based environments, plus a roadmap to deploy necessary remediation.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;