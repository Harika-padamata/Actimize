import React from 'react'
import { Typography } from '@mui/material'

function BannerProducts() {
  return (
    <div>
      <div style={{position:"relative",zIndex:'0',paddingTop:"200px",paddingBottom:"200px"}}>
            <div style={{
                position:"absolute",
                zIndex:'-1',
                inset:"0px",
                overflow:"hidden",
                backgroundSize:"cover",
                backgroundColor:"transparent",
                backgroundPosition:"0% 50%",
                backgroundImage:'none'
            }}>
              <img style ={{position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"100%",height:"100%", transform:"translate(0%, -50%)"}}  src='https://bioanalytical.net/wp-content/uploads/2016/06/Banner-3.jpg'></img>
        {/* <video style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"auto",height:"801.766px",transform:"translate(0%, -50%)"}} loop={true} autoPlay muted >
              <source src="../../images/bannervedio.mp4" type="video/mp4"></source>
          </video>  */}

          </div>
        </div>
    </div>
  )
}

export default BannerProducts