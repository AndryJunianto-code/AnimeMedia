import React from 'react'
import Navbar from '../components/Navbar'
import SearchHeader from '../components/SearchHeader'
import Airing from '../components/Airing'
export default function Home() {
    return (
        <div>
            <Navbar/>
            <SearchHeader/>
            <Airing/>
        </div>
    )
}
