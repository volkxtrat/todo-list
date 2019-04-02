import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter } from "react-router-dom";

import Drawer from "../../components/Drawer/Drawer";
import * as ProjectsActionCreators from "../../store/actions/projects";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "../../theme/MUI/MUIMain";
import themeDrawer from "../../theme/MUI/MUIDrawer";

export class DrawerContainer extends Component {
  render() {
    const { actions, projects } = this.props;
    const theme = createTheme(themeDrawer);

    return (
      <MuiThemeProvider theme={theme}>
        <Drawer projects={projects} fetchProjects={actions.projects} />
      </MuiThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      projects: bindActionCreators(ProjectsActionCreators, dispatch)
    }
  };
}

function mapStateToProps(state) {
  return {
    projects: state.projects.projects
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DrawerContainer)
);
