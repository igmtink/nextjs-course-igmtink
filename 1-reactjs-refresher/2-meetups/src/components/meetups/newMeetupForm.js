import { Card } from '../layout/ui'
import { useRef } from 'react'

function NewMeetupForm({ onAddMeetup }) {
  const imageInputRef = useRef()
  const titleInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredImage = imageInputRef.current.value
    const enteredTitle = titleInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
      image: enteredImage,
      title: enteredTitle,
      address: enteredAddress,
      description: enteredDescription
    }

    onAddMeetup(meetupData)
  }

  return (
    <Card>
      <form className="p-4" onSubmit={submitHandler}>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            ref={imageInputRef}
            className="w-full p-3 rounded-md border border-stone-950"
            type="url"
            required
            placeholder="Image"
          />
          <input
            ref={titleInputRef}
            className="w-full p-3 rounded-md border border-stone-950"
            type="text"
            required
            placeholder="Title"
          />
          <input
            ref={addressInputRef}
            className="w-full p-3 rounded-md border border-stone-950"
            type="text"
            required
            placeholder="Address"
          />
          <textarea
            ref={descriptionInputRef}
            className="w-full p-3 rounded-md border border-stone-950 h-40"
            type="text"
            required
            placeholder="Description"
          />
        </div>
        <div className="flex justify-end">
          <button className="p-3 bg-stone-950 hover:bg-stone-900 transition-colors text-stone-50 rounded-md">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
