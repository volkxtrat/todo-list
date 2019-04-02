import React, { useEffect } from "react";
import useToggle from "../hooks/useToggle";
import usePrevious from "../hooks/usePrevious";
import ColorPicker from "../components/Ui/ColorPicker/ColorPicker";
import ProjectsMenu from "../components/Projects/ProjectsMenu/ProjectsMenu";

function withProjectsMenu(WrappedComponent) {
  return ({ fetchProjects, projects, menu, ...other }) => {
    const [isRename, handleIsRename] = useToggle(false);
    const [isColor, handleIsColor] = useToggle(false);
    const prevIsColor = usePrevious(isColor);
    const { isMenu, targetData } = menu.state;
    const {
      resetTargetData,
      handleClickTargetMenu,
      handleCClickTargetMenu,
      handleIsMenu
    } = menu.actions;

    useEffect(() => {
      if (!isColor) resetTargetData();
    }, [isColor]);

    const fetchRenameProject = name => {
      const { id } = targetData;
      fetchProjects.fetchUpdateRename(id, name);
    };

    const fetchChangeColorProject = color => {
      const { id } = targetData;
      fetchProjects.fetchUpdateColor(id, color);
    };

    const fetchFavoriteProject = () => {
      const { id } = targetData;
      fetchProjects.fetchUpdateFavorite(id);
    };

    const fetchDeleteProject = () => {
      const { id } = targetData;
      fetchProjects.fetchDeleteProject(id);
    };

    const menuId = "menu-projects";
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

    const handleMenu = {
      handleClickTargetMenu,
      handleCClickTargetMenu,
      toggleIsMenu: handleIsMenu.handleToggle,
      toggleIsRename: handleIsRename.handleToggle,
      toggleIsColor: handleIsColor.handleToggle
    };

    const fetchMenu = {
      fetchRenameProject,
      fetchChangeColorProject,
      fetchFavoriteProject,
      fetchDeleteProject
    };

    const stateMenu = {
      isRename,
      isColor,
      isMenu,
      targetData
    };

    const props = {
      ...other,
      fetchProjects,
      projects
    };

    const colorMenuComponent = isColor && (
      <ColorPicker
        {...menuProps}
        anchorProps={menu.props.menuAnchorProps}
        defaultColor={projects[targetData.id].color}
        id={menuId}
        isOpen={isColor}
        handleClose={handleIsColor.handleToggleClose}
        handleChangeColor={fetchChangeColorProject}
      />
    );
    const menuComponent = isMenu && (
      <ProjectsMenu
        {...menuProps}
        anchorProps={menu.props.menuAnchorProps}
        id={menuId}
        isOpen={isMenu}
        handleClose={handleIsMenu.handleToggle}
        onColor={handleIsColor.handleToggle}
        onRename={handleIsRename.handleToggle}
        onDelete={fetchDeleteProject}
        onFavorite={fetchFavoriteProject}
        isFavorite={projects[targetData.id].isFavorite}
      />
    );

    const projectsMenu = {
      handleMenu,
      fetchMenu,
      stateMenu
    };

    return (
      <WrappedComponent
        projectsMenu={projectsMenu}
        colorMenuComponent={colorMenuComponent}
        menuComponent={menuComponent}
        {...props}
      />
    );
  };
}

export default withProjectsMenu;
