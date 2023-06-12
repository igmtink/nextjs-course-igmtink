export default function UserId({ id }) {
  return <h1>{id}</h1>
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      id: 'userId-' + params.uId
    }
  }
}
