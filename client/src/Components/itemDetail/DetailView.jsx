import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { getProductDetails } from '../../redux/actions/productActions.js';
import { Box,Grid,CircularProgress,Button,makeStyles,Typography} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { getProductById} from '../../service/API';

const useStyle = makeStyles(theme=>({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}))

const DetailView=({ match ,history})=> {

    const classes = useStyle();
    
    const { product } = useSelector(state => state.getProductDetails);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getProductDetails(match.params.id));
    console.log(JSON.stringify(product));
    }, [dispatch]);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <Box className={classes.component}>
            <Box></Box> 
            { product && Object.keys(product).length &&
                <Grid container className={classes.container}> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </Grid>
                </Grid>
            }   
        </Box>
    )
}
export default DetailView;