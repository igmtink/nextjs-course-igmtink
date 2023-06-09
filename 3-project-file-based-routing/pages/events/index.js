import EventList from '@/components/events/event-list'
import EventsSearch from '@/components/events/events-search'
import { getAllEvents } from '@/dummy-data'

export default function Events() {
  const events = getAllEvents()
  return (
    <div className="p-4 pt-20">
      <div className="mb-4">
        <EventsSearch />
      </div>

      <EventList items={events} />
    </div>
  )
}
