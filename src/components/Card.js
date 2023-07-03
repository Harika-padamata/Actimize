import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useEffect, useState } from 'react'


export default function ActionAreaCard() {
  const [first_card ,setFirst_card] = useState(false)
const [ isHovered, setIsHovered ] = useState( false );

  return (
    <div>
      <Grid container columns={12}>
        <Grid className='service_res' xs={12} sm={4}  sx={{padding:"50px"}}>
        <Card id='first_card' sx={{width:'100%',height:'16rem'}}>
        <CardActionArea
        onMouseOver={()=>{setFirst_card(true)}}
        onMouseOut={ ()=>{setFirst_card(false)} }
        >
       { first_card
                    ?  <img src='https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2021/web2-1640671232.jpg'style={{minHeight:'100%',maxWidth:'100%',height:'16rem'}}></img>:
                    <CardContent sx={{display:'flex'}}>
      <div>
      <Typography gutterBottom variant="h5" component="div">
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
          <Grid className='service_res' xs={12} sm={4}  sx={{padding:"50px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea 
          // onMouseOver={ handleMouseOver }
          // onMouseOut={ handleMouseOut }
          >
            { isHovered
                    ?  <img src='https://www.analyticsinsight.net/wp-content/uploads/2020/08/143-1024x559.jpg'style={{minHeight:'100%',maxWidth:'100%',height:'16rem'}}></img>:
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        MOBILE APPS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Mobile app development services cover end-to-end development of mobile apps, from business analysis and UI/UX design to mobile application testing and deployment.        </Typography>
      </CardContent>}
    </CardActionArea>
</Card>
          </Grid> 
          <Grid className='service_res' xs={12} sm={4}  sx={{padding:"50px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          CLOUD APPLICATIONS 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cloud app development implies building apps that run in the cloud and may leverage cloud features and services offered by cloud vendors.
          </Typography>
        </CardContent>
      </CardActionArea>
</Card>

          </Grid>
          <Grid className='service_res' xs={12} sm={4}  sx={{padding:"50px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea>
       
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         SAAS PRODUCTS
         </Typography>
         <Typography variant="body2" color="text.secondary">
         We also offer end-to-end SaaS development services.We combine quick product evolution with code quality and stability,as well as conversion-optimized UX/UI design.
         </Typography>
       </CardContent>
     </CardActionArea>
</Card>

          </Grid>
          <Grid className='service_res' xs={12} sm={4}  sx={{padding:"50px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          DESKTOP APPLICATIONS

          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cross-platform desktop app development services focus on building desktop software for Mac, Windows, and Linux, and upgrading it with new functionality.
          </Typography>
        </CardContent>
      </CardActionArea>
</Card>
          </Grid>
          <Grid className='service_res' xs={12} sm={4}  sx={{padding:"50px"}}>
          <Card sx={{width:'100%',height:'16rem'}}>
          <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          TESTING
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We rigorously follow automated testing techniques for making bug free applications.
          </Typography>
        </CardContent>
      </CardActionArea>
</Card>
          </Grid>
      </Grid>
    </div>
  );
}