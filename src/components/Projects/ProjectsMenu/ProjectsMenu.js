import React from "react";
import PropTypes from "prop-types";
import menuItems from "./menuItems";

import LockOpen from "@material-ui/icons/LockOpenOutlined";
import Lock from "@material-ui/icons/LockOutlined";
import Menu from "../../Ui/Menu/Menu";
import { FormattedMessage } from "react-intl";

const ProjectsMenu = ({
  id,
  anchorProps,
  isOpen,
  handleClose,
  isFavorite,
  onColor,
  onRename,
  onFavorite,
  onDelete,
  ...others
}) => {
  function createOnClick(func) {
    return function() {
      handleClose();
      func();
    };
  }

  menuItems.rename.onClick = createOnClick(onRename);
  menuItems.favorite.onClick = createOnClick(onFavorite);
  menuItems.color.onClick = createOnClick(onColor);
  menuItems.delete.onClick = createOnClick(onDelete);
  menuItems.favorite.iconComponent = !isFavorite ? Lock : LockOpen;
  menuItems.favorite.caption = isFavorite ? (
    <FormattedMessage id="projectsMenu.unLock" />
  ) : (
    <FormattedMessage id="projectsMenu.lock" />
  );
  return (
    <Menu
      id={id}
      isOpen={isOpen}
      menuItems={menuItems}
      handleClose={handleClose}
      anchorProps={anchorProps}
      {...others}
    />
  );
};

ProjectsMenu.propTypes = {
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  anchorProps: PropTypes.object,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

export default ProjectsMenu;
