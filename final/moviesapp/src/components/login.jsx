import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  validate = () => {
    if (
      this.state.account.username === "" ||
      this.state.account.password === ""
    )
      return true;
  };

  render() {
    const { account } = this.state;
    return (
      <div className="loginForm">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              type="email"
              className="form-control"
              name="username"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              value={account.password}
              className="form-control"
              onChange={this.handleChange}
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
