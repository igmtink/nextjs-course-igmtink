import Image from 'next/image'

import DateIcon from '@/components/icons/date-icon'
import LocationIcon from '@/components/icons/location-icon'
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents
} from '@/helpers/api-util'
import { redirect } from 'next/dist/server/api-utils'

export default function EventDetail(props) {
  const event = props.event
  if (props.notFound) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <p>NO DATA FOUND!</p>
      </div>
    )
  }

  if (!event) {
    console.log(event)

    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <p>NO DATA YET!</p>
      </div>
    )
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formattedAddress = event.location.replace(', ', '\n')

  return (
    <div className="pt-14">
      <Image
        src={`/${event.image}`}
        alt={event.title}
        width={160}
        height={160}
      />
      {/* <img
        className="object-cover w-full sm:h-80 md:h-96"
        src={`/${event.image}`}
        alt={event.title}
      /> */}
      <div className="p-4">
        <h1 className="font-bold text-2xl uppercase text-center mb-6">
          {event.title}
        </h1>
        <div className="flex justify-between mb-6">
          <div className="text-gray-700 flex gap-2 items-center">
            <DateIcon />
            <time className="font-medium">{formattedDate}</time>
          </div>
          <div className="text-gray-700 flex gap-2 items-center">
            <LocationIcon />
            <address className="whitespace-pre font-medium">
              {formattedAddress}
            </address>
          </div>
        </div>
        <p className="text-gray-500">{event.description}</p>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  // const events = await getAllEvents()

  // Getting only featured events because this item is showing from the starting page so this is always gonna visit that's why we only pre-generate this event and the others will be manual pre-generate using (fallback: true)
  const events = await getFeaturedEvents()
  const paths = events.map((event) => ({ params: { eventId: event.id } }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context) {
  console.log('Static Page')

  const eventId = context.params.eventId
  const event = await getEventById(eventId)

  console.log(event)

  if (!event) {
    return {
      // notFound: true
      // redirect: {
      //   destination: '/error'
      // }
      props: {
        notFound: true
      }
    }
  }

  return {
    props: {
      event: event
    },
    // Page Detail should be less duration to pre-generate again because all details on page is important whenever we have changes
    revalidate: 30
  }
}
