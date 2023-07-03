import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BannerServices from './BannerServices'
import ServicesContent from './ServicesContent'
import ServiceCompany from './ServiceCompany'

function Services() {
  return (
    <div>
        <Navbar/>
        <BannerServices/>
        <ServicesContent/>
        <ServiceCompany/>
        <Footer/>
    </div>
  )
}

export default Services