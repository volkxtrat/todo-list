import React from "react";
import { Grid, Paper } from "@material-ui/core";

const ProjectsWrapper = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Grid {...props} zeroMinWidth item xs={12} md={6} lg={3}>
      <Paper>{children}</Paper>
    </Grid>
  );
});

export default ProjectsWrapper;
