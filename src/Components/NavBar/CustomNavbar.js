import React, { Component } from "react";
import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavBarVitalsLoggedIn from "./NavBarVitalsLoggedIn";
import NavBarVitalsLoggedOut from "./NavBarVitalsLoggedOut";
import Session from "../../service/session.js";
const drawerWidth = 240;
// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const styles = (theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

class CustomNavBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  render() {
    const authtoken = Session.get("token");
    return (
      <div className={this.props.classes.root}>
        <AppBar
          style={{ backgroundColor: "black" }}
          position="fixed"
          className={clsx(this.props.classes.appBar, {
            [this.props.classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar>
            {authtoken ? <NavBarVitalsLoggedIn /> : <NavBarVitalsLoggedOut />}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CustomNavBar);
