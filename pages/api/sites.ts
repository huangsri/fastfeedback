import type { NextApiRequest, NextApiResponse } from 'next'

import db from '@/lib/firebase-admin'

async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  const snapshot = await db.collection('sites').get()

  const sites: Site[] = []

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() } as Site)
  })

  res.status(200).json({ sites })
}

export default handler
