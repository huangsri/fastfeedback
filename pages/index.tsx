import Head from 'next/head'

import { useAuthContext } from '../lib/auth'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  const auth = useAuthContext()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
