import { Box, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { PeopleAltOutlined, } from '@material-ui/icons';
import React from 'react';
import assets from '../../assets';
import CustomCarousel from '../common/CustomCarousel'

const useStyles = makeStyles(theme => ({
  image: {
    width: 600,
    borderRadius: 50,
    padding: 20,
    [theme.breakpoints.down("1000")]: {
      width: 400
    }
  },
  container: {
    padding: '15%'
  },
  root: {
    background: "#1B1F26",
  },
  white: {
    color: theme.palette.common.white,
    fontWeight: "800",
    marginTop: 30,
    lineHeight: 1.2,

  },
  white2: {
    color: theme.palette.common.white,
    marginTop: 30,
    lineHeight: 1.2,
    fontWeight: 400,
  },
  gray: {
    color: "#ddd"
  },
  links: {
    color: "#21bbb3",
    padding: 10,
    display: "block",
    fontWeight: 800
  },
  MainHaider: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center'
  },
  ImgTag: {
    borderRadius: '50%',
    height: 185,
    width:185,
    objectFit:'cover'
  },
  TeamDetail: {
    color: theme.palette.common.white,
    fontWeight: "800",
    marginTop: 30,
    lineHeight: 1.2,
    display: 'flex',
    justifyContent: 'center',
  },
  teamName: {
    color: theme.palette.common.white,
    fontWeight: "800",
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 1.2,
    display: 'flex',
    justifyContent: 'center',
  },
  PhoneimgTag: {
    borderRadius: '50%',
    height: 150
  },
  TeamConTainer:{
    marginBottom:50
  }

}))
export default function BaseComponent(props) {
  const classes = useStyles()
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("1000"))
  return <div className={classes.root}>
    <Grid container>
      <Grid item xs={media ? 12 : 6}>
        <Container className={classes.container} id="about-us-sect">
          {/* <Chip label="About Us" clickable style={{backgroundColor: "#21bbb3", color:"#fff"}} /> */}
          <Typography className={classes.white} variant={media ? 'h6' : 'h4'}>About Us</Typography>
          {/* <Typography className={classes.gray}>Three simple functions occur during each trade</Typography> */}
          <List>
            <ListItem className>
              <ListItemAvatar>
                <PeopleAltOutlined color="secondary"></PeopleAltOutlined>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h5" className={classes.white}>
                  Reflection
                </Typography>
                <Typography className={classes.gray}>
                  4% is reflected to all holders for passive income
                </Typography>

              </ListItemText>
            </ListItem>
            <ListItem className>
              <ListItemAvatar>
                <PeopleAltOutlined color="secondary"></PeopleAltOutlined>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h5" className={classes.white}>
                  Liavidity  pool
                </Typography>
                <Typography className={classes.gray}>
                  4% is reflected to all holders for passive income
                </Typography>

              </ListItemText>
            </ListItem>
            <ListItem className>
              <ListItemAvatar>
                <PeopleAltOutlined color="secondary"></PeopleAltOutlined>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h5" className={classes.white}>
                  Dev wallet
                </Typography>
                <Typography className={classes.gray}>
                  2% is reflected to all holders for passive income
                </Typography>

              </ListItemText>
            </ListItem>
            <ListItem className>
              <ListItemAvatar>
                <PeopleAltOutlined color="secondary"></PeopleAltOutlined>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h5" className={classes.white}>
                  Burn wallet
                </Typography>
                <Typography className={classes.gray}>
                  5% is reflected to all holders for passive income
                </Typography>

              </ListItemText>
            </ListItem>
          </List>
        </Container>
      </Grid>
      <Grid item xs={6} style={{display: 'flex', alignItems: 'center'}}>
        <img src={assets.image} className={classes.image} alt="" />
      </Grid>
      
    </Grid>
    <Container id="team-sect" className={classes.TeamConTainer}>
      <h1 className={classes.MainHaider}>Meet The Team</h1>
      <Grid container>

        <Grid item xs={media ? 12 : 4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img src={assets.ceo} className={media ? classes.PhoneimgTag : classes.ImgTag} alt=""></img>
            <Container>
              <Typography variant="h6" className={classes.TeamDetail}>
                CEO
              </Typography>
              {/* <Typography variant="subtitle1" className={classes.teamName}>
                Mr.joan
              </Typography>
              <Typography variant="body" className={classes.white2}>
                Community Focused and fair launch. The dev team burned all of their tokens and participated with everyone else.
              </Typography> */}
            </Container>
          </Box>
        </Grid>
        <Grid item xs={media ? 12 : 4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img src={assets.cto} className={media ? classes.PhoneimgTag : classes.ImgTag} alt=""></img>
            <Container>
              <Typography variant="h6" className={classes.TeamDetail}>
                CTO
              </Typography>
              {/* <Typography variant="subtitle1" className={classes.teamName}>
                Mr.joan
              </Typography>
              <Typography variant="body" className={classes.white2}>
                Community Focused and fair launch. The dev team burned all of their tokens and participated with everyone else.
              </Typography> */}
            </Container>
          </Box>
        </Grid>
        <Grid item xs={media ? 12 : 4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img src={assets.marketing} className={media ? classes.PhoneimgTag : classes.ImgTag} alt=""></img>
            <Container>
              <Typography variant="h6" className={classes.TeamDetail}>
                Marketing
              </Typography>
              {/* <Typography variant="subtitle1" className={classes.teamName}>
                Mr.joan
              </Typography>
              <Typography variant="body" className={classes.white2}>
                Community Focused and fair launch. The dev team burned all of their tokens and participated with everyone else.
              </Typography> */}
            </Container>
          </Box>
        </Grid>

      </Grid>
    </Container>
    <Container id="products-sect">
      <h1 className={classes.MainHaider}>Upcoming Products</h1>
      {/* <Grid container>
                <Grid item xs={6}>
                    <Container maxWidth="md">
                        <Box >
                            <Typography variant="h4">
                            The SafeMoon Exchange
                            </Typography>
                            <Typography variant="body">
                            The SafeMoon exchange is a revolutionary new idea that will bring tokenomics to all of crypto on its platform. We call this Cryptonomics.


                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid> */}
    
    <CustomCarousel />
    </Container>
  </div>
}