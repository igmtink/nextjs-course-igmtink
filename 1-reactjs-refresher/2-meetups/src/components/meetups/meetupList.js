import MeetupItem from './meetupItem'

function MeetupList({ meetups }) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {meetups.map((meetup) => {
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
