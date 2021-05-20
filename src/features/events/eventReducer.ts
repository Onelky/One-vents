import { sampleData } from './../../app/api/sample-data';
import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from './eventConstants';


const initialState = {
  events: sampleData
}
export default function eventReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, payload]
      }

    case UPDATE_EVENT:
      return {
        ...state,
        events: [...state.events.filter(evt => evt.id !== payload.id), payload]
      }

    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter(evt => evt.id !== payload)]
      }


    default:
      return state;
  }


}