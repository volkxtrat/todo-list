import React from "react";
import TitleToolbar from "../../Ui/TitleToolbar/TitleToolbar";
import { IconButton, Grid, ListItemIcon, RootRef } from "@material-ui/core";
import withProjectsMenu from "../../../hoc/withProjectsMenu";
import useToggle from "../../../hooks/useToggle";
import MoreVert from "@material-ui/icons/MoreVert";
import Add from "@material-ui/icons/Add";
import ProjectsList from "../../Projects/ProjectsList/ProjectsList";
import Lens from "@material-ui/icons/LensOutlined";
import { getProjectsName } from "../../../lib/utils";
import ListItem from "../../Ui/ListItem/ListItem";
import FormRenameItem from "../../FormRenameItem/FormRenameItem";
import ProjectsWrapper from "../../Projects/ProjectsWrapper/ProjectsWrapper";

import { typography as _t } from "../../../theme/constants";
import ProjectsDnd from "../../Ui/ProjectsDnd/ProjectsDnd";
import withMenu from "../../../hoc/withMenu";

const Projects = ({
  colorMenuComponent,
  menuComponent,
  projectsMenu,
  fetchProjects,
  projects
}) => {
  const [isAdd, handleIsAdd] = useToggle(false);

  return (
    <section>
      <TitleToolbar primary="Projects">
        <IconButton onClick={handleIsAdd.handleToggleOpen} disabled={isAdd}>
          <Add />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </TitleToolbar>

      <ProjectsDnd
        projects={projects}
        fetchUpdateProjects={fetchProjects.fetchUpdateProjects}
      >
        {provided => (
          <RootRef rootRef={provided.innerRef}>
            <Grid {...provided.droppableProps} container spacing={16}>
              {isAdd && (
                <ProjectsWrapper>
                  <ListItem>
                    <ListItemIcon>
                      <Lens fontSize="large" />
                    </ListItemIcon>
                    <FormRenameItem
                      variantPrimary={_t.projectsPage.variantPrimary}
                      variantSecondary={_t.projectsPage.variantSecondary}
                      fetch={fetchProjects.fetchAddProject}
                      handleClose={handleIsAdd.handleToggleClose}
                      matched={getProjectsName(projects)}
                    />
                  </ListItem>
                </ProjectsWrapper>
              )}
              <ProjectsList projects={projects} projectsMenu={projectsMenu} />
              {provided.placeholder}
            </Grid>
          </RootRef>
        )}
      </ProjectsDnd>

      {colorMenuComponent}
      {menuComponent}
    </section>
  );
};

export default withMenu(withProjectsMenu(Projects));
