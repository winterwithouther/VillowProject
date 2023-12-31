import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import PostPage from "./PostPage";
import Home from "./Home"
import Login from "./Login"
import Profile from "./Profile"
import Signup from "./Signup"
import PostForm from "./PostForm";
import Favorites from './Favorites';

function App() {
  const [posts, setPosts] = useState([])
  const [houses, setHouses] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(data => {
      setPosts(data);
      setFavorites(data.filter(post => post.favorited === true))
    })
  }, [])

  useEffect(() => {
    fetch("/houses")
    .then(res => res.json())
    .then(data => {
      setHouses(data)
    })
  }, [])

  function onAddPost(newPost) {
    setPosts([...posts, newPost])
  }

  function handleAddToFavorites(favHouse) {
    setFavorites([...favorites, favHouse])
  }

  function handleDeleteFromFavorites(favHouse) {
    // setFavorites([...favorites, favHouse])
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
                houses={houses}
              />  
            </Route>
            <Route exact path="/posts/new">
              <PostForm 
                posts={posts}
                onAddPost={onAddPost}
                houses={houses}
              />
            </Route>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/favorites">
            <Favorites
              favorites={favorites}
              handleAddToFavorites={handleAddToFavorites}
              handleDeleteFromFavorites={handleDeleteFromFavorites}
            />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}
export default App;
