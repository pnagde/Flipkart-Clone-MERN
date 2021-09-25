import {React} from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import Countdown from 'react-countdown'
import { Button } from '@material-ui/core';
import { Divider } from '@material-ui/core';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const useStyle = makeStyles({
    image: {
        height: 150,
    },
    component: {
        marginTop: 5,
        backgroundColor: '#ffffff',
    },
    deal: {
        padding: 10,
        display: 'flex',
        height: 50
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25,

    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        alignItems: 'center',
        display: 'flex'
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13,
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    wrapper: {
        padding: '25px 15px',
    },
    link:{
        textDecoration:'none'
    }
})
export default function Slide({ timer , title,products}) {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>;
    };


    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                    timer && <>
                        <img src={timerURL} alt="" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        <Button variant='contained' color='primary' className={classes.button}>View All</Button>
                    </>
                }
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`}  className={classes.link}>
                        <Box textAlign='center' className={classes.wrapper}>
                            <img src={product.url} alt="" className={classes.image} />
                            <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Typography>
                            <Typography className={classes.text} style={{ color: 'green' }}>{product.discount}</Typography>
                            <Typography className={classes.text} style={{ color: '#212121', opacity: 0.6 }}>{product.tagline}</Typography>
                        </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>
    )
}
