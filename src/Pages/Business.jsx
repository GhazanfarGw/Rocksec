import React from 'react';


const Business = () => {
    return (
        <div id='business' className='md:px-10 px-2 max-w-screen-2xl justify-center mx-auto items-center'>
            <div className='text-white mx-auto md:py-28 pt-10 justify-center items-center'>
                <div className='md:grid md:grid-cols-2 justify-center py-5 gap-16 items-center'>
                    <div className='block md:hidden lg:hidden opacity-50 rounded-md shadow-lg mx-auto justify-end md:py-0 py-10'>
                        <img src='./young-hacker-making-a-dangerous-virus-for-cyber-attacks-e1615279114966 (1).jpg' alt='Images'/>
                    </div>
                    <div className='px-4'>
                        <h1 className='text-base font-semibold text-[#0ec9ac]'>
                            Our Business is about your Security
                        </h1>
                        <h1 className='text-white md:text-4xl text-3xl justify-center pt-5 font-semibold'>
                            Delivering Cyber Solutions For Board Level Priorities
                        </h1>
                        <div className='grid grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3]'>
                            <div className='bg-[#1a1e24] hover:bg-[#0D0D0D] py-5 md:px-5 px-3 mt-10'>
                                <img className='md:w-14 w-12' src='./data-security.png' alt='logo'/>
                                <h1 className='md:text-base text-xs md:font-semibold lg:pt-5 pt-3'>
                                    Securing Data & <br/> Intellectual Property
                                </h1>
                            </div>
                            <div className='bg-[#1a1e24] hover:bg-[#0D0D0D] py-5 md:px-5 px-3 mt-10'>
                                <img className='md:w-14 w-12' src='./database.png' alt='logo'/>
                                <h1 className='md:text-base text-xs md:font-semibold lg:pt-5 pt-3'>
                                    Enabling and Securing The Agile Workforce
                                </h1>
                            </div>
                            <div className='bg-[#1a1e24] hover:bg-[#0D0D0D] py-5 md:px-5 px-3'>
                                <img className='md:w-14 w-12' src='./online-support.png' alt='logo'/>
                                <h1 className='md:text-base text-xs md:font-semibold lg:pt-5 pt-3'>
                                    Supporting M&A Activity
                                </h1>
                            </div>
                            <div className='bg-[#1a1e24] hover:bg-[#0D0D0D] py-5 md:px-5 px-3'>
                                <img className='md:w-14 w-12' src='./digital-transformation.png' alt='logo'/>
                                <h1 className='md:text-base text-xs md:font-semibold lg:pt-5 pt-3'>
                                    Enabling Digital Transformation
                                </h1>
                            </div>
                            <div className='bg-[#1a1e24] hover:bg-[#0D0D0D] py-5 md:px-5 px-3'>
                                <img className='md:w-14 w-12' src='./network-security.png' alt='logo'/>
                                <h1 className='md:text-base text-xs md:font-semibold lg:pt-5 pt-3'>
                                    Securing The Supply Chain
                                </h1>
                            </div>
                            <div className='bg-[#1a1e24] hover:bg-[#0D0D0D] py-5 md:px-5 px-3'>
                                <img className='md:w-16 w-14' src='./icons8-popularity-100.png' alt='logo'/>
                                <h1 className='md:text-base text-xs md:font-semibold md:pt-3 pt-2'>
                                    Safeguarding your Reputation
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block lg:block opacity-50 rounded-md shadow-lg items-center'>
                        <img className='mt-28' src='./young-hacker-making-a-dangerous-virus-for-cyber-attacks-e1615279114966.jpg' alt='Images'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;
