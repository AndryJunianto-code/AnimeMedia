import MenuModal from '../modal/MenuModal'
import {useDispatch,useSelector} from 'react-redux'
import {OCModal} from '../redux/menuSlice'
import { OCSearch } from '../redux/modalSlice'
import {Menu} from '@material-ui/icons'
import {useAuth0} from '@auth0/auth0-react'
import nouser from '../images/nouser.jpg'
import SearchModal from '../modal/SearchModal'

export default function Navbar() {
    const {user} = useAuth0()
    const menu = useSelector(state => state.menu.open)
    const searchModal = useSelector(state => state.modal.searchOpen)
    const dispatch = useDispatch()
    const displayMenu = () => {
        dispatch(OCModal({open:!menu}))
    }
    const handleSearchModal = () => {
        dispatch(OCSearch({open:!searchModal}))
    }
    return (
    <>
        <nav className='navBlue text-gray-50 sticky top-0 left-0 w-full'>
            <section className='px-2 md:px-7 py-3 flex items-center justify-between'>
                <h1 className='text-4xl font-semibold xl:text-5xl'>AJ Anime</h1>
                <div className='md:hidden flex items-center'> {/* ON SMALL SCREEN */}
                    <img className='rounded-full w-7 h-7 mr-1' src={user? user.picture: nouser} alt="profile" />
                    <span onClick={displayMenu}><Menu style={{fontSize:'35px'}}/></span>
                </div>
                <div className='hidden md:flex md:items-center md:text-lg`'>{/* ON BIG SCREEN */}
                    <h2 className='relative lg:text-xl font-semibold' onClick={handleSearchModal}>Search</h2>
                    <h2 className='mx-9 lg:text-xl font-semibold'>Scene Tracker</h2>{/* NEW */}
                    <h2 className='lg:text-xl font-semibold'>Random Generator</h2>
                    <h2 className='lg:text-xl font-semibold mx-9'>Bookmark</h2>
                    <img className='rounded-full w-10 h-10' src={user? user.picture: nouser} alt="profile" />
                </div>
           </section>
        </nav>
        {menu && <MenuModal/>}
        {searchModal && <SearchModal/>}
    </>
    )
}
