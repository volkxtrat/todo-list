import React from "react";
import {
  ListItem,
  Badge,
  Grid,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  IconItemClose: {
    margin: 0
  },
  BadgePrimary: {
    background: theme.palette.secondary.main
  }
}));

function DrawerItemSmall({
  primary,
  secondary,
  variantPrimary,
  variantSecondary,
  fontSizeItemIcon,
  iconItem,
  iconItemProps,
  isBadge,
  ...props
}) {
  const classes = useStyles();
  const IconItem = iconItem;

  const classesBadge = {
    colorPrimary: classes.BadgePrimary
  };
  return (
    <ListItem button divider {...props}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Badge
          classes={classesBadge}
          variant="dot"
          invisible={isBadge}
          color="primary"
        >
          <ListItemIcon
            classes={{ root: classes.IconItemClose }}
            {...iconItemProps}
          >
            <IconItem fontSize={fontSizeItemIcon} />
          </ListItemIcon>
        </Badge>
        <ListItemText
          style={{ width: "100%" }}
          primaryTypographyProps={{
            noWrap: true,
            align: "center",
            variant: variantPrimary
          }}
          primary={primary}
          secondaryTypographyProps={{
            noWrap: true,
            align: "center",
            variant: variantSecondary
          }}
          secondary={secondary}
        />
      </Grid>
    </ListItem>
  );
}
DrawerItemSmall.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  variantPrimary: PropTypes.string,
  variantSecondary: PropTypes.string,
  fontSizeItemIcon: PropTypes.string,
  iconItemProps: PropTypes.object,
  isBadge: PropTypes.bool,
};

export default DrawerItemSmall;
