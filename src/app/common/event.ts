import { Person } from './person';

export interface Event{
  id?: number,
  title: string,
  date: string,
  category: string, //number
  description: string,
  city: string,
  venue: string,
  hostedBy: Person, //num
  attendees: Person[]
}