import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Input, ListItemText } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import Add from "@material-ui/icons/Add";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function getSchemaValidation(match) {
  return Yup.object().shape({
    name: Yup.string()
      .notOneOf(match, "Matched!")
      .required("Required")
  });
}

const useStyles = makeStyles(theme => ({
  InputDense: {
    padding: 0
  }
  // Typography: {
  //   padding: "0 1rem",
  //   "&:first-child": {
  //     padding: "0 1rem"
  //   }
  // }
}));

const FormRenameItem = ({
  variantPrimary,
  variantSecondary,
  fontSizeButton,
  fetch,
  handleClose,
  defaultMsg,
  value,
  matched
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const InputFormikMui = ({ field, form: { touched, errors }, ...props }) => {
    const isValid = !errors.name ? true : false;
    const title = (
      <Input
        autoFocus
        fullWidth
        disableUnderline
        classes={{ inputMarginDense: classes.InputDense }}
        margin="dense"
        placeholder="projects name"
        type="text"
        style={{ fontSize: theme.typography[variantPrimary].fontSize }}
        {...field}
        {...props}
      />
    );

    let error = defaultMsg;
    if (!isValid) error = errors.name;

    return (
      <>
        <ListItemText
          primary={title}
          secondary={error}
          primaryTypographyProps={{
            noWrap: true,
            variant: variantPrimary
          }}
          secondaryTypographyProps={{
            noWrap: true,
            variant: variantSecondary,
            color: !isValid ? "error" : "default"
          }}
          classes={{ root: classes.Typography }}
        />
        <IconButton
          onClick={e => {
            e.stopPropagation();
          }}
          disabled={!isValid}
          type="submit"
        >
          <Add fontSize={fontSizeButton} />
        </IconButton>
      </>
    );
  };

  return (
    <ClickAwayListener mouseEvent="onMouseDown" onClickAway={handleClose}>
      <Formik
        initialValues={{
          name: value
        }}
        validationSchema={getSchemaValidation(matched)}
        onSubmit={values => {
          handleClose();
          fetch(values.name);
        }}
      >
        <Form
          autoComplete="off"
          style={{ display: "flex", width: "100%", alignItems: "center" }}
        >
          <Field name="name" type="text" component={InputFormikMui} />
        </Form>
      </Formik>
    </ClickAwayListener>
  );
};

FormRenameItem.propTypes = {
  variantPrimary: PropTypes.string,
  variantSecondary: PropTypes.string,
  fontSizeButton: PropTypes.string,
  fetch: PropTypes.func,
  handleClose: PropTypes.func,
  value: PropTypes.string,
  matched: PropTypes.array
};
FormRenameItem.defaultProps = {
  value: ""
};

export default FormRenameItem;
