import * as React from "react";
import useHover from "react-use-hover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./IndicatorRow.module.css";

const IndicatorRow = ({ indicator, i }) => {
  const [isHovering, hoverProps] = useHover();

  return (
    <tr className={styles.indicator} key={indicator.id} {...hoverProps}>
      <th scope="row">{i + 1}</th>
      <td>{indicator.name}</td>
      <td>
        <div>
          <React.Fragment>
            <span className={styles.icons}>
              <FontAwesomeIcon icon="edit" />
            </span>
            <span className={styles.icons}>
              <FontAwesomeIcon icon="trash" />
            </span>
          </React.Fragment>
        </div>
      </td>
    </tr>
  );
};

export { IndicatorRow as default };
