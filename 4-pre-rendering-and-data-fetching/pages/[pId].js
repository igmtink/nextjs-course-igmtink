import path from 'path'
import fs from 'fs/promises'

export default function ProductDetail({ loadedProduct }) {
  // fallback: true
  // If we added new path on getStaticPaths it will show this loading because (fallback: true) it will not pre-generate the new path
  if (!loadedProduct) {
    return <span className="text-lg text-center font-bold">Loading...</span>
  }

  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  )
}

// Create a new function for getting the data to be reusable
async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return data
}

export async function getStaticPaths() {
  // const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  // const jsonData = await fs.readFile(filePath)
  // const data = JSON.parse(jsonData)
  //
  // const paths = data.products.map(product => ({
  //   params: {
  //     pId: product.id
  //   }
  // }))

  const data = await getData()
  const paths = data.products.map(prodduct => ({
    params: {
      pId: prodduct.id
    }
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context

  const productId = params.pId

  // path.join(process.cwd()) to get our current working directory (root folder)
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  // fs.readFile() to read inside our file
  const jsonData = await fs.readFile(filePath)
  // return an Object
  const data = JSON.parse(jsonData)

  const product = data.products.find(product => product.id === productId)

  return {
    props: {
      loadedProduct: product
    }
  }
}
