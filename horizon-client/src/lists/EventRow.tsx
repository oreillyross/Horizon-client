import * as React from "react";
import useHover from "react-use-hover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./EventRow.module.css";
import { displayDate } from "../lib/displayDate";
import { REMOVE_EVENT } from "../graphql/events";
import { Mutation } from "react-apollo";

const EventRow = ({ event, i, onDelete, onClick }) => {
  const [isHovering, hoverProps] = useHover();

  return (
    <tr className={styles.indicator} {...hoverProps}>
      <th scope="row">{i + 1}</th>
      <span onClick={onClick}>
        <td>{displayDate(event.date)}</td>
        <td>{event.title}</td>
      </span>
      <td>
        <div>
          <React.Fragment>
            <span className={styles.icons}>
              <FontAwesomeIcon icon="edit" />
            </span>
            <Mutation mutation={REMOVE_EVENT}>
              {deleteEvent => {
                return (
                  <span
                    onClick={() => {
                      onDelete(event.id);
                      deleteEvent({ variables: { id: event.id } });
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

export { EventRow as default };
