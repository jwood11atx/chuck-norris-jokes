// app/index.js
import React from 'react'
import { render } from 'react-dom'
import './styles';

import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from "react-router";

import App from "./components/App";
import Home from "./components/Home/Home";
import Jokes from "./components/Jokes/Jokes";
import Settings from "./components/Settings/Settings";
import Favorites from "./components/Favorites/Favorites";




const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to='/home' component={Home} />
      <Route path="/home" component={Home} />
      <Route path="jokes">
        <IndexRoute component={Jokes}></IndexRoute>
      </Route>
      <Route path="settings">
        <IndexRoute component={Settings}></IndexRoute>
      </Route>
      <Route path="favorites">
        <IndexRoute component={Jokes}></IndexRoute>
      </Route>
    </Route>
  </Router>
)

render(router, document.querySelector('.application'));
