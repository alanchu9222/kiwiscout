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
  constructor(props) {
    super(props);
    this.navBar = React.createRef();
  }
  state = {
    flashMessage: "Welcome to the Local Travel Guide - please log in to begin"
  };

  componentDidUpdate(prevProps) {
    if (this.state.refresh === true) {
      this.setState({ refresh: false });
    }
  }
  render() {
    return (
      <div className="App-main">
        <NavBar ref={this.navBar} tripDates={this.state.tripDates} />
        <Flash message={this.state.flashMessage} />
        <Instructions />
        <Delete />
        <Update />
        <TravelCards />
        <TravelPlan className="travel-plan" ref="travelPlan" />
      </div>
    );
  }
}

export default App;
