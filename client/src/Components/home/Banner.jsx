import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {bannerData} from '../../Assests/banner'
import {makeStyles} from '@material-ui/core'

const useStyle=makeStyles(({
    image:{
        width:'100%',
        height:280,
    },
    carousel:{
    }
}))

export default function Banner() {
    const classes=useStyle();
    return (
        <Carousel 
        autoPlay={true} 
        animation={'slide'}
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                backgroundColor:'#ffffff',
                color:'#454545',
                borderRadius:2,
                margin:0,
                height:100,
            }
        }}
        className={classes.carousel}
        >
            {
                bannerData.map(image=>(
                    <img src={image} alt="" className={classes.image}/>
                ))
            }
        </Carousel>
    )
}
