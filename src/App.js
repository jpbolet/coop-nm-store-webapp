import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import DeliveryNotesList from "./components/deliverynotes-list.component";
import RecallItemsList from "./components/recalls-list.component";
import CreditItemsList from "./components/credititems-list.component";
import ActivitySheetItemsList from "./components/activitysheet-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src="images/coop-logo.svg" alt="Co-op logo" className="logo-image"/>
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
                <li className="navbar-item">
                  <Link to="/credititems" className="nav-link">Credits</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/activitysheetitems" className="nav-link">Activity Sheet</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={DeliveryNotesList} />
          <Route path="/recalls" exact component={RecallItemsList} />
          <Route path="/credititems" exact component={CreditItemsList} />
          <Route path="/activitysheetitems" exact component={ActivitySheetItemsList} />
        </div>
      </Router>
    );
  }
}

export default App;
