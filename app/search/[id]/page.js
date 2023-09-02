import React from "react";
import SearchPage from './../../../components/layout/SearchPage';

//api.consumet.org/anime/gogoanime/{query}?page={number}
async function getData(id) {
  const res = await fetch(`https://api.consumet.org/anime/gogoanime/${id}?page=1`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


async function page({ params }) {
  const { id } = params
  const idLower = id.toLowerCase().replace(/%20/g, '-')
  const data = await getData(idLower)
  return <><SearchPage data={data} /></>;
}

export default page;
