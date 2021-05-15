import { Grid } from "semantic-ui-react"
import EventDetailedHeader from "./eventDetailedHeader"
import EventDetailedInfo from "./eventDetailedInfo"
import EventDetailedSidebar from "./eventDetailedSidebar"
import EventDetailedComents from "./eventDetailedComments"

export default function EventDetailed() {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <EventDetailedHeader></ EventDetailedHeader>
          <EventDetailedInfo></EventDetailedInfo>
          <EventDetailedComents></EventDetailedComents>

        </Grid.Column>
        <Grid.Column>

          <EventDetailedSidebar></EventDetailedSidebar>

        </Grid.Column>
      </Grid.Row>

    </Grid>

  )
}