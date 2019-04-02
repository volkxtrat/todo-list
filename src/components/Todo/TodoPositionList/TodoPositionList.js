import React from "react";
import { Grid, Paper, Slide, Zoom } from "@material-ui/core";
import TodoItemList from "../TodoItemList/TodoItemList";
import useToggle from "../../../hooks/useToggle";

const todo = {
  a1: {
    time: "10:30",
    date: "",
    primary: "Go to shop",
    secondary: "buy coffee",
    dateAdded: "added 02/02/2019",
    isChecked: false
  },
  a2: {
    time: "10:30",
    date: "",
    primary: "Go to shop",
    secondary: "buy coffee",
    dateAdded: "added 02/02/2019",
    isChecked: false
  },
  a3: {
    time: "10:30",
    date: "",
    primary: "Go to shop",
    secondary: "buy coffee",
    dateAdded: "added 02/02/2019",
    isChecked: false
  }
};

export default function TodoPositionList({
  handleClickMenu,
  handleCClickMenu
}) {
  const [isChecked, handleIsChecked] = useToggle(false);
  return (
    <Grid container direction="column" spacing={24}>
      {Object.keys(todo).map(key => {
        const item = todo[key];
        return (
          !isChecked && (
            <Slide
              key={key}
              direction="left"
              in={!item.isChecked}
              onExited={handleIsChecked.handleToggleClose}
            >
              <Grid item xs>
                <Paper>
                  <TodoItemList
                    check={item.isChecked}
                    handleCheck={() => {
                      item.isChecked = true;
                    }}
                    onContextMenu={handleCClickMenu}
                    handleClickMore={handleClickMenu}
                    button
                    time="10:30"
                    date=""
                    primary="Go to shop"
                    secondary="buy coffee"
                    dateAdded="added 02/02/2019"
                  />
                </Paper>
              </Grid>
            </Slide>
          )
        );
      })}
    </Grid>
  );
}
