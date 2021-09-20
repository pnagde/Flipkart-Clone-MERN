import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import { Box, makeStyles } from '@material-ui/core'
import MidSection from './MidSection'
import { useEffect} from 'react'
// import {products} from '../../Assests/products.js'

import {useSelector,useDispatch} from 'react-redux'
import {productActions as listProducts}  from '../../redux/actions/productActions' 

const useStyle = makeStyles({
    component: {
        padding: 10,
        backgroundColor: '#f2f2f2'
    },
    rightwrapper:{
        background:'#ffffff',
        padding:5,
        width:'100%',
        margin:'5px 0 0 10px',
    }
})


export default function Home() {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const {products}=useSelector(state=>state.getProducts);

    const dispa = useDispatch();
    useEffect(() => {
        dispa(listProducts())
    }, [dispa])
    return (
        <div>
            <NavBar></NavBar>
            <Box className={classes.component}>
                <Banner />
                <Box style={{display:'flex'}}>
                    <Box style={{width:'83%'}}>
                    <Slide 
                    timer={true}
                    title='Deal of the Day'
                    products={products}/>
                    </Box>
                    <Box className={classes.rightwrapper}>
                        <img src={adURL} alt="" style={{width:210,height:'100%'}}/>
                    </Box>
                </Box>
                <MidSection></MidSection>
                <Slide timer={false} title='Discounts for You' products={products}/>
                <Slide timer={false} title='Suggested Items' products={products}/>
                <Slide timer={false} title='Top Offers' products={products}/>
            </Box>
        </div>
    )
}
