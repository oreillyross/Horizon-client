import * as React from "react";
import useHover from "react-use-hover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ScenarioRow.module.css";
import { Mutation } from "react-apollo";
import { DELETE_SCENARIO } from "../data/scenarios";

const ScenarioRow = ({ scenario, i, onDelete }) => {
  const [isHovering, hoverProps] = useHover();

  return (
    <tr className={styles.indicator} {...hoverProps}>
      <th scope="row">{i + 1}</th>
      <td>{scenario.name}</td>
      <td>
        <div>
          <React.Fragment>
            <span className={styles.icons}>
              <FontAwesomeIcon icon="edit" />
            </span>
            <Mutation mutation={DELETE_SCENARIO}>
              {deleteScenario => {
                return (
                  <span
                    onClick={() => {
                      deleteScenario({ variables: { id: scenario.id } });
                      onDelete(scenario.id);
                    }}
                    className={styles.icons}
                  >
                    <FontAwesomeIcon icon="trash" />
                  </span>
                );
              }}
            </Mutation>
          </React.Fragment>
        </div>
      </td>
    </tr>
  );
};

export { ScenarioRow as default };
