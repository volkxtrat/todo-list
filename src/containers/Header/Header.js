import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../components/Header/Header";

export class HeaderContainer extends Component {
  static propTypes = {};

  render() {
    return <Header />;
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
)(HeaderContainer);
