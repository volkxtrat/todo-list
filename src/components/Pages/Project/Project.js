import React, { useEffect, useState } from "react";
import TitleToolbar from "../../Ui/TitleToolbar/TitleToolbar";
import { IconButton, Button, Paper, Grid, List } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import ExpandMore from "@material-ui/icons/ExpandMore";
import VerticalSplit from "@material-ui/icons/VerticalSplit";
import ViewModule from "@material-ui/icons/ViewModule";

import withTodoMenu from "../../../hoc/withTodoMenu";
import withMenu from "../../../hoc/withMenu";
import TodoPositionBlock from "../../Todo/TodoPositionBlock/TodoPositionBlock";
import TodoItemList from "../../Todo/TodoItemList/TodoItemList";
import TodoSectionList from "../../Todo/TodoSectionList/TodoSectionList";
// import Button from "../../Ui/Button/Button";

function Project({
  projects,
  fetchProjects,
  todoMenu,
  menuComponent,
  ...props
}) {
  const [projectId, setProjectId] = useState();

  useEffect(() => {
    setProjectId(props.match.params.id);
  }, [props.match.params.id]);

  const title = projectId && projects[projectId].name;

  return (
    <section>
      <TitleToolbar isMargin primary={title}>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: ".5rem" }}
        >
          Add new
          <Add fontSize="small" style={{ marginLeft: ".5rem" }} />
        </Button>
        <Button variant="outlined" color="secondary">
          Sort by
          <ExpandMore fontSize="small" style={{ marginLeft: ".5rem" }} />
        </Button>
      </TitleToolbar>

      <Grid container spacing={16}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper>Today Task</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper>Overdue Task</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper>This Mounts</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper>Completed Task</Paper>
        </Grid>
      </Grid>

      <TodoSectionList menuActions={todoMenu.actions} />

      {menuComponent}
    </section>
  );
}

export default withMenu(withTodoMenu(Project));
