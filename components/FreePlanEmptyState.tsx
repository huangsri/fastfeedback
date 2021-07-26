import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

import { DashboardShell } from './DashboardShell'

export const FreePlanEmptyState = (): JSX.Element => {
  return (
    <DashboardShell>
      <Flex
        sx={{
          bg: 'white',
          borderRadius: 'md',
          p: 16,
          flexDir: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Heading size="md" sx={{ mb: 2 }}>
          Get feedback on your site fast!
        </Heading>
        <Text mb="4">Start today, then grow with us</Text>
        <Button sx={{ maxW: '200px' }}>Upgrade to Starter</Button>
      </Flex>
    </DashboardShell>
  )
}
