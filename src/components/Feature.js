import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate,useLocation, useParams } from 'react-router-dom';


const randompics = 
  {FoodApp:'https://res.cloudinary.com/dm4shtxix/image/upload/v1657947351/mobile-food-min_1_d3oln2.png',
  JewelleryApp:"https://assets.thehansindia.com/h-upload/2020/01/10/1600x960_253136-gold0.jpg",
  EventsApp:"https://www.udiscovermusic.com/wp-content/uploads/2023/06/Metallica-Paul-Bergen-copy-1-1000x600.jpg",
  GreengroceryApp:"https://st2.depositphotos.com/4726029/10680/i/950/depositphotos_106802000-stock-photo-vegetables-on-shelf-in-supermarket.jpg",
  MusicApp:"https://i0.wp.com/highonscore.com/wp-content/uploads/2018/10/4e404b828591e.jpg",
  WeddingApp:'https://blog.designa.studio/wp-content/uploads/2022/07/wedding-planner-app.jpg',
  }
function Feature() {
    const param = useParams()

  return (
    <div>
        <Grid container sx={{marginTop:'5%'}}>
            <Grid xs={12} sm={6} sx={{paddingLeft:3}}>
                <Typography variant='h4'>HOW THE APP WORKS</Typography>
                <Typography sx={{fontFamily:'Hind,sans-serif',fontSize:'16px',fontWeight:'400',color:'#6d6e75',lineHeight:'26px',maxWidth:'540px'}}>Application mainly works on 3 basic steps on food which are from starting food ordering to receiving food with a detailed location view.</Typography>
                <Grid container>
                <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        Responsive Design
                        </div>
                        </Grid> 
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        Mobile App Development 
                        </div>
                        </Grid>
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        Angular Web Development
                        </div>
                        </Grid>
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        UI / UX Design
                        </div>
                        </Grid>
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        ionic App Development 
                        </div>
                        </Grid>
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        Payment Management
                        </div>
                        </Grid>

                </Grid>

            </Grid>
            <Grid xs={12} sm={6}>
            <img src={randompics[param.name]} style={{maxWidth:'100%'}}></img>
            </Grid>

        </Grid>
    </div>
  )
}

export default Feature