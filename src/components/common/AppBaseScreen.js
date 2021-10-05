import { AppBar, Toolbar, Link, Box, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import assets from "../../assets";
import './index.less'

const AppBaseScreen = (props) => {
  const {
    children,
    showHeader,
  } = props;
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("1000"))
  return (
    <React.Fragment>
      {showHeader && (
        <AppBar >
          <Toolbar className="main_appBar">
            <Box>
              <img src={assets.Logo} height="50" alt="" ></img>
            </Box>
            <Box flexGrow={media ? 0 : 1} />

            <Box minWidth={media ? 300 : 450} display="flex" justifyContent="space-between" className='manuSection'>
              <Link className="manu_Link" href="#" underline="none" color="white" >
                Home
              </Link>
              <Link className="manu_Link" href="#about-us-sect" underline="none" color="white" >
                About Us
              </Link>
              <Link className="manu_Link" href="#team-sect" underline="none" color="white" >
                Meet the team
              </Link>
              <Link className="manu_Link" href="#products-sect" underline="none" color="white" >
                Product
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      )}

      <div className="body">
        {children}
      </div>
    </React.Fragment>
  );
};
AppBaseScreen.propTypes = {
  children: PropTypes.any,
  footerItems: PropTypes.array,
  toolbarLeftItem: PropTypes.array,
  toolbarRightItem: PropTypes.array,
  showHeader: PropTypes.bool,
};
AppBaseScreen.defaultProps = {
  showHeader: true,
};
export default AppBaseScreen;
