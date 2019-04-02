import React from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/styles";

const StyledMain = styled.main`
  width: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${props => props.theme.palette.background.default};
  overflow-y: auto;
  overflow-x: hidden;
`;
const StyledBlock = styled.div`
  margin: 2rem;
`;

const Workspace = ({ children }) => {
  const theme = useTheme();

  return (
    <StyledMain theme={theme}>
      <StyledBlock>{children}</StyledBlock>
    </StyledMain>
  );
};

export default Workspace;
