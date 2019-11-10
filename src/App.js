import history from "./history";
import { Redirect, Router, Route, Switch } from "react-router-dom";

import React from "react";
import NavBar from "./components/NavBar";
import TravelPlan from "./components/TravelPlan";
import TravelCards from "./components/TravelCards";
import Instructions from "./components/Instructions";
import Flash from "./components/Flash";
import Update from "./components/U_update";
import Delete from "./components/U_delete";
import "./components/Flash.css";
import "./App.css";
class App extends React.Component {
  state = {
    flashMessage: "Welcome to the Local Travel Guide - please log in to begin"
  };

  render() {
    return (
      <Router history={history}>
        <div className="App-main">
          <NavBar />
          <Flash message={this.state.flashMessage} />
          <Instructions />
          <Delete />
          <Update />
          <Switch>
            <Redirect exact from="/" to="/trips" />
            <Route exact path="/trips" component={TravelCards} />
            <Route exact path="/travel-guide/show/:id" component={TravelPlan} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
