import { useRouter } from 'next/router'

export default function ClientProjects() {
  // NAVIGATING PROGRAMMATICALLY
  const router = useRouter()

  const loadProjectHandler = () => {
    router.push('/clients/max/projecta')

    // OR

    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' }
    })
  }

  return (
    <div>
      <h1>Client Projects</h1>

      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}
