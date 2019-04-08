import React, { useState } from "react";
import XLSX from "xlsx";
import styled from "styled-components";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import "./ExportTable.css";
import KeywordModal from "./KeywordModal";

const writeTheFile = () => {
  let table = document.querySelector("#events_table");
  let wb = XLSX.utils.table_to_book(table);
  XLSX.writeFile(wb, "events.xlsx");
};

const UPDATE_READ = gql`
  mutation updateread($read: Boolean, $id: ID) {
    updateEvent(where: { id: $id }, data: { read: $read }) {
      id
      read
    }
  }
`;

const DELETE_EVENT = gql`
  mutation deleteEvent($id: ID) {
    deleteEvent(where: { id: $id }) {
      id
      title
    }
  }
`;

const StyledTags = styled.div`
  margin-top: 0.5em;
  text-align: center;
`;

const EventRow = ({ event, onRemove, onTagModal }) => {
  const [read, setToggle] = useState(event.read);

  const toggleRead = id => {
    setToggle(!read);
  };

  const readIcon = read ? "envelope-open" : "envelope";
  const readColor = read ? "SlateBlue" : "SteelBlue";

  return (
    <tr className="border_bottom" key={event.id}>
      <td>
        <Mutation mutation={UPDATE_READ}>
          {(updateRead, { data }) => {
            return (
              <span
                style={{ padding: "8px" }}
                onClick={() => {
                  toggleRead(!read);
                  updateRead({ variables: { id: event.id, read: !read } });
                }}
              >
                <FontAwesomeIcon icon={readIcon} style={{ color: readColor }} />
              </span>
            );
          }}
        </Mutation>
      </td>
      <td style={{ width: "12%" }}>
        {" "}
        {event.date
          ? moment(event.date).format("LLL")
          : new Date().toUTCString()}
      </td>
      <td style={{ width: "30%", valign: "top" }}> {event.title}</td>
      <td style={{ width: "50%" }}> {event.description}</td>
      <td style={{ width: "4%" }}> {event.href}</td>
      <td>
        <div>
          <Mutation mutation={DELETE_EVENT}>
            {(deleteEvent, { data }) => {
              return (
                <span
                  onClick={() => {
                    deleteEvent({ variables: { id: event.id } });
                    onRemove(event.id);
                  }}
                >
                  <FontAwesomeIcon icon="trash" />
                </span>
              );
            }}
          </Mutation>
        </div>
        <StyledTags>
          <span onClick={() => onTagModal(event)}>
            <FontAwesomeIcon icon="tags" />
          </span>
        </StyledTags>
      </td>
    </tr>
  );
};

const ExportTable = ({ events, onRemove }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalEvent, setModalEvent] = React.useState({});

  const openModal = event => {
    setModalEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ paddingTop: "2em" }}>
      <KeywordModal
        modalEvent={modalEvent}
        openState={modalOpen}
        handleClose={closeModal}
      />
      <table id="events_table">
        <tbody>
          <tr style={{ textAlign: "left" }}>
            <th>Read</th>
            <th>Date</th>
            <th>Title</th>
            <th> Description </th>
            <th> Hyperlink </th>
          </tr>

          {events.map(a => {
            return (
              <EventRow
                key={a.id}
                onRemove={onRemove}
                event={a}
                onTagModal={openModal}
              />
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={writeTheFile}>Export Data</button>
      </div>
    </div>
  );
};

export default ExportTable;
