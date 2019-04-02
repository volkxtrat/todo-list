import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../Ui/ListItem/ListItem";
import { ListItemIcon, ListItemText, IconButton } from "@material-ui/core";
import Lens from "@material-ui/icons/LensOutlined";
import MoreVert from "@material-ui/icons/MoreVert";
import FormRenameItem from "../../FormRenameItem/FormRenameItem";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  ListItem: {
    "&:hover": {
      "& $IconButton": {
        opacity: 0.5
      }
    }
  },
  IconButton: {
    opacity: 0,
    "&:hover": {
      opacity: 1
    }
  }
}));

export default function ProjectsItem({
  projectsMenu,
  fontSizeIcon,
  fontSizeButton,
  variantPrimary,
  variantSecondary,
  id,
  primary,
  secondary,
  colorIconItem,
  isHoverButton,
  matched,
  ...props
}) {
  const classes = useStyles();
  const { isRename, isMenu, isColor, targetData } = projectsMenu.stateMenu;
  const {
    handleClickTargetMenu,
    handleCClickTargetMenu,
    toggleIsRename
  } = projectsMenu.handleMenu;
  const { fetchRenameProject } = projectsMenu.fetchMenu;
  const isSelect = (isRename || isMenu || isColor) && id === targetData.id;
  const isForm = isRename && id === targetData.id;

  const clsListItem = {
    root: classNames({ [classes.ListItem]: isHoverButton })
  };
  const clsIconButton = {
    root: classNames({ [classes.IconButton]: isHoverButton })
  };

  return (
    <ListItem
      button
      selected={isSelect}
      onContextMenu={e => handleCClickTargetMenu(e, id)}
      classes={clsListItem}
      {...props}
    >
      <ListItemIcon style={{ color: colorIconItem }}>
        <Lens fontSize={fontSizeIcon} />
      </ListItemIcon>
      {!isForm ? (
        <>
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
          <IconButton
            classes={clsIconButton}
            onClick={e => handleClickTargetMenu(e, id)}
          >
            <MoreVert fontSize={fontSizeButton} />
          </IconButton>
        </>
      ) : (
        <FormRenameItem
          variantPrimary={variantPrimary}
          variantSecondary={variantSecondary}
          fontSizeButton={fontSizeButton}
          fetch={fetchRenameProject}
          handleClose={toggleIsRename}
          value={primary}
          matched={matched}
        />
      )}
    </ListItem>
  );
}

ProjectsItem.propTypes = {
  projectsMenu: PropTypes.object,
  fontSizeIcon: PropTypes.string,
  fontSizeButton: PropTypes.string,
  variantPrimary: PropTypes.string,
  variantSecondary: PropTypes.string,
  id: PropTypes.string,
  primary: PropTypes.string,
  secondary: PropTypes.string,
  colorIconItem: PropTypes.string,
  isHoverButton: PropTypes.bool
};
ProjectsItem.defaultProps = {
  isHoverButton: false
};
