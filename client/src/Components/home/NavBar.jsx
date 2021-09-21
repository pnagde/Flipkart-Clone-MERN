import React, { useState } from 'react'
import { navData } from '../../Assests/data'
import { Box, Typography, makeStyles ,Menu,MenuItem} from '@material-ui/core'
// import CustomDropDown from '../CustomDropDown'

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
    },
    image: {
        width: 64,
    },
    text: {
        fontSize: 14,
        fontWeight: 500,
    }
})
export default function NavBar() {
    const classes = useStyle();

//     const [anchorEl, setAnchorEl] = useState(null);
//   const [open, setOpen] = useState(false);

    // const state = {
    //     anchorEl: null,
    //     open: false,
    //   };
    //   const handleClick = (event) => {
    //     setState({ open: true, anchorEl: event.currentTarget });
    //   };
    const menuItem = ['women', 'mens', 'top wear'];

    return (
        <Box className={classes.components}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img src={data.url} alt="" className={classes.image}/>
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )  
}
