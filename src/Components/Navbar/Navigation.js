import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const uid = localStorage.getItem("uid");

const Navigation = (props) => {
  let isLogged = uid || props.loggedUser;

  const logoutUser = () => {
    localStorage.removeItem('uid')
    props.loggedHandler(false)
  }

  return (
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/" className="nav-item nav-link active text-white">
          Home <span class="sr-only">(current)</span>
        </Link>

        {isLogged ? (
          <React.Fragment>
            <Link to="/profile" className="nav-item nav-link text-white">
              Profile
            </Link>
            <button onClick={logoutUser} className="text-white btn btn-link">
              Logout
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/login" className="nav-item nav-link text-white">
              Login
            </Link>

            <Link to="/register" className="nav-item nav-link text-white">
              Register
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Navigation;
