import * as React from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, Table, Spinner } from "reactstrap";
import { Query, Mutation } from "react-apollo";
import { EVENTS } from "../graphql/events";
import styles from "./EventList.module.css";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import EventRow from "./EventRow";
import { Route } from "react-router-dom";

type IEvents = {
  id: string;
  title: string;
  source: string;
  description: string;
  date: Date;
  href: string;
};

interface EventContainerProps {
  onTitleClick: object;
  events: Array<IEvents>;
}

const $container = styled.div`
  padding: 0.5rem;
`;

const $h2 = styled.h2`
  border-radius: 15px 50px 30px 5px;
  background-color: #2e8b57;
  color: white;
  font-weight: bold;
`;

const EventList = (props: EventContainerProps) => {
  return (
    <>
      <$container className={styles.clearfix}>
        <Row>
          <Col md={12}>
            <$h2> Event list </$h2>
          </Col>
        </Row>

        <Jumbotron
          style={{ margin: "1rem", borderRadius: "15px 50px 30px 5px" }}
        >
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>date</th>
                <th>title</th>
              </tr>
            </thead>
            <tbody>
              {props.events.map((event, i) => (
                <React.Fragment key={event.id}>
                  <Route
                    render={({ history }) => {
                      return (
                        <EventRow
                          onTitleClick={props.onTitleClick}
                          event={event}
                          i={i}
                        />
                      );
                    }}
                  />
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </Jumbotron>
      </$container>
    </>
  );
};

export { EventList };
