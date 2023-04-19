import React, { useContext } from 'react'
import { BookDataContext } from '../context/DataContext'

const Favorite = () => {
  const {favoriteBook} = useContext(BookDataContext);
  
  return (
    <div>
      <h1>Favorite page</h1>
    </div>
  )
}

export default Favorite
