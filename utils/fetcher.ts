export default async function fetcher(...args: any[]): Promise<any> {
  const res = await fetch(...args)

  return res.json()
}
