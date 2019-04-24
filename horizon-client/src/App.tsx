import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import SubHeader from "./components/SubHeader";
import Scenarios from "./pages/Scenarios";
import NotFound from "./pages/NotFound";
import Keywords from "./pages/Keywords";
import { Route, Switch } from "react-router-dom";
import TextAutoComplete from "./components/TextAutoComplete";
import ScenarioForm from "./forms/ScenarioForm";
import IndicatorForm from "./forms/IndicatorForm";
import KeywordForm from "./forms/KeywordForm";
import EventForm from "./forms/EventForm";
import IndicatorList from "./lists/IndicatorList";
import ScenarioList from "./lists/ScenarioList";
import EventList from "./lists/EventList";
import { Jumbotron } from "reactstrap";

const keywords = [];

function App(props) {
  return (
    <div className="App">
      <Header />
      <SubHeader />

      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <TextAutoComplete {...props} suggestedItems={keywords} />
          )}
        />
        <Route path="/scenarios" component={ScenarioList} />
        <Route path="/forms/scenario/:id" component={ScenarioForm} />
        <Route path="/forms/scenario" component={ScenarioForm} />
        <Route path="/forms/keywords" component={KeywordForm} />
        <Route path="/forms/indicator" component={IndicatorForm} />
        <Route path="/forms/event" component={EventForm} />
        <Route path="/events" component={EventList} />
        <Route path="/indicators" component={IndicatorList} />
        <Route path="/keywords" component={Keywords} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
