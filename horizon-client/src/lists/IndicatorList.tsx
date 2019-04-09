import * as React from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, Table, Spinner } from "reactstrap";
import { Query, Mutation } from "react-apollo";
import { INDICATORS } from "../data/indicators";
import Indicator from "./Indicator";
import styles from "./IndicatorList.module.css";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import useHover from "../lib/use-hover";

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
  const [loading, setLoading] = React.useState(false);

  const [hoverRef, isHovered] = useHover();

  return (
    <React.Fragment>
      <$container className={styles.clearfix}>
        <Row>
          <Col md={12}>
            <$h2> Indicator list </$h2>
          </Col>
        </Row>

        <Jumbotron
          style={{ margin: "1rem", borderRadius: "15px 50px 30px 5px" }}
        >
          <Query query={INDICATORS}>
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
              return (
                <Table bordered>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Indicator Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.indicators.map((indicator, i) => (
                      <tr
                        className={styles.indicator}
                        key={indicator.id}
                        ref={hoverRef}
                      >
                        <th scope="row">{i + 1}</th>
                        <td>{indicator.name}</td>
                        <td>
                          <div>edit icon</div>
                          <div>garbage can</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              );
            }}
          </Query>
        </Jumbotron>

        {loading ? null : (
          <Link to="/forms/indicator">
            <Icon
              className={styles.iconHover}
              color="primary"
              style={{ fontSize: 60 }}
            >
              add_circle
            </Icon>
          </Link>
        )}
      </$container>
    </React.Fragment>
  );
};

export { IndicatorList as default };
