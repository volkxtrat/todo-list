import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  Toolbar: {
    marginBottom: "1rem"
  }
}));

function TitleToolbar({
  isMargin,
  primary,
  variantPrimary,
  secondary,
  variantSecondary,
  children
}) {
  const classes = useStyles();
  return (
    <>
      <Toolbar className={classNames({ [classes.Toolbar]: isMargin })}>
        <Grid container direction="row" alignItems="center">
          <Grid container style={{ flex: 1 }} alignItems="center">
            <Typography
              noWrap
              variant={variantPrimary}
              style={{ marginRight: ".5rem" }}
            >
              {primary}
            </Typography>
            <Typography noWrap variant={variantSecondary}>
              {secondary}
            </Typography>
          </Grid>
          {children}
        </Grid>
      </Toolbar>
      {/* <Divider className={classes.Toolbar} variant="fullWidth" /> */}
    </>
  );
}

TitleToolbar.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  variantSecondary: PropTypes.string,
  variantPrimary: PropTypes.string
};
TitleToolbar.defaultProps = {
  primary: "Title",
  variantPrimary: "h5",
  variantSecondary: "subtitle1"
};

export default TitleToolbar;
