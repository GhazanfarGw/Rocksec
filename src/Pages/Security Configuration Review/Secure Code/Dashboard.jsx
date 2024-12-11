import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Secure Code Review
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Examine software code to identify any security flaws
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        A secure code review is a specialized task involving manual and/or automated review of an application's source code in an attempt to identify security-related weaknesses (flaws) in the code. A secure code review does not attempt to identify every issue in the code, but instead looks to provide insight into what types of problems exist and to help the developers of the application understand what classes of issues are present. The goal is to arm the developers with information to help them make the application's source code more sound and secure.                    
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Examines software code to identify any security flaws that could be exploited by attackers. A hybrid approach is used to achieve results                    
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Increase software quality and lower risk associated to a software release. If executer early in the development lifecycle, will lower the cost of security testing executed just prior to release
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;