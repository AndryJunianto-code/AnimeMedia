import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import TopDetailed from '../components/TopDetailed'
export default function Detailed() {
    const id = useParams().id
    const fetchDetails  = async() => {
        const res = await axios.get(`https://api.jikan.moe/v3/anime/${id}`)
        return res.data
    }
    const {data,isLoading,isSuccess,isError} = useQuery(['detail',id],fetchDetails)    
    if(isLoading) return <p>Is Loading...</p>
    if(isError) return <p>404 ERROR</p>
    return (
        <>
        {isSuccess && 
        <div className='overflow-x-hidden pb-2'>
            <TopDetailed data={data}/>
        </div>}
        </>
    )
}
