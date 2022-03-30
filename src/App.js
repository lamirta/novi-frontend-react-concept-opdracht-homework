import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Link, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";

// GET https://www.reddit.com/hot.json?limit=15
// GET https://www.reddit.com/r/{SUBREDDIT-HIER}/about.json


function App() {
  return (
      <div>
          <Header/>
          <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
              <Route path='/subreddit/:subredditId'>
                  <Subreddit/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
