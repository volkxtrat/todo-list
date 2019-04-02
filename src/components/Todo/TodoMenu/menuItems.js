import React from "react";
import Edit from "@material-ui/icons/EditOutlined";
import DateRange from "@material-ui/icons/DateRangeOutlined";
import Delete from "@material-ui/icons/DeleteOutlined";
import { FormattedMessage } from "react-intl";

export default {
  rename: {
    key: "1",
    caption: <FormattedMessage id="todoMenu.rename" />,
    iconComponent: Edit,
    onClick: () => {}
  },
  date: {
    key: "2",
    caption: <FormattedMessage id="todoMenu.date" />,
    iconComponent: DateRange,
    onClick: () => {}
  },
  delete: {
    key: "3",
    caption: <FormattedMessage id="todoMenu.delete" />,
    iconComponent: Delete,
    onClick: () => {}
  }
};
