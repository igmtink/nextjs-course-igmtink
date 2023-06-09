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
    <div>
      <div onClick={dropdownToggleHandler}>
        {selectedOption ? selectedOption : 'Select date'}
      </div>
      {dropdownOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={optionSelectHandler}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
