import React, { Component } from "react";
import firebase from "../config/firebase";

export default function withLogin(WrappedComponent) {
  return class extends Component {
    state = {
      isLoaing: false,
      error: ""
    };
    onSubmit = values => {
      this.setState({ error: "", isLoading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(signedInUser => {
          this.setState({ error: "", isLoading: false });
          this.props.history.push("/");
        })
        .catch(err => {
          console.log(err);
          this.setState({ error: err.message, isLoading: false });
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
