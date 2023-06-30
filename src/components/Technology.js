
import React from 'react'
// import Technologyone from "./Technologyone";
import Technologytwo from "./Technologytwo";
import Technologythree from "./Technologythree";

import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Vedio from "./Vedio";
function Technology() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Vedio/>
         {/* <Technologyone /> */}
         <Technologythree />
         <Technologytwo />
         <GetStarted />
         
         <Footer />
        
    </div>
  )
}

export default Technology