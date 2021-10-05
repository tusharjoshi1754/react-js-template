import React from "react";
import "./index.less";
import AppBaseScreen from "../common/AppBaseScreen";
import { Box, Button, Grid, Typography, useTheme ,useMediaQuery} from "@material-ui/core";
import assets from '../../assets'
import BaseComponent from "./BaseComponent";
import Footer from "../common/footer";

const Home = (props) => {
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("1000"))
  return (
    <AppBaseScreen>
      <div className="contener">
        <div className="Main_header">
            <Grid container >
              <Grid item xs={media ? 12 : 6}>
              <p className="text_par">Welcome to</p>  
              <div className="Div_text" id='typing'>UKE</div>
              <p className="par_line">The Fastest Growing Crypto Community on Earth</p>
              <Box width="50%" display='flex' justifyContent="space-between">
                <Button size={media?'small':'large'} className="Btn_buyNow" variant="contained">Buy Now</Button>  
                <Button size={media?'small':'large'} color="secondary" className="bold">Swap</Button>  
                <Button size={media?'small':'large'} color="secondary" className="bold">Live Chat</Button>  
              </Box>
              </Grid>
              <Grid item xs={6}>
              </Grid>
            </Grid>
        </div>
        <Box width="100%" maxHeight="800px" overflow="hidden" position="absolute" top="0" left="0" right="0" zIndex="1" >
        <video autoPlay loop muted className="Video_player"> 
            <source src={assets.video} type="video/mp4"/>
          </video>
        </Box>
        <div className="Text_nowrap">
        <Grid container justify='center'  >
            <Grid item xs={media? 12 : 2}>
                <p>Token price</p>
                <Typography color="secondary">0.0000001284</Typography>
            </Grid>
            <Grid item xs={media? 12 : 2}>
                <p>Holders</p>
                <Typography color="secondary">0.0000001284</Typography>
            </Grid>
            <Grid item xs={media? 12 : 2}>
                <p>Token Burned</p>
                <Typography color="secondary">0.0000001284</Typography>
            </Grid>
            <Grid item xs={media? 12 : 2}>
                <p>Circulating</p>
                <Typography color="secondary">0.0000001284</Typography>
            </Grid>
            <Grid item xs={media? 12 : 2}>
                <p>Market Cap</p>
                <Typography color="secondary"> 0.0000001284</Typography>
            </Grid>
        </Grid>
        </div>
        <BaseComponent />
        <Footer/>
      </div>
    </AppBaseScreen>
  );
};
export default Home;
