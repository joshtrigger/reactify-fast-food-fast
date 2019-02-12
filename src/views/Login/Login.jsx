import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import LoginView from "../../components/Login/LoginView";
import { LoginAction } from "../../actions/LoginAction";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      message: "",
      token: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { message } = this.state;
    if (nextProps.token) {
      if (message != nextProps.message) {
        toast.success(nextProps.message);
      }
      this.setState({ message: nextProps.message });
      window.localStorage.setItem("token", nextProps.token);
    } else if (nextProps.message) {
      toast.error(nextProps.message);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { LoginAction } = this.props;
    LoginAction(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <LoginView
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

Login.propTypes = {
  LoginAction: PropTypes.func.isRequired,
  message: PropTypes.shape({}),
  token: PropTypes.shape({})
};

Login.defaultProps = {
  message: {},
  token: {}
};
export const mapStateToProps = state => {
  return {
    message: state.login.message,
    token: state.login.token
  };
};

export default connect(
  mapStateToProps,
  { LoginAction }
)(Login);