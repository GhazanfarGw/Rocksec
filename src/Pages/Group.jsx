import React from 'react';
import CountUp from 'react-countup';

const Group = () => {
    return (
        <div id='team' className='md:py-24 py-20 text-white justify-center mx-auto max-w-screen-xl text-center'>
            <div className='mx-auto justify-center px-3 md:px-5'>
                <div>
                    <h1 className='text-base font-semibold text-[#0ec9ac]'>
                        Our Group In Numbers
                    </h1>
                    <h1 className='text-white md:text-4xl text-3xl justify-center pt-3 md:pt-5 font-semibold'>
                        Team Industry and Global Offices
                    </h1>
                </div>
                <div className='lg:grid lg:grid-cols-4 grid grid-cols-2 mx-auto justify-center gap-3 lg:gap-5 pt-10'>
                    <div className='md:py-10 py-4 md:px-10 px-2 max-w-md bg-[#1a1e24] hover:bg-[#0D0D0D]'>
                        <h1 className='text-2xl lg:text-4xl font-semibold justify-center py-2 md:py-5'>
                            <CountUp  start={1} end={5} duration={25.75} decimal={1} prefix=""/>
                        </h1>
                        <img className='md:w-16 w-12 justify-center mx-auto' src='./awards.png' alt='logo'/>
                        <p className='md:text-base text-xs text-[#C3CDD3] pt-3'>
                            Awards for cyber thought leadership
                        </p>
                    </div>
                    <div className='md:py-10 py-4 md:px-10 px-2 max-w-md bg-[#1a1e24] hover:bg-[#0D0D0D]'>
                        <h1 className='text-2xl lg:text-4xl font-semibold justify-center py-2 md:py-5'>
                            <CountUp  start={1} end={50} duration={25.75} decimal={1} prefix="+"/>
                        </h1>
                        <img className='md:w-16 w-12 justify-center mx-auto' src='./athlete-male.png' alt='logo'/>
                        <p className='md:text-base text-xs text-[#C3CDD3] pt-3'>
                            Team of Industry and technology specialists
                        </p>
                    </div>
                    <div className='md:py-10 py-4 md:px-10 px-2 max-w-md bg-[#1a1e24] hover:bg-[#0D0D0D]'>
                        <h1 className='text-2xl lg:text-4xl font-semibold justify-center py-2 md:py-5'>
                            <CountUp  start={1} end={7} duration={25.75} decimal={1} prefix=""/>
                        </h1>
                        <img className='md:w-16 w-12 justify-center mx-auto' src='./world.png' alt='logo'/>
                        <p className='md:text-base text-xs text-[#C3CDD3] pt-3'>
                            Global offices, including the UK, USA, Australia, Jordan South Africa, New Zealand and the Philippines
                        </p>
                    </div>
                    <div className='md:py-10 py-4 md:px-10 px-2 max-w-md bg-[#1a1e24] hover:bg-[#0D0D0D]'>
                        <h1 className='text-2xl lg:text-4xl font-semibold justify-center py-2 md:py-5'>
                            £3.2Bn
                        </h1>
                        <img className='md:w-16 w-12 justify-center mx-auto' src='./sales-balance.png' alt='logo'/>
                        <p className='md:text-base text-xs text-[#C3CDD3] pt-3'>
                            Experienced in building global cyber capability with multi-billion-pound budgets
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Group;
