import { Link, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'

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
                <Link>View Feedback</Link>
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
