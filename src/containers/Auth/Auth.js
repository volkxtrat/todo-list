import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Auth extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div />;
  }
}

function mapDispatchToProps(dispatch) {
  return {};
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
