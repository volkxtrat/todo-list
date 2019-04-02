import React from "react";
import PropTypes from "prop-types";

import Menu from "../../Ui/Menu/Menu";
import menuItems from "./menuItems";

const TodoMenu = ({
  id,
  anchorProps,
  isOpen,
  handleClose,
  ...others
}) => {

  function createOnClick(func) {
    return function() {
      handleClose();
      func();
    };
  }

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

TodoMenu.propTypes = {
  id: PropTypes.string,
  anchorProps: PropTypes.object,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

export default TodoMenu;
