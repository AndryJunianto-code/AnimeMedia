import React from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'
import IndAiring from '../individual/IndAiring'
export default function Top() {
    const getTopAnime =async () => {
        const res = await axios.get("https://api.jikan.moe/v3/top/anime/1/airing")
        return res.data
    }
    const {data,isSuccess} = useQuery(['top'],getTopAnime)
    return (
        <>
        {isSuccess && 
        <div className='mt-1 lg:px-4'>
            <h1 className='text-sm md:text-lg font-semibold text-center tracking-wider mb-1 lg:text-left'>Top Airing Anime</h1>
            <section className='w-full h-auto grid grid-rows-1 gap-x-1 grid-flow-col overflow-x-scroll overflow-y-hidden'>
            {data.top.slice(0,20).map((d)=> (
                <IndAiring key={d.mal_id} data={d}/>
            ))}
            </section>
        </div>}
        </>
    )
}
