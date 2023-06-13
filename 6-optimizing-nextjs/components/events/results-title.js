import { Button } from '@/components/ui/igmtink'

export default function ResultsTitle({ date }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })

  return (
    <div className="text-center grid grid-cols-1 justify-items-center gap-4">
      <h1 className="text-lg font-bold">Events in {humanReadableDate}</h1>
      <Button link="/events">Show All Events</Button>
    </div>
  )
}
