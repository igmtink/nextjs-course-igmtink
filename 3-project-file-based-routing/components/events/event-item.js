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
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <h2>{title}</h2>
        <time>{formattedDate}</time>
        <address>{formattedAddress}</address>
      </div>
      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  )
}
