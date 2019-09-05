import React, { Component } from "react";
import SimpleModal from "./SimpleModal";
import "./SimpleModal.css";

import M from "materialize-css";

class U_login extends Component {
  constructor(props) {
    super(props);
    this.loginModal = React.createRef();
    this.loginForm = React.createRef();
    this.state = {
      simpleModal: false,
      email: "",
      password: ""
    };
  }
  selectSimpleModal = info => {
    this.setState({ simpleModal: !this.state.simpleModal }); // true/false toggle
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".modal");
      M.Modal.init(elems, {});
    });
  }

  handleChangeEmail = e => {
    console.log(this.state.email);
    this.setState({ email: e.target.value });
  };
  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // get user info
    const email = this.state.email;
    const password = this.state.password;

    // log the user in
    this.props.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // close the signup modal & reset form
        const modal = document.querySelector("#modal-login");
        this.props.setIsLoggedIn(true);
        // CAN WE SET THE VALUE BY SUPPLYING VALUE INTP THE BRACES?
        this.props.setUser(email);

        M.Modal.getInstance(modal).close();
        this.loginForm.current.reset();
      })
      .catch(err => {
        this.selectSimpleModal();
        console.log(err.message);
      });
  };

  render() {
    return (
      <div id="modal-login" className="modal" ref={this.loginModal}>
        <div className="modal-content">
          <h4>Sign In</h4>

          <SimpleModal
            displayModal={this.state.simpleModal}
            closeModal={this.selectSimpleModal}
            message="Incorrect login or password, please try again"
          />
          <form
            id="login-form"
            ref={this.loginForm}
            onSubmit={this.handleSubmit}
          >
            <div className="input-field">
              <input
                type="email"
                onChange={this.handleChangeEmail}
                value={this.state.email}
                id="login-email"
                required
              />
              <label htmlFor="login-email">Email address</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                onChange={this.handleChangePassword}
                value={this.state.password}
                id="login-password"
                required
              />
              <label htmlFor="login-password">Your password</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Login</button>
            <p className="error pink-text center-align" />
          </form>
        </div>
      </div>
    );
  }
}

export default U_login;
