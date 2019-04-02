import React from "react";
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";

export const controlName = {
  firstName: "firstName",
  secondName: "secondName",
  email: "email",
  password: "password"
};

export const itemsLogin = [
  {
    controlName: controlName.email,
    label: <FormattedMessage id="auth.label.email" />,
    placeholder: "example@gmail.com",
    type: "text",
    autoFocus: false
  },
  {
    controlName: controlName.password,
    label: <FormattedMessage id="auth.label.password" />,
    placeholder: "******",
    type: "password",
    autoFocus: false
  }
];

export const itemsRegistration = [
  {
    controlName: controlName.firstName,
    label: <FormattedMessage id="auth.label.firstName" />,
    placeholder: "Ivan",
    type: "text",
    autoFocus: false
  },
  {
    controlName: controlName.secondName,
    label: <FormattedMessage id="auth.label.secondName" />,
    placeholder: "Ivanov",
    type: "text",
    autoFocus: false
  },
  ...itemsLogin
];

const loginSchema = {
  [controlName.email]: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .email(<FormattedMessage id="validation.email" />),
  [controlName.password]: Yup.string()
    .required(<FormattedMessage id="validation.required" />)
    .min(
      6,
      <FormattedMessage id="validation.password.min" values={{ count: 6 }} />
    )
    .matches(/[a-zA-Z]/, <FormattedMessage id="validation.password.latin" />)
    .matches(
      /(?=.*[A-Z])/,
      <FormattedMessage id="validation.password.capital" />
    )
    .matches(/(?=.*[\d])/, <FormattedMessage id="validation.password.number" />)
};

export function getSchemaRegistration() {
  return Yup.object().shape({
    [controlName.firstName]: Yup.string().required(
      <FormattedMessage id="validation.required" />
    ),
    [controlName.secondName]: Yup.string().required(
      <FormattedMessage id="validation.required" />
    ),
    ...loginSchema
  });
}

export function getSchemaLogin() {
  return Yup.object().shape({
    ...loginSchema
  });
}

export const TexFieldFormikMui = ({
  field,
  form: { touched, errors },
  name,
  ...props
}) => {
  const currError = errors.hasOwnProperty(field.name);
  const currTouched = touched.hasOwnProperty(field.name);
  const isError = currTouched && currError;

  return (
    <TextField
      error={isError}
      helperText={isError && errors[field.name]}
      {...field}
      {...props}
    />
  );
};
