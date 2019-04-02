import React, { useEffect } from "react";
import useToggle from "../hooks/useToggle";
import TodoMenu from "../components/Todo/TodoMenu/TodoMenu";

function withTodoMenu(WrappedComponent) {
  return ({ fetchProjects, projects, menu, ...other }) => {
    const { isMenu, targetData } = menu.state;
    const {
      resetTargetData,
      handleClickTargetMenu,
      handleCClickTargetMenu,
      handleIsMenu
    } = menu.actions;

    const actions = {
      handleClickTargetMenu,
      handleCClickTargetMenu
    };

    const state = {
      isMenu,
      targetData
    };

    const props = {
      ...other,
      fetchProjects,
      projects
    };

    const menuId = "menu-todo";
    const menuProps = {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left"
      }
    };

    const menuComponent = isMenu && (
      <TodoMenu
        {...menuProps}
        anchorProps={menu.props.menuAnchorProps}
        id={menuId}
        isOpen={isMenu}
        handleClose={handleIsMenu.handleToggle}
      />
    );

    const todoMenu = {
      actions,
      state
    };

    return (
      <WrappedComponent
        todoMenu={todoMenu}
        menuComponent={menuComponent}
        {...props}
      />
    );
  };
}

export default withTodoMenu;
