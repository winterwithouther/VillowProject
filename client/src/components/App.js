import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import PostPage from "./PostPage";
import Home from "./Home"
import Login from "./Login"
import Profile from "./Profile"
import Signup from "./Signup"
import PostForm from "./PostForm";
import Favorites from './Favorites';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  function onAddPost(newPost) {
    setPosts([...posts, newPost])
  }

  return (
    <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home 
                posts={posts}
              />
            </Route> 
            <Route exact path="/posts">
              <PostPage
                posts={posts}
              />  
            </Route>
            <Route exact path="/posts/new">
              <PostForm 
                onAddPost={onAddPost}
              />
            </Route>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/favorites" component={Favorites}/>
          </Switch>
        </Router>
    </div>
  );
}
export default App;
