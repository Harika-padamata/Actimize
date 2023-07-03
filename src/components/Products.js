import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BannerProducts from './BannerProducts'
import ProductContent from './ProductContent'

function Products() {
  return (
    <div>
        <Navbar/>
        <BannerProducts/>
        <ProductContent/>
        <Footer/>
    </div>
  )
}

export default Products