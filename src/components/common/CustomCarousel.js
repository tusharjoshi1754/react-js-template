import React from "react";
import './CarouselStyle.less'
import { Card, CardContent, CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* const data = [
    <Card component={Paper}  >
        <CardContent>
            <Grid container>
                <Grid item xs={6}>
                    <CardMedia image={`https://picsum.photos/800/600?random=2`} style={{ paddingTop: '100%' }} className='ProductImg' />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" className='ProductTitle'>
                        Uke Play
                    </Typography>
                </Grid>
            </Grid>
            <Typography className='productDec'>
                Ukp play, the best place to the best games.
            </Typography>
        </CardContent>
    </Card>,
    <Card component={Paper} >
        <CardContent>
            <Grid container>
                <Grid item xs={6}>
                    <CardMedia image={`https://picsum.photos/800/600?random=2`} style={{ paddingTop: '100%' }} className='ProductImg' />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" className='ProductTitle'>
                        Uke Games
                    </Typography>
                </Grid>
            </Grid>
            <Typography className='productDec'>
                Upcoming Uke games.
            </Typography>
        </CardContent>
    </Card>,
    <Card component={Paper} >
        <CardContent>
            <Grid container>
                <Grid item xs={6}>
                    <CardMedia image={`https://picsum.photos/800/600?random=${1}`} style={{ paddingTop: '100%' }} className='ProductImg' />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" className='ProductTitle'>
                        Wallet
                    </Typography>
                </Grid>
            </Grid>
            <Typography className='productDec'>
                A secure place to store and trade your Uke.
            </Typography>
        </CardContent>
    </Card>,
    <Card component={Paper}  >
        <CardContent>
            <Grid container>
                <Grid item xs={6}>
                    <CardMedia image={`https://picsum.photos/800/600?random=2`} style={{ paddingTop: '100%' }} className='ProductImg' />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" className='ProductTitle'>
                        Uke Play
                    </Typography>
                </Grid>
            </Grid>
            <Typography className='productDec'>
                Ukp play, the best place to the best games.
            </Typography>
        </CardContent>
    </Card>,
    <Card component={Paper} >
        <CardContent>
            <Grid container>
                <Grid item xs={6}>
                    <CardMedia image={`https://picsum.photos/800/600?random=2`} style={{ paddingTop: '100%' }} className='ProductImg' />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" className='ProductTitle'>
                        Uke Games
                    </Typography>
                </Grid>
            </Grid>
            <Typography className='productDec'>
                Upcoming Uke games.
            </Typography>
        </CardContent>
    </Card>,
]
 */


const CustomCarousel = () => {

    // const [carousel, setCarousel] = useState(data)
    // useEffect(() => {
    //     const interval = setInterval(arrayloop, 3000)
    //     return () => clearInterval(interval)
    // }, [carousel])
    // const arrayloop = () => {

    //     let temp = carousel[0];
    //     let newdata = carousel.slice(1, carousel.length)
    //     setCarousel([...newdata, temp])
    // }
    // const theme = useTheme();
    // const media = useMediaQuery(theme.breakpoints.down("1025"))
    const settings = {
        centerMode: true,
        dots: true,
        arrows: true,
        swipe: true,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        centerPadding: "15%",
        speed: 500,
        autoplay:true,
    };
    return (
        <React.Fragment>
            <div className="MainDiv">
                {/* <Carousel cols={3} rows={1} gap={10} loop>
                    {
                        carousel.map((Component, index) => (
                            <Carousel.Item key={index} style={{ transform: index === 1 ? 'scale(1.2)' : 'scale(0.8)' }}>
                                <div className={media ? "" : ((index === 0 || index % 3 === 0) ? 'lelfsideImg' : index % 3 == 2 ? 'RightSideImg' : "centerDiv")}>
                                    {Component}
                                </div>
                            </Carousel.Item>
                        ))

                    }
                </Carousel> */}

                <Slider {...settings}>

                    <Card component={Paper} style={{ width: 350 }}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <CardMedia image={`https://picsum.photos/800/600?random=${1}`} style={{ paddingTop: '100%' }} className='ProductImg' />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h4" className='ProductTitle'>
                                        Wallet
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography className='productDec'>
                                A secure place to store and trade your Uke.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card component={Paper} >
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <CardMedia image={`https://picsum.photos/800/600?random=2`} style={{ paddingTop: '100%' }} className='ProductImg' />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h4" className='ProductTitle'>
                                        Uke Games
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography className='productDec'>
                                Upcoming Uke games.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card component={Paper}  >
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <CardMedia image={`https://picsum.photos/800/600?random=2`} style={{ paddingTop: '100%' }} className='ProductImg' />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h4" className='ProductTitle'>
                                        Uke Play
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography className='productDec'>
                                Ukp play, the best place to the best games.
                            </Typography>
                        </CardContent>
                    </Card>
                </Slider>
            </div>

        </React.Fragment>
    );
};

export default CustomCarousel;
