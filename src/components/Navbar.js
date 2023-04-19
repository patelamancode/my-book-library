import React ,{useContext} from 'react'
import { BookDataContext } from '../context/DataContext'
import { NavLink } from 'react-router-dom'
import './Navbarstyle.css'


const Navbar = () => {
  const {favoriteBook , readBook} = useContext(BookDataContext)
  return (
    <>
      <div className='navbar'>
        <div>
            <h3>Reader's Point</h3>
        </div>
        <div>
            <NavLink to='/' className='navlinks'>Home</NavLink>
            <NavLink to='/favorite' className='navlinks'>Favorites<span>({favoriteBook.length})</span></NavLink>
            <NavLink to='/read' className='navlinks'>Read<span>({readBook.length})</span></NavLink>
            <NavLink to='/profile' className='navlinks'>Profile</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
