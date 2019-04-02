import React from "react";
import {
  getSortedObjectByKeys,
  getSortedKeysItemOrder
} from "../../../lib/utils";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function ProjectsDnd({
  projects,
  fetchUpdateProjects,
  children,
}) {
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const draggedItem = result.source.index;
    const sortedKeys = getSortedKeysItemOrder(projects);
    const newKeys = sortedKeys.filter(item => item !== sortedKeys[draggedItem]);
    newKeys.splice(result.destination.index, 0, sortedKeys[draggedItem]);
    fetchUpdateProjects(getSortedObjectByKeys(projects, newKeys, "itemOrder"));
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        ignoreContainerClipping
        droppableId="droppable"
        type="PROJECTS"
      >
        {(provided, snapshot) => {
          return children(provided);
        }}
      </Droppable>
    </DragDropContext>
  );
}
