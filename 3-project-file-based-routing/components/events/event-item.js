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
    <li className="sm:flex shadow-lg rounded-lg overflow-hidden bg-teal-200">
      <img className="sm:w-[40%] object-cover" src={`/${image}`} alt={title} />
      <div className="px-6 py-4 w-full">
        <div className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-2">{title}</h2>
          <time className="mb-2 block font-medium">{formattedDate}</time>
          <address className="whitespace-pre">{formattedAddress}</address>
        </div>
        <div className="flex justify-end">
          <Link
            className="block w-fit px-3 py-2 bg-teal-500 hover:bg-teal-600 transition-colors rounded-md"
            href={exploreLink}
          >
            Explore Event
          </Link>
        </div>
      </div>
    </li>
  )
}
