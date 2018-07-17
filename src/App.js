import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Snacks from "./Snacks";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="Navigation">
          <h1>SNAXXXXX</h1>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <Snacks />
                </div>
              )}
            />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
