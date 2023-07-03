import React from 'react'
import Card from './Card'
import MediaControlCard from './Card'

function Ourservices() {
  return (
    <div>
    <div className='service_container'>
        <div className='story_row'>
            <div className='story_col'>
                <div className='home_header'>
                    <p className='story_h4' style={{webkitTransform:'translateY(0)',opacity:'1',
                    marginBottom:'0.8rem',
                    marginTop:'0px',
                    color:'#fff'
                }}>our services</p>
                 <p className='story_p' style={{webkitTransform:'translateY(0)',opacity:'1',
                        marginBottom:'0.8rem',
                        color:'#eee',textAlign:'center'
                    }}>
Delivering domain expertise and technology-driven offerings to help you turn digital challenges into opportunities.</p>
                <MediaControlCard/>
                </div>
            </div>
        </div>
    </div>
    {/* <MediaControlCard/> */}

</div>
  )
}

export default Ourservices