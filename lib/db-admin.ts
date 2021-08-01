import { compareDesc, parseISO } from 'date-fns'
import firebase from './firebase-admin'

export async function getAllFeedback(siteId: string): Promise<Feedback[]> {
  const snapshot = await firebase
    .collection('feedback')
    .where('siteId', '==', siteId)
    .get()

  const feedbacks: Feedback[] = []

  snapshot.forEach((doc) => {
    const data = doc.data() as Feedback

    feedbacks.push({ ...data, id: doc.id })
  })

  feedbacks.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)),
  )

  return feedbacks
}

export async function getAllSites(): Promise<Site[]> {
  const snapshot = await firebase.collection('sites').get()

  const sites: Site[] = []

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() } as Site)
  })

  return sites
}
