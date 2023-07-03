import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import InnerPageBanner from './InnerPageBanner';
import Feature from './Feature';
import Work from './Work';
import Support from './Support';

function ProductsInnerPage() {
  return (
    <div>
    <Navbar/>
    <InnerPageBanner/>
    <Feature/>
    <Work/>
    <Support/>
    <Footer/>
    </div>
  )
}

export default ProductsInnerPage