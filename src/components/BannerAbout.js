import React from 'react'
import { Grid, Typography ,useMediaQuery} from '@mui/material'
import { useTheme } from "@mui/system";


function BannerAbout() {
    const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
//     <div>
//     <div style={{position:"relative",zIndex:'0',paddingTop:"200px",paddingBottom:"200px"}}>
//        <div style={{
//            position:"absolute",
//            zIndex:'-1',
//            inset:"0px",
//            overflow:"hidden",
//            backgroundSize:"cover",
//            backgroundColor:"transparent",
//            backgroundPosition:"0% 50%",
//            backgroundImage:'none'
//        }}>
//            {matches ?<img className='star' src='https://www.zaptechsolutions.com/wp-content/uploads/2016/08/zaptech-banner.jpg' style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"140%",height:"100%",transform:"translate(0%, -50%)"}}></img>:
//            <img className='star' src='https://www.zaptechsolutions.com/wp-content/uploads/2016/08/zaptech-banner.jpg' style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"100%",height:"100%",transform:"translate(0%, -50%)"}}></img>}
//    {/* <video style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"auto",height:"801.766px",transform:"translate(0%, -50%)"}} loop={true} autoPlay muted >
//          <source src="../../images/bannervedio.mp4" type="video/mp4"></source>
//      </video>  */}
//      </div>
//      <div className='content' style={{paddingLeft:'15px',paddingRight:'15px'}}>
//        <div  style={{
//            position:"relative",
//            transform:"translateY(-50px)",
//            marginBottom:"-50px",
//            pointerEvents:'none',
//            justifyContent:'center',
//            display:"flex",
//            flexWrap:"wrap",
//            marginRight:'-15px',
//            marginLeft:'-15px'
//        }}>
//            <div className='text-wrapper'  style={{position:"relative",
//            minHeight:'1px',
//            paddingLeft:'15px',
//            paddingRight:'15px',
//            // margin:'50px',
//            pointerEvents:'auto',
//            textAlign:'center'
//        }}>
//        <Typography sx={{textAlign:"center", fontFamily:'"Poppins", sans-serif', color:'#fff',fontSize:'42px',lineHeight:'56px',fontWeight:'700'}}>Actimize wins prestigious ISG Star of Excellence and awards for best in class CX</Typography>
//        {/* <p style={{ fontFamily:'"Lato", Helvetica, Arial, sans-serif', color:'#ffffff',fontSize:'18px',textAlign:"-webkit-center",fontWeight:'300',lineHeight:'1.6'}}>Portfolio Include IT Consulting Solutions Managed IT<br></br> Solutions Enterprise Re-source Planning, IT Consulting<br></br> Company placed in Mandapeta</p> */}
//        <a style={{
//            position:'relative',
//            display:'inline-block',
//            maxWidth:'100%',
//            padding:'15px 40px',
//            fontSize:'16px',
//            fontWeight:'400',
//            letterSpacing:'0.1em',
//            textTransform:'uppercase',
//            border:'2px solid',
//            borderRadius:'35px',
//            textAlign:'center',
//            verticalAlign:'middle',
//            userSelect:'none',
//            transition:'.25s all ease',
//            marginTop:'30px',
//            color:'#342e39',alignItems:'center',
//            backgroundColor:'#fff'
           
//        }}>Learn More </a>
//            </div>

//        </div>

//      </div>
//    </div>
//    {/* <Vedio sx={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"auto",height:"751px",transform:"translate(0%, -50%)"}}>
//        <source src='../vedio.mp4' type='vedio/'></source>

//    </Vedio> */}
// </div>

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
 {matches ?<img className='star' src='https://www.zaptechsolutions.com/wp-content/uploads/2016/08/zaptech-banner.jpg' style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"140%",height:"100%",transform:"translate(0%, -50%)"}}></img>:
           <img className='star' src='https://www.zaptechsolutions.com/wp-content/uploads/2016/08/zaptech-banner.jpg' style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"100%",height:"100%",transform:"translate(0%, -50%)"}}></img>}        {/* <video style ={{margin:"auto",position:"absolute",zIndex:"-1",top:"50%",left:"0%",visibility:"visivle",opacity:"1",width:"auto",height:"801.766px",transform:"translate(0%, -50%)"}} loop={true} autoPlay muted >
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
            <Typography sx={{textAlign:"center", fontFamily:'"Poppins", sans-serif', color:'#fff',fontSize:'42px',lineHeight:'56px',fontWeight:'700'}}>ACTIMIZE SOFTWARE<br></br> SOLUTIONS</Typography>
            <p style={{ fontFamily:'"Lato", Helvetica, Arial, sans-serif', color:'#ffffff',fontSize:'18px',textAlign:"-webkit-center",fontWeight:'300',lineHeight:'1.6'}}>Portfolio Include IT Consulting Solutions Managed IT<br></br> Solutions Enterprise Re-source Planning, IT Consulting<br></br> Company placed in Mandapeta</p>
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
                color:'#342e39',alignItems:'center',
                backgroundColor:'#fff'
                
            }}>Get Started </a>
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

export default BannerAbout