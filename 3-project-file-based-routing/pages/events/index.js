import EventList from '@/components/events/event-list'
import EventsSearch from '@/components/events/events-search'
import { getAllEvents } from '@/dummy-data'

const EVENTS_FILTER = ['2021', '2022', '2023']

export default function Events() {
  const events = getAllEvents()
  return (
    <div className="p-4 pt-20">
      <div className="grid grid-cols-2 items-center mb-4">
        <div className="flex gap-2 items-center">
          <label>Year</label>
          <EventsSearch options={EVENTS_FILTER} select="Select Year" />
        </div>
        <div className="flex gap-2 items-center">
          <label>Month</label>
          <EventsSearch options={EVENTS_FILTER} select="Select Month" />
        </div>
      </div>

      <EventList items={events} />
    </div>
  )
}
