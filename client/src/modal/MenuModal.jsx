import React from 'react'
import { useDispatch } from 'react-redux'
import {OCModal} from '../redux/menuSlice'

export default function MenuModal() {
    const dispatch = useDispatch()
    const closeMenu  =() => {
        dispatch(OCModal({open:false}))
    }
    return (
        <section onClick={closeMenu} className='dark-0 md:hidden'>
            <div className='absolute w-full top-10 right-0 text-gray-100 h-auto z-20 bg-gradient-to-tl from-blue-400 via-blue-400 to-blue-800

' onClick={e=>e.stopPropagation()}>
                <div className='flex flex-col text-center'>
                    <h1 className='my-2 text-sm tracking-widest'>Bookmark</h1>
                    <h1 className='my-2 text-sm tracking-widest'>Scene Tracker</h1>{/* NEW */}
                    <h1 className='my-2 text-sm tracking-widest'>Random Generator</h1>
                </div>
            </div>
        </section>
    )
}
