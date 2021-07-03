import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./SignIn.style.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

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

          <div class="button">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
