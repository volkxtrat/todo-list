import React from "react";

import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, IconButton, Divider, Grid } from "@material-ui/core";
import classNames from "classnames";
import MenuIcon from "@material-ui/icons/Menu";

import size from "../../theme/constants";
import withUi from "../../hoc/withUi";
import { toggleLeftDrawer } from "../../store/actions/ui";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    height: size.header.height
  },
  appBar: {
    boxShadow: "none"
  },
  appBarDefault: {
    background: theme.palette.background.paper
  },
  appBarPrimary: {
    background: theme.palette.primary.main
  },
  appBarSecondary: {
    background: theme.palette.secondary.main
  },
  IconButton: {
    paddingLeft: 4,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const Header = ({ toggleLDrawer }) => {
  const classes = useStyles();

  const classesAppBar = {
    root: classNames(classes.root, classes.appBar),
    colorPrimary: classes.appBarPrimary,
    colorSecondary: classes.appBarSecondary,
    colorDefault: classes.appBarDefault
  };
  const classesToolbar = {
    root: classes.root
  };

  return (
    <AppBar color="default" position="static" classes={classesAppBar}>
      <Toolbar variant="dense" disableGutters classes={classesToolbar}>
        <Grid container className={classes.IconButton}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleLDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default connect(
  null,
  dispatch => ({ toggleLDrawer: () => dispatch(toggleLeftDrawer()) })
)(Header);
