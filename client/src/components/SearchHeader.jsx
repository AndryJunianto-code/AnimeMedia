import React,{useState} from 'react'
import {Close, Search} from '@material-ui/icons'
import {useQuery} from 'react-query'
import axios from 'axios'
import SearchInput from '../input/SearchInput'
import IndSearchResult from '../individual/IndSearchResult'
export default function SearchHeader() {
    const [searchQuery,setSearchQuery] = useState("")
    const [openSearch,setOpenSearch] = useState(false)
    const fetchSearch = async () => {
        const res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchQuery}&page=1&limit=20`)
        return res.data
    }
    const {data,isSuccess,isFetching} = useQuery(['search', searchQuery],fetchSearch,{
        retryDelay:1000*5,
        enabled:searchQuery.length >= 3
    })
    return (
        <>
        {!openSearch ? (
            <section onClick={()=>setOpenSearch(true)} className='md:hidden  bg-yellow-300 w-full max-w-full h-auto  text-xl tracking-widest flex'>
                <div className='mx-auto pt-2 flex'>
                    <p className='animate-bounce'>S</p>
                    <p className='animate-bounce'>E</p>
                    <p className='animate-bounce'>A</p>
                    <p className='animate-bounce'>R</p>
                    <p className='animate-bounce'>C</p>
                    <p className='animate-bounce'>H</p>
                </div>
            </section>
        ): (
            <div className='lg:hidden text-black w-full h-72 bg-yellow-300 px-1 py-2 flex flex-col items-center'>
            <section>
                <SearchInput setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
                <Search/>
                <span onClick={()=>setOpenSearch(false)}><Close/></span>
            </section>
            {isFetching && <p>loading..</p>}
            {isSuccess &&
            <section className='h-60 overflow-y-scroll'>
                <div className='px-4 py-2'>
               {data.results.map(d=> (
                    <IndSearchResult data={d} key={d.mal_id}/>
                ))}
                </div>
            </section>}
        </div>
        )}
        </>
    )
}
