import React from 'react'

export default function SceneInput({searchScene,setSearchScene}) {
    return (
        <>
        <input 
        type='text'
        className='bg-transparent focus:outline-none border border-gray-700 bg-white bg-opacity-60 px-2 py-1 rounded-md w-full mx-auto text-lg focus:bg-blue-400 focus:placeholder-white focus:text-gray-100'
        placeholder='Copy image address here!'
        value={searchScene}
        onChange={e=>setSearchScene(e.target.value)}
        autoFocus
        required
        />
        </>  
    )
}
