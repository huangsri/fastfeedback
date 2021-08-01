import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllFeedback } from '@/lib/db-admin'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const siteId = req.query.siteId as string

  const feedbacks = await getAllFeedback(siteId)

  res.status(200).json({ feedbacks })
}

export default handler
