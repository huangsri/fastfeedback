import { FormEvent, ReactNode, useRef } from 'react'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Feedback } from '@/components/Feedback'

import { useAuthContext } from '@/lib/auth'
import { useRouter } from 'next/dist/client/router'

import { getAllFeedback } from '@/lib/db-admin'
import { createFeedback } from '@/lib/db'
import { useState } from 'react'

type SiteFeedbackProps = {
  initialFeedbacks: Feedback[]
}

function SiteFeedback(props: SiteFeedbackProps): ReactNode {
  const { initialFeedbacks } = props

  const [allFeedbacks, setFeedbacks] = useState<Feedback[]>(initialFeedbacks)

  const auth = useAuthContext()
  const router = useRouter()
  const inputEl = useRef<HTMLInputElement>(null)

  const onSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()

    const newFeedback = {
      author: auth.user?.displayName,
      authorId: auth.user?.uid,
      createdAt: new Date().toISOString(),
      provider: auth.user?.providerData[0]?.providerId,
      rating: 0,
      siteId: router.query.siteId,
      status: 'pending',
      text: inputEl.current?.value,
    }

    setFeedbacks((state) => [newFeedback, ...state])
    createFeedback(newFeedback)
  }

  return (
    <Stack sx={{ w: 'full', maxW: '700px', mx: 'auto' }}>
      <Stack align="start" as="form" onSubmit={onSubmit}>
        <FormControl>
          <FormLabel htmlFor="comment">Comment</FormLabel>
          <Input type="text" id="comment" ref={inputEl} />
        </FormControl>
        <Button type="submit">Add Comment</Button>
      </Stack>

      {Boolean(allFeedbacks.length) ? (
        allFeedbacks.map((f) => {
          return (
            <Feedback
              key={f.id}
              author={f.author}
              text={f.text}
              createdAt={f.createdAt}
            />
          )
        })
      ) : (
        <Text>No Comments</Text>
      )}
    </Stack>
  )
}

export default SiteFeedback

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<SiteFeedbackProps>> {
  const siteId = context.params?.siteId as string

  const feedbacks = await getAllFeedback(siteId)

  return {
    props: {
      initialFeedbacks: feedbacks,
    },
  }
}

// export async function getStaticProps(
//   context: GetStaticPropsContext,
// ): Promise<GetStaticPropsResult<SiteFeedbackProps>> {
//   const siteId = context.params?.siteId as string

//   const feedbacks = await getAllFeedback(siteId)

//   return {
//     props: {
//       initialFeedbacks: feedbacks,
//     },
//   }
// }

// export async function getStaticPath(): Promise<GetStaticPathsResult> {
//   const sites = await getAllSites()
//   console.log('getStaticPath ~ sites', sites)
//   const paths = sites.map((s) => ({
//     params: {
//       siteId: s.id.toString(),
//     },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }
