import firebase from './firebase'

const firestore = firebase.firestore()

export function createUser(
  uid: string | undefined,
  user: firebase.User,
): Promise<void> {
  return firestore.collection('users').doc(uid).set(
    {
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0]?.providerId,
      photoUrl: user.photoURL,
      uid,
    },
    {
      merge: true,
    },
  )
}
