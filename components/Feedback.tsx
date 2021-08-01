import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'

type FeedbackProps = Pick<Feedback, 'author' | 'text' | 'createdAt'>

export const Feedback = (props: FeedbackProps) => {
  const { author, text, createdAt } = props

  return (
    <Box sx={{ borderRadius: 4, maxW: '700px', w: 'full' }}>
      <Heading size="sm" as="h3" sx={{ mb: 0 }}>
        {author}
      </Heading>
      <Text sx={{ color: 'gray.500', mb: 4, fontSize: 'xs' }}>
        {format(parseISO(createdAt), 'PPpp')}
      </Text>
      <Text sx={{ color: 'gray.800' }}>{text}</Text>
      <Divider sx={{ borderColor: 'gray.200' }} />
    </Box>
  )
}
