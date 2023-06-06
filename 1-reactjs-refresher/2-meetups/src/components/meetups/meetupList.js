import { useCallback, useEffect, useState } from 'react'
import MeetupItem from './meetupItem'

function MeetupList() {
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
    <ul className="grid grid-cols-1 gap-4">
      {loadedMeetups.map((meetup) => {
        return (
          <li key={meetup.id}>
            <MeetupItem
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default MeetupList
