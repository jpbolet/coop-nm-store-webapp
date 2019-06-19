import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import DeliveryNotesList from "./components/deliverynotes-list.component";
import RecallItemsList from "./components/recalls-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src="images/coop-logo.svg"/>
            <Link to="/" className="navbar-brand">Co-op News & Mags - Store Webapp</Link>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Delivery</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/recalls" className="nav-link">Recalls</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={DeliveryNotesList} />
          <Route path="/recalls" exact component={RecallItemsList} />
        </div>
      </Router>
    );
  }
}

export default App;
