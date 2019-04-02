import React from "react";
import PropTypes from "prop-types";
import Collapse from "@material-ui/core/Collapse";
import Lens from "@material-ui/icons/LensOutlined";

import useToggle from "../../../hooks/useToggle";

import DrawerProjectsItem from "../DrawerProjectsItem/DrawerProjectsItem";
import { List, ListItem, ListItemIcon, RootRef } from "@material-ui/core";
import withUi from "../../../hoc/withUi";
import withProjectsMenu from "../../../hoc/withProjectsMenu";
import { getProjectsName } from "../../../lib/utils";
import DrawerProjectsList from "../DrawerProjectsList/DrawerProjectsList";
import FormRenameItem from "../../FormRenameItem/FormRenameItem";

import { typography as _t, size as _s } from "../../../theme/constants";
import ProjectsDnd from "../../Ui/ProjectsDnd/ProjectsDnd";
import withMenu from "../../../hoc/withMenu";

const DrawerProjectsCollapse = ({
  projects,
  fetchProjects,
  isDrawer,
  colorMenuComponent,
  menuComponent,
  projectsMenu
}) => {
  const [isCollapse, handleIsCollapse] = useToggle(true);
  const [isAdd, handleIsAdd] = useToggle(false);

  const toggleIsCollapse = e => {
    e.stopPropagation();
    e.preventDefault();
    handleIsCollapse.handleToggle();
  };

  const toggleIsAdd = e => {
    e.stopPropagation();
    e.preventDefault();
    if (!isAdd && !isCollapse) toggleIsCollapse(e);
    handleIsAdd.handleToggle();
  };

  const itemCollapseProps = {
    isDrawer,
    isCollapse,
    isAdd,
    toggleIsCollapse,
    toggleIsAdd
  };

  const projectsName = getProjectsName(projects);
  return (
    <>
      <DrawerProjectsItem {...itemCollapseProps} />
      <Collapse in={isCollapse} timeout="auto" unmountOnExit>
        <ProjectsDnd
          projects={projects}
          fetchUpdateProjects={fetchProjects.fetchUpdateProjects}
        >
          {provided => (
            <RootRef rootRef={provided.innerRef}>
              <List
                {...provided.droppableProps}
                component="div"
                disablePadding
                style={{
                  flex: "1 1 auto",
                  overflowY: "auto",
                  minHeight: "0px"
                }}
              >
                {isDrawer && (
                  <>
                    <Collapse in={isAdd} timeout="auto">
                      <ListItem button>
                        <ListItemIcon>
                          <Lens />
                        </ListItemIcon>
                        {isAdd && (
                          <FormRenameItem
                            variantPrimary={_t.drawer.variantPrimary}
                            variantSecondary={_t.drawer.variantSecondary}
                            fontSizeButton={_s.drawer.fontSizeButton}
                            fetch={fetchProjects.fetchAddProject}
                            handleClose={handleIsAdd.handleToggleClose}
                            matched={projectsName}
                          />
                        )}
                      </ListItem>
                    </Collapse>
                    <DrawerProjectsList
                      isDrawer={isDrawer}
                      projects={projects}
                      projectsMenu={projectsMenu}
                    />
                  </>
                )}
                {provided.placeholder}
              </List>
            </RootRef>
          )}
        </ProjectsDnd>
      </Collapse>
      {colorMenuComponent}
      {menuComponent}
    </>
  );
};

DrawerProjectsCollapse.propTypes = {
  projects: PropTypes.object,
  isDrawer: PropTypes.bool,
  isMenu: PropTypes.bool.isRequired
};
DrawerProjectsCollapse.defaultProps = {
  isDrawer: true,
  isMenu: false
};

export default withMenu(withProjectsMenu(DrawerProjectsCollapse));
