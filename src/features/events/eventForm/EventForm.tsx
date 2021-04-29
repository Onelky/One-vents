import React from 'react'
import { Segment, Header, Form, Button } from 'semantic-ui-react'


export default function EventForm({ setFormState }: any) {

  return (
    <Segment clearing>
      <Header content='Create a new event'></Header>
      <Form>
        <Form.Input
          label='Title'
          type='text'
          placeholder='Event title'
        />

        <Form.Input
          label='Category'
          placeholder='Event category'
        />

        <Form.Input
          label='Description'
          placeholder='Event description'
        />

        <Form.Input
          label='City'
          placeholder='Event city'
        />

        <Form.Input
          label='Date'
          type='date'
          placeholder='Event date'
        />

        <Button type='submit' floated='right' positive>Submit</Button>
        <Button type='submit' floated='right' onClick={ () => setFormState(false)}>Cancel</Button>
      </Form>
    </Segment>
  )

}