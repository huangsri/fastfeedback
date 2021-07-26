import { Button, Flex, Heading } from '@chakra-ui/react'

import { useAuthContext } from '@/lib/auth'

export default function Home(): JSX.Element {
  const auth = useAuthContext()

  return (
    <Flex
      as="main"
      sx={{
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        h: '100vh',
      }}
    >
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
    </Flex>
  )
}
