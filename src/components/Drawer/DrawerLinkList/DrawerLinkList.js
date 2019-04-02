import React from "react";

import Inbox from "@material-ui/icons/Inbox";
import Today from "@material-ui/icons/Today";
import NextWeek from "@material-ui/icons/NextWeekOutlined";
import EventNote from "@material-ui/icons/EventNoteOutlined";
import DrawerLink from "../DrawerLink/DrawerLink";

export const items = [
  {
    title: "Inbox",
    path: "/inbox",
    IconComponent: Inbox
  },
  {
    title: "Today",
    path: "/today",
    IconComponent: Today
  },
  {
    title: "Next 7 days",
    path: "/week",
    IconComponent: NextWeek
  },
  {
    title: "All",
    path: "/all",
    IconComponent: EventNote
  }
];

const DrawerLinkList = ({ isDrawer }) => {
  return (
    <>
      {items.map(item => {
        return (
          <DrawerLink
            key={item.path}
            isDrawer={isDrawer}
            iconItem={item.IconComponent}
            primary={item.title}
            path={item.path}
          />
        );
      })}
    </>
  );
};

export default DrawerLinkList;
