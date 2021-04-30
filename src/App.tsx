import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EventDashboard from './features/events/eventDashboard/EventDashboard'
import Navbar from './features/nav/Navbar'
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
export default function App() {
  const [formOpen, setFormState] = useState(false); //Este es para definir que el estado del form sea cerrado originalmente

  const [selectedEvent, setSelectedEvent] = useState(null);

  function openFormNav() {
    setSelectedEvent(null);
    setFormState(true);
  }

  function handleSelectedEvent(event:any) {
    setSelectedEvent(event);
    setFormState(true);
  }

  return (
    <>
      <Navbar openFormNav={openFormNav} />

      <Container className="main">
        <EventDashboard
          setFormState={setFormState}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          handleSelectedEvent={handleSelectedEvent}
          formOpen={formOpen} />
      </Container>

    </>
  );
}
