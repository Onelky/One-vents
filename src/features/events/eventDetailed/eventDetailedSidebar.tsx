import { Segment, Item } from "semantic-ui-react"
import EventSidebarAtendee from './eventSidebarAtendee'

export default function EventDetailedSidebar({event}: any) {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        inverted
        color="teal"
      >
        {event.attendees.length} {event.attendees.length > 1 ? 'people' : 'person' } going
      </Segment>
      <Segment attached clearing>
        <Item.Group relaxed divided>

          {event.attendees.map((atendee: any) => (

            <EventSidebarAtendee
              atendee={atendee}
              key={atendee.id}/>
          ))}

        </Item.Group>
      </Segment>

    </>

  )
}


