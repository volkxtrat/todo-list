import React from "react";

import Lock from "@material-ui/icons/LockOutlined";
import Lens from "@material-ui/icons/LensOutlined";

import routes from "../../../routes/routes";
import { getSortedKeysItemOrder } from "../../../lib/utils";
import DrawerLink from "../DrawerLink/DrawerLink";
import { IconButton } from "@material-ui/core";

function DrawerProjectsFavorite({ projects, fetch, isDrawer }) {
  function fetchRemoveFavorite(e, id) {
    e.stopPropagation();
    e.preventDefault();
    fetch(id);
  }
  return (
    <>
      {getSortedKeysItemOrder(projects)
        .filter(key => projects[key].isFavorite)
        .map(key => {
          const project = projects[key];
          const path = `${routes.project}/${project.id}`;
          return (
            <DrawerLink
              key={key}
              path={path}
              isDrawer={isDrawer}
              iconItem={Lens}
              iconItemProps={{
                style: { color: project.color }
              }}
              primary={project.name}
            >
              <IconButton onClick={e => fetchRemoveFavorite(e, project.id)}>
                <Lock fontSize="small" />
              </IconButton>
            </DrawerLink>
          );
        })}
    </>
  );
}

export default DrawerProjectsFavorite;
