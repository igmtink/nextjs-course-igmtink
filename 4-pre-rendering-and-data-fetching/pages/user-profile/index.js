export default function UserProfile({ username }) {
  return <h1>{username}</h1>
}

export async function getServerSideProps(context) {
  const { params, req, res } = context

  return {
    props: {
      username: 'Ivan'
    }
  }
}
