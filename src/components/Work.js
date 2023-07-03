import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Icon } from '@iconify/react';
import { useNavigate,useLocation, useParams } from 'react-router-dom';

const randompics = 
  {FoodApp:'https://www.volumetree.com/wp-content/uploads/2020/07/Food-Ordering-Aggregator-Platform.png',
  JewelleryApp:"https://www.ammazza.me/wp-content/themes/demotheme/images/NewAssets/mockupv1.webp",
  EventsApp:"https://www.digivents.com/wp-content/uploads/2020/12/beawordl2020_digivents.png",
  GreengroceryApp:"https://bsmedia.business-standard.com/_media/bs/img/article/2019-12/31/full/1577774679-2619.jpg?im=FeatureCrop,width=803,height=452",
  MusicApp:"https://media.graphassets.com/resize=fit:clip,height:600,/output=format:webp/3V6EFbzuQKe5LJeLQPkA",
  WeddingApp:'https://www.hotelierindia.com/cloud/2021/12/06/X0kE3CVe-shutterstock5047297543-1200x800.jpg',
  }

function Work() {
  const param = useParams()

  return (
    <div>
        <Grid container sx={{marginTop:'5%'}}>
        <Grid xs={12} sm={6}>
            <img src={randompics[param.name]} style={{maxWidth:'100%'}}></img>
            </Grid>
            <Grid xs={12} sm={6} sx={{paddingLeft:3}}>
                <Typography variant='h4'>FEATURES OF APP</Typography>
                <Typography sx={{fontFamily:'Hind,sans-serif',fontSize:'16px',fontWeight:'400',color:'#6d6e75',lineHeight:'26px',maxWidth:'540px'}}>Application mainly works on 3 basic steps on food which are from starting food ordering to receiving food with a detailed location view.</Typography>
                <Grid container>
                <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        Customer App 
                        </div>
                        </Grid> 
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        delivery App
                        </div>
                        </Grid>
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        Easy Payment.
                        </div>
                        </Grid>
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        Restaurant App
                        </div>
                        </Grid>
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        Admin Mobile Panel
                        </div>
                        </Grid>
                        <Grid xs={12} sm={6} sx={{padding:1}}>
                        <div className='btn_features'>
                        <Icon icon="ph:seal-check-light" style={{marginRight:'10px'}} />
                        Admin Dashboard
                        </div>
                        </Grid>

                </Grid>

            </Grid>
            

        </Grid>
    </div>
  )
}

export default Work