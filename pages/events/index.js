import React from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getFeaturedEvents, getAllEvents } from "../../dummy-data";

function Events() {
  const events = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
}

export default Events;
