import { Typography } from '@mui/material'
import React from 'react'
import Slider from './Slider'

function SuccesStory() {
  return (
    <div style={{padding:"1rem 0"}}>
        <div className='story_container'>
            <div className='story_row'>
                <div className='story_col'>
                    <div className='home_header'>
                        <p className='story_h4' style={{webkitTransform:'translateY(0)',opacity:'1',
                        marginBottom:'0.8rem',
                        color:'#342e39'
                    }}>complete client success</p>
                    <p className='story_p' style={{webkitTransform:'translateY(0)',opacity:'1',
                        marginBottom:'0.8rem',
                        color:'#76747A',textAlign:'center'
                    }}>
                    When it comes to digital transformation, why settle for a vendor when what you need is a partner? Someone who understands your industry and your company and how to execute your strategy efficiently and completely. Someone you can count on to deliver essential solutions and measurable results again and again. Actimize is that partner.
                    </p>
                    <Slider/>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default SuccesStory