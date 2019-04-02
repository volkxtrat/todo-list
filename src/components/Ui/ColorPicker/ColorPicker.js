import React, { Component, useState } from "react";
import PropTypes from "prop-types";

import Popover from "@material-ui/core/Popover";
import { BlockPicker } from "react-color";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ColorLens from "@material-ui/icons/ColorLensOutlined";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  ListItemDense: {
    paddingTop: 0,
    paddingBottom: 0
  }
}));

const ColorPicker = ({
  isOpen,
  handleClose,
  handleChangeColor,
  id,
  defaultColor,
  fetch,
  anchorProps,
  ...others
}) => {
  const [color, setColor] = useState(null);
  const classes = useStyles();

  const handleChangeComplete = color => {
    setColor(color.hex);
  };

  const handleClick = () => {
    handleChangeColor(color);
    handleClose()
  }

  const _color = Boolean(color) ? color : defaultColor;

  const blockPickerStyles = {
    default: {
      card: {
        boxShadow: "none",
        background: "transparent",
        borderRadius: "none"
      },
      body: {
        paddingBottom: 0
      },
      input: {
        display: "none"
      }
    }
  };

  const colorsPick = [
    "#FF6900",
    "#FCB900",
    "#7BDCB5",
    "#00D084",
    "#8ED1FC",
    "#0693E3",
    "#ABB8C3",
    "#EB144C",
    "#F78DA7",
    "#9900EF"
  ];

  return (
    <Popover
      {...others}
      {...anchorProps}
      id={id}
      open={isOpen}
    >
      <BlockPicker
        styles={blockPickerStyles}
        color={_color}
        onChangeComplete={handleChangeComplete}
        triangle="hide"
        colors={colorsPick}
      />
      <List>
        <ListItem
          onClick={handleClick}
          alignItems="center"
          classes={{ dense: classes.ListItemDense }}
          dense
          button
        >
          <ListItemIcon >
            <ColorLens />
          </ListItemIcon>
          <ListItemText primary="Аccept" />
        </ListItem>
      </List>
    </Popover>
  );
};

ColorPicker.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.string,
  color: PropTypes.string
};

export default ColorPicker;
