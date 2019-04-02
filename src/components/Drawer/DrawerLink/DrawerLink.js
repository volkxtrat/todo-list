import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import DrawerItemSmall from "../DrawerItemSmall/DrawerItemSmall";
import DrawerItem from "../DrawerItem/DrawerItem";
import { typography as _t } from "../../../theme/constants";

const useStyles = makeStyles(theme => ({
  LinkActive: {
    boxShadow: `inset 4px 0 0 ${theme.palette.secondary.main}`,
    background: theme.palette.action.selected
  }
}));

const DrawerLink = ({
  isDrawer,
  path,
  itemComponent,
  children,
  draggProps,
  ...props
}) => {
  const classes = useStyles();
  const ItemComponent = itemComponent;

  const typography = {
    variantPrimary: _t.drawer.variantPrimary,
    variantSecondary: _t.drawer.variantSecondary
  };

  return (
    <NavLink
      to={path}
      style={{ display: "flex" }}
      activeClassName={classes.LinkActive}
      {...draggProps}
    >
      {isDrawer ? (
        <>
          {itemComponent ? (
            <ItemComponent {...props} {...typography} />
          ) : (
            <DrawerItem {...props} {...typography}>
              {children}
            </DrawerItem>
          )}
        </>
      ) : (
        <DrawerItemSmall {...props} {...typography} />
      )}
    </NavLink>
  );
};
DrawerLink.propTypes = {
  isDrawer: PropTypes.bool,
  path: PropTypes.string
};

export default DrawerLink;
