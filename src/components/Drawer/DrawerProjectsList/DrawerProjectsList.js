import React from "react";
import { createSelector } from "reselect";
import { getSortedKeysItemOrder, getProjectsName } from "../../../lib/utils";

import DrawerLink from "../DrawerLink/DrawerLink";
import ProjectsItem from "../../Projects/ProjectsItem/ProjectsItem";

import routes from "../../../routes/routes";
import { size as _s } from "../../../theme/constants";
import { Draggable } from "react-beautiful-dnd";

const DrawerProjectsList = ({ projects, projectsMenu, isDrawer }) => {
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
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                >
                  <DrawerLink
                    isHoverButton
                    inset="true"
                    key={key}
                    path={path}
                    itemComponent={ProjectsItem}
                    isDrawer={isDrawer}
                    projectsMenu={projectsMenu}
                    fontSizeButton={_s.drawer.fontSizeButton}
                    id={project.id}
                    primary={project.name}
                    colorIconItem={project.color}
                    matched={getProjectsName(projects)}
                  />
                </div>
              );
            }}
          </Draggable>
        );
      })}
    </>
  );
};

export default DrawerProjectsList;
