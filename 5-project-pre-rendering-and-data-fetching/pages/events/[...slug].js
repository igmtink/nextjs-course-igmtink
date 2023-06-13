import ResultsTitle from '@/components/events/results-title.js'
import EventList from '@/components/events/event-list'
import { Button } from '@/components/ui/igmtink'
import { getFilteredEvents } from '@/helpers/api-util'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function FilteredEvents({ filteredEvents, hasError, date }) {
  const router = useRouter()
  const filteredData = router.query.slug

  const [loadedEvents, setLoadedEvents] = useState(filteredEvents)

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(
    'https://nextjs-events-a5578-default-rtdb.firebaseio.com/events.json',
    fetcher
  )

  useEffect(() => {
    if (data) {
      const events = []

      for (const key in data) {
        events.push({
          id: key,
          ...data[key]
        })
      }

      setLoadedEvents(events)
    }
  }, [data])

  if (!loadedEvents) {
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

  // Check the error before filtering
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 0 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <div className="fixed flex-col gap-4 inset-0 flex justify-center items-center">
        <p>Invalid filter. Please adjust your values!</p>
        <Button link="/events">Show All Events</Button>
      </div>
    )
  }

  const EventsFiltered = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    )
  })

  // const { year, month } = date

  // if (hasError) {
  //   return (
  //     <div className="fixed flex-col gap-4 inset-0 flex justify-center items-center">
  //       <p>Invalid filter. Please adjust your values!</p>
  //       <Button link="/events">Show All Events</Button>
  //     </div>
  //   )
  // }

  if (!EventsFiltered || EventsFiltered.length === 0) {
    return (
      <div className="fixed flex-col gap-4 inset-0 flex justify-center items-center">
        <p>No events found for the chosen filter!</p>
        <Button link="/events">Show All Events</Button>
      </div>
    )
  }

  const dateTitle = new Date(numYear, numMonth - 1)

  return (
    <div className="p-4 pt-20 max-w-2xl mx-auto grid grid-cols-1 gap-12">
      <ResultsTitle date={dateTitle} />
      <EventList items={filteredEvents} />
    </div>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           slug: ['a', 'b']
//         }
//       }
//     ],
//     fallback: 'blocking'
//   }
// }

export async function getServerSideProps({ params }) {
  const filteredData = params.slug

  console.log(filteredData)

  const filteredYear = filteredData[0]
  const filteredMonth = filteredData[1]

  // + sign to convert string into number
  const numYear = +filteredYear
  const numMonth = +filteredMonth

  // if (
  //   isNaN(numYear) ||
  //   isNaN(numMonth) ||
  //   numYear > 2030 ||
  //   numYear < 2021 ||
  //   numMonth < 0 ||
  //   numMonth > 12
  // ) {
  //   return {
  //     props: {
  //       hasError: true
  //     }
  //     // notFound: true
  //     // redirect: { destination: '/error' }
  //   }
  // }

  const events = await getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  console.log(events)

  return {
    props: {
      filteredEvents: events,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  }
}
