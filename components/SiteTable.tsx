import { Link, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import NextLink from 'next/link'

type Props = {
  sites: Site[]
}

export const SiteTable = ({ sites }: Props): JSX.Element => {
  return (
    <Table sx={{ bg: 'white' }}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sites.map((s) => {
          return (
            <Tr key={s.id ?? s.url}>
              <Td>{s.name}</Td>
              <Td>{s.url}</Td>
              <Td>
                <NextLink href="/p/[siteId]" as={`/p/${s.id}`} passHref>
                  <Link>View Feedback</Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(s.createdAt), 'PPpp')}</Td>
              <Td></Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
