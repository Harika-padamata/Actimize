import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BannerAbout from './BannerAbout'
import Board from './Board'
import Awards from './Awards'
import Location from './Location'
import Value from './Value'

function Aboutus() {
  return (
    <div>
        <Navbar/>
        <BannerAbout/>
        <Board/>
        <Awards/>
        <Value/>
        <Location/>
        <Footer/>
    </div>
  )
}

export default Aboutus