import EventList from '@/components/events/event-list'
import { getAllEvents } from '@/dummy-data'

export default function Events() {
  const events = getAllEvents()
  return (
    <div className="p-4 pt-20">
      <EventList items={events} />
    </div>
  )
}
