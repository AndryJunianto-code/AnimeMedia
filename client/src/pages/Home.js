import React from 'react'
import SearchHeader from '../components/SearchHeader'
import Airing from '../components/Airing'
import Top from '../components/Top'
import Upcoming from '../components/Upcoming'
export default function Home() {
    return (
        <div className='pb-2'>
            <SearchHeader/>
            <Airing/>
            <Top/>
            <Upcoming/>
        </div>
    )
}
