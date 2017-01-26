// app/index.js
import React from 'react'
import { render } from 'react-dom'
import './styles';

import { Router, Route, IndexRoute, browserHistory } from "react-router";

import App from "./components/App";
import Jokes from "./components/Jokes/Jokes";


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="jokes">
        <IndexRoute component={Jokes}></IndexRoute>
      </Route>
    </Route>
  </Router>
)

render(router, document.querySelector('.application'));
