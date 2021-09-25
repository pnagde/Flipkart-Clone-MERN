import React, { useState } from 'react'
import { navData } from '../../Assests/data'
import { Box, Typography, makeStyles, Menu, MenuItem, Button } from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex';
import styles from './NavMenu.scss'

const useStyle = makeStyles({
    components: {
        display: 'flex',
        margin: '55px 130px 0 130px',
        justifyContent: 'space-between',
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px',
        cursor: 'pointer',
        position:'relative',
    },
    image: {
        width: 64,
    },
    text: {
        fontSize: 14,
        fontWeight: 500,
    },
    content: {
        marginTop: 110,
        margin: '8%',
    },
    menus: {
        color: 'black',
        padding: '12px 16px',
        textDecoration: 'none',
        display: 'block',
    },
    dropdownContent :{
        display: 'none',
        position: 'absolute',
        backgroundColor: '#f1f1f1',
        minWidth: '160px',
        zIndex: 1,
    }
})
export default function NavBar() {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.components}>
                {
                    navData.map(data => (
                        <>
                            <Box className={classes.container}>
                                <img src={data.url} alt="" className={classes.image} />
                                <Typography className={classes.text}>{data.text}</Typography>
                            </Box>
                            <Box className={classes.dropdownContent}>
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </Box>
                        </>
                    ))
                }
            </Box>
        </>
    )
}
