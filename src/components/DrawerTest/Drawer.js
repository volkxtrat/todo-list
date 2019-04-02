import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Settings from "@material-ui/icons/Settings";
import PowerSettings from "@material-ui/icons/PowerSettingsNewOutlined";

import withUi from "../../hoc/withUi";
import size from "../../theme/constants";
import firebase from "../../config/firebase";
import DrawerLink from "../Drawer/DrawerLink/DrawerLink";

import DrawerList from "./DrawerList/DrawerList";

const Aside = styled.aside`
  font-size: 1rem;
  display: flex;
  flex-direction: column;

  width: ${props =>
    props.isOpen ? size.drawer.openWidth : size.drawer.closeWidth};
  background: ${props => props.theme.palette.background.paper};
  border-right: 1px solid ${props => props.theme.palette.divider};
  transition: ${props => props.theme.transitions.create(["width"])};
  overflow: hidden;

  z-index: 10;
`;

const Drawer = ({ projects, fetchProjects, ui, uiActions }) => {
  const theme = useTheme();
  const mqmw960 = useMediaQuery("(min-width:960px)");
  const [isDrawer, setIsDrawer] = useState(mqmw960);

  useEffect(() => {
    if (ui.leftDrawerOpen !== isDrawer) setIsDrawer(ui.leftDrawerOpen);
  }, [ui.leftDrawerOpen]);

  useEffect(() => {
    if (mqmw960 !== isDrawer) {
      setIsDrawer(mqmw960);
      uiActions.toggleLeftDrawer();
    }
  }, [mqmw960]);

  return (
    <Aside isOpen={isDrawer} theme={theme}>
      <Grid container>
        <DrawerList disablePadding>
          <DrawerLink iconItem={Settings} primary="Settings" path="/settings" />
          <DrawerLink iconItem={PowerSettings} primary="Sign out" path="/" />
        </DrawerList>
      </Grid>
    </Aside>
  );
};

export default withUi(Drawer);
