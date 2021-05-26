import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Item, Segment, Icon, Button, List } from 'semantic-ui-react'
import EventListAtendee from './EventListAtendee'
import { deleteEvent } from '../eventActions';
import { format } from 'date-fns';


export default function EventListItem({ event }: any) {
  const dispatch = useDispatch();

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
                onClick={() => dispatch(deleteEvent(event.id))}
                floated='right'>
                <Icon name='delete' />
                
              </Button>

            </Item>

          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{format(event.date, 'MMMM dd yyyy, h:mm a')}
            <Icon name="location arrow" />{event.venue}

          </span>
        </Segment>
        <Segment secondary>

          <List horizontal>
            {
              event.attendees &&

              event.attendees.map((atendee: any) => (
                <EventListAtendee atendee={atendee} key={atendee.id} />

              ))

            }


          </List>
        </Segment>

        <Segment clearing>
          <p>{event.description}</p>
          <Button
            floated='right'
            color='teal'
            content='View'
            as={Link} to={`/events/${event.id}`}
          />

        </Segment>

      </Segment.Group>

    </Fragment>
  )

}