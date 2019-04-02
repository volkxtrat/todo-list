import React, { useState } from "react";
import PropTypes from "prop-types";
import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { NavLink } from "react-router-dom";

import { items } from "../Drawer/DrawerLinkList/DrawerLinkList";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "56px",
    minHeight: "56px"
  }
}));

const BottomNavigation = () => {
  const [value, setValue] = useState();
  const classes = useStyles();

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <MuiBottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      {items.map(item => {
        const ItemIcon = item.IconComponent;
        return (
          <BottomNavigationAction
            key={item.path}
            component={NavLink}
            label={item.title}
            value={item.path}
            icon={<ItemIcon />}
            to={item.path}
          />
        );
      })}
    </MuiBottomNavigation>
  );
};

BottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default BottomNavigation;
