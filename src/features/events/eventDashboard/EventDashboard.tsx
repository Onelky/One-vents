import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm'
import {sampleData} from '../../../app/api/sample-data'


export default function EventDashboard({ formOpen, setFormState }: any) {
  const [events, setEvents] = useState(sampleData)
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events = {events} ></EventList>

      </Grid.Column>

      <Grid.Column width={6}>
        {
          formOpen &&
          <EventForm setFormState={setFormState} />
        }

      </Grid.Column>
    </Grid>
  )

}

