import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as UiActionCreators from "./store/actions/ui";
import * as ProjectsActionCreators from "./store/actions/projects";
import * as UserActionCreators from "./store/actions/user";
import Layout from "./components/Layout/Layout";
import { UiContext } from "./context/UiContext";
import route from "./routes/routes";
import RoutesApp from "./routes/RoutesApp/RoutesApp";
import Loader from "./components/Ui/Loader/Loader";
import AuthFormRegistration from "./components/Auth/AuthFormRegistration/AuthFormRegistration";
import AuthFormLogin from "./components/Auth/AuthFormLogin/AuthFormLogin";
import AuthView from "./components/Auth/AuthView/AuthView";
import firebase from "./config/firebase";

class App extends Component {
  async initialData(user) {
    const { actions, history } = this.props;
    actions.user.resetUser();
    await actions.projects.fetchGetProject();
    actions.user.setUser(user);
    history.push("/");
  }
  componentDidMount() {
    const { actions, history } = this.props;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.initialData(user);
      } else {
        actions.user.clearUser();
        history.push("/login");
      }
    });
  }

  render() {
    const { user, actions, projects, ui } = this.props;
    const routes = user.isLoading ? (
      <Loader />
    ) : user.currentUser ? (
      // <UiContext.Provider value={{ ui, uiActions: actions.ui }}>
      <Layout>
        <RoutesApp projects={projects} fetchProjects={actions.projects} />
      </Layout>
      // </UiContext.Provider>
    ) : (
      <AuthView>
        <Switch>
          <Route path={route.login} component={AuthFormLogin} />
          <Route path={route.registration} component={AuthFormRegistration} />
          <Redirect to={route.login} />
        </Switch>
      </AuthView>
    );
    return routes;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      projects: bindActionCreators(ProjectsActionCreators, dispatch),
      user: bindActionCreators(UserActionCreators, dispatch)
    }
  };
}

function mapStateToProps(state) {
  return {
    projects: {},
    user: state.user
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
