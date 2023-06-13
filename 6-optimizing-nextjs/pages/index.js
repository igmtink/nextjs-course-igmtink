import EventList from '@/components/events/event-list'
import { getFeaturedEvents } from '@/helpers/api-util'

import Head from 'next/head'

export default function Home({ featuredEvents }) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot great events" />
      </Head>
      <div className="p-4 pt-20 max-w-2xl mx-auto">
        <EventList items={featuredEvents} />
      </div>
    </>
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
