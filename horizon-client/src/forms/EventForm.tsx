import * as React from "react";
import styled from "styled-components";
import { neatDate } from "../lib/displayDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const $container = styled.div`
  border: 1px solid green;
  padding: 1rem;
  margin-left: 20px;
  border-radius: 15px;
  background-color: Gainsboro;
`;

const $date = styled.h4`
  display: inline-block;
  background-color: lightgrey;
  border-radius: 15px;
  padding: 1rem;
  margin-left: 20px;
`;

const $divider = styled.span`
  padding: 50px;
`;
const $input = styled.input`
  margin: 0;
  padding: 0;
  width: 100%;
  border-radius: 15px;
  padding: 0.7rem;
`;

const $bodyText = styled.h3`
  text-align: justify;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: LightYellow;
`;

function EventForm({ event }) {
  const [eventTitle, setEventTitle] = React.useState(event.title);

  return (
    <$container>
      <h1>
        <$input
          onChange={e => setEventTitle(e.target.value)}
          className="inherit"
          type="text"
          value={eventTitle}
        />
      </h1>
      <$date>
        {neatDate(event.date)}
        <$divider> | </$divider>
        <a href={event.href} target="_blank" rel="noopener">
          {" "}
          <FontAwesomeIcon icon="link" />
        </a>{" "}
      </$date>
      <h4>Source: {event.source}</h4>
      <$bodyText>{event.description}</$bodyText>
    </$container>
  );
}

export { EventForm };
