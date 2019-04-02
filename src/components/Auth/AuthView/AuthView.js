import React from "react";
import styled from "styled-components";

import Paper from "@material-ui/core/Paper";
import DoneAll from "@material-ui/icons/DoneAll";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "100%",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
}));

const SyledWrapper = styled.div`
  display: flex;
  flex: 1;
  min-width: 600px;
  max-width: 600px;
  @media (max-width: 600px) {
    min-width: 400px;
  }
`;

const StyledAuth = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100vh;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 15% 0;
`;

function AuthView({ children }) {
  const classes = useStyles();
  return (
    <StyledAuth>
      <SyledWrapper>
        <Paper square className={classes.paper}>
          <StyledIcon>
            <Typography component="span" variant="h1">
              <DoneAll fontSize="inherit" />
            </Typography>
          </StyledIcon>
          <StyledBlock>{children}</StyledBlock>
        </Paper>
      </SyledWrapper>
    </StyledAuth>
  );
}

export default AuthView;
