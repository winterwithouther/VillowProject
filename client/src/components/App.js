import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import PostPage from "./PostPage";
import Home from "./Home"
import Login from "./Login"
import Profile from "./Profile"
import Signup from "./Signup"
import PostForm from "./PostForm";

function App() {
  return (
    <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/posts" component={PostPage}/>
            <Route exact path="/posts/new" component={PostForm}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
          </Switch>
        </Router>
    </div>
  );
}
export default App;
