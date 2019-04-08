import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ScenarioForm from "../forms/ScenarioForm";

const StyledSubHeader = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
  text-align: left;
`;

const SubHeader = () => {
  return (
    <StyledSubHeader>
      Home {} / {}
      <Link to="/scenarios">Scenarios</Link> /
      <Link to="/indicators">Indicators</Link> /<Link to="/events">Events</Link>{" "}
      /<Link to="/keywords"> Keywords </Link>
    </StyledSubHeader>
  );
};

export default SubHeader;
