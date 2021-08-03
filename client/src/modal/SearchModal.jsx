import {useState} from 'react'
import SearchInput from '../input/SearchInput'
import {useQuery} from 'react-query'
import axios from 'axios'
import IndSearchResult from '../individual/IndSearchResult'
import {useDispatch} from 'react-redux'
import { OCSearch } from '../redux/modalSlice'
export default function SearchModal() {
    const [searchQuery,setSearchQuery] = useState("")
    const dispatch = useDispatch()
    const fetchSearch = async () => {
        const res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchQuery}&page=1&limit=20`)
        return res.data
    }
    const {data,isSuccess} = useQuery(['search', searchQuery],fetchSearch,{
        retryDelay:1000*5,
        enabled:searchQuery.length >= 3
    })
    const closeSearchModal = () => {
        dispatch(OCSearch({searchOpen:false}))
    }
    return (
        <section className='dark-0 hidden md:block' onClick={closeSearchModal}>
            <div className='absolute top-20 right-48 lg:right-72 bg-white shadow-md rounded-md h-auto w-96 text-black' onClick={e=>e.stopPropagation()}>
                <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} big={true}/>
                {isSuccess &&
                <section className='h-96 w-96 overflow-y-scroll'>
                    <div>
                {data.results.map(d=> (
                        <IndSearchResult data={d} key={d.mal_id} big={true}/>
                    ))}
                    </div>
                </section>}
            </div>
        </section>
    )
}
