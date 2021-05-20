import EventListItem from './EventListItem'

export default function EventList({ events}: any){
  return (
    <>
      <h1>Event List</h1>
      {events.map((event: any) => (

        <EventListItem event={event} key={event.id}/>

      ))}
 

    </>
  )
}