import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ExportTable from "../components/ExportTable";
import { EVENTS } from "../data/events";

const Events = () => {
  const [events, setEvents] = React.useState([
    {
      title: "",
      source: "",
      href: "",
      date: "2019-03-14T14:34:52.019Z",
      id: "123456789"
    }
  ]);

  const remove = id => {
    const newEvents = events.filter((o, i) => {
      return id != o.id;
    });
    setEvents(newEvents);
  };

  return (
    <Query query={EVENTS}>
      {({ loading, error, data }) => {
        if (loading) return <div> Loading .... </div>;
        if (error) return <div> Error :( </div>;
        if (events.length <= 1) {
          setEvents(data.events);
        }

        return <ExportTable events={events} onRemove={remove} />;
      }}
    </Query>
  );
};

export default Events;
