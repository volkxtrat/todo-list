import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import Settings from "@material-ui/icons/Settings";
import PowerSettings from "@material-ui/icons/PowerSettingsNewOutlined";

import withUi from "../../hoc/withUi";
import firebase from "../../config/firebase";

import DrawerList from "./DrawerList/DrawerList";
import DrawerLinkList from "./DrawerLinkList/DrawerLinkList";
import DrawerLink from "./DrawerLink/DrawerLink";
import DrawerProjectsCollapse from "./DrawerProjectsCollapse/DrawerProjectsCollapse";
import DrawerProjectsFavorite from "./DrawerProjectsFavorite/DrawerProjectsFavorite";
import { StyledAside, StyledAppNav, StyledServiceNav } from "./styled";
import { connect } from "react-redux";
import { toggleLeftDrawer as tlDrawer } from "../../store/actions/ui";

const Drawer = ({
  projects,
  fetchProjects,
  leftDrawerOpen,
  toggleLeftDrawer
}) => {
  const theme = useTheme();
  const mqmw960 = useMediaQuery("(min-width:960px)");
  const [isDrawer, setIsDrawer] = useState(mqmw960);

  useEffect(() => {
    if (leftDrawerOpen !== isDrawer) setIsDrawer(leftDrawerOpen);
  }, [leftDrawerOpen]);

  useEffect(() => {
    if (mqmw960 !== isDrawer) {
      setIsDrawer(mqmw960);
      toggleLeftDrawer();
    }
  }, [mqmw960]);

  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
      })
      .catch(error => {
        // An error happened.
      });
  };

  return (
    <StyledAside isOpen={isDrawer} theme={theme}>
      <StyledAppNav>
        <DrawerList>
          <DrawerLinkList
          // isDrawer={isDrawer}
          />
          {isDrawer && (
            <DrawerProjectsFavorite
              // isDrawer={isDrawer}
              projects={projects}
              fetch={fetchProjects.fetchUpdateFavorite}
            />
          )}
          <DrawerProjectsCollapse
            // isDrawer={isDrawer}
            projects={projects}
            fetchProjects={fetchProjects}
          />
        </DrawerList>
      </StyledAppNav>
      <StyledServiceNav>
        <DrawerList disablePadding>
          <DrawerLink
            // isDrawer={isDrawer}
            iconItem={Settings}
            primary="Settings"
            path="/settings"
          />
          <DrawerLink
            onClick={signout}
            // isDrawer={isDrawer}
            iconItem={PowerSettings}
            primary="Sign out"
            path="/"
          />
        </DrawerList>
      </StyledServiceNav>
    </StyledAside>
  );
};

const getLeftDrawerOpen = state =>  state.ui.leftDrawerOpen;

export default connect(
  state => ({
    leftDrawerOpen: getLeftDrawerOpen(state)
  }),
  dispatch => ({ toggleLeftDrawer: () => dispatch(tlDrawer()) })
)(Drawer);
