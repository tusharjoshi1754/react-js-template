import { Button, Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import './index.less'

const useStyles = makeStyles(theme => ({
    root: {
        background: "black",
    },
    container:{
        paddingTop:20,
        paddingLeft:40,
        paddingBottom:20,
    }

}))
const Footer = (props) => {
    const theme = useTheme();
    const media =  useMediaQuery(theme.breakpoints.down("1000"))
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className={classes.root}>
                <div className={classes.container}>
                <Grid container >
                    <Grid item xs={media? 4 : 2}>
                        <Button size="large" color="secondary" className="bold">reddit</Button>
                    </Grid>
                    <Grid item xs={media? 4 :2}>

                        <Button size="large" color="secondary" className="bold">Twitter</Button>

                    </Grid>
                    <Grid item xs={media? 4 :2}>

                        <Button size="large" color="secondary" className="bold">facebook</Button>

                    </Grid>
                </Grid>
                </div>
               
            </div>
        </React.Fragment>
    );
};

export default Footer;
