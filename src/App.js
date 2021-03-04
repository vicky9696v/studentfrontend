import React, { Component } from "react";
import Home from "./components/homes";
import Lead from './components/lead';

import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";


class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavBar />

        <div>
          <Switch>
            <Route path="/lead" component={Lead} />
            
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
