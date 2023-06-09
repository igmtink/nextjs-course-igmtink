import Navigation from '@/components/layout/navigation'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
