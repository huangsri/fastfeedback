import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllSites } from '@/lib/db-admin'

async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  const sites = await getAllSites()

  res.status(200).json({ sites })
}

export default handler
