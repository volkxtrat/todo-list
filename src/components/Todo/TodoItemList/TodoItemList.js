import React from "react";

import ListItem from "../../Ui/ListItem/ListItem";
import { Typography, IconButton, Checkbox } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import MoreVert from "@material-ui/icons/MoreVert";
import useToggle from "../../../hooks/useToggle";

const useStyles = makeStyles(theme => ({
  textItem: {
    display: "flex",
    flexDirection: "column",
    marginRight: ".5em"
  },
  wrapper: {
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    padding: "0 1em",
    boxShadow: `inset ${theme.typography.pxToRem(4)} 0 0 ${
      theme.palette.secondary.main
    }`,
    overflow: "hidden"
  },
  sectionBlock: {
    display: "flex",
    alignItems: "center",
    padding: "0 .5em",
    borderRight: `${theme.typography.pxToRem(1)} solid ${
      theme.palette.divider
    }`,
    "&:last-child": {
      border: "none"
    }
  },
  timeBlock: {
    display: "flex",
    flexDirection: "column"
  },
  titleBlock: {
    overflow: "hidden"
  }
}));

export default function TodoItemList({
  date,
  time,
  primary,
  secondary,
  dateAdded,
  handleClickMore,
  check,
  handleCheck,
  ...props
}) {
  const classes = useStyles();
  const theme = useTheme();
  // const [value, setValue] = useToggle();
  return (
    <ListItem disableGutters {...props}>
      <div className={classes.wrapper}>
        <Checkbox checked={check} onChange={handleCheck} value="checkedA" />
        <div style={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
          <div className={classes.sectionBlock}>
            <Typography variant="h3" style={{ marginRight: ".5rem" }}>
              12
            </Typography>
            <div className={classes.textItem}>
              <Typography variant="body1">monday</Typography>
              <Typography color="default" variant="caption">
                march 2019
              </Typography>
            </div>
          </div>

          <div className={classes.sectionBlock}>
            <Typography variant="body1">{time}</Typography>
          </div>

          <div
            style={{ flex: 1, minWidth: 0 }}
            className={classes.sectionBlock}
          >
            <div className={classes.titleBlock}>
              <Typography variant="h6" noWrap>
                {primary}
              </Typography>
              <Typography noWrap variant="caption">
                {secondary}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.sectionBlock}>
          <IconButton onClick={handleClickMore}>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
}
