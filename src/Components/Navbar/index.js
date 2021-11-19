import React, { useContext } from "react";
import Navigation from "./Navigation";
import ToggleButton from "./ToggleButton";
import UserContext from "../../UserContext";

const Navbar = () => {
  const value = useContext(UserContext);

  const logout = () => {
    value[1](false);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <h1 class="navbar-brand text-white">MusicFy</h1>
      <ToggleButton />
      <UserContext.Provider value={value}>
        <Navigation loggedUser={value[0]} loggedHandler={logout.bind(this)} />
      </UserContext.Provider>
    </nav>
  );
};

export default Navbar;
