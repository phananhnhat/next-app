import useUser from '../lib/useUser'
import { useSession } from "next-auth/react"

export const getServerSideProps = function ({ req, res }) {
  const { user } = req.session;
  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return {
    props: { user },
  }
}

const Profile = () => {
  // Fetch the user client-side
  const { user } = useUser({ redirectTo: '/login' })

  // Server-render loading state
  if (!user || user.isLoggedIn === false) {
    return <div>Loading...</div>
  }

  // Once the user request finishes, show the user
  return (
    <div>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default Profile
