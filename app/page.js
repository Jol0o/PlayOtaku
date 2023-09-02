import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import Front from './../components/layout/Front';

// Remove the import of 'next/headers'

async function getData() {
  const res = await fetch("https://api.consumet.org/anime/gogoanime/top-airing", { cache: 'no-store' });
  if (!res.ok) {
    console.error(`Failed to fetch data. Status: ${res.status} ${res.statusText}`);
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getRecent() {
  const res = await fetch("https://api.consumet.org/anime/gogoanime/recent-episodes", { cache: 'no-store' });
  if (!res.ok) {
    console.error(`Failed to fetch data. Status: ${res.status} ${res.statusText}`);
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function Home({ session, data, recent }) {
  return (
    <><Front data={data} user={session} recent={recent} /></>
  );
}

// Add a getServerSideProps function to fetch data and session on the server-side
export async function getServerSideProps() {
  const supabase = createServerComponentClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const recent = await getRecent();
  const data = await getData();

  return {
    props: {
      session,
      data,
      recent,
    },
  };
}
