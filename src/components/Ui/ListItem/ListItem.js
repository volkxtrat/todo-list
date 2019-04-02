import React from "react";
import { ListItem as MuiListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  ListItem: {
    "&:focus": {
      background: "transparent"
    }
  }
}));

function ListItem({ children, ...props }) {
  const classes = useStyles();

  return (
    <MuiListItem className={classes.ListItem} {...props}>
      {children}
    </MuiListItem>
  );
}

export default ListItem;
