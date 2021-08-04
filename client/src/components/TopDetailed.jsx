import React from 'react'

export default function TopDetailed({data}) {
    const {image_url,title,score,scored_by,synopsis,rank,premiered,popularity,episodes,aired,genres} = data
    return (
        <div>
            <div className='px-2 max-w-full'>
                <h1 className='text-lg md:text-xl lg:text-2xl leading-6 mb-2 mt-1 tracking-wide font-bold text-center'>{title}</h1>
                <div className='flex flex-col items-center w-full md:flex-row md:items-start xl:mx-auto xl:w-5/6'>
                    <img src={image_url} alt={title} className='md:w-96 rounded-md'/>
                    <section className='mt-2 text-gray-100 gap-2 w-full text-center grid grid-cols-2 md:mt-0 md:flex md:flex-col md:ml-2 md:text-lg lg:text-xl lg:w-2/3 xl:w-3/5 lg:grid lg:grid-cols-2'>
                        <div className=' bg-blue-400 px-1 topDetailedBox'>
                            <h2>Score <span className='text-lg font-bold'>{score?score:'-'}</span></h2>
                            {score && <h3 className='text-sm'>by {scored_by} users</h3>}
                        </div>
                        <h1 className='bg-red-400 topDetailedBox'>Ranked <span className='text-lg font-bold'>#{rank}</span></h1>
                        <h1 className='bg-green-400 topDetailedBox'>Popularity <span className='text-lg font-bold'>#{popularity}</span></h1>
                        <h1 className='bg-purple-400 topDetailedBox'>{aired.string}</h1>
                        {episodes && <h1 className='bg-pink-400 topDetailedBox font-semibold'>{episodes} episodes</h1>}
                        {premiered && <h1 className='bg-yellow-500 topDetailedBox'>{premiered}</h1>}
                        {/* BIG SCREEN >LG */}
                        <section className=' mt-3 text-gray-800 text-md col-span-2 text-left hidden lg:block'>
                            <h1 className='font-bold tracking-wide'>Synopsis</h1>
                            <p className='lg:w-11/12 xl:w-full'>{synopsis}</p>
                        </section>
                    </section>
                </div>
                <section className=' mt-3 text-gray-800 text-md lg:hidden'>{/* SMALL */}
                            <h1 className='font-bold tracking-wide'>Synopsis</h1>
                            <p className='md:w-11/12'>{synopsis}</p>
                </section>
                <section className=' mt-2  text-gray-800 text-md xl:w-5/6 xl:mx-auto'>
                            <h1 className='font-bold tracking-wide mb-1 '>Genres</h1>
                            <div className='grid grid-cols-4 xl:grid-cols-6 text-center gap-y-2'>
                            {genres.map(g=> (
                                <p key={g.mal_id} className='trelloBlue p-1 text-xs tracking-wider rounded-md text-white mr-2'>{g.name}</p>
                            ))}
                            </div>
                </section>
            </div>
        </div>
    )
}
