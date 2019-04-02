import React, { Component } from "react";
import firebase from "../config/firebase";

export default function withSigout(WrappedComponent) {
  return class extends Component {
    state = {
      isLoaing: false,
      error: ""
    };
    onSubmit = (values) => {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    };
    render() {
      return (
        <WrappedComponent
          onSubmit={this.onSubmit}
          loginState={this.state}
          {...this.props}
        />
      );
    }
  };
}
