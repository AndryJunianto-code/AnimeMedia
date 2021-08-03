import React from 'react'

export default function SearchInput({setSearchQuery,searchQuery,big}) {
    return (
        <>
       {!big? <input 
            type="text" 
            className='px-2 py-1 focus:outline-none focus:border-blue-500 bg-transparent border-b-2 border-black text-lg tracking-wide text-gray-800 placeholder-gray-600' 
            placeholder='Search anime...'
            onChange={(e)=>setSearchQuery(e.target.value)}
            value={searchQuery} autoFocus/>
            : (
                <input 
                type="text" 
                className='w-full p-2 focus:outline-none focus:border-blue-500 bg-transparent border-b-2 border-black text-lg tracking-wide text-gray-800 placeholder-gray-600' 
                placeholder='Search anime...'
                onChange={(e)=>setSearchQuery(e.target.value)}
                value={searchQuery} autoFocus/>
            )}
        </>
    )
}
