import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Careers
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Life at RockSec Group
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        At RockSec Group, we believe that every employee plays a vital role in our success. We make every effort to be innovative in services we offer to our employees. We provide attractive compensation packages and opportunities to earn bonuses and rewards.
                    </p>
                    <br/>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold md:pt-10'>
                        A Few Great Reasons To Join RockSec Group
                    </h1>
                    <div className='flex flex-row mx-auto gap-x-5 pt-5'>
                        <svg radius={50} className='bg-white h-2 w-3 md:w-2 md:h-2 rounded-full mt-1 md:mt-0'/>
                        <p className='text-[#C3CDD3]'>
                            RockSec Group help their peers grow, achieve, and see the best in themselves
                        </p>
                    </div>
                    <div className='flex flex-row md:items-center gap-x-5 mx-auto pt-2'>
                        <svg radius={50} className='bg-white h-2 w-6 md:w-2 md:h-2 rounded-full mt-1 md:mt-0'/>
                        <p className='text-[#C3CDD3]'>
                            We are passionate about solving one of the most important challenges facing our digital world, securing the software changing our world.
                        </p>
                    </div>
                    <div className='flex flex-row md:items-center gap-x-5 mx-auto pt-2'>
                        <svg radius={50} className='bg-white w-4 h-2 md:w-2 md:h-2 rounded-full mt-1 md:mt-0'/>
                        <p className='text-[#C3CDD3]'>
                            We are the pioneer in the AppSec market and a continued leader in secure development innovations.                        
                        </p>
                    </div>
                    <div className='flex flex-row md:items-center gap-x-5 mx-auto pt-2'>
                        <svg radius={50} className='bg-white h-2 w-2 md:w-2 md:h-2 rounded-full mt-1 md:mt-0'/>
                        <p className='text-[#C3CDD3]'>
                            Be part of something important
                        </p>
                    </div>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        We Are Purpose-Driven
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        RockSec Group is dedicated in creating a world where the software fueling our economic growth and solving some of society's greatest challenges is developed secure from the start.
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        What Is The RockSec Group Way?
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        The RockSec Group Way is the foundation of our culture. It guides our behavior, decisions, and actions toward our stakeholders, employees, customers, investors, and the broader community.
                    </p>
                    <div>
                        <div className='hidden md:block lg:block'>
                            <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                                Current Employment Opportunities
                            </h1>
                            <div className='mt-5 md:flex grid-cols-3 py-3 border px-5 border-opacity-80'>
                                <div className='md:w-80'>
                                    <h1 className='text-lg font-semibold'>
                                        Position
                                    </h1>
                                </div>
                                <div className='md:w-96'>
                                    <h1 className='text-lg font-semibold'>
                                        Job Description
                                    </h1>
                                    
                                </div>
                                <div className='md:w-80'>
                                    <h1 className='text-lg font-semibold'>
                                        Location
                                    </h1>
                                    
                                </div>
                            </div>
                            <div className='mx-auto justify-between'>
                                <div className='flex grid-cols-3'>
                                    <div className='border px-8'>
                                        <p className='py-5 text-[#C3CDD3]'>
                                            Information Security Researcher
                                        </p>
                                    </div>
                                    <div className='border px-8 py-5 text-[#C3CDD3]'>
                                        <p>
                                            1 - Looking for new vulnerabilities and reverse engineer complex systems
                                        </p>
                                        <p>
                                            2 - Create proof-of-concept code
                                        </p>
                                        <p>
                                            3 - Document findings
                                        </p>
                                        <p>
                                            4 - Work can be performed remotely
                                        </p>
                                    </div>
                                    <div className='border px-8 py-5 text-[#C3CDD3]'>
                                        <p>
                                            You can be based anywhere but should be available to travel if required.
                                        </p>
                                        <p>
                                            Please send your resume to business@rocksecgroups.com Place “Information Security Researcher” in subject line.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='block md:hidden lg:hidden'>
                            <h1 className='text-white text-2xl justify-center font-semibold pt-10'>
                                Current Employment Opportunities
                            </h1>
                            <div className='mt-5 py-3 border-opacity-80'>
                                <div className='border px-3 py-3'>
                                    <h1 className='text-lg font-semibold border-b pb-2'>
                                        Position
                                    </h1>
                                    <p className='text-[#C3CDD3] pt-3'>
                                        Information Security Researcher
                                    </p>
                                </div>
                                <div className='border px-3 py-3 mt-5'>
                                    <h1 className='text-lg font-semibold border-b pb-2'>
                                        Job Description
                                    </h1>
                                    <div className='flex gap-3'>
                                        <div className='text-[#C3CDD3] pt-3'>
                                            1-
                                        </div>
                                        <div>
                                            <p className='text-[#C3CDD3] pt-3'>
                                                Looking for new vulnerabilities and reverse engineer complex systems
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='text-[#C3CDD3] pt-2'>
                                            2-
                                        </div>
                                        <div>
                                            <p className='text-[#C3CDD3] pt-2'>
                                                Create proof-of-concept code
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='text-[#C3CDD3] pt-2'>
                                            3-
                                        </div>
                                        <div>
                                            <p className='text-[#C3CDD3] pt-2'>
                                                Document findings
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='text-[#C3CDD3] pt-2'>
                                            4-
                                        </div>
                                        <div>
                                            <p className='text-[#C3CDD3] pt-2'>
                                                Work can be performed remotely
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border px-3 py-3 mt-5'>
                                    <h1 className='text-lg font-semibold border-b pb-2'>
                                        Location
                                    </h1>
                                    <p className='text-[#C3CDD3] pt-3'>
                                        You can be based anywhere but should be available to travel if required.
                                    </p>
                                    <p className='text-[#C3CDD3] pt-2'>
                                        Please send your resume to info@RockSec Groupsec.com . <br/> Place “Information Security Researcher” in subject line.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;