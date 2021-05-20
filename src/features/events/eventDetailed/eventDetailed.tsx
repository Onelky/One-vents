import { Grid } from "semantic-ui-react"
import EventDetailedHeader from "./eventDetailedHeader"
import EventDetailedInfo from "./eventDetailedInfo"
import EventDetailedSidebar from "./eventDetailedSidebar"
import EventDetailedComents from "./eventDetailedComments"
import { RootStateOrAny, useSelector } from "react-redux"

export default function EventDetailed({ match }: any) {
  const event = useSelector((state: RootStateOrAny) => state.event.events.find((evt: any) => evt.id === match.params.id));

  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <EventDetailedHeader event={event} />
          <EventDetailedInfo event={event} />
          <EventDetailedComents />

        </Grid.Column>
        <Grid.Column>

          <EventDetailedSidebar event = {event} />

        </Grid.Column>
      </Grid.Row>

    </Grid>

  )
}