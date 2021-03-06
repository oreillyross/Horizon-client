import * as React from "react";
import useHover from "react-use-hover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./IndicatorRow.module.css";
import { Mutation } from "react-apollo";
import { DELETE_INDICATOR } from "../graphql/indicators";

const IndicatorRow = ({ indicator, i, onDelete }) => {
  const [isHovering, hoverProps] = useHover();

  return (
    <tr className={styles.indicator} {...hoverProps}>
      <th scope="row">{i + 1}</th>
      <td>{indicator.name}</td>
      <td>
        <div>
          <React.Fragment>
            <span className={styles.icons}>
              <FontAwesomeIcon icon="edit" />
            </span>
            <Mutation mutation={DELETE_INDICATOR}>
              {deleteIndicator => {
                return (
                  <span
                    onClick={() => {
                      deleteIndicator({ variables: { id: indicator.id } });
                      onDelete(indicator.id);
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

export { IndicatorRow as default };
