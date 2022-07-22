import useSWR from "swr";

// lib/session.js
async function getAuthSession(ctx) {
  return ctx.req.session.get("user");
}

// pages/protected/protected-route.js
const ProtectedSSRoute = ({ authenticated, user }) => {
  return (
    <div>
      <span>You are authenticated as: {user} :)</span>
    </div>
  );
};

export function getServerSideProps(ctx) {
  const authSession = getAuthSession(ctx);
  if (!authSession) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: authSession.user,
    },
  };
}

export default ProtectedSSRoute;
