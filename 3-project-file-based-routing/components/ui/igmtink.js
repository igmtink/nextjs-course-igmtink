import Link from 'next/link'

export const Button = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link
        className="flex gap-2 items-center w-fit px-4 py-3 bg-teal-500 hover:bg-teal-600 transition-colors rounded-md text-white"
        href={link}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className="flex gap-2 items-center w-fit px-4 py-3 bg-teal-500 hover:bg-teal-600 transition-colors rounded-md text-white"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const Card = ({ children }) => {
  return (
    <li className="sm:flex shadow-lg rounded-lg overflow-hidden">{children}</li>
  )
}
