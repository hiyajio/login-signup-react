import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/finli-login-page/">
        <div className="App">
          <div className="AppAside">
            <div className="Center">
              <a href="https://www.finliapp.com/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/finli-login-page.appspot.com/o/finli.jpg?alt=media&token=9e486900-a3b0-4b38-be4f-62af2afd2852"
                  alt="Finli App"
                  height="300"
                  width="300"
                />
              </a>
            </div>
            <div className="Download">
              <div className="AppLink">
                <a href="https://itunes.apple.com/us/app/finli-app/id1456225204?ls=1&mt=8">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/finli-login-page.appspot.com/o/app_store.jpg?alt=media&token=d63314e3-8034-43e9-8270-ae71d4154c28"
                    alt="Apple App Store"
                  />
                </a>
              </div>
              <div className="AppLink">
                <a href="https://play.google.com/store/apps/details?id=com.finli.app">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/finli-login-page.appspot.com/o/google_play.jpg?alt=media&token=3a577dbf-e525-4415-ba5e-460cb801e18d"
                    alt="Google Play Store"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="AppForm">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcherItemActive"
                className="PageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcherItemActive"
                className="PageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitleLinkActive"
                className="FormTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitleLinkActive"
                className="FormTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
