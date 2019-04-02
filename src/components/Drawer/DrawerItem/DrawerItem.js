import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../Ui/ListItem/ListItem";
import { ListItemIcon, ListItemText } from "@material-ui/core";

const DrawerItem = ({
  iconItem,
  iconItemProps,
  primary,
  secondary,
  variantPrimary,
  variantSecondary,
  fontSizeItemIcon,
  children
}) => {
  const IconItem = iconItem;
  return (
    <ListItem button color="secondary">
      {IconItem && (
        <ListItemIcon {...iconItemProps}>
          <IconItem fontSize={fontSizeItemIcon} />
        </ListItemIcon>
      )}
      <ListItemText
        primary={primary}
        secondary={secondary}
        primaryTypographyProps={{
          noWrap: true,
          variant: variantPrimary
        }}
        secondaryTypographyProps={{
          noWrap: true,
          variant: variantSecondary
        }}
      />
      {children}
    </ListItem>
  );
};

DrawerItem.propTypes = {
  iconItemProps: PropTypes.object,
  primary: PropTypes.string,
  secondary: PropTypes.string,
  variantPrimary: PropTypes.string,
  variantSecondary: PropTypes.string,
  fontSizeItemIcon: PropTypes.string
};

export default DrawerItem;
