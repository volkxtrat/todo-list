import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import routesName from "../../../routes/routes";
import {
  StyledAuthForm,
  StyledFormLine,
  StyledForm,
  StyledFormLink,
  useStylesAuthForm
} from "../styled";
import {
  getSchemaLogin,
  controlName,
  itemsLogin,
  TexFieldFormikMui
} from "../constants";

import { Typography, Collapse, Button, Link } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import withLogin from "../../../hoc/withLogin";
import { FormattedMessage } from "react-intl";

const AuthFormLogin = ({ onSubmit, loginState }) => {
  const classes = useStylesAuthForm();
  const isMessage = Boolean(loginState.error);

  return (
    <StyledAuthForm>
      <StyledFormLine>
        <Typography variant="h5">
          <FormattedMessage id="auth.title.login" />
        </Typography>
      </StyledFormLine>
      <Collapse in={isMessage}>
        {/* <Message> */}
        <Typography variant="body1" color="inherit">
          {loginState.error}
        </Typography>
        {/* </Message> */}
      </Collapse>
      <Formik
        initialValues={{
          [controlName.email]: "",
          [controlName.password]: ""
        }}
        validationSchema={getSchemaLogin()}
        onSubmit={values => {
          onSubmit(values);
        }}
      >
        <Form autoComplete="off">
          <StyledForm>
            {itemsLogin.map(item => (
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
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={loginState.isLoading}
            >
              {loginState.isLoading ? (
                "X"
              ) : (
                <FormattedMessage id="auth.button.login" />
              )}
            </Button>
            <Button
              classes={{
                root: classes.button,
                containedPrimary: classes.buttonGoogle
              }}
              variant="contained"
              color="primary"
              size="large"
              type="button"
            >
              <FormattedMessage id="auth.button.google" />
            </Button>
            <StyledFormLink>
              <Typography variant="body1">
                <FormattedMessage id="auth.link.login" />
              </Typography>
              <Link
                className={classes.link}
                component={RouterLink}
                to={routesName.registration}
              >
                <FormattedMessage id="auth.button.registration" />
              </Link>
            </StyledFormLink>
          </StyledForm>
        </Form>
      </Formik>
    </StyledAuthForm>
  );
};

AuthFormLogin.propsTypes = {
  onSubmit: PropTypes.func
};
AuthFormLogin.defaultProps = {};

export default withLogin(AuthFormLogin);
