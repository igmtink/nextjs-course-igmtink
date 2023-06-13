import ResultsTitle from '@/components/events/results-title.js'
import EventList from '@/components/events/event-list'
import { Button } from '@/components/ui/igmtink'
import { getFilteredEvents } from '@/helpers/api-util'
import { useRouter } from 'next/router'

export default function FilteredEvents({ filteredEvents, hasError, date }) {
  // const router = useRouter()
  // const filteredData = router.query.slug

  // if (!filteredData) {
  //   return (
  //     <div className="fixed inset-0 flex justify-center items-center">
  //       <p>Loading...</p>
  //     </div>
  //   )
  // }

  // const filteredYear = filteredData[0]
  // const filteredMonth = filteredData[1]

  // // + sign to convert string into number
  // const numYear = +filteredYear
  // const numMonth = +filteredMonth

  const { year, month } = date

  if (hasError) {
    return (
      <div className="fixed flex-col gap-4 inset-0 flex justify-center items-center">
        <p>Invalid filter. Please adjust your values!</p>
        <Button link="/events">Show All Events</Button>
      </div>
    )
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="fixed flex-col gap-4 inset-0 flex justify-center items-center">
        <p>No events found for the chosen filter!</p>
        <Button link="/events">Show All Events</Button>
      </div>
    )
  }

  const dateTitle = new Date(year, month - 1)

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

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 0 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true
      }
      // notFound: true
      // redirect: { destination: '/error' }
    }
  }

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
