import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import routesApp from "../../routes/routesApp";
import routes from "../../routes/routes";

import Workspace from "../../components/Workspace/Workspace";
import { bindActionCreators } from "redux";
import * as ProjectsActionCreators from "../../store/actions/projects";

const WorkspaceContainer = ({ projects, actions }) => {
  return (
    <Switch>
      {routesApp.map(({ path, title, Component, exact = false }) => {
        return (
          <Route
            exact={exact}
            key={path}
            path={path}
            render={props => (
              <Workspace>
                <Component
                  projects={projects}
                  fetchProjects={actions.projects}
                  {...props}
                />
              </Workspace>
            )}
          />
        );
      })}
      <Redirect from={routes.home} to={routes.inbox} />
    </Switch>
  );
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceContainer);
