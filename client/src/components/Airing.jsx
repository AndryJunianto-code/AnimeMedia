import IndAiring from '../individual/IndAiring'
import axios from 'axios'
import {useQuery} from 'react-query'
export default function Airing() {
    const getAiringAnime = async() => {
        const res = await axios.get("https://api.jikan.moe/v3/season")
        return res.data
    }
    const {data,isSuccess} = useQuery(['airing'], getAiringAnime)
    return (
        <>
        {isSuccess && 
        <div className='mt-1 lg:px-4'>
            <h1 className='text-sm md:text-lg font-semibold text-center tracking-wider mb-1 lg:text-left'>{data.season_name + " " + data.season_year + " anime"}</h1>
            <section className='w-full h-auto grid grid-rows-1 gap-x-1 grid-flow-col overflow-x-scroll overflow-y-hidden'>
            {data.anime.slice(0,20).map((d)=> (
                <IndAiring key={d.mal_id} data={d}/>
            ))}
            </section>
        </div>}
        </>
    )
}
