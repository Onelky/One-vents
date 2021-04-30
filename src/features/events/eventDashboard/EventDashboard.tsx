import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm'
import { sampleData } from '../../../app/api/sample-data'
import { updateSourceFile } from 'typescript';


export default function EventDashboard({ formOpen, setFormState, handleSelectedEvent,
  setSelectedEvent, selectedEvent }: any) {
  const [events, setEvents] = useState(sampleData)


  function createEvent(newEvent: any) {
    setEvents([...events, newEvent])
  }

  function handleUpdateEvent(event: any) {

    setEvents(events.map(evt => evt.id === event.id ? event : evt));
    setSelectedEvent(null);

  }

  function handleDeleteEvent(eventId: string) {
    setEvents(events.filter(evt => evt.id !== eventId))
    setSelectedEvent(null);
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          setFormState={setFormState}
          handleSelectedEvent={handleSelectedEvent}
          deleteEvent={handleDeleteEvent}

        />

      </Grid.Column>

      <Grid.Column width={6}>
        {
          formOpen &&
          <EventForm
            setFormState={setFormState}
            setEvents={setEvents}
            createEvent={createEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        }

      </Grid.Column>
    </Grid>
  )

}

