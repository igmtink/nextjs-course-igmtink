import Link from 'next/link'

export const Button = ({ children, link }) => {
  return (
    <Link
      className="flex gap-2 w-fit px-4 py-3 bg-teal-500 hover:bg-teal-600 transition-colors rounded-md"
      href={link}
    >
      {children}
    </Link>
  )
}

export const Card = ({ children }) => {
  return (
    <li className="sm:flex shadow-lg rounded-lg overflow-hidden bg-teal-200">
      {children}
    </li>
  )
}
