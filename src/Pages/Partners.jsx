import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'

function Partners() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: true,
        dots: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
   return (
    <>
    <div className='mx-0 px-5 items-center md:py-28 text-white bg-[#1a1e24]'>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-xl items-center mx-auto overflow-hidden text-[#fff]'>
        <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold text-center'>Why Us</h1>

        
        <p className='text-[#C3CDD3] pt-8 text-center max-w-screen-md mx-auto justify-center md:text-lg'>
          Founded by experienced industry experts who understand the cyber challenge and organisational requirements for enhanced cybersecurity.Our team has a wealth of industry and domain-specific experience to the company.
          We have a collaborative approach to working with organisations regarding their cybersecurity requirements.
        </p>
        <Slider {...settings} className='flex mx-auto items-center gap-4 pt-5 text-[#fff]'>
            
            <Tooltip title="BHSF" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/bhsf.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="CenterGrid Managed IT Solutions" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/centergrid.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Citizen" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/Citizen.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Crest" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/crest.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="DPD" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/dpd.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Voestalpine Steel industry company" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/voe.png' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
            <img src='../../Partners/ele.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Logicalis Architects of Change" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/locail.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Moneybox" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/money.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Qiagen" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/qia.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Strong Room" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/room.png' alt='Image'/>
            </Tooltip>

            <Tooltip title="Social Work England" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/social.png' alt='Image'/>
            </Tooltip>
            
            <Tooltip title="The Works" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/work.png' alt='Image'/>
            </Tooltip>
            
            <Tooltip title="Trust In" placement='bottom' className='hover:opacity-80 cursor-pointer py-5 hover:bg-[#0D0D0D] justify-center items-center px-3'>
              <img src='../../Partners/Trustin.png' alt='Image'/>
            </Tooltip>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Partners;
