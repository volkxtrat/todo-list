import React from "react";
import Edit from "@material-ui/icons/EditOutlined";
import ColorLens from "@material-ui/icons/ColorLensOutlined";
import Lock from "@material-ui/icons/LockOutlined";
import Delete from "@material-ui/icons/DeleteOutlined";
import { FormattedMessage } from "react-intl";

export default {
  rename: {
    key: "1",
    caption: <FormattedMessage id="projectsMenu.rename" />,
    iconComponent: Edit,
    onClick: () => {}
  },
  favorite: {
    key: "2",
    caption: <FormattedMessage id="projectsMenu.lock" />,
    iconComponent: Lock,
    onClick: () => {}
  },
  color: {
    key: "3",
    caption: <FormattedMessage id="projectsMenu.color" />,
    iconComponent: ColorLens,
    onClick: () => {}
  },
  delete: {
    key: "4",
    caption: <FormattedMessage id="projectsMenu.delete" />,
    iconComponent: Delete,
    onClick: () => {}
  }
};
