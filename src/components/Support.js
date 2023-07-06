import { Typography } from '@mui/material'
import React from 'react'

function Support() {
  return (
    <div className='content' style={{bsGutterx: '1.5rem',
        bsGuttery: '0',
        width: "100%",
        paddingRight: 'calc(var(bsGutterx) * .5)',
        paddingLeft: 'calc(var(bsGuttery) * .5)',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom:'10px',
        marginTop:'10px'}}>
    <div style={{position: 'relative',
    zIndex: 1,
    borderRadius: "30px",
    textAlign: "center",
    padding: '70px',
    backgroundColor: '#ff612f'}}>
    <Typography sx={{textAlign:'center',fontSize:'40px',fontWeight:'500',maxWidth:'610px',color:'#fff'}}>We always try to be the best support to you as possible</Typography>
    <Typography sx={{color:'#fff',fontSize:'16px',lineHeight:"26px",fontWeight:"400",
  marginBottom:"15px",fontFamily:"Hind,sans-serif"}}>Qualify your leads & recognize the value of word your customer will love you</Typography>
    </div>
    </div>
  )
}

export default Support