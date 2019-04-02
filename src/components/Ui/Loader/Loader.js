import React from "react";
import styled from 'styled-components';
import LoaderSpinner from "react-loader-spinner";
import { useTheme } from "@material-ui/styles";

const StyledSection = styled.section`
  background: ${props => props.theme.palette.background.default};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Loader() {
  const theme = useTheme();
  return (
    <StyledSection theme={theme}>
      <LoaderSpinner type="Bars" color={theme.palette.secondary.main} height="100" width="100" />
    </StyledSection>
  );
}
