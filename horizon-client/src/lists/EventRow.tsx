import * as React from "react";
import useHover from "react-use-hover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./EventRow.module.css";
import { displayDate } from "../lib/displayDate";
import { REMOVE_EVENT } from "../graphql/events";

const EventRow = ({ event, i, onTitleClick }) => {
  const [isHovering, hoverProps] = useHover();

  return (
    <tr className={styles.indicator} {...hoverProps}>
      <th scope="row">{i + 1}</th>
      <td>{displayDate(event.date)}</td>
      <td>
        <span onClick={() => onTitleClick(event.id)}>{event.title}</span>
      </td>
      <td>
        <div>
          <React.Fragment>
            <span className={styles.icons}>
              <FontAwesomeIcon icon="edit" />
            </span>
          </React.Fragment>
        </div>
      </td>
    </tr>
  );
};

export { EventRow as default };
