import EventList from '@/components/events/event-list'
import { getFeaturedEvents } from '@/helpers/api-util'

export default function Home({ featuredEvents }) {
  return (
    <div className="p-4 pt-20 max-w-2xl mx-auto">
      <EventList items={featuredEvents} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      featuredEvents: featuredEvents
    },
    // On Featured Page we declare a half hour of duration because Feautred Page is often to have changes
    revalidate: 1800
  }
}
