import EventList from '@/components/events/event-list'
import EventsSearch from '@/components/events/events-search'
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router'

// const EVENTS_FILTER_YEAR = ['2021', '2022', '2023']
// const EVENTS_FILTER_MONTH = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December'
// ]

export default function Events() {
  const events = getAllEvents()
  const router = useRouter()

  const onSearchHandler = (selectedYear, selectedMonth) => {
    const fullPath = `/events/${selectedYear}/${selectedMonth}`
    router.push(fullPath)
  }

  return (
    <div className="p-4 pt-20 max-w-2xl mx-auto grid grid-cols-1 gap-4">
      {/* <div className="grid grid-cols-2 items-center mb-4">
        <div className="flex gap-2 items-center">
          <label>Year</label>
          <EventsSearch options={EVENTS_FILTER_YEAR} select="Select Year" />
        </div>
        <div className="flex gap-2 items-center">
          <label>Month</label>
          <EventsSearch options={EVENTS_FILTER_MONTH} select="Select Month" />
        </div>
      </div> */}

      <EventsSearch onSearch={onSearchHandler} />

      <EventList items={events} />
    </div>
  )
}
