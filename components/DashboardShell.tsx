import { ReactNode } from 'react'
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react'
import { VscCompareChanges } from 'react-icons/vsc'
import { useAuthContext } from '@/lib/auth'

type Props = {
  children: ReactNode
}

export const DashboardShell = (props: Props): JSX.Element => {
  const { children } = props

  const auth = useAuthContext()

  return (
    <Flex flexDir="column">
      <Flex
        as="nav"
        sx={{
          bg: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 4,
          px: 8,
        }}
      >
        <HStack spacing="4" align="center">
          <Icon as={VscCompareChanges} />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </HStack>
        <HStack spacing="4" align="center">
          <Link>Account</Link>
          <Avatar size="sm" src={auth.user?.photoURL ?? undefined} />
        </HStack>
      </Flex>

      <Flex sx={{ bg: 'gray.100', p: 8 }}>
        <Flex
          sx={{
            w: 'full',
            maxW: '800px',
            mx: 'auto',
            flexDir: 'column',
          }}
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Heading sx={{ mb: '4' }}>Sites</Heading>

          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
