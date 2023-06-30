import React from 'react'
import Footer from "./Footer";

import Navbar from "./Navbar";
import Acceldataone from "./Acceldataone";
import Acceldatatwo from "./Acceldatatwo";
import Acceldatathree from "./Acceldatathree";
import Acceldatafour from "./Acceldatafour";
import Acceldatafive from "./Acceldatafive";
function Acceldata() {
  return (
    <div>
      <Navbar />
      <Acceldatafive />
      {/* <Acceldatafour /> */}
      <Acceldataone />
      <Acceldatatwo />
      <Acceldatathree />
      
         <Footer />
        
    </div>
  )
}

export default Acceldata