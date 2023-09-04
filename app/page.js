import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Front from './../components/layout/Front';
import { cookies } from 'next/headers';

async function getData() {
  const res = await fetch("https://api.consumet.org/anime/gogoanime/top-airing")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


async function getRecent() {
  const res = await fetch("https://api.consumet.org/anime/gogoanime/recent-episodes")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const recent = await getRecent()
  const data = await getData()

  return (
    <><Front data={data} user={session} recent={recent} /></>
  )
}
