export async function getAllEvents() {
  const res = await fetch(
    'https://nextjs-events-a5578-default-rtdb.firebaseio.com/events.json'
  )
  const data = await res.json()

  const transformedData = []
  for (const key in data) {
    transformedData.push({
      id: key,
      ...data[key]
      // title: data[key].title,
      // description: data[key].description,
      // location: data[key].location,
      // date: data[key].date,
      // image: data[key].image,
      // isFeatured: data[key].isFeatured
    })
  }

  return transformedData
}

export async function getFeaturedEvents() {
  const events = await getAllEvents()

  return events.filter((event) => event.isFeatured)
}

export async function getEventById(id) {
  const events = await getAllEvents()
  return events.find((event) => event.id === id)
}

export async function getFilteredEvents(dateFilter) {
  const events = await getAllEvents()
  const { year, month } = dateFilter

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })

  return filteredEvents
}
