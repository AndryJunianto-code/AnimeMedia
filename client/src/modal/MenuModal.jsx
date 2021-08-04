import React from 'react'
import { useDispatch } from 'react-redux'
import {OCModal} from '../redux/menuSlice'
import {Link} from 'react-router-dom'
export default function MenuModal() {
    const dispatch = useDispatch()
    const closeMenu  =() => {
        dispatch(OCModal({open:false}))
    }
    return (
        <section onClick={closeMenu} className='dark-0 md:hidden'>
            <div className='absolute w-full top-10 right-0 text-gray-100 h-auto z-20 bg-black bg-opacity-80' onClick={e=>e.stopPropagation()}>
                <div className='flex flex-col text-center'>
                    <h1 className='my-2 text-sm tracking-widest' onClick={closeMenu}>Bookmark</h1>
                    <Link to='/scenetracker'><h1 className='my-2 text-sm tracking-widest' onClick={closeMenu}>Scene Tracker</h1></Link>{/* NEW */}
                    <h1 className='my-2 text-sm tracking-widest' onClick={closeMenu}>Random Generator</h1>
                </div>
            </div>
        </section>
    )
}
