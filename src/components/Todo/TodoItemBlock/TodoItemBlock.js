import React, { useState, useRef, useCallback } from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  IconButton,
  Button
} from "@material-ui/core";
import Event from "@material-ui/icons/Event";
import MoreVert from "@material-ui/icons/MoreVert";
import { useTheme, makeStyles } from "@material-ui/styles";
import ListItem from "../../Ui/ListItem/ListItem";
import { InlineDateTimePicker, DateTimePicker } from "material-ui-pickers";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  ListItem: {
    boxShadow: `inset 0 4px 0 ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.borderRadius
  },
  Paper: {
    // boxShadow: theme.shadows[23]
  },
  IconButton: {
    position: "absolute",
    padding: ".25rem",
    top: "5%",
    right: "5%"
  }
}));

function TodoItemBlock({
  primary,
  secondary,
  time,
  date,
  handleClickMore,
  ...props
}) {
  const classes = useStyles();
  const pickerRef = useRef(null);
  const [selectedDate, handleDateChange] = useState(new Date());
  const theme = useTheme();
  const mqDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  const openPicker = useCallback(
    e => {
      if (pickerRef.current) {
        pickerRef.current.open(e);
      }
    },
    [pickerRef.current]
  );

  return (
    <Grid item xs={12} md={6} lg={3} xl={2} {...props}>
      <Paper className={classes.Paper}>
        {mqDownSm ? (
          <DateTimePicker
            value={selectedDate}
            onChange={handleDateChange}
            ref={pickerRef}
            style={{ display: "none" }}
          />
        ) : (
          <InlineDateTimePicker
            value={selectedDate}
            onChange={handleDateChange}
            ref={pickerRef}
            style={{ display: "none" }}
          />
        )}
        <ListItem
          button
          disableGutters
          color="secondary"
          className={classes.ListItem}
        >
          <Grid container direction="column">
            <IconButton
              onClick={handleClickMore}
              className={classes.IconButton}
            >
              <MoreVert />
            </IconButton>
            <Grid
              container
              direction="column"
              alignItems="center"
              zeroMinWidth
              style={{ padding: ".5rem" }}
            >
              <IconButton color="secondary">
                <Event fontSize="large" />
              </IconButton>
              <Typography noWrap variant="h6">
                {primary}
              </Typography>
              <Typography noWrap variant="caption">
                {secondary}
              </Typography>
            </Grid>
            <Divider variant="fullWidth" />
            <Grid>
              <ListItem
                button
                disableGutters
                style={{ justifyContent: "center" }}
                onClick={openPicker}
              >
                <Typography
                  noWrap
                  variant="h4"
                  style={{ marginRight: ".5rem" }}
                >
                  {time}
                </Typography>
                <Typography noWrap variant="body1">
                  {date}
                </Typography>
              </ListItem>
            </Grid>
            <Divider variant="fullWidth" />
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ paddingTop: ".5rem" }}
            >
              <Button fullWidth size="large" color="secondary">
                <FormattedMessage id="todoItemBlock.done" />
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      </Paper>
    </Grid>
  );
}

export default TodoItemBlock;
