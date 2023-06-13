import ResultsTitle from '@/components/events/results-title.js'
import EventList from '@/components/events/event-list'
import { Button } from '@/components/ui/igmtink'
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
      <div className="fixed flex-col gap-4 inset-0 flex justify-center items-center">
        <p>Invalid filter. Please adjust your values!</p>
        <Button link="/events">Show All Events</Button>
      </div>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="fixed flex-col gap-4 inset-0 flex justify-center items-center">
        <p>No events found for the chosen filter!</p>
        <Button link="/events">Show All Events</Button>
      </div>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <div className="p-4 pt-20 max-w-2xl mx-auto grid grid-cols-1 gap-12">
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  )
}
