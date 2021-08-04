import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'
import IndScene from '../individual/IndScene'
import SceneInput from '../input/SceneInput'
export default function SceneTracker() {
    const [searchScene,setSearchScene] = useState("")
    const [submit,setSubmit] = useState(false)
    const [warning,setWarning] = useState(true)
    const bracket = '()'
    const loadingLogo = bracket.repeat(155)
    const fetchScene = async() => {
        const res = await axios.get(`
        https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(searchScene)}`)
        return res.data.result
    }
    const {data,isFetching,isSuccess,isError} = useQuery(['scene'], fetchScene, {
        enabled:submit === true,
        retry:2,
        onSuccess:()=>{
            setSubmit(false)
            setSearchScene("")
        },
        onError:()=>setSubmit(false)
    })
    useEffect(()=> {
       const int =  setInterval(()=> {
            setWarning(false)
        },3000)
        return () => {
            clearInterval(int)
        }
    },[])
    return (
        <div className='w-full max-w-full px-3 mt-4'>
            <section className='lg:mx-auto lg:w-2/3'>
                <SceneInput searchScene={searchScene} setSearchScene={setSearchScene}/>
                <button className='mb-0.5 w-full py-0.5 trelloBlue text-white mt-1 rounded-sm' onClick={()=>setSubmit(true)} disabled={isFetching}>Search</button>
                {warning && <p className='bg-red-500 text-white py-1 text-center mb-4 text-sm'>This feature is simply a trial and result can be totally wrong!</p>}
                {isFetching && <p className='animate-bounce h-6 overflow-hidden'>{loadingLogo}</p>}
                {isError && !isFetching  &&
                <p className='rounded-sm text-red-600 font-semibold'>Cant found any data :( Your URL might be too long or it is not in picture format.</p>}
                {isSuccess && (
                    <div>
                        {data.map((d,index)=>(
                            <IndScene key={d.from+d.to+index} data={d}/>
                        ))}
                    </div>
                )}
            </section>
        </div>

    )
}
