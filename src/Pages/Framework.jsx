import React from 'react';

const Framework = () => {
    return (
        <div id='framework' className='md:px-10 px-3 max-w-screen-2xl justify-center mx-auto'>
        <div className='text-white mx-auto md:py-28 py-16 justify-center'>
            <div className='md:grid md:grid-cols-2 justify-center py-5 items-center'>
                <div className='block md:hidden lg:hidden rounded-md shadow-lg mx-auto justify-end'>
                    <img src='./Cycling.png' alt='Images'/>
                </div>
                <div className='px-4 pt-10'>
                    <h1 className='text-base font-semibold text-[#0ec9ac]'>
                        Our Security Framework
                    </h1>
                    <h1 className='text-white md:text-4xl text-3xl justify-center pt-5 font-semibold'>
                        Complete Cyber Security Framework
                    </h1>
                    <div className='mt-5'>
                        <p className='md:text-lg text-[#C3CDD3] pt-4'>
                            Our Cyber Framework makes it easy to introduce our cyber expertise and services into your organisation as you need them.
                        </p>
                        <p className='md:text-lg text-[#C3CDD3] pt-8'>
                            We know that change is constant and having agile cyber services.(cybersecurity service) you can deploy when you need them is essential.
                        </p>
                        <p className='md:text-lg text-[#C3CDD3] pt-8'>
                            Our framework includes subscription-based projects, such as Penetration Tests, and advanced cybersecurity services from our in-house Cyber Fusion Centre aligned completely (fully aligned) with your business strategy
                        </p>
                    </div>
                </div>
                <div className='hidden md:block lg:block rounded-md shadow-lg md:px-5'>
                    <img src='./Cycling.png' alt='Images'/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Framework;
