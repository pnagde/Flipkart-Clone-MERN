import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getProductDetails } from '../../redux/actions/productActions';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        marginTop: 55,
        background: '#f2f2f2',
    },
    container: {
        margin: '0 80px',
        display: 'flex',
    }
})

export default function DetailView({match}) {

    const classes = useStyle();
    const { product } = useSelector(state => state.getProductDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch]);
    return (
        <Box className={classes.component}>
            {
                product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box style={{ width: '40%' }}>
                    </Box>
                    <Box>
                        <Typography>
                            {product.title.longTitle}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    )
}
