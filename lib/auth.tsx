import { useEffect, useState } from 'react'

import { createCtx } from '../utils/createContext'
import { createUser } from './db'
import firebase from './firebase'

type AuthContext = {
  user: firebase.User | null
  signInWithGithub: () => Promise<void>
  signOut: () => Promise<void>
}

export const [useAuthContext, Provider] = createCtx<AuthContext>()

export const AuthProvider = ({ children }: WithChildren): JSX.Element => {
  const [user, setUser] = useState<firebase.User | null>(null)

  const signInWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        if (response.user) {
          createUser(response.user.uid, response.user)
          setUser(response.user)
        }
      })
  }

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(null))
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscribe
  }, [])

  const ctxValue = {
    user,
    signInWithGithub,
    signOut,
  }

  return <Provider value={ctxValue}>{children}</Provider>
}
