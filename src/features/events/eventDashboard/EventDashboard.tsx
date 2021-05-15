import { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sample-data'


export default function EventDashboard({ formOpen, setFormState }: any) {
  const [events, setEvents] = useState(sampleData)
  const [selectedEvent, setSelectedEvent] = useState(null);



  // function createEvent(newEvent: any) {
  //   setEvents([...events, newEvent])
  // }

  // function handleUpdateEvent(event: any) {

  //   setEvents(events.map(evt => evt.id === event.id ? event : evt));
  //   setSelectedEvent(null);

  // }
  function handleSelectedEvent(event: any) {
    setSelectedEvent(event);
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


      </Grid.Column>
    </Grid>
  )

}

