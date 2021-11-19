import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserService from "../../Services/User";
import UserContext from "../../UserContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);

  const loginUser = () => {
    UserService.login(email, password).then((userObj) => {
      localStorage.setItem("uid", userObj.user.uid);
      userContext[1](true);
      props.history.push("/");
    });
  };

  return (
    <div id="login">
      <h3 class="text-center text-white pt-5">Login form</h3>
      <div class="container">
        <div
          id="login-row"
          class="row justify-content-center align-items-center"
        >
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <label for="email" class="text-info">
                  Email:
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  class="form-control"
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <button
                  type="button"
                  name="login"
                  className="btn btn-info btn-md"
                  onClick={loginUser.bind(this)}
                >
                  Login
                </button>
              </div>
              <div id="register-link" class="text-right">
                <Link to="/register" class="text-info">
                  Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
