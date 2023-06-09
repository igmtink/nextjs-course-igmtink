import EventList from '@/components/events/event-list'
import { getFilteredEvents } from '@/dummy-data'
import { useRouter } from 'next/router'

export default function FilteredEvents() {
  const router = useRouter()
  const filteredData = router.query.slug

  if (!filteredData) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <p>Loading...</p>
      </div>
    )
  }

  const filteredYear = filteredData[0]
  const filteredMonth = filteredData[1]

  // + sign to convert string into number
  const numYear = +filteredYear
  const numMonth = +filteredMonth

  // isNaN function is to check if the value is not a number
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 0 ||
    numMonth > 12
  ) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <p>Invalid filter. Please adjust your values!</p>
      </div>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <p>No events found for the chosen filter!</p>
      </div>
    )
  }

  return (
    <div className="p-4 pt-20 max-w-2xl mx-auto">
      <EventList items={filteredEvents} />
    </div>
  )
}
