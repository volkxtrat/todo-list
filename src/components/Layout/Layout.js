import React from "react";
import styled from "styled-components";

import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../../containers/Header/Header";
import DrawerContainer from "../../containers/Drawer/Drawer";
import BottomNavigation from "../BottomNavigation/BottomNavigation";

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledGrid = styled(({ ...other }) => <Grid container {...other} />)`
  flex: 1 1 auto;
`;

const Layout = ({ children }) => {
  const mqUp600 = useMediaQuery("(min-width:600px)");

  return (
    <Container>
      <HeaderContainer />
      {mqUp600 ? (
        <StyledGrid direction="row">
          <DrawerContainer />
          {children}
        </StyledGrid>
      ) : (
        <>
          <StyledGrid direction="column">{children}</StyledGrid>
          <BottomNavigation />
        </>
      )}
    </Container>
  );
};

export default Layout;
