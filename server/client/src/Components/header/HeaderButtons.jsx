import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Link} from 'react-router-dom'
import { useState ,useContext} from 'react';
import {LoginContext} from '../../context/ContextProvider';
import Profile from '../profile/Profile';

//components
import LoginDialog from '../login/Login';

const useStyle = makeStyles({
    login: {
        backgroundColor: '#ffffff',
        color: '#2874f0',
        borderRadius: 1,
        textTransform: 'none',
        fontWeight: 600,
        padding: '5px 40px',
        boxShadow:'none',
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems:'center',
            textDecoration:'none',
            color:'#fff'
        }
    },
    container:{
        display:'flex',
    }
})

export default function HeaderButtons() {
    const classes = useStyle();
    const [open,setOpen]=useState(false);
    const openLoginDialog=()=>{
        setOpen(true);
    }
    const {account,setAccount}=useContext(LoginContext);
    return (
        <Box className={classes.wrapper}>
            {
                account?<Profile account={account} setAccount={setAccount}/>:
                <Link to='/'>
                    <Button className={classes.login} onClick={()=>openLoginDialog()} variant="contained">Login</Button>
                </Link>
            }
            <Typography style={{marginTop:5,cursor:'pointer'}}>More<DownIcon style={{fontSize:15}}/></Typography>
            <Link to="/cart" className={classes.container}>
                <Badge badgeContent={4} color="error">
                    <ShoppingCartIcon />
                </Badge><Typography style={{marginLeft:10}}> Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
    )
}
