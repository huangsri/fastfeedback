import { Button, Heading } from '@chakra-ui/react'

import { useAuthContext } from '@/lib/auth'

export default function Home(): JSX.Element {
  const auth = useAuthContext()

  return (
    <div>
      <main>
        <Heading>Fast Feedback</Heading>

        {auth.user ? (
          <Button
            onClick={() => {
              auth.signOut()
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            onClick={() => {
              auth.signInWithGithub()
            }}
          >
            Sign In
          </Button>
        )}

        <div>{auth.user?.email}</div>
      </main>
    </div>
  )
}
