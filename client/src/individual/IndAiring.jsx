import React from 'react'
import {Link} from 'react-router-dom'
export default function IndAiring({data}) {
    const {image_url,title,mal_id} = data
    return (
        <Link to={`/anime/${mal_id}`}>
        <div className='relative w-48 h-auto'>
            <img src={image_url} alt={title} className='w-48 h-64 rounded-sm'/>
            <p className='absolute w-full bottom-0 left-0 break-words text-white font-semibold bg-black bg-opacity-50'>{title.length > 40 ? title.substring(0,40) + "...": title}</p>
        </div>
        </Link>
    )
}
