import DateIcon from '@/components/icons/date-icon'
import LocationIcon from '@/components/icons/location-icon'
import { getAllEvents } from '@/helpers/api-util'
import { getEventById } from '@/helpers/api-util'

export default function EventDetail({ event }) {
  if (!event) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <p>No Event Found!</p>
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
      <img
        className="object-cover w-full sm:h-80 md:h-96"
        src={`/${event.image}`}
        alt={event.title}
      />
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
  const events = await getAllEvents()
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

  return {
    props: {
      event: event
    }
  }
}
