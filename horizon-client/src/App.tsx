import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import SubHeader from "./components/SubHeader";
import Scenarios from "./pages/Scenarios";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Keywords from "./pages/Keywords";
import { Route, Switch } from "react-router-dom";
import TextAutoComplete from "./components/TextAutoComplete";
import ScenarioForm from "./forms/ScenarioForm";
import IndicatorForm from "./forms/IndicatorForm";
import { Jumbotron } from "reactstrap";

const keywords = [];

function App(props) {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Jumbotron>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <TextAutoComplete {...props} suggestedItems={keywords} />
            )}
          />
          <Route path="/scenarios" component={Scenarios} />
          <Route path="/forms/scenario/:id" component={ScenarioForm} />
          <Route path="/forms/scenario" component={ScenarioForm} />
          <Route path="/events" component={Events} />
          <Route path="/indicators" component={IndicatorForm} />
          <Route path="/keywords" component={Keywords} />
          <Route component={NotFound} />
        </Switch>
      </Jumbotron>
    </div>
  );
}

export default App;
