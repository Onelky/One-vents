import { ADD_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';
import { Event } from './../../app/common/event';

export function addEvent(event: Event) {
  return {
    type: ADD_EVENT,
    payload: event
  }
}

export function updateEvent(event: Event) {
  return {
    type: UPDATE_EVENT,
    payload: event
  }
}

export function deleteEvent(idEvent: number) {
  return {
    type: DELETE_EVENT,
    payload: idEvent
  }
}