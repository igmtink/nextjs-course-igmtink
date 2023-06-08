import Link from 'next/link'

export default function EventItem({ id, title, date, location, image }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`

  return (
    <li className="shadow-lg rounded-lg overflow-hidden bg-teal-200">
      <img src={`/${image}`} alt={title} />
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-2">{title}</h2>
          <time>{formattedDate}</time>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Link
            className="block w-fit mx-auto px-3 py-2 bg-teal-500 hover:bg-teal-600 transition-colors rounded-md"
            href={exploreLink}
          >
            Explore Event
          </Link>
        </div>
      </div>
    </li>
  )
}
