import React from 'react'
import Dashboard from './Dashboard'
import Nav from '../Nav'
import Footer from '../Footer'

export default function Index() {
  return (
    <>
        <Nav/>
        <div className='md:pt-40 pt-20'>
          <Dashboard/>
        </div>
        <Footer/>

    </>
    
  )
}