import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>

      {/* NAVIGATING WITH THE LINKS */}
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </main>
  )
}
