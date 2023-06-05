import { useState } from 'react'
import Modal from './modal'

function Todo({ text }) {
  const [showModal, setShowModal] = useState(false)

  const deleteModalHandler = () => {
    setShowModal(true)
  }

  const onCancelDeleteHandler = () => {
    setShowModal(false)
  }

  return (
    <div className="p-4 bg-stone-50 rounded-lg shadow-md">
      <h2 className="uppercase text-lg font-bold">{text}</h2>
      <div className="flex justify-end">
        <button
          className="px-3 py-2 bg-stone-950 hover:bg-stone-900 transition-colors text-stone-50 rounded-md"
          onClick={deleteModalHandler}
        >
          Delete
        </button>
      </div>

      {showModal && <Modal onCancel={onCancelDeleteHandler} />}
    </div>
  )
}

export default Todo
