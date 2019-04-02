import React from "react";
import { Typography, Button, Link, Collapse } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { Link as RouterLink } from "react-router-dom";

import routesName from "../../../routes/routes";
import {
  itemsRegistration,
  TexFieldFormikMui,
  getSchemaRegistration,
  controlName
} from "../constants";
import {
  StyledAuthForm,
  StyledFormLine,
  StyledForm,
  StyledFormLink,
  useStylesAuthForm
} from "../styled";
import withRegistration from "../../../hoc/withRegistrations";
import { FormattedMessage } from "react-intl";

const AuthFormRegistration = ({ regState, onSubmit }) => {
  const classes = useStylesAuthForm();
  const isMessage = Boolean(regState.message.text);
  return (
    <StyledAuthForm>
      <StyledFormLine>
        <Typography variant="h5">
          <FormattedMessage id="auth.title.registration" />
        </Typography>
      </StyledFormLine>
      <Collapse in={isMessage}>
        {/* <Message color={message.type}> */}
        <Typography variant="body1">{regState.message.text}</Typography>
        {/* </Message> */}
      </Collapse>
      <Formik
        initialValues={{
          [controlName.firstName]: "",
          [controlName.secondName]: "",
          [controlName.email]: "",
          [controlName.password]: ""
        }}
        validationSchema={getSchemaRegistration()}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <StyledForm>
            {itemsRegistration.map(item => (
              <Field
                key={item.controlName}
                fullWidth
                autoFocus={item.autoFocus}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                name={item.controlName}
                component={TexFieldFormikMui}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
            ))}
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              size="large"
              type="submit"
              disabled={regState.isLoading}
            >
              {regState.isLoading ? (
                "X"
              ) : (
                <FormattedMessage id="auth.button.registration" />
              )}
            </Button>
            <StyledFormLink>
              <Typography>
                <FormattedMessage id="auth.link.registration" />
              </Typography>
              <Link
                className={classes.link}
                component={RouterLink}
                to={routesName.login}
              >
                <FormattedMessage id="auth.button.login" />
              </Link>
            </StyledFormLink>
          </StyledForm>
        </Form>
      </Formik>
    </StyledAuthForm>
  );
};

export default withRegistration(AuthFormRegistration);
