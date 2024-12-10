import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className='duration-500 max-w-screen-2xl justify-center mx-auto'>
                <div className='md:h-32 mt-16 md:mt-0 shadow-2xl'>
                    <img className='duration-500 w-full object-cover md:h-[40rem] px-3 md:px-0 rounded-xl' src='./Fly1.jpg' alt='images'/>
                </div>
                <div className='md:px-16 mx-auto justify-center overflow-hidden px-5 md:text-center md:pt-0 pt-10'>
                    <div className='md:py-16'>
                        <div className='md:text-center mx-auto max-w-screen-md'>
                            <h1 className='second xl:text-7xl lg:text-5xl text-3xl md:text-5xl items-center duration-300 text-[#136690] md:text-white'>
                                Transportation & Logistics
                            </h1>
                            <p className='third md:pt-5 pt-3 text-[#C3CDD3] md:text-white max-w-screen-md md:text-lg tracking-wider'>
                                The transportation industry which, far from falling behind the times, is increasingly proactive about integrating technology into their processes. The integration of technology into the transportation business greatly facilitates the tasks of companies in this sector - but it also brings inherent cyber security risks with it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;