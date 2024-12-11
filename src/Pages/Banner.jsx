// import React from 'react'
// export default function banner() {
//   return (
//     <>
//       <div className='md:justify-center mx-auto items-center md:bg-[#1A1E24] md:border-[#136690] md:border text-white xl:mt-0 xl:px-10 xl:py-5 xl:mx-0 lg:mx-0 lg:py-5 lg:mt-0 md:px-8 md:mx-0 md:mt-0 md:py-5 px-10'>
//         <div className="xl:flex lg:flex md:flex grid grid-cols-2 gap-5 md:grid-cols-4 md:justify-between md:mx-auto xl:px-10 md:px-10 items-center md:py-8 xl:text-left">
          // <div className="items-center md:bg-transparent bg-[#1A1E24] px-5 py-5 w-72 mx-auto justify-center">
          //   <img className='z-10 w-12 justify-center mx-auto' src="./icons8-wifi-100.png" alt="logo" />
          //   <p className="text-sm xl:text-base pt-2">
          //     Real-time protection
          //   </p>
          // </div>
          // <div className="items-center w-72">
          //   <img className='z-10 w-12 justify-center mx-auto' src="./icons8-protect-100.png" alt="logo" />
          //   <p className="text-sm xl:text-base pt-2">
          //       Protect your privacy
          //   </p>
          // </div>
          // <div className="items-center">
          // <img className='z-10 w-12 justify-center mx-auto' src="./icons8-secure-100.png" alt="logo" />
          //   <p className="text-sm xl:text-base pt-2">
          //       Secure your identity
          //   </p>
          // </div>
          // <div className="">
          //  <img className='z-10 w-12 justify-center mx-auto' src="./icons8-data-protection-100.png" alt="logo" />
          //   <p className="text-sm xl:text-base pt-2">
          //       Data breaches
          //   </p>
          // </div>
//         </div>
//       </div>

//     </>
//   )
// }


import React from 'react'

export default function Banner() {
  return (
    <>
    <div className='md:justify-center mx-auto items-center md:bg-[#1A1E24] md:border-[#136690] md:border text-white xl:mt-0 xl:px-10 xl:py-10 xl:mx-0 lg:mx-0 lg:py-10 lg:mt-0 md:px-8 md:mx-0 md:mt-0 md:py-5'>
      <div className='justify-center mx-auto text-center max-w-screen-xl md:px-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 justify-center gap-2'>
          <div className="items-center md:bg-transparent bg-[#1A1E24] px-5 md:px-0 md:py-0 py-5 justify-center px-10">
            <img className='z-10 w-12 justify-center mx-auto' src="./icons8-wifi-100.png" alt="logo" />
            <p className="text-sm xl:text-base pt-2 mx-auto text-center justify-center">
              Real-time protection
            </p>
          </div>
          <div className="items-center md:bg-transparent bg-[#1A1E24] md:px-0 md:py-0 py-5 justify-center px-10">
            <img className='z-10 w-12 justify-center mx-auto' src="./icons8-protect-100.png" alt="logo" />
            <p className="text-sm xl:text-base pt-2 mx-auto text-center justify-center">
                Protect your privacy
            </p>
          </div>
          <div className="items-center md:bg-transparent bg-[#1A1E24] md:px-0 md:py-0 py-5 mx-auto justify-center px-10">
          <img className='z-10 w-12 justify-center mx-auto' src="./icons8-secure-100.png" alt="logo" />
            <p className="text-sm xl:text-base pt-2 mx-auto text-center justify-center">
                Secure your identity
            </p>
          </div>
          <div className="items-center md:bg-transparent bg-[#1A1E24] md:px-0 md:py-0 py-5 mx-auto justify-center px-10">
           <img className='z-10 w-12 justify-center text-center mx-auto' src="./icons8-data-protection-100.png" alt="logo" />
            <p className="text-sm xl:text-base pt-2 mx-auto text-center justify-center">
                Data breaches
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
