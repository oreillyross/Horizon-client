import React, { useState } from "react";
import "./App.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Route, Switch } from "react-router-dom";
import { Jumbotron } from "reactstrap";

import Header from "./components/Header";
import SubHeader from "./components/SubHeader";

import NotFound from "./pages/NotFound";

import ScenarioForm from "./forms/ScenarioForm";
import IndicatorForm from "./forms/IndicatorForm";
import KeywordForm from "./forms/KeywordForm";
import EventForm from "./forms/EventForm";

import IndicatorList from "./lists/IndicatorList";
import ScenarioList from "./lists/ScenarioList";
import { Events } from "./pages/Events";

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Switch>
        <Route path="/scenarios" component={ScenarioList} />
        <Route path="/forms/scenario/:id" component={ScenarioForm} />
        <Route path="/forms/scenario" component={ScenarioForm} />
        <Route path="/forms/keywords" component={KeywordForm} />
        <Route path="/forms/indicator" component={IndicatorForm} />
        <Route path="/forms/event" component={EventForm} />
        <Route path="/pages/event" component={Event} />
        <Route path="/events" render={() => <Events />} />
        <Route path="/indicators" component={IndicatorList} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
