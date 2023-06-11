import path from 'path'
import fs from 'fs/promises'

export default function ProductDetail({ loadedProduct }) {
  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  )
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
