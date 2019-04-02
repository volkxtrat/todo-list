import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const DrawerList = ({
  classes,
  headerText,
  headerComponent,
  children,
  ...props
}) => {
  const defaultHeader = (
    <ListSubheader component="div">{headerText}</ListSubheader>
  );
  const newHeader = headerComponent;
  const header = newHeader ? newHeader : defaultHeader;
  return (
    <List
      component="nav"
      subheader={header}
      className={classes.root}
      {...props}
    >
      {children}
    </List>
  );
};

DrawerList.propTypes = {
  classes: PropTypes.object.isRequired,
  headerText: PropTypes.string
};

export default withStyles(styles)(DrawerList);
