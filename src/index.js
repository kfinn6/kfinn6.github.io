import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Photography from './pages/Photography'
import Architecture from './pages/Architecture'
import Travel from './pages/Travel'
import PageNotFound from './pages/PageNotFound'

import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/photography">
          <Photography/>
        </Route>
        <Route exact path="/architecture">
          <Architecture/>
        </Route>
        <Route exact path="/travel">
          <Travel/>
        </Route>
        <Route path="/*">
          <PageNotFound/>
        </Route>


      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
