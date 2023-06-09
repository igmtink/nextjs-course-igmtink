import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="shadow-lg bg-teal-500 text-white fixed inset-x-0 z-50">
      <nav className="p-4 flex justify-between items-center">
        <Link href="/" className="uppercase font-bold text-lg">
          Occasion
        </Link>

        <ul className="flex items-center gap-4">
          <li>
            <Link href="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
