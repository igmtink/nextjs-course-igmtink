import path from 'path'
import fs from 'fs/promises'

export default function Home({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps(context) {
  console.log('(Re-)Generating...')

  // path.join(process.cwd()) to get our current working directory (root folder)
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  // fs.readFile() to read inside our file
  const jsonData = await fs.readFile(filePath)
  // return an Object
  const data = JSON.parse(jsonData)

  // Check if there is no data on database
  // redirect: { destination: 'url' }, this kind of case can be use
  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  // Check if there is no item on data
  // notFound: true, this kind of case can be use
  if (data.products.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10
  }
}
