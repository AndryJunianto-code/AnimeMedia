import React from 'react'

export default function IndSearchResult({data,big}) {
    const {image_url,title,episodes} = data
    return (
        <>
        {!big ? 
        <div className='flex items-center mb-1 '>
            <img src={image_url} alt={title} className='w-16 h-20 rounded-sm md:w-20 md:h-24' />
            <div className='ml-3'>
                <p className='hover:underline md:text-xl'>{title}</p>
                <p className='text-sm'>Ep: {episodes}</p>
            </div>
        </div> 
        : (
        <div className='flex items-center mb-2 hover:bg-gray-100 pl-8 pr-5 py-2'>
            <img src={image_url} alt={title} className='w-24 h-28 rounded-sm' />
            <div className='ml-3'>
                <p className='hover:underline md:text-xl'>{title}</p>
                <p className='text-sm'>Ep: {episodes}</p>
            </div>
        </div>
        )}
        </>
    )
}
