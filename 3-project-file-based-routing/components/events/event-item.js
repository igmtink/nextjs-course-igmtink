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
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </Card>
  )
}
