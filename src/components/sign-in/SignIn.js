import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import "./SignIn.style.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            required
            name="email"
            value={this.state.email}
            label="email"
          />

          <FormInput
            type="password"
            required
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            label="password"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
