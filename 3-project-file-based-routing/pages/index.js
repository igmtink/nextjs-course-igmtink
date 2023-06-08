import EventList from '@/components/events/event-list'
import { getFeaturedEvents } from '@/dummy-data'

export default function Home() {
  const featuredEvents = getFeaturedEvents()
  return (
    <main className="p-4 max-w-lg mx-auto">
      <EventList items={featuredEvents} />
    </main>
  )
}
