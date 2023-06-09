import EventList from '@/components/events/event-list'
import EventsSearch from '@/components/events/events-search'
import { getAllEvents } from '@/dummy-data'

const EVENTS_FILTER = ['2021', '2022', '2023']

export default function Events() {
  const events = getAllEvents()
  return (
    <div className="p-4 pt-20">
      <div className="mb-4">
        <EventsSearch options={EVENTS_FILTER} />
      </div>

      <EventList items={events} />
    </div>
  )
}
