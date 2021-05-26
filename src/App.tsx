import { Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import EventDashboard from './features/events/eventDashboard/EventDashboard'
import Navbar from './features/nav/Navbar'
import { Container } from 'semantic-ui-react'
import { Route, useLocation } from 'react-router-dom'
import HomePage from './features/home/HomePage'
import EventDetailed from './features/events/eventDetailed/eventDetailed'
import EventForm from './features/events/eventForm/EventForm'
import Sandbox from './testReducer/sandbox';
import ModalManager from './app/common/modals/modalManager';

export default function App() {

  const { key } = useLocation();


  return (
    <>
      <ModalManager/>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <Navbar />
            <Container className="main">
              <Route exact path='/events' component={EventDashboard} />
              <Route exact path='/sandbox' component={Sandbox} />
              
              <Route path='/events/:id' component={EventDetailed} />
              <Route path={['/createevent', '/manage/:id']} component={EventForm} key = {key} />

            </Container>
          </Fragment>

        )}
      />

    </>
  );
}
