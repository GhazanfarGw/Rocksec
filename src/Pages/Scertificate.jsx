import { Tooltip } from '@mui/material'
import React from 'react'

export default function Scertificate() {
  return (
    <>
    <div className='md:py-20 pt-5 bg-[#070707]'>
      <div className='max-w-screen-2xl md:px-10 px-5 justify-center mx-auto overflow-hidden'>
        <div className='mx-auto max-w-screen-md'>
          <h1 className='text-white md:text-4xl text-3xl justify-center pt-5 font-light text-center'>
            Our Team's Certification
          </h1>
          <div className='grid grid-cols-5 md:gap-x-5 mx-auto justify-center items-center pt-10'>
            <Tooltip title="InfoSec Certificate" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/INFOSEC.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Offensive Security Certificate" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/OSCP.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Pentester Lab Security+ Certificate" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/PT.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Certified Information Technology Education Center" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/Information Tech.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Certified elearn Security" placement='top' className='hover:opacity-80 cursor-pointer'>
              <img src='../../Cerificate/elearrn.png' alt='Image'/>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
