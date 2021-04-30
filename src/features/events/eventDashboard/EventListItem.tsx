import React, { Fragment } from 'react';
import { Item, Segment, Icon, Button, List } from 'semantic-ui-react'
import EventListAtendee from './EventListAtendee'

export default function EventListItem({ event, handleSelectedEvent, deleteEvent }: any) {
  return (
    <Fragment>
      <Segment.Group id="eventListItem">
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image circular size='tiny' src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>Hosted by {event.hostedBy}</Item.Description>

              </Item.Content>
              <Button
                className='deleteBtn'                
                onClick={() => deleteEvent(event.id)}
                floated = 'right'
              >
                <Icon
                  name='delete' />
              </Button>

            </Item>

          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{event.date}
            <Icon name="location arrow" />{event.venue}

          </span>
        </Segment>
        <Segment secondary>

          <List horizontal>
            {event.attendees.map((atendee: any) => (
              <EventListAtendee atendee={atendee} key={atendee.id} />

            ))}

          </List>
        </Segment>

        <Segment clearing>
          <p>{event.description}</p>
          <Button
            floated='right'
            color='teal'
            content='View'
            onClick={() => handleSelectedEvent(event)} />

        </Segment>

      </Segment.Group>

    </Fragment>
  )

}