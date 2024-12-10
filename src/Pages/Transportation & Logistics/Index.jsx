import React from 'react'
import Dashboard from './Dashboard'
import Nav from '../Nav'
import About from './About'
import Services from '../Ourservices'
import Footer from '../Footer'

export default function Index() {
  return (
    <>
        <Nav/>
        <div className='md:pt-24 pt-5'>
          <Dashboard/>
        </div>
        <About/>
        <Services/>
        <Footer/>

    </>
    
  )
}