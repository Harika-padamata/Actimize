import React from 'react'
import { Typography } from '@mui/material'

function BannerServices() {
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
           <img src='https://img.freepik.com/free-vector/simple-blue-curve-background-vector-business_53876-171632.jpg' style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"100%",height:"100%",transform:"translate(0%, -50%)"}}></img>
   {/* <video style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"auto",height:"801.766px",transform:"translate(0%, -50%)"}} loop={true} autoPlay muted >
         <source src="../../images/bannervedio.mp4" type="video/mp4"></source>
     </video>  */}
     </div>
     <div className='content' style={{paddingLeft:'15px',paddingRight:'15px'}}>
       <div  style={{
           position:"relative",
           transform:"translateY(-50px)",
           marginBottom:"-50px",
           pointerEvents:'none',
           justifyContent:'center',
           display:"flex",
           flexWrap:"wrap",
           marginRight:'-15px',
           marginLeft:'-15px'
       }}>
           <div className='text-wrapper'  style={{position:"relative",
           minHeight:'1px',
           paddingLeft:'15px',
           paddingRight:'15px',
           // margin:'50px',
           pointerEvents:'auto',
           textAlign:'center'
       }}>
       <p style={{
           position:'relative',
           display:'inline-block',
           maxWidth:'100%',
           padding:'15px 40px',
           fontSize:'42px',
           fontWeight:'400',
           letterSpacing:'0.1em',
           textAlign:'center',
           verticalAlign:'middle',
           userSelect:'none',
           transition:'.25s all ease',
           color:'#72A0C1',alignItems:'center',
           fontFamily: "Playfair Display, serif",   
       }}>Our Services</p>
           </div>

       </div>

     </div>
   </div>
   {/* <Vedio sx={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"auto",height:"751px",transform:"translate(0%, -50%)"}}>
       <source src='../vedio.mp4' type='vedio/'></source>

   </Vedio> */}
</div>

  )
}

export default BannerServices