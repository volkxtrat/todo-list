import React from "react";
import { NavLink } from "react-router-dom";
import { getProjectsName, getSortedKeysItemOrder } from "../../../lib/utils";
import routes from "../../../routes/routes";
import ProjectsItem from "../../Projects/ProjectsItem/ProjectsItem";
import ProjectsWrapper from "../../Projects/ProjectsWrapper/ProjectsWrapper";
import { typography as _t } from "../../../theme/constants";
import { Draggable } from "react-beautiful-dnd";
import { RootRef } from "@material-ui/core";

const ProjectsList = ({ projects, projectsMenu }) => {
  return (
    <>
      {getSortedKeysItemOrder(projects).map((key, index) => {
        const project = projects[key];
        const path = `${routes.project}/${project.id}`;
        return (
          <Draggable
            key={key}
            index={index}
            draggableId={key}
            disableInteractiveElementBlocking
          >
            {(provided, snapshot) => {
              const draggTarget = { ...provided.dragHandleProps };
              return (
                <RootRef rootRef={provided.innerRef}>
                  <ProjectsWrapper
                    key={key}
                    {...provided.draggableProps}
                    {...draggTarget}
                  >
                    <NavLink to={path}>
                      <ProjectsItem
                        divider
                        projectsMenu={projectsMenu}
                        id={project.id}
                        primary={project.name}
                        secondary={project.name}
                        colorIconItem={project.color}
                        fontSizeIcon="large"
                        variantPrimary={_t.projectsPage.variantPrimary}
                        variantSecondary={_t.projectsPage.variantSecondary}
                        matched={getProjectsName(projects)}
                      />
                    </NavLink>
                  </ProjectsWrapper>
                </RootRef>
              );
            }}
          </Draggable>
        );
      })}
    </>
  );
};

export default ProjectsList;
