import React from "react";
import { IconButton, Tooltip, Zoom } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Folder from "@material-ui/icons/FolderOutlined";
import FolderOpen from "@material-ui/icons/FolderOpenOutlined";
import Add from "@material-ui/icons/Add";
import DrawerLink from "../DrawerLink/DrawerLink";
import routes from "../../../routes/routes";

// const DrawerProjectsItem = React.forwardRef(
//   ({ isDrawer, isOpen, isAdd, toggleIsOpen, toggleIsAdd }, ref) => {

const DrawerProjectsItem = ({
  isDrawer,
  isCollapse,
  isAdd,
  toggleIsCollapse,
  toggleIsAdd
}) => {
  return (
    <DrawerLink
      path={routes.project}
      isDrawer={isDrawer}
      iconItem={isCollapse ? FolderOpen : Folder}
      primary="Projects"
    >
      {isDrawer && (
        <>
          <IconButton onClick={e => toggleIsCollapse(e)}>
            {isCollapse ? (
              <ExpandLess fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            )}
          </IconButton>
          <Tooltip TransitionComponent={Zoom} title="Add">
            <IconButton onClick={e => toggleIsAdd(e)} disabled={isAdd}>
              <Add fontSize="small" />
            </IconButton>
          </Tooltip>
        </>
      )}
    </DrawerLink>
  );
};

export default DrawerProjectsItem;
