import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { AddSiteModal } from './AddSiteModal'

import { DashboardShell } from './DashboardShell'

export const EmptyState = (): JSX.Element => {
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
          You haven&apos;t added any sites.
        </Heading>
        <Text mb="4">Welcome Let&apos;s get started.</Text>

        <AddSiteModal />
      </Flex>
    </DashboardShell>
  )
}
