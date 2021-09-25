import React from 'react'
import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from '@material-ui/core'
import { useState } from 'react';
import { authenticateSignup ,authenticateLogin} from '../../service/API';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh'
    },
    error:{
        fontSize:10,
        color:'#ff6161',
        fontWeight:600
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2870f0',
        backgroundPosition: 'center 85%',
        width: '40%',
        padding: 45,
        '& > *': {
            fontWeight: 600,
            color: '#ffffff'
        }
    },
    login: {
        padding: '25px 35px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
    },
    text: {
        color: '#878787',
        fontSize: 12,
        marginTop: 20,
        marginBottom: 20
    },
    loginbtn: {
        textTransform: 'none',
        background: '#fB641B',
        color: '#ffffff',
        borderRadius: 2,
        marginTop:'auto',

    },
    createtext: {
        marginTop: 'auto',
        color: '#2870f0',
        paddingTop: 10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 600,
        cursor: 'pointer'
    },
    requestbtn: {
        textTransform: 'none',
        color: '#2870f0',
        background: '#ffffff',
        fontSize: 12,
        boxShadow: '0 0 0 20%',
    }
})

const initialValue={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations',
    },
    singup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your mobile number to get started",
    }
}
const signupInitialObject={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:"",
}
const loginInitial={
    username:"",
    password:"",
}
export default function Login({ open, setOpen,setAccount}) {
    const classes = useStyle();
    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValue.login);
    }
    const [account, toggleAccount] = useState(initialValue.login);
    const [singup,setSignup]=useState(signupInitialObject);
    const [login,setLogin]=useState(loginInitial);
    const [error,setError]=useState(false);

    const toggleUserAccount=()=>{
        toggleAccount(initialValue.singup);
    }
    const url = "https: //static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";

    const onInputChange=(e)=>{
        setSignup({...singup, [e.target.name]:e.target.value});
    }
    const signupUser = async ()=>{
        let response = await authenticateSignup(singup);
        if(!response) return;
        handleClose();
        setAccount(singup.username);
    }
    const loginUser =async ()=>{
        let response= await authenticateLogin(login);
        if(!response){
            setError(true);
            return;
        }
        handleClose();
        setAccount(login.username);
    }
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent className={classes.component}>
                    <Box style={{ display: 'flex' }}>
                        <Box className={classes.image}>
                            <Typography variant="h5">{account.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                        </Box>
                        {
                            account.view === 'login' ?

                                <Box className={classes.login}>
                                    <TextField onChange={(e)=>onValueChange(e)}  name='username' label='Enter Email/Mobile Number'></TextField>
                                    <TextField onChange={(e)=>onValueChange(e)}  name='password' label='Enter Password'></TextField>
                                    {
                                        error && <Typography className={classes.error}>invalid username or password</Typography>
                                    }
                                    <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                    <Button variant="contained" className={classes.loginbtn} onClick={()=>loginUser()}>Login</Button>
                                    <Typography style={{ textAlign: 'center' }} className={classes.text}>OR</Typography>
                                    <Button variant="contained" className={classes.requestbtn} >Request OTP</Button>
                                    <Typography onClick={()=>toggleUserAccount()} className={classes.createtext}>New to Flipkart? Create an Account</Typography>
                                </Box> :
                                <Box className={classes.login}>
                                    <TextField onChange={(e)=>onInputChange(e)} name='firstname' label='Enter Firstname'></TextField>
                                    <TextField  onChange={(e)=>onInputChange(e)}  name='lastname' label='Enter Lastname'></TextField>
                                    <TextField  onChange={(e)=>onInputChange(e)}  name='username' label='Enter Username'></TextField>
                                    <TextField  onChange={(e)=>onInputChange(e)}  name='email' label='Enter Email'></TextField>
                                    <TextField  onChange={(e)=>onInputChange(e)}  name='password' label='Enter Password'></TextField>
                                    <TextField onChange={(e)=>onInputChange(e)}  name='phone' label='Enter Mobile Number'></TextField>
                                    <Button variant="contained" className={classes.loginbtn} onClick={()=>signupUser()}>Sign Up</Button>
                                </Box>
                        }
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    )
}
