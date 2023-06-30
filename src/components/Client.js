import React from 'react'
import Footer from "./Footer";

import Navbar from "./Navbar";
import Clientone from "./Clientone";
import Clienttwo from "./Clienttwo";
import Clientthree from "./Clientthree";
import Clientfour from "./Clientfour";
import Moviecard from "./Moviecard";
function Client() {
  return (
    <div>
      <Navbar />
      <Clientone />
      <Clienttwo />
      {/* <Clientthree /> */}
      <Moviecard />
      <Clientfour />
    
         <Footer />
        
    </div>
  )
}

export default Client