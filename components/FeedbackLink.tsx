import { Flex, Link } from '@chakra-ui/react'

type FeedbackLinkProps = {
  siteId: string
}

export const FeedbackLink = ({ siteId }: FeedbackLinkProps): JSX.Element => {
  return (
    <Flex justify="space-between" sx={{ w: 'full', mb: 8, mt: 1 }}>
      <Link sx={{ fontWeight: 'bold', fontSize: 'sm' }} href={`/p/${siteId}`}>
        Leave a comment =&gt;
      </Link>
      <Link sx={{ fontSize: 'xs', color: 'blackAlpha.500' }} href="/">
        Powered by Fast Feedback
      </Link>
    </Flex>
  )
}
