import React from "react";
import { Grid } from "@material-ui/core";
import TodoItemBlock from "../TodoItemBlock/TodoItemBlock";

export default function TodoPositionBlock({
  handleClickMenu,
  handleCClickMenu
}) {
  return (
    <Grid container spacing={24}>
      <TodoItemBlock
        onContextMenu={handleCClickMenu}
        handleClickMore={handleClickMenu}
        primary="Go to Shop"
        secondary="buy coffee"
        time="10:30"
        date="02/03/2019"
      />
      <TodoItemBlock
        onContextMenu={handleCClickMenu}
        handleClickMore={handleClickMenu}
        primary="Go to Shop"
        secondary="buy coffee"
        time="10:30"
        date="02/03/2019"
      />
      <TodoItemBlock
        onContextMenu={handleCClickMenu}
        handleClickMore={handleClickMenu}
        primary="Go to Shop"
        secondary="buy coffee"
        time="10:30"
        date="02/03/2019"
      />
      <TodoItemBlock
        onContextMenu={handleCClickMenu}
        handleClickMore={handleClickMenu}
        primary="Go to Shop"
        secondary="buy coffee"
        time="10:30"
        date="02/03/2019"
      />
    </Grid>
  );
}
