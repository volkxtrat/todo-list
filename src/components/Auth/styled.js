import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

export const StyledAuthForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFormLine = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 16px;
`;
export const StyledFormLink = styled(StyledFormLine)`
  justify-content: center;
  align-items: baseline;
`;

export const useStylesAuthForm = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  buttonGoogle: {
    background: theme.colors.google,
    color: "#fff",
    "&:hover": {
      background: theme.colors.google
    }
  },
  link: {
    marginLeft: theme.spacing.unit,
    color: theme.colors.link,
    fontSize: theme.typography.body1
  }
}));
