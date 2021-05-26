import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Header, Button } from 'semantic-ui-react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomFormField from '../../../app/common/form/customFormField';
import { addEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';
import CustomTextArea from '../../../app/common/form/customTextArea';
import CustomSelectInput from '../../../app/common/form/customSelectInput';
import { categoryData } from '../../../app/api/categoryData';
import CustomDatePicker from '../../../app/common/form/customDatePicker';
export default function EventForm({ match, history }: any) {

  const selectedEvent = useSelector((state: RootStateOrAny) => state.event.events.find((e: any) => e.id === match.params.id))
  const dispatch = useDispatch();

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    venue: '',
    date: ''
  }

  const eventValidationSchema = Yup.object().shape({

    title: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),

    category: Yup.string()
      .max(15, 'Too Long!')
      .required('Required'),

    description: Yup.string()
      .required('Required'),

    venue: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),

    date: Yup.date()
      .required('Required')
  });

  return (
    <Segment clearing>
      <Header size='huge' textAlign='center'
        content={selectedEvent ? 'Edit event' : 'Create a new event'} />
      <Formik
        initialValues={initialValues}
        onSubmit={event => {
          selectedEvent
            ? dispatch(updateEvent(event))
            : dispatch(addEvent({ ...event, id: cuid(), hostedBy: 'Onelky', attendees: [] }));

          history.push('/events')
        }}

        validationSchema={eventValidationSchema}>
        
        {({ isValid, dirty, isSubmitting }) => (
          <Form className='ui form'>
            <Header as='h3' color='teal' content='Event details' />

            <CustomFormField name='title' placeholder='Event title' />
            <CustomSelectInput name='category' placeholder='Event category' options={categoryData}></CustomSelectInput>

            <CustomTextArea rows={3} name='description' type='text' placeholder='Event description' />

            <Header as='h3' color='teal' content='Location details' />
            <CustomFormField name='venue' placeholder='Event venue' />
            
            <CustomDatePicker name='date' showTimeSelect timeCaption='Time'
              placeholderText='Event date' 
              timeFormat='HH:mm'
              dateFormat='MMMM dd yyyy, h:mm a'/>

            <Button type='submit' floated='right' positive
              content={selectedEvent ? 'Update' : 'Submit'}
              loading = {isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
            />

            <Button floated='right' as={Link} to='/events'
              content='Cancel'
              disabled={isSubmitting} />

          </Form>

        )}

        
      </Formik>

    </Segment >
  )

}
