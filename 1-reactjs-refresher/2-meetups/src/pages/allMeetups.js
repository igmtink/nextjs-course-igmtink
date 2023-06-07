import { useCallback, useEffect, useState } from 'react'

import MeetupList from '../components/meetups/meetupList'

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  const fetchMeetupList = useCallback(async () => {
    try {
      const res = await fetch(
        'https://reactjs-meetup-a24a9-default-rtdb.firebaseio.com/meetups.json'
      )
      const data = await res.json()

      const meetups = []
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }

        meetups.push(meetup)
      }

      setIsLoading(false)
      setLoadedMeetups(meetups)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchMeetupList()
  }, [fetchMeetupList])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <span className="text-4xl font-bold text-center">Loading...</span>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase mb-8 text-center">
        All Meetups Page
      </h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  )
}

export default AllMeetupsPage
