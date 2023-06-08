import EventItem from './event-item'

export default function EventList({ items }) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  )
}
