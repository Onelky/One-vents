import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { RootStateOrAny, useSelector } from 'react-redux';


export default function EventDashboard() {

  const { events } = useSelector((state: RootStateOrAny) => state.event);


  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}

        />

      </Grid.Column>

      <Grid.Column width={6}>


      </Grid.Column>
    </Grid>
  )

}

