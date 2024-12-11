import React from 'react'

export default function Collaboration() {
  return (
    <div id='collaboration' className='justify-center mx-auto'>
        <div className='text-white mx-auto md:py-20 justify-center max-w-screen-2xl md:px-10 px-3'>
            <div className='md:grid md:grid-cols-2 justify-center py-5 items-center'>
                <img className='block md:hidden lg:hidden' src='./collaborations.png' alt='image'/>
                <div className='px-4 pt-10'>
                    <h1 className='text-base font-semibold text-[#0ec9ac]'>
                        Our Partner
                    </h1>
                    <h1 className='text-white md:text-4xl text-3xl justify-center pt-5 font-semibold'>
                        Collaboration, A True Partner
                    </h1>
                    <div className='mt-5'>
                        <p className='md:text-lg text-[#C3CDD3] md:pt-4'>
                            We bring together expert capabilities, experience and technical knowledge to deliver bespoke cyber solutions to board-level priorities.
                        </p>
                        <p className='md:text-lg text-[#C3CDD3] md:pt-8 pt-3'>
                            Boards and investors are demanding greater insights to making informed decisions in managing risk and delivering better business outcomes.
                        </p>
                        <p className='md:text-lg text-[#C3CDD3] md:pt-8 pt-3'>
                            We work closely with your business to:
                        </p>
                        <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                            <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                            <p className=''>
                                Get to know your business and learn how it works.
                            </p>
                        </div>
                        <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                            <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                            <p className=''>
                                Provide expert security advice and guidance.
                            </p>
                        </div>
                        <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                            <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                            <p className=''>
                                Offer tailored services that meet your specific requirements.
                            </p>
                        </div>
                        <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                            <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                            <p className=''>
                                Address security risks quickly and effectively.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='hidden md:block lg:block' src='./collaborations.png' alt='image'/>
                </div>

            </div>
        </div>
    </div>
  )
}
