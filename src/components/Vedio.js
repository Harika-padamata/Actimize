import { Grid, Typography } from '@mui/material'
import React from 'react'
// import ReactPlayer from 'react-player'
import "../App.css"
import { Box, Container } from "@mui/system";
function Vedio() {
  return (
 
        <Box sx={{marginTop:"25px"}}>
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
        <video style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"auto",height:"801.766px",transform:"translate(0%, -50%)"}} loop={true} autoPlay muted >
              <source src="../../images/video (2160p).mp4" type="video/mp4"></source>
          </video> 
          </div>
          <div className='content' style={{marginLeft:'auto',marginRight:'auto',paddingLeft:'15px',paddingRight:'15px'}}>
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
                paddingLeft:'10px',
                paddingRight:'10px',
                // margin:'50px',
                pointerEvents:'auto',
                textAlign:'center'
            }}>
            <Typography sx={{textAlign:"center", fontFamily:'"Poppins", sans-serif', color:'#fff',fontSize:'52px',lineHeight:'56px',fontWeight:'700'}}>Technology</Typography>
            <p style={{ fontFamily:'"Lato", Helvetica, Arial, sans-serif', color:'#ffffff',fontSize:'35px',textAlign:"-webkit-center",fontWeight:'300',lineHeight:'1.6'}}>Build an ever-ready infrastructure</p>
            {/* <a style={{
                position:'relative',
                display:'inline-block',
                maxWidth:'100%',
                padding:'15px 40px',
                fontSize:'16px',
                fontWeight:'400',
                letterSpacing:'0.1em',
                textTransform:'uppercase',
                border:'2px solid',
                borderRadius:'35px',
                textAlign:'center',
                verticalAlign:'middle',
                userSelect:'none',
                transition:'.25s all ease',
                marginTop:'30px',
                color:'#fff',alignItems:'center'
                
            }}>LEARN MORE </a> */}
                </div>

            </div>

          </div>
        </div>
        {/* <Vedio sx={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"auto",height:"751px",transform:"translate(0%, -50%)"}}>
            <source src='../vedio.mp4' type='vedio/'></source>

        </Vedio> */}
    </div>
    </Box>
  
  )
}

export default Vedio