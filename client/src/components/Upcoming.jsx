import React from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'
import IndAiring from '../individual/IndAiring'
export default function Top() {
    const getUpcomingAnime =async () => {
        const res = await axios.get("https://api.jikan.moe/v3/top/anime/1/upcoming")
        return res.data
    }
    const {data,isSuccess} = useQuery(['upcoming'],getUpcomingAnime)
    return (
        <>
        {isSuccess && 
        <div className='mt-1 lg:px-4'>
            <h1 className='text-sm md:text-lg font-semibold text-center tracking-wider mb-1 lg:text-left'>Top Upcoming Anime</h1>
            <section className='w-full h-72 grid grid-rows-1 gap-x-1 grid-flow-col overflow-x-scroll overflow-y-hidden'>
            {data.top.slice(0,40).map((d)=> (
                <IndAiring key={d.mal_id} data={d}/>
            ))}
            </section>
        </div>}
        </>
    )
}
