import * as React from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, Table } from "reactstrap";
import { Query, Mutation } from "react-apollo";
import { INDICATORS } from "../data/indicators";

const $container = styled.div`
  padding: 0.5rem;
`;

const $h2 = styled.h2`
  border-radius: 15px 50px 30px 5px;
  background-color: #2e8b57;
  color: white;
  font-weight: bold;
`;

const IndicatorList = props => {
  return (
    <React.Fragment>
      <$container>
        <Row>
          <Col md={12}>
            <$h2> Indicator list </$h2>
          </Col>
        </Row>

        <Jumbotron
          style={{ margin: "1rem", borderRadius: "15px 50px 30px 5px" }}
        >
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Indicator Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
              </tr>
            </tbody>
          </Table>
        </Jumbotron>
      </$container>
    </React.Fragment>
  );
};

export { IndicatorList as default };
