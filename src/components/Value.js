import { Grid, Typography } from '@mui/material'
import React from 'react'

function Value() {
  return (
    <div>   
        <div className='story_row'>
            <div className='story_col'>
                <div className='home_header'>
                    <p className='story_h4' style={{webkitTransform:'translateY(0)',opacity:'1',
                    marginBottom:'0.8rem',
                    marginTop:'0px',
                    color:'#666666'
                }}>Corporate Values </p>
                </div>
            </div>
        </div>
        <Grid container  sx={{textAlign:"center",paddingLeft:'3rem',paddingRight:'3rem',marginTop:"3%"}}>
            <Grid xs={12} sm={6} sx={{position:'relative'}}>
            <img src='https://media.istockphoto.com/id/1345445938/photo/businessman-holding-virtual-light-bulb-and-half-brain-on-blue-bokeh-background-smart-thinking.jpg?s=612x612&w=0&k=20&c=cPUUP6u-sYqnfPs7MWV9TB5N-ZefXxAFjDWvG2akcfs=' style={{height:'100%',width:'100%',objectFit:'cover'}}></img>
            <div style={{position:'absolute',color:'#fff',top:'0px'}}>
    <p style={{fontSize:'38px',paddingLeft:'10px'}}>Ingenious</p>
  </div>
            {/* <figcaption style={{position:'absolute',top:'0',left:'0',width:'100%',height:"100%",color:"#fff"}}>
            <p style={{marginTop:'8rem',zIndex:'1'}}>Ingenious</p>

            </figcaption> */}
            </Grid>
            <Grid xs={12} sm={6} sx={{position:'relative'}}>
            <img src='https://media.istockphoto.com/id/1009934102/photo/were-all-responsible-for-creating-a-better-tomorrow.jpg?s=612x612&w=0&k=20&c=ap3hWDhcFsroOWj41CRaaMKDzEofQ9FcYypWDobVwis=' style={{height:'100%',width:'100%',objectFit:'cover'}}></img>
            <div style={{position:'absolute',color:'#fff',top:'0px'}}>
    <p style={{fontSize:'38px',paddingLeft:'10px'}}>Responsible</p>
  </div>
            </Grid>
            <Grid xs={12} sm={6} sx={{position:'relative'}}>
            <img src='https://media.istockphoto.com/id/1137632555/photo/a-male-hand-with-an-update-cogwheel-inside-a-digital-sphere.jpg?s=612x612&w=0&k=20&c=8OMQkJBW62tyqFe4qvL5R9dsAZvi8l6qxG9lKg5HFKI=' style={{height:'100%',width:'100%',objectFit:'cover'}}></img>
            <div style={{position:'absolute',color:'#fff',top:'0px'}}>
    <p style={{fontSize:'38px',paddingLeft:'10px'}}>Continuous</p>
  </div>
            </Grid>
            <Grid xs={12} sm={6} sx={{position:'relative'}}>
            <img src='https://www.tcnorth.com/wp-content/uploads/2017/03/iStock-615524918-980x653.jpg' style={{height:'100%',width:'100%',objectFit:'cover'}}></img>
            <div style={{position:'absolute',color:'#fff',top:'0px'}}>
    <p style={{fontSize:'38px',paddingLeft:'10px'}}>Confident</p>
  </div>
            </Grid>


        </Grid>
    </div>
  )
}

export default Value