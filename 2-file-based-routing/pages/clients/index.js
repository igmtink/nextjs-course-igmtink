import Link from 'next/link'

export default function Clients() {
  const clients = [
    {
      id: 'max',
      name: 'Maximilian'
    },
    {
      id: 'manu',
      name: 'Manuel'
    }
  ]

  return (
    <div>
      <h1>Clients</h1>

      {/* NAVIGATING TO DYNAMIC ROUTES */}
      <ul>
        <li>
          <Link href="/clients/max">Maximilian</Link>
        </li>
        <li>
          <Link href="/clients/manu">Manuel</Link>
        </li>
      </ul>

      {/* OR */}

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
