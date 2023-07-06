import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useEffect, useState } from 'react'


export default function ActionAreaCard() {
  const [first_card ,setFirst_card] = useState(false)
  const [second_card ,setSecond_card] = useState(false)
  const [third_card ,setThird_card] = useState(false)
  const [fourth_card ,setFourth_card] = useState(false)
  const [fifth_card ,setFifth_card] = useState(false)
  const [sixth_card ,setSixth_card] = useState(false)
const [ isHovered, setIsHovered ] = useState( false );

  return (
    <div>
      <Grid container columns={12}>
        <Grid className='service_res' xs={12} sm={4} md={4} lg={4}  sx={{padding:"30px"}}>
        <Card id='first_card' sx={{width:'100%',height:'16rem'}}>
        <CardActionArea
        onMouseOver={()=>{setFirst_card(true)}}
        onMouseOut={ ()=>{setFirst_card(false)} }
        >
       { first_card
                    ?  <img src='https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2021/web2-1640671232.jpg'style={{minHeight:'100%',maxWidth:'100%',height:'16rem'}}></img>:
                    <CardContent >
      <div>
      <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'auto'}}>
      WEB APPLICATIONS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Web app development services help plan and build apps that work via the internet or intranet.We know how to get the new quality app quickly, ensure its effectiveness.
        </Typography>
        </div>
        </CardContent>}
      </CardActionArea>
</Card>
          </Grid>
          <Grid className='service_res' xs={12} sm={4} md={4} lg={4}  sx={{padding:"30px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea 
          onMouseOver={()=>{setSecond_card(true)}}
          onMouseOut={ ()=>{setSecond_card(false)} }
          >
            { second_card
                    ?  <img src='https://www.analyticsinsight.net/wp-content/uploads/2020/08/143-1024x559.jpg'style={{minHeight:'100%',maxWidth:'100%',height:'16rem'}}></img>:
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'auto'}}>
        MOBILE APPS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Mobile app development services cover end-to-end development of mobile apps, from business analysis and UI/UX design to mobile application testing and deployment.        </Typography>
      </CardContent>}
    </CardActionArea>
</Card>
          </Grid> 
          <Grid className='service_res' xs={12} sm={4} md={4} lg={4} sx={{padding:"30px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea
          onMouseOver={()=>{setThird_card(true)}}
          onMouseOut={ ()=>{setThird_card(false)} }
          >
            { third_card
                    ?  <img src='https://www.plm.automation.siemens.com/media/global/en/cloud-ready-applications-640x360_tcm27-63234.jpg'style={{minHeight:'100%',maxWidth:'100%',height:'16rem'}}></img>:
        <CardContent>
           <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'auto'}}>
          CLOUD APPLICATIONS 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cloud app development implies building apps that run in the cloud and may leverage cloud features and services offered by cloud vendors.
          </Typography>
        </CardContent>}
      </CardActionArea>
</Card>

          </Grid>
          <Grid className='service_res' xs={12} sm={4} md={4} lg={4}  sx={{padding:"30px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea
          onMouseOver={()=>{setFourth_card(true)}}
          onMouseOut={ ()=>{setFourth_card(false)} }
          >
            { fourth_card
                    ?  <img src='https://venuearc.com/wp-content/uploads/2022/06/SaaS-Product.jpg'style={{minHeight:'100%',maxWidth:'100%',height:'16rem'}}></img>:
       
       <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'auto'}}>
         SAAS PRODUCTS
         </Typography>
         <Typography variant="body2" color="text.secondary">
         We also offer end-to-end SaaS development services.We combine quick product evolution with code quality and stability,as well as conversion-optimized UX/UI design.
         </Typography>
       </CardContent>}
     </CardActionArea>
</Card>

          </Grid>
          <Grid className='service_res' xs={12} sm={4} md={4} lg={4}  sx={{padding:"30px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea
          onMouseOver={()=>{setFifth_card(true)}}
          onMouseOut={ ()=>{setFifth_card(false)} }
          >
            { fifth_card
                    ?  <img src='https://laqshyainfosoft.com/images/side-banner/desktop-application.png'style={{minHeight:'100%',maxWidth:'100%',height:'16rem'}}></img>:
        <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'auto'}}>
          DESKTOP APPLICATIONS

          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cross-platform desktop app development services focus on building desktop software for Mac, Windows, and Linux, and upgrading it with new functionality.
          </Typography>
        </CardContent>}
      </CardActionArea>
</Card>
          </Grid>
          <Grid className='service_res' xs={12} sm={4} md={4} lg={4}  sx={{padding:"30px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea
          onMouseOver={()=>{setSixth_card(true)}}
          onMouseOut={ ()=>{setSixth_card(false)} }
          >
            { sixth_card
                    ?  <img src='https://thumbs.dreamstime.com/b/software-testing-internet-business-technology-concept-143071525.jpg'style={{minHeight:'100%',maxWidth:'100%',height:'16rem'}}></img>:
        <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'auto'}}>
          TESTING
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We rigorously follow automated testing techniques for making bug free applications.
          </Typography>
        </CardContent>}
      </CardActionArea>
</Card>
          </Grid>
      </Grid>
    </div>
  );
}