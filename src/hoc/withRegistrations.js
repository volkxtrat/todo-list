import React, { Component } from "react";

import routesName from "../routes/routes";
import firebase from "../config/firebase";

export default function withRegistration(WrappedComponent) {
  return class extends Component {
    state = {
      usersRef: firebase.database().ref("users"),
      message: { text: "", type: "error" },
      isLoading: false
    };

    successMsg = "You have successfully registered";

    saveUser = createdUser => {
      return this.state.usersRef.child(createdUser.user.uid).set({
        name: createdUser.user.displayName
      });
    };

    onSubmit = values => {
      this.setState({ message: { text: "", type: "error" }, isLoading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(createdUser => {
          createdUser.user
            .updateProfile({
              displayName: `${values.firstName} ${values.secondName}`
            })
            .then(() => {
              this.saveUser(createdUser);
              this.setState({
                isLoading: false,
                message: { text: this.successMsg, type: "success" }
              });
              setTimeout(() => {
                this.props.history.push(routesName.login);
              }, 2000);
            });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            message: { text: err.message, type: "error" },
            isLoading: false
          });
        });
    };

    render() {
      return (
        <WrappedComponent
          onSubmit={this.onSubmit}
          regState={this.state}
          {...this.props}
        />
      );
    }
  };
}
