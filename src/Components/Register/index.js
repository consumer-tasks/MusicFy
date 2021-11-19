import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../Services/User";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = (e) => {
    if (password !== confirmPassword) {
      return;
    }
    UserService.register(email, password).then((r) => {
      props.history.push("/login");
    });
  };

  return (
    <div id="register">
      <h3 className="text-center text-white pt-5">Register form</h3>
      <div className="container">
        <div
          id="register-row"
          className="row justify-content-center align-items-center"
        >
          <div id="register-column" class="col-md-6">
            <div id="register-box" class="col-md-12">
              <h3 class="text-center text-info">Register</h3>
              <div class="form-group">
                <label for="email" class="text-info">
                  Email:
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
              <div class="form-group">
                <label for="password" class="text-info">
                  Password:
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                />
              </div>

              <div class="form-group">
                <label for="confirmPassword" class="text-info">
                  Confirm Password:
                </label>
                <br />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter your confirm password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className="form-control"
                />
              </div>
              <div class="form-group">
                <label for="remember-me" class="text-info">
                  <span>Remember me</span> 
                  <span>
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                    />
                  </span>
                </label>
                <br />
                <button
                  type="submit"
                  onClick={registerUser.bind(this)}
                  className="btn btn-info btn-md"
                >
                  Register
                </button>
              </div>
              <div id="register-link" class="text-right">
                <Link to="/login" class="text-info">
                  Login here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
