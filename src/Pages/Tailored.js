import React from 'react'

export default function Tailored() {
  return (
    <div id='tailored' className='md:px-10 px-3 max-w-screen-2xl justify-center mx-auto'>
        <div className='text-white mx-auto md:py-28 justify-center'>
            <div className='justify-center py-5 items-center'>
                <div className='mx-auto justify-center lg:max-w-6xl md:w-full md:border-4 border-2 border-[#0ec9ac]'>
                    <video muted autoPlay loop controls playsInline width={1200} height={480}> 
                        <source src='./blackstonevideo.mp4' type='video/mp4'/>
                    </video>
                </div>
                <div className='px-4 pt-10'>
                    <h1 className='text-base font-semibold text-[#0ec9ac]'>
                        Our Tailored Services
                    </h1>
                    <h1 className='text-white md:text-4xl text-3xl justify-center pt-5 font-semibold max-w-xl'>
                        Tailored Services That Scale As You Grow
                    </h1>
                    <div className='lg:grid lg:grid-cols-3 lg:gap-10'>
                        <div className='mt-10'>
                            <h1 className='text-lg lg:text-xl font-semibold justify-center'>
                                Consultancy
                            </h1>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Penetration Testing
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Cyber Incident Response
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    DevSecOps Maturity Assessments/Consultancy
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Cloud Security Strategy (Containerisation)
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Cloud Security Assessment
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Social Engineering/Physical Pen Test
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Vulnerability Scans
                                </p>
                            </div>
                        </div>
                        <div className='md:mt-16'>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Governance Risk & Compliance
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Cyber Awareness Training
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    M & A Cyber Due Diligence
                                </p>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-lg lg:text-xl font-semibold justify-center text-white'>
                                Retained Services
                            </h1>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    SOC as a Service
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Continuous Breach Detection
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Penetration Test as a Service
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Cyber Threat Hunting
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Human Reconnaissance
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Incident Response as a Service
                                </p>
                            </div>
                            <div className='pt-5 flex flex-row items-center gap-2 text-[#C3CDD3]'>
                                <div className='bg-[#0ec9ac] h-2 w-2 rounded-full'/>
                                <p className=''>
                                    Virtual CISO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
