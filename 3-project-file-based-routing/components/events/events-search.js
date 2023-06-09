import { useState } from 'react'
import { Button } from '../ui/igmtink'

const optionsYear = ['2021', '2022', '2023']
const optionsMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default function EventsSearch() {
  // const [selectedOption, setSelectedOption] = useState('')
  // const [dropdownOpen, setDropdownOpen] = useState(false)

  // const dropdownToggleHandler = () => {
  //   setDropdownOpen((prevState) => !prevState)
  // }

  // const optionSelectHandler = (option) => {
  //   setSelectedOption(option)
  //   setDropdownOpen(false)
  // }

  return (
    <form className="flex justify-between bg-white p-4 rounded-lg shadow-lg">
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

      <div className="flex items-center gap-2">
        <label htmlFor="year">Year</label>
        <select
          id="year"
          className="p-1 shadow-lg rounded-md border border-black"
        >
          {optionsYear.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="month">Month</label>
        <select id="month" className="p-1 rounded-md border border-black">
          {optionsMonth.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button className="flex gap-2 items-center w-fit py-1 px-2 bg-teal-500 hover:bg-teal-600 transition-colors rounded-md text-white">
        Search
      </button>
    </form>
  )
}
