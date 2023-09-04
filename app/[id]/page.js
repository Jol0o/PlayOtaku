import React from 'react'
import EpisodePage from './../../components/layout/EpisodePage';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';


async function getData(id) {
    try {
        const res = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${id}`, { cache: 'force-cache' });
        if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        // Log the error details for debugging purposes
        console.error('Error fetching data:', error);

        // You can also return a custom error object with a specific message
        return { error: 'Failed to fetch data. Please try again later.' };
    }
}
async function page({ params }) {
    const { id } = params
    const data = await getData(id)
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <EpisodePage data={data} title={id} session={session} />
    )
}

export default page