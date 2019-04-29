import * as React from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, Table, Spinner } from "reactstrap";
import { Query, Mutation } from "react-apollo";
import { EVENTS } from "../data/events";
import styles from "./EventList.module.css";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import EventRow from "./EventRow";
import { Route } from 'react-router-dom'

const $container = styled.div`
  padding: 0.5rem;
`;

const $h2 = styled.h2`
  border-radius: 15px 50px 30px 5px;
  background-color: #2e8b57;
  color: white;
  font-weight: bold;
`;

const EventList = props => {
  const [loading, setLoading] = React.useState(false);
  const [eventData, setEventData] = React.useState([]);

  const removeEvent = id => {
    setEventData(
      eventData.filter(event => {
        return event.id !== id;
      })
    );
  };

  return (
    <React.Fragment>
      <$container className={styles.clearfix}>
        <Row>
          <Col md={12}>
            <$h2> Event list </$h2>
          </Col>
        </Row>
        {loading ? null : (
          <Link to="/forms/event">
            <Icon
              className={styles.iconHover}
              color="primary"
              style={{ fontSize: 60 }}
            >
              add_circle
            </Icon>
          </Link>
        )}
        <Jumbotron
          style={{ margin: "1rem", borderRadius: "15px 50px 30px 5px" }}
        >
          <Query query={EVENTS}>
            {({ loading, error, data }) => {
              setLoading(loading);
              if (loading)
                return (
                  <Row>
                    <Col md={12} style={{ textAlign: "center" }}>
                      <Spinner color="success" />
                    </Col>
                  </Row>
                );
              if (error) return <div>Oops... something went wrong!</div>;
              if (eventData.length === 0) setEventData(data.events);
              return (
                <Table bordered>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>date</th>
                      <th>title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventData.map((event, i) => (
                      <React.Fragment key={event.id}>
                      <Route render={({history}) => {return (
                          <EventRow
                        onDelete={removeEvent}
                        onClick={ () => {
                          history.push('/forms/event')
                        }}
                        
                        event={event}
                        i={i}
                      />
                      )}}>
                      </Route>
                      </React.Fragment>
                    ))}
                  </tbody>
                </Table>
              );
            }}
          </Query>
        </Jumbotron>
      </$container>
    </React.Fragment>
  );
};

export { EventList as default };
