import { ReactNode } from 'react'
import useSWR from 'swr'

import { EmptyState } from '@/components/EmptyState'
import { DashboardShell } from '@/components/DashboardShell'

import { useAuthContext } from '@/lib/auth'
import fetcher from '@/utils/fetcher'
import { SiteTable } from '@/components/SiteTable'

function Dashboard(): ReactNode {
  const auth = useAuthContext()
  const { data } = useSWR<{ sites: Site[] }>('/api/sites', fetcher)

  if (!data) {
    return <DashboardShell>{'Loading'}</DashboardShell>
  }

  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  )
}

export default Dashboard
