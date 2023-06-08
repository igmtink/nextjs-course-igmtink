import Link from 'next/link'
import { Button, Card } from '../ui/igmtink'

export default function EventItem({ id, title, date, location, image }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`

  return (
    <Card>
      <img className="sm:w-[40%] object-cover" src={`/${image}`} alt={title} />
      <div className="px-6 py-4 w-full">
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-2">{title}</h2>
          <time className="mb-2 block font-medium">{formattedDate}</time>
          <address className="whitespace-pre">{formattedAddress}</address>
        </div>
        <div className="flex justify-end">
          <Button link={exploreLink}>
            Explore Event{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </Card>
  )
}
