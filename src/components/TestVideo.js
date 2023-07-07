import { Grid, Typography } from '@mui/material'
import React from 'react'

function TestVideo() {
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
        <video  className='videocomponent' src="../../images/bannervedio.mp4" autoPlay loop muted /> 
        {/* <video className='videocomponent' loop={true} autoPlay muted >
              <source src="../../images/bannervedio.mp4" type="video/mp4"></source>
          </video>  */}
          </div>
          <div style={{marginLeft:'auto',marginRight:'auto',paddingLeft:'15px',paddingRight:'15px'}}>
            <div  style={{
                position:"relative",
                transform:"translateY(-50px)",
                marginBottom:"-50px",
                pointerEvents:'none',
                justifyContent:'center',
                display:"flex",
                flexWrap:"wrap",
                // marginRight:'-15px',
                // marginLeft:'-15px'
            }}>
                <div className='text-wrapper'  style={{position:"relative",
                minHeight:'1px',
                paddingLeft:'15px',
                paddingRight:'15px',
                // margin:'50px',
                pointerEvents:'auto',
                textAlign:'center'
            }}>
            <Typography sx={{textAlign:"center", fontFamily:'"Poppins", sans-serif', color:'#fff',fontSize:'42px',lineHeight:'56px',fontWeight:'700'}}>WELCOME TO ACTIMIZE</Typography>
            <p style={{ fontFamily:'"Lato", Helvetica, Arial, sans-serif', color:'#ffffff',fontSize:'18px',textAlign:"-webkit-center",fontWeight:'300',lineHeight:'1.6'}}>Actimize is an IT consulting and services company whose mission is to harness advanced technologies to devise quality software with interdisciplinary effort and a long-term focus.</p>
            <a style={{
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
                
            }}>LEARN MORE </a>
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

export default TestVideo