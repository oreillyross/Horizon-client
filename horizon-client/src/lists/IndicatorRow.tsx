import * as React from "react";
import useHover from "react-use-hover";
import styles from "./IndicatorList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndicatorRow = ({ indicator, i }) => {
  const [isHovering, hoverProps] = useHover();

  return (
    <tr className={styles.indicator} key={indicator.id} {...hoverProps}>
      <th scope="row">{i + 1}</th>
      <td>{indicator.name}</td>
      <td>
        <div>
          {isHovering ? (
            <React.Fragment>
              <span>edit icon</span>
              <span>
                <FontAwesomeIcon icon="trash" />
              </span>
            </React.Fragment>
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export { IndicatorRow as default };
