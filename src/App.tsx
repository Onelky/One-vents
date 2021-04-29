import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EventDashboard from './features/events/eventDashboard/EventDashboard'
import Navbar from './features/nav/Navbar'
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
export default function App() {
  const [formOpen, setFormState] = useState(false); //Este es para definir que el estado del form sea cerrado originalmente
  return (
    <>
      <Navbar setFormState={setFormState} />

      <Container className="main">
        <EventDashboard setFormState={setFormState} formOpen={formOpen} />
      </Container>

    </>
  );
}
