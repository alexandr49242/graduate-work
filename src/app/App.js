import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import BicyclesList from "./components/BicyclesList";
import CareerPage from "./components/СareerPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/career" component={CareerPage} />
        <Route path="/bicycles/:bicycleId?" component={BicyclesList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
