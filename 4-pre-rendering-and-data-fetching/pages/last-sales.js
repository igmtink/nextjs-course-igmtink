import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function LastSales(props) {
  const [sales, setSales] = useState(props.sales)
  // const [isLoading, setIsLoading] = useState(false)

  // Combining Pre-fetching (getStaticProps) & Client-Side Fetching even we don't use (revalidate) in (getStaticProps) we get always the latest data
  // But the latest data that we fetched on Client-Side we will not see on the View Source Browser, that's why we need the (revalidate)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  // Using useSWR hook for fetching data, it will automatically refresh the data from client side whenever there's a changes on data
  const { data, error, isLoading } = useSWR(
    'https://nextjs-clientside-data-fetch-default-rtdb.firebaseio.com/sales.json',
    fetcher
  )

  useEffect(() => {
    const transformedSalesData = []

    for (const key in data) {
      transformedSalesData.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume
      })
    }

    setSales(transformedSalesData)
  }, [data])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch(
  //       'https://nextjs-clientside-data-fetch-default-rtdb.firebaseio.com/sales.json'
  //     )
  //
  //     const data = await res.json()
  //
  //     console.log(data)
  //
  //     const transformedSalesData = []
  //
  //     for (const key in data) {
  //       transformedSalesData.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume
  //       })
  //     }
  //
  //     console.log(transformedSalesData)
  //
  //     setSales(transformedSalesData)
  //     setIsLoading(false)
  //   }
  //
  //   fetchData()
  // }, [])

  if (error) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <h1 className="text-4xl font-bold">{error}</h1>
      </div>
    )
  }

  // We don't need this anymore if we use getStaticProps
  // if (!sales) {
  //   return (
  //     <div className="fixed inset-0 flex justify-center items-center">
  //       <h1 className="text-4xl font-bold">NO DATA YET</h1>
  //     </div>
  //   )
  // }

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    )
  }

  return (
    <ul>
      {sales.map(sale => (
        <li key={sale.id}>
          <h2 className="text-lg font-bold uppercase">{sale.username}</h2>
          <h3>${sale.volume}</h3>
        </li>
      ))}
    </ul>
  )
}

const getData = async () => {
  const res = await fetch(
    'https://nextjs-clientside-data-fetch-default-rtdb.firebaseio.com/sales.json'
  )
  const data = await res.json()

  const transformedSalesData = []

  for (const key in data) {
    transformedSalesData.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume
    })
  }

  return transformedSalesData
}

export async function getStaticProps() {
  const jsonData = await getData()
  return {
    props: { sales: jsonData },
    revalidate: 10
  }
}
