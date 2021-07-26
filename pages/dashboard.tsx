import { ReactNode } from 'react'

import { EmptyState } from '@/components/EmptyState'
import { useAuthContext } from '@/lib/auth'

function Dashboard(): ReactNode {
  const auth = useAuthContext()

  if (!auth.user) {
    return 'Loading...'
  }

  return <EmptyState />
}

export default Dashboard
