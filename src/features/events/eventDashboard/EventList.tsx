import React, { Component } from 'react';
import EventListItem from './EventListItem'

export default function EventList(props: any){
  return (
    <>
      <h1>Event List</h1>
      {props.events.map((event: any) => (

        <EventListItem event =  {event} key = {event.id} ></EventListItem>

      ))}
 

    </>
  )
}