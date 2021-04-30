import cuid from 'cuid';
import React, { useState } from 'react'
import { Segment, Header, Form, Button } from 'semantic-ui-react'


export default function EventForm({ setFormState, createEvent, selectedEvent, updateEvent }: any) {
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    venue: '',
    date: ''
  }
  const [eventValues, setValues] = useState(initialValues);

  function handleSubmit() {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...eventValues })
      : createEvent({...eventValues, id: cuid(), hostedBy: 'Onelky', attendees: [] });
    
      setFormState(false);
  }

  function handleInputChanges(e: any) {
    const { value, name } = e.target;
    setValues({ ...eventValues, [name]: value })

  }



  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit event' : 'Create a new event'}></Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label='Title'
          type='text'
          placeholder='Event title'
          name='title'
          value={eventValues.title}
          onChange={e => handleInputChanges(e)}
        />

        <Form.Input
          label='Category'
          value={eventValues.category}
          placeholder='Event category'
          name='category'
          onChange={e => handleInputChanges(e)}
        />

        <Form.Input
          label='Description'
          placeholder='Event description'
          name='description'
          value={eventValues.description}
          onChange={e => handleInputChanges(e)}
        />

        <Form.Input
          label='City'
          placeholder='Event city'
          name='venue'
          value={eventValues.venue}
          onChange={e => handleInputChanges(e)}
        />

        <Form.Input
          label='Date'
          type='date'
          placeholder='Event date'
          name='date'
          value={eventValues.date}
          onChange={e => handleInputChanges(e)}
        />

        <Button
          type='submit'
          floated='right'
          positive
          content={selectedEvent ? 'Update' : 'Submit'}
        />
        <Button floated='right' onClick={() => setFormState(false)}>Cancel</Button>
      </Form>
    </Segment>
  )

}