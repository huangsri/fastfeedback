import Head from 'next/head'

import { useAuthContext } from '../lib/auth'

export default function Home(): JSX.Element {
  const auth = useAuthContext()

  return (
    <div>
      <main>
        <h1>Fast Feedback</h1>

        {auth.user ? (
          <button
            onClick={() => {
              auth.signOut()
            }}
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => {
              auth.signInWithGithub()
            }}
          >
            Sign In
          </button>
        )}

        <div>{auth.user?.email}</div>
      </main>
    </div>
  )
}
