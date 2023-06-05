import { Button } from './ui'

function Modal({ onCancel }) {
  return (
    <div
      className="bg-stone-900/50 fixed inset-0 flex items-center justify-center px-12"
      onClick={onCancel}
    >
      <div className="p-4 bg-stone-50 shadow-2xl rounded-lg w-full">
        <h1 className="text-center mb-6 font-medium">Are you sure?</h1>
        <div className="flex justify-center gap-4">
          <Button
            className="border border-stone-950 hover:bg-stone-950 hover:text-stone-50 transition-colors"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 transition-colors text-stone-50">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
