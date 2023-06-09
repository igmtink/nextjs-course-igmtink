import { useState } from 'react'

export default function EventsSearch({ options, select }) {
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
    <form>
      {/* <div className="relative">
        <div
          className="border border-black bg-white cursor-pointer p-1 rounded-lg shadow-lg w-28 max-w-full"
          onClick={dropdownToggleHandler}
        >
          {selectedOption ? selectedOption : select}
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
      </div> */}
    </form>
  )
}
