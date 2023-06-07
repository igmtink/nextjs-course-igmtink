import { useRouter } from 'next/router'

// DYNAMIC ROUTES
export default function PortfolioId() {
  const router = useRouter()

  // Extract Dynamic Path Segment Data (Dynamic Routes)
  console.log(router.query.portfolioId)

  return (
    <div>
      <h1>Portfolio Id</h1>
    </div>
  )
}
