import { Typography } from '@mui/material'
import React from 'react'
import { Grid } from 'swiper'
import { Icon } from '@iconify/react';
function Location() {
  return (
    <div style={{paddingLeft:'6rem',paddingRight:'6rem'}}>
        <Typography sx={{fontSize:'24px',color:'#342e39',marginBottom:"1rem",marginTop:'1rem'}}>World Wide Location</Typography>
        {/* <Grid> */}
          <p style={{fontWeight:"700",fontSize:'16px',marginBottom:'0',color:'#342e39',fontFamily:'Gordita,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif'}}>Mandapeta</p>
          <p style={{color:"#a7a5a9",marginBottom:'0',lineHeight:'2rem'}}>D.No.4-7-1,
Tarvanipeta,
Mandapeta,<br></br>
East Godavari,
Pincode: 533308,<br></br>
Andhra Pradesh,
INDIA.</p>
<p style={{color:"#342e39"}}><Icon icon="system-uicons:location" color="#342e39" width="20" height="20" /> View map</p>
        {/* </Grid> */}
    </div>
  )
}

export default Location