import { Form, Formik } from "formik";
import { Button, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import CustomFormField from "../../app/common/form/customFormField";
import * as Yup from 'yup';
import ModalWrapper from "../../app/common/modals/modalWrapper";
import { useDispatch } from "react-redux";
import { signIn } from "./authActions";
import { closeModal } from "../../app/common/modals/modalActions";

export default function LoginForm({ history }: any) {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: ''
  }
  const loginValidationSchema = Yup.object().shape({

    email: Yup.string()
      .required('Required!')
      .email('Not a valid email'),

    password: Yup.string()
      .required('Required!'),
  });

  function handleSubmit(values: any, setSubmitting: any) {
    dispatch(signIn(values));
    setSubmitting(false);
    dispatch(closeModal());
    console.log('Listo!', values)
    
  }


  return (
    <ModalWrapper size='small' header='Log into your account'>
      <Grid>
        <Grid.Column textAlign='center'>

          <Formik initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}>
            
            {({ isValid, dirty, isSubmitting }) => (

              <Form className='ui form'>
                <Segment stacked>

                  <CustomFormField name='email' placeholder='Email' icon='user' iconPosition='left' />
                  <CustomFormField name='password' placeholder='Password' icon='lock' iconPosition='left' type='password' />

                  <Button color='teal' fluid size='large'
                    type = 'submit'
                    content='Login'
                    disabled={!isValid || !dirty || isSubmitting}
                    loading={isSubmitting} />
                </Segment>

              </Form>


            )}

          </Formik>
          <Message>
            Don't have an account'? <a href='#'>Sign Up</a>
          </Message>

        </Grid.Column>
      </Grid>



    </ModalWrapper>
  )
}
