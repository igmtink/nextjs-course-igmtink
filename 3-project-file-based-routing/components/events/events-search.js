import { useState } from 'react'

export default function EventsSearch({ options }) {
  const [selectedOption, setSelectedOption] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownToggleHandler = () => {
    setDropdownOpen((prevState) => !prevState)
  }

  const optionSelectHandler = (option) => {
    setSelectedOption(option)
    setDropdownOpen(false)
  }

  return (
    <form className="mb-2">
      <div className="relative">
        <div
          className="border border-black bg-white cursor-pointer p-2 rounded-lg shadow-lg"
          onClick={dropdownToggleHandler}
        >
          {selectedOption ? selectedOption : 'Select date'}
        </div>
        {dropdownOpen && (
          <ul className="border border-black bg-white overflow-hidden rounded-lg shadow-lg absolute inset-x-0 translate-y-2">
            {options.map((option, index) => (
              <li
                className="cursor-pointer p-2 hover:bg-black/10 transition-colors"
                key={index}
                onClick={() => optionSelectHandler(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  )
}
