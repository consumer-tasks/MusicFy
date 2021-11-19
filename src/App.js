import React, { Component, useState, useContext } from "react"
import Navbar from "./Components/Navbar/index"
import Home from "./Components/Home/index"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Switch } from "react-router-dom"
import Login from "./Components/Login/index"
import Register from "./Components/Register/index"
import Profile from './Components/Profile/index'
import Player from "./Components/Player/index"
import SongContext from "./SongContext"
import UserContext from "./UserContext"

const App = () => {
  const [song, setSong] = useState("");
  const [user, setUser] = useState(false);

  return (
    <div>
      <SongContext.Provider value={[song, setSong]}>
        <UserContext.Provider value={[user, setUser]}>
          <Navbar />
          <Player link={song} />
          <Switch>
            <Route exact path="/" component={Home} linkSong={setSong} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/profile' component={Profile}/>
          </Switch>
        </UserContext.Provider>
      </SongContext.Provider>
    </div>
  );
};

export default App;
