import React from "react";
import { UiContext } from "../context/UiContext";

function withUi(WrappedComponent) {
  return (props) => {
    return (
      <UiContext.Consumer>
        {({ ui, uiActions }) => (
          <WrappedComponent ui={ui} uiActions={uiActions} {...props}/>
        )}
      </UiContext.Consumer>
    );
  };
}

export default withUi;
