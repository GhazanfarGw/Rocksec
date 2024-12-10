import React from 'react';
import Banner from './Banner'

export default function Dashboard() {
  return (
    <>
        <div className='duration-500 overflow-hidden justify-center mx-auto'>
            <video 
                class="w-full object-cover opacity-50 justify-center mx-auto h-[52rem]" 
                loop autoPlay muted playsinline>
                <source src="cyber-security-stock-footage.mp4" type="video/mp4"/>
            </video>

            <div className='md:px-10 mx-auto justify-center px-5'>
                <div className='text-white top-1/4 absolute md:left-0 md:right-0 justify-center pt-5 md:pt-0 md:text-center md:mx-auto'>
                    <div className='md:text-center mx-auto max-w-screen-lg'>
                        <h1 className='second md:text-6xl md:font-light text-4xl tracking-wider duration-500 text-[#fff]'>
                            Secure your cyberspace, <br/> secure your digital life
                        </h1>
                    </div>
                    <div className='third md:pt-10 pt-3 md:pb-0 md:text-2xl text-base tracking-wider max-w-screen-lg justify-center md:text-center mx-auto duration-500'>
                        <p className='md:font-light text-[#c8ccce]'> 
                            Experience next-level protection with RockSec Group's security expertise.
                        </p>
                        <a 
                            href="#about" className="fourth md:mt-20 mt-5 hover:px-4 items-center text-[#fff] md:text-base text-xs font-light scroll-smooth duration-500 bg-[#004E75] md:mx-auto relative h-10 tracking-wide w-40 uppercase md:px-4 justify-center text-center flex rounded-sm">
                            Learn More
                        </a>
                    </div>
                    <div className='md:max-w-7xl justify-center mx-auto md:mt-44 md:px-10 mt-20'>
                        <Banner/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
