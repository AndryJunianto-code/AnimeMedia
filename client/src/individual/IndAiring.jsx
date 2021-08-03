import React from 'react'

export default function IndAiring({data}) {
    const {image_url,title} = data
    return (
        <div className='relative w-48'>
            <img src={image_url} alt={title} className='w-48'/>
            <p className='absolute bottom-2 left-0 break-words text-white font-semibold bg-black bg-opacity-50'>{title}</p>
        </div>
    )
}
