import React from "react";
import TitleToolbar from "../../Ui/TitleToolbar/TitleToolbar";
import { IconButton } from "@material-ui/core";
import VerticalSplit from "@material-ui/icons/VerticalSplit";
import ViewModule from "@material-ui/icons/ViewModule";
import TodoPositionBlock from "../TodoPositionBlock/TodoPositionBlock";
import useToggle from "../../../hooks/useToggle";
import TodoPositionList from "../TodoPositionList/TodoPositionList";

export default function TodoSectionList({ menuActions }) {
  const [isList, hanleIsList] = useToggle(true);
  return (
    <div>
      <TitleToolbar
        primary="Todo List"
        variantPrimary="body1"
        secondary="( 11 todos )"
        variantSecondary="caption"
      >
        <IconButton
          onClick={hanleIsList.handleToggleClose}
          color={!isList ? "secondary" : "default"}
        >
          <ViewModule fontSize="small" />
        </IconButton>
        <IconButton
          onClick={hanleIsList.handleToggleOpen}
          color={isList ? "secondary" : "default"}
        >
          <VerticalSplit fontSize="small" />
        </IconButton>
      </TitleToolbar>

      {isList ? (
        <TodoPositionList
          handleCClickMenu={menuActions.handleCClickTargetMenu}
          handleClickMenu={menuActions.handleClickTargetMenu}
        />
      ) : (
        <TodoPositionBlock
          handleCClickMenu={menuActions.handleCClickTargetMenu}
          handleClickMenu={menuActions.handleClickTargetMenu}
        />
      )}
    </div>
  );
}
